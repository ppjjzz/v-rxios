import { Vrxios } from '@/util/v-rxios';
import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosPromise,
    AxiosInterceptorManager,
    AxiosResponse,
} from 'axios';
const demoApiService = new Vrxios({
    baseURL: 'https://www.easy-mock.com/mock/5a9625ab13b9783e11839fd2',
    timeout: 5000,
});
demoApiService.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        console.log('拦截请求');
        return config;
    },
    (err) => { },
);
demoApiService.interceptors.response.use((res: AxiosResponse) => {
    console.log('拦截响应');
    return res;
});
export default demoApiService;

