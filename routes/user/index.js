const {
    registerUser,
    loginUser,
    showAllUser,
    shopCart
} = require('../../dblink/')
const path=require('path')

const user = router => {
    router.get('/users', showAllUser)
    router.post('/users/register', registerUser);
    router.post('/users/login', loginUser);
    router.post('/shopCart/:id', shopCart)
    router.post('/uploads', async (ctx) => {
        ctx.body={url:`${ctx.origin}/upload/${path.basename(ctx.request.files.file.path)}`};
    })
}
module.exports = user;