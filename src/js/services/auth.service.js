import { Service } from './../lib/service.js';
import { AuthContract } from './../contracts/auth.contract.js';

export class AuthService extends Service {

    static baseEndpoint = '/Auth';
    static contract = new AuthContract();

    static async login(email, password) {
        const res = await this.postRaw('login', {
            email: email,
            contrasena: password
        }, 'login');
        if (res?.token) {
            localStorage.setItem('authToken', res.token);
        }
        return true;
    }

    static async me() {
        return await this.get('me', null, null, 'me');
    }

    static async logout() {
        await this.postRaw('logout');
        return true;
    }

}