const userMessage = (mongoose) => {
    const {
        Schema,
        model
    } = mongoose;
    // 规定用户注册信息的模式
    const userMessage = new Schema({
        username: {
            type: String,
            required: true
        },
        encryptPassword: {
            type: String,
            required: true,
            // select: false
        },
        phone: {
            type: Number,
            required: true
        },
        lastLogin:{
            type:Date,
            default:Date.now()
        }
    })
    return model("userMessage", userMessage)
}

module.exports = userMessage;