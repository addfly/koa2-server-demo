const DB_URL = 'mongodb://127.0.0.1:27017/koa';
const mongoLink = mongoose => {
    mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true});
    mongoose.connection.on('connected', () => {
        console.log('已连接到' + DB_URL);
    });
    mongoose.connection.on('error', (err) => {
        console.log('连接错误' + err);
    });
    mongoose.connection.on('connected', () => {
        console.log('连接断开');
    });
}

module.exports = mongoLink;