const userSchema=(mongoose)=>{
    const {Schema}=mongoose;
    return new Schema({
        name:{type:String,required:true},
        time:{type:Date,default:Date.now}
    })
}

module.exports=userSchema