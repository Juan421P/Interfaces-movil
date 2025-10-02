import { ROUTES } from './lib/routes.js';
import { THEMES } from './lib/themes.js';
import { AuthGuard } from './guards/auth.guard.js';

import {
    Body,
    Toast,
    Navbar
} from './../components/components.js';

export class Router {

    constructor() {
        this.currentView = null;
        this.ALL_VIEWS = this.flattenRoutes(ROUTES.views);
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', async () => {
            await this.initializeApp();
        });

        window.addEventListener('hashchange', () => {
            THEMES.loadTheme();
            this.render();
        });

        if (!window.location.hash) {
            window.location.hash = '#main';
        }
    }

    async initializeApp() {
        console.log('🚀 [Router] initializeApp started');
        console.log('🚀 [Router] Creating Body...');
        await new Body().render();
        console.log('🚀 [Router] Body completed');
        console.log('🚀 [Router] Checking DOM after Body...');
        console.log('🚀 [Router] #navbar exists:', !!document.querySelector('#navbar'));
        console.log('🚀 [Router] #main-view exists:', !!document.querySelector('#main-view'));
        
        this.toast = new Toast();
        await this.toast.init();

        THEMES.loadTheme();

        const ok = await AuthGuard.isAuthenticated();
        if (!ok) {
            console.log('🚀 [Router] User not authenticated, redirecting to login');
            window.location.hash = '#login';
        } else {
            console.log('🚀 [Router] User authenticated, rendering current view');
            await this.render();
        }
    }

    flattenRoutes(obj) {
        const result = [];
        for (const val of Object.values(obj)) {
            if (val?.hash) {
                result.push(val);
            } else if (typeof val === 'object') {
                result.push(...this.flattenRoutes(val));
            }
        }
        return result;
    }

    async render(hash = window.location.hash) {
        const view = this.ALL_VIEWS.find(v => v.hash === hash);

        if (!view) {
            window.location.hash = '#not-found';
            return;
        }

        if (view.hash !== '#login' && view.hash !== '#not-found') {
            const ok = await AuthGuard.isAuthenticated();
            if (!ok) {
                window.location.hash = '#login';
                return;
            }
        }

        await this.handleNavbar(view);
        await this.loadInterface(view);
    }

    async handleNavbar(view) {
        if (!view.hideNavbar) {
            await new Navbar().render('#navbar');

            const burger = document.querySelector('#burger-btn');
            const wrapper = document.querySelector('#sidebar-wrapper');
            if (burger && wrapper) {
                burger.addEventListener('click', () => {
                    wrapper.classList.toggle('-translate-x-full');
                });
            }
        } else {
            const host = document.querySelector('#navbar');
            if (host) host.innerHTML = '';
        }
    }

    async loadInterface(view) {
        try {
            console.log(`🚀 [Router] Loading interface for: ${view.hash}`);
            console.log(`🚀 [Router] View object:`, view);
            const interfaceModule = await this.getInterfaceModule(view);
            console.log(`🚀 [Router] Interface module loaded:`, interfaceModule);
            const interfaceInstance = new interfaceModule.default();
            console.log(`🚀 [Router] Interface instance created:`, interfaceInstance);
            await interfaceInstance.render('#main-view');
            console.log(`🚀 [Router] Interface rendered successfully`);

            document.title = view.title;

        } catch (err) {
            console.error('Interface load error', err);
            window.location.hash = '#not-found';
        }
    }

    async getInterfaceModule(view) {
        const interfaceMap = {
            // Interfaces generales
            '#main': () => import('./../interfaces/main/main.js'),
            '#login': () => import('./../interfaces/login/login.js'),
            '#testing': () => import('./../interfaces/testing/testing.js'),
            '#news': () => import('./../interfaces/news/news.js'),
            '#not-found': () => import('./../interfaces/not-found/not-found.js'),
            '#profile': () => import('./../interfaces/profile/profile.js'),

            // Interfaces del módulo de Portal de Estudiante
            '#sp-enrollments-courses': () => import('./../interfaces/student-portal/enrollments/courses/courses.js'),
            '#sp-enrollments-cycles': () => import('./../interfaces/student-portal/enrollments/cycles/cycles.js'),
            '#sp-grades': () => import('./../interfaces/student-portal/grades/grades.js'),
            '#sp-pensum': () => import('./../interfaces/student-portal/pensum/pensum.js'),
            '#sp-evaluations': () => import('./../interfaces/student-portal/evaluations/evaluations.js'),
        };

        const importFunction = interfaceMap[view.hash];
        if (!importFunction) {
            throw new Error(`No interface mapping found for hash: ${view.hash}`);
        }

        return await importFunction();
    }

    navigate(hash) {
        window.location.hash = hash;
    }

    getCurrentView() {
        return this.ALL_VIEWS.find(v => v.hash === window.location.hash);
    }
    
}

new Router();