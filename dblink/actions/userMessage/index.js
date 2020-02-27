const jsonwebtoken = require('jsonwebtoken');
const secert = require('../../../util/secert');

const aboutUser = (userMessage) => {
    return class AboutUser {
        // 用户注册，基于手机号查看是否重复
        async registerUser(ctx) {
            // 提取出信息
            const {
                phone,
                username,
                password
            } = ctx.request.body;
            // 密码不能为空
            if (!password || !phone || !username) {
                ctx.throw(401, '信息不能为空');
            };
            //查询用户是否以存在    
            const repeateUser = await userMessage.findOne({
                phone
            });
            // 如果用户存在，返回409
            if (repeateUser) ctx.throw(409, '用户已存在');
            // 对密码进行加密,盐为手机号
            const encryptPassword = secert.encrypt(password, phone);
            // 存储信息
            await new userMessage({
                username,
                phone,
                encryptPassword
            }).save().then(() => ctx.body = {
                status: 200,
                message: "注册成功"
            });
        }
        // 显示所有用户信息
        async showAllUser(ctx) {
            const findAllUser = await userMessage.find(null, {
                "username": true,
                "phone": true
            });
            ctx.body = findAllUser;
        }
        // 用户登录
        async loginUser(ctx) {
            const {
                phone,
                password
            } = ctx.request.body;
            // 密码不能为空
            if (!password) {
                ctx.throw(401, '密码不能为空');
            };
            // 判断用户是否存在
            const checkUser = await userMessage.findOne({
                "phone": phone
            });
            if (!checkUser) {
                ctx.throw(401, '用户不存在');
            }
            // 判断密码是否正确
            const {
                encryptPassword,
                lastLogin,
                username
            } = checkUser;
            const checkPassword = secert.encrypt(password, phone);
            if (encryptPassword != checkPassword) {
                ctx.throw(401, '用户名或密码错误');
            }
            await userMessage.findOneAndUpdate(phone,{lastLogin:Date.now()})
            const token = jsonwebtoken.sign({
                phone,
                lastLogin,
                encryptPassword
            }, 'miyaomiyaoadminadmin', {
                expiresIn: '3d'
            });
            ctx.body = {
                token,
                "status": 200,
                "message": "登陆成功",
                "username":username
            };
        }
        // 权限校验
        async shopCart(ctx) {
            const token = ctx.header.authorization.slice(7);
            try {
                const vaild = jsonwebtoken.verify(token, 'miyaomiyaoadminadmin')
                console.log(vaild)
            } catch {
                ctx.throw(401, "token无效或过期")
            }
        }
    }
}

module.exports = aboutUser;