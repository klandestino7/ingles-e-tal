import axios, {AxiosHeaderValue, AxiosHeaders, AxiosRequestHeaders, AxiosResponse} from 'axios';
import Router from 'next/router';
import invariant from 'tiny-invariant';

invariant(
    process.env.RDSTATION_API_ENDPOINT,
    'RDSTATION_API_ENDPOINT is not defined, please define it in your .env file'
);

const Axios = axios.create({
    baseURL: process.env.RDSTATION_API_ENDPOINT,
    timeout: 50000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

// // Change request data/error
// const AUTH_TOKEN_KEY = process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY ?? 'authToken';

Axios.interceptors.request.use((config : any) => {
    // const Cookies = parseCookies();
    // const cookies = Cookies[AUTH_TOKEN_KEY];

    // let token = '';
    // if (cookies) {
    //     token = JSON.parse(cookies)['auth.token'];
    // }

    // config.headers = {
    //     ...config.headers,
    //     Authorization: `Bearer ${token}`,
    // } as AxiosRequestHeaders

    return config;
});

// Change response data/error here
Axios.interceptors.response.use(
    (response : any) => response,
    (error : any) => {
        if (
            (error.response && error.response.status === 401) ||
            (error.response && error.response.status === 403) ||
            (error.response && error.response.data.message === 'PICKBAZAR_ERROR.NOT_AUTHORIZED')
        ) {

        }
        return Promise.resolve(error.response.status);
    }
);

export class HttpClient {
    static async get<T>(url: string, params?: unknown) {
        const response = await Axios.get<T>(url, { params });
        return response.data;
    }

    static async post<T>(url: string, data: unknown, options?: any) {
        const response = await Axios.post<T>(url, data, options);
        return response.data;
    }

    static async put<T>(url: string, data: unknown) {
        const response = await Axios.put<T>(url, data);
        return response.data;
    }

    static async delete<T>(url: string) {
        const response = await Axios.delete<T>(url);
        return response.data;
    }
}

export function getFormErrors(error: unknown) {
    if (axios.isAxiosError(error)) {
        return error.response?.data.message;
    }
    return null;
}

export function getFieldErrors(error: unknown) {
    if (axios.isAxiosError(error)) {
        return error.response?.data.errors;
    }
    return null;
}