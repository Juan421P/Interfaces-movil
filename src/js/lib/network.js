const API_BASE = 'https://sapientiae-api-bd9a54b3d7a1.herokuapp.com/api';

const interceptors = {
    request: [],
    response: [],
    error: []
};

export class Network {

    static get(config) {
        return this._request({ method: 'GET', ...config });
    }

    static post(config) {
        return this._request({ method: 'POST', ...config });
    }

    static put(config) {
        return this._request({ method: 'PUT', ...config });
    }

    static patch(config) {
        return this._request({ method: 'PATCH', ...config });
    }

    static delete(config) {
        return this._request({ method: 'DELETE', ...config });
    }

    static async _request(config) {
        const {
            path,
            method = 'GET',
            body = null,
            includeCredentials = true,
            headers = {}
        } = config;

        let url = `${API_BASE}${path}`;
        console.info(`[Network] Network request:`, { path, method, includeCredentials, credentials: includeCredentials ? 'include' : 'omit', hasBody: !!body });
        console.info(`[Network] Full URL: ${url}`);

        const finalHeaders = {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ...headers
        };

        try {
            const tk = localStorage.getItem('authToken');
            if (tk && !finalHeaders['Authorization']) {
                finalHeaders['Authorization'] = `Bearer ${tk}`;
            }
        } catch {
        }

        let options = {
            method,
            headers: finalHeaders,
            credentials: includeCredentials ? 'include' : 'omit'
        };

        if (body != null) options.body = JSON.stringify(body);

        for (const fn of interceptors.request) {
            const modified = await fn({ url, options });
            if (modified) ({ url, options } = modified);
        }

        console.info(`[Network] Request options:`, {
            method: options.method,
            credentials: options.credentials,
            headers: options.headers
        });

        console.info('[Network] Making fetch request... 🤔');
        const res = await fetch(url, options).catch((err) => {
            throw {
                name: 'ServiceNetworkError',
                status: 0,
                message: `Network request failed: ${err.message}`,
                details: []
            };
        });

        console.info('[Network] Response status:', res.status, res.statusText);
        console.info('[Network] Response headers:');
        res.headers.forEach((value, name) => console.info(`[Network] ${name}: ${value}`));

        console.info('[Network] Set-Cookie header:', res.headers.get('Set-Cookie'));

        if (!res.ok) {
            let error = await this._buildError(res);
            for (const fn of interceptors.error) {
                error = (await fn(error)) || error;
            }
            throw error;
        }

        if (res.status === 204) {
            for (const fn of interceptors.response) {
            }
            console.info('[Network] Request successful (204)');
            return null;
        }

        let data;
        const text = await res.text();
        try {
            data = text ? JSON.parse(text) : null;
        } catch {
            data = text || null;
        }

        for (const fn of interceptors.response) {
            data = (await fn(data)) || data;
        }

        console.info('[Network] Request successful');
        return data;
    }

    static async _buildError(res) {
        let payload = {};
        try {
            const text = await res.text();
            payload = text ? JSON.parse(text) : {};
        } catch {
            payload = {};
        }

        return {
            status: res.status,
            message: payload.message || payload.error || res.statusText || 'Error',
            details: Array.isArray(payload.errors)
                ? payload.errors
                : (typeof payload.errors === 'object' && payload.errors)
                    ? Object.values(payload.errors).flat()
                    : []
        };
    }

    static get interceptors() {
        return interceptors;
    }
}
