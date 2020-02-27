// 基本骨架
const Koa = require('koa');
const app = new Koa();
const path = require('path')

// 路由相关
const Router = require('koa-router');

const router = new Router();
// 引入外部路由文件
require('./routes/index.js')(router);

// // post请求相关
// const bodyparser = require('koa-bodyparser');

// 用koa-body代替koa-bodyparser和koa-multer
const koaBody = require('koa-body')


// 重定向到404页面
const errorWebsite = ctx => {
    ctx.status === 404 ? ctx.redirect('/404') : '';
}


app.use(koaBody({
    // 支持文件上传
    multipart: true,
    // 压缩格式
    // encoding: 'gzip',
    formidable: {
        // 设置上传目录
        uploadDir: path.join(__dirname, 'public/upload'),
        // 保持文件后缀
        keepExtensions: true,
        // 文件上传前配置
        onFileBegin: (name, file) => {
            // console.log(`name:${name}`);
            // console.log(file);
        }
    }
}));

// 静态文件托管
const static = require('koa-static')
app.use(static(path.join(__dirname,'/public/')))


app.use(router.routes());
// 设置HTTP请求方法限制
app.use(router.allowedMethods());
app.use(errorWebsite);



app.listen(3000);


























// ---------------------------------
// 分界线，下方是之前试验的其他写法


// 1.自定义router
// --------------------------------------
// const showHello=async (ctx,next)=>{
//     await next();
//     //可以加入判断返回类型，客户端希望接受什么数据
//     if(ctx.request.accepts('json')){
//         ctx.response.type='json';
//         ctx.response.body={data:'hello json!'}
//     } else{
//         ctx.response.body='hello koa!'
//     }
// }

// const main=async (ctx,next)=>{
//     await next();
//     if(ctx.request.path=="/user"){
//         ctx.response.type='html'
//         ctx.response.body='<h1>大明sam</h1>'
//     }
// }
// app.use(main);
// app.use(showHello);


// ----------------------------------
// 错误处理
// ------------------------------
// const error = require('koa-json-error')
// app.use(error())

// ---------------------------------