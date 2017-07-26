let proxy = require('http-proxy-middleware');
let history = require('connect-history-api-fallback');

let option = {
    index: '/index.html',//需要跳转index.jsp配置成 /jumpToIndex.html
    url: 'http://10.23.101.136:8080',//调用服务地址
    basePath: '/datav-ws'//服务根路径
}

module.exports = {
    server: {
        middleware: {
            1: history({
                index: option.index, 
                verbose: true
            }),
            2: proxy('/index.jsp', { target: option.url + option.basePath, "secure": false, "changeOrigin": true }),
            3: proxy(option.basePath, {
                target: option.url, "secure": false,
                "changeOrigin": true
            }),
        }
    }
};
