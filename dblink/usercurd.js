const UserCtl=(User)=>{
    class UserCtl{
        async findUser(ctx){
            ctx.body=await User.find()
        }
    }
}