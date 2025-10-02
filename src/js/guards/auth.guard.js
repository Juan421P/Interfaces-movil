import { AuthService } from "../services/auth.service.js";

export class AuthGuard {

    static _user = null;

    static async isAuthenticated() {
        if (window.location.hash === '#login' || window.location.hash === '#not-found') return false;
        try {
            const res = await AuthService.me();
            AuthGuard._user = res?.user || null;
            return !!AuthGuard._user;
        } catch (err) {
            console.error('AuthGuard.isAuthenticated error:', err);
            return false;
        }
    }

    static async authLogin() {
        try {
            const res = await AuthService.me();
            AuthGuard._user = res?.user || null;
            return !!AuthGuard._user;
        } catch (err) {
            console.error('AuthGuard.isAuthenticated error:', err);
            return false;
        }
    }

    static async ensureAuth(redirectTo = '#login') {
        const ok = await AuthGuard.isAuthenticated();
        if (!ok) {
            window.location.hash = redirectTo;
            return false;
        }
        return true;
    }

    static isAdmin() {
        return AuthGuard._user?.roleName === 'Administrador';
    }

    static isStudent() {
        return AuthGuard._user?.roleName === 'Estudiante';
    }

    static isTeacher() {
        return AuthGuard._user?.roleName === 'Docente';
    }

    static isRA() {
        return AuthGuard._user?.roleName === 'Registro Académico';
    }

    static isRH() {
        return AuthGuard._user?.roleName === 'Recursos Humanos';
    }
}
