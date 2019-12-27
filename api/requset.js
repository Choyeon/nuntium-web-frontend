import {base} from "./base";
const TOKEN = '/api-token-auth';
const USER = '/user/';
const ARTICLE = '/article/'
const COMMENT = '/comment/'
export const User = {
    // 登录获取token请求
    login(params) {
        return base({
            url: TOKEN,
            method: 'post',
            data: params
        })
    },
    register(params) {
        return base({
            url: USER,
            method: 'post',
            data: params,
        })
    },
};

// 文章相关请求
export const article = {
    // 获取全部文章
    GetArticle(params) {
        return base({
            url: params ? ARTICLE + params : ARTICLE,
            method: 'get',
            data: params,
        })
    },

    GetArticles(params) {
        return base({
            url: params ? "/article?category=" + params : "/article",
            method: 'get',
            data: params,
        })
    },
    GetSearch(params) {
        return base({
            url: params ? "/article?search=" + params : "/article",
            method: 'get',
            data: params,
        })
    },
}

export const comments = {
    // 获取全部文章
    PostComment(params) {
        return base({
            url: COMMENT,
            method: 'post',
            data: params,
        })
    },
}
