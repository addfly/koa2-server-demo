const jsonwebtoken=require('jsonwebtoken')
const userAbout=(userMessage)=>{
    return class UserAbout{
        async userRegister(ctx){
            const {name}=ctx.request.body
            //查询用户是否以存在    
            const repeateUser=await userMessage.findOne({name})
            if(repeateUser)ctx.throw(409,'用户已存在')
            const userRegister = await new userMessage(ctx.request.body).save()
            ctx.body=userRegister;
        }
        async loginUser(ctx){
            const checkUser =await userMessage.findOne(ctx.request.body)
            if(!checkUser){
                ctx.throw(401,'用户不存在')
            }
            const {username,password} = checkUser;
            const token=jsonwebtoken.sign({username,password},"admin",{expiresIn:'7d'})
            ctx.body={token}
        }
    }
}

module.exports=userAbout