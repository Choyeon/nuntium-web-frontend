// 配置axios实例对象
import axios from 'axios'

export function base(config) {
    const instance = axios.create({
        baseURL: 'https://api.choyeon.cn',
        method: 'post',
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        withCredentials: true,
    });
    instance.defaults.headers.common['Authorization'] = localStorage.getItem('token')
    return instance(config)
}
