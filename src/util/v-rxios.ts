import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosInterceptorManager, AxiosResponse } from 'axios';
import { from } from 'rxjs';

class Vrxios {
    public interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    };
    public defaults: AxiosRequestConfig;
    private httpClient: AxiosInstance;
    constructor(private options: AxiosRequestConfig = {}) {
        this.httpClient = axios.create(options);
        this.interceptors = this.httpClient.interceptors;
        this.defaults = this.httpClient.defaults;
    }
    public get<T>(url: string, queryParams?: object, config?: AxiosRequestConfig) {
        return this._makeRequest<T>('GET', url, queryParams, config);
    }

    public post<T>(url: string, body: object, config?: AxiosRequestConfig) {
        return this._makeRequest<T>('POST', url, body, config);
    }

    public put<T>(url: string, body: object, config?: AxiosRequestConfig) {
        return this._makeRequest<T>('PUT', url, body, config);
    }

    public patch<T>(url: string, body: object, config?: AxiosRequestConfig) {
        return this._makeRequest<T>('PATCH', url, body, config);
    }

    public delete(url: string, queryParams?: object, config?: AxiosRequestConfig) {
        return this._makeRequest('DELETE', url, queryParams, config);
    }
    // tslint:disable-next-line:max-line-length
    private _makeRequest<T>(method: string, url: string, body?: object, config?: AxiosRequestConfig) {
        let request: AxiosPromise<T>;
        switch (method) {
            case 'GET':
                request = this.httpClient.get<T>(url, { params: body, ...config });
                break;
            case 'POST':
                request = this.httpClient.post<T>(url, body, config);
                break;
            case 'PUT':
                request = this.httpClient.put<T>(url, body, config);
                break;
            case 'PATCH':
                request = this.httpClient.patch<T>(url, body, config);
                break;
            case 'DELETE':
                request = this.httpClient.delete(url, { params: body, ...config });
                break;
            default:
                throw new Error('Method not supported');
        }
        return from(request); // 将Promise转换成Observable
    }
}

export { Vrxios };
