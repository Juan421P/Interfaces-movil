import { Component } from './../../components.js';

export class Navbar extends Component {

    constructor(opts = {}) {
        super({
            host: opts.host || '#navbar',
            id: opts.id,
            classes: opts.classes
        });
    }

    static getTemplate() {
        return `
            <nav id="mobile-nav"
                class="fixed bottom-0 left-0 w-full bg-[rgb(var(--card-from))]/75 backdrop-blur shadow-inner z-50">
                <ul class="flex justify-start items-center py-4 px-2 overflow-x-auto whitespace-nowrap scrollbar-hide">

                    <!-- Página Principal -->
                    <li class="flex-none">
                        <a href="#main" class="nav-btn flex flex-col items-center gap-1 text-[rgb(var(--button-from))] p-2 transition-transform duration-200 ease-in-out">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="w-6 h-6">
                                <path d="M3 9.5l9-7 9 7V19a2 2 0 0 1-2 2h-5v-5H10v5H5a2 2 0 0 1-2-2Z" />
                            </svg>
                        </a>
                    </li>

                    <!-- Evaluaciones -->
                    <li class="flex-none">
                        <a href="#sp-evaluations" class="nav-btn flex flex-col items-center gap-1 text-[rgb(var(--button-from))] p-2 transition-transform duration-200 ease-in-out">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="w-6 h-6">
                                <path d="M4 4h16v16H4V4Z" />
                                <path d="M4 10h16" />
                            </svg>
                        </a>
                    </li>

                    <!-- Inscripción Ciclos -->
                    <li class="flex-none">
                        <a href="#sp-enrollments-cycles" class="nav-btn flex flex-col items-center gap-1 text-[rgb(var(--button-from))] p-2 transition-transform duration-200 ease-in-out">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="w-6 h-6">
                                <path d="M4 4h16v16H4V4Z" />
                                <path d="M12 8v8" />
                                <path d="M8 12h8" />
                            </svg>
                        </a>
                    </li>

                    <!-- Inscripción Cursos -->
                    <li class="flex-none">
                        <a href="#sp-enrollments-courses" class="nav-btn flex flex-col items-center gap-1 text-[rgb(var(--button-from))] p-2 transition-transform duration-200 ease-in-out">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="w-6 h-6">
                                <path d="M4 4h16v16H4V4Z" />
                                <path d="M12 8v8" />
                                <path d="M8 12h8" />
                            </svg>
                        </a>
                    </li>

                    <!-- Notas -->
                    <li class="flex-none">
                        <a href="#sp-grades" class="nav-btn flex flex-col items-center gap-1 text-[rgb(var(--button-from))] p-2 transition-transform duration-200 ease-in-out">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="w-6 h-6">
                                <path d="M12 20h9" />
                                <path d="M12 4v16" />
                                <path d="M8 8H4v8h4" />
                            </svg>
                        </a>
                    </li>

                    <!-- Pensum -->
                    <li class="flex-none">
                        <a href="#sp-pensum" class="nav-btn flex flex-col items-center gap-1 text-[rgb(var(--button-from))] p-2 transition-transform duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="w-6 h-6">
                                <path d="M15 12h-5" />
                                <path d="M15 8h-5" />
                                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                                <path
                                    d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
                            </svg>
                        </a>
                    </li>

                    <!-- Perfil -->
                    <li class="flex-none">
                        <a href="#profile" class="nav-btn flex flex-col items-center gap-1 text-[rgb(var(--button-from))] p-2 transition-transform duration-200 ease-in-out">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="w-6 h-6">
                                <path d="M4 19.5A8.38 8.38 0 0 1 12 15a8.38 8.38 0 0 1 8 4.5" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }

    async _render() {
        try {
            const template = this._processTemplate();
            this.host.innerHTML = '';
            this.host.appendChild(template.content.cloneNode(true));

            this.highlightActive();
            window.addEventListener('hashchange', () => this.highlightActive());

        } catch (error) {
            console.error('[Navbar] Fatal error loading component', error);
        }
    }

    highlightActive() {
        const hash = window.location.hash || '#main';
        document.querySelectorAll('#mobile-nav .nav-btn').forEach(btn => {
            btn.classList.remove(
                'bg-gradient-to-t', 'from-[rgb(var(--button-from))]', 'to-[rgb(var(--button-to))]',
                'text-white', 'shadow-md', 'rounded-xl', 'scale-110', '-translate-y-2'
            );
            btn.classList.add('text-[rgb(var(--button-from))]');
        });

        const active = document.querySelector(`#mobile-nav a[href="${hash}"]`);
        if (!active) return;
        active.classList.add(
            'bg-gradient-to-t', 'from-[rgb(var(--button-from))]', 'to-[rgb(var(--button-to))]',
            'text-white', 'shadow-md', 'rounded-xl', 'scale-110', '-translate-y-2'
        );
        active.classList.remove('text-[rgb(var(--button-from))]');
    }

    destroy() {
        window.removeEventListener('hashchange', () => this.highlightActive());
        super.destroy();
    }
}
