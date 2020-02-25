
const index = router => {
    router.get('/', ctx => {
        ctx.response.body = "hello koa2！";
        ctx.set('Cookie', '111');
    })
    router.get('/user/:id', ctx => {
        ctx.body = `id为${ctx.params.id}`;
    });
    router.post('/postMessage/name', ctx => {
        ctx.body = "接收到请求";
        console.log(ctx.request.body);
    })
    router.get('/404', ctx => {
        ctx.body = "404页面";
    })
}
module.exports = index;