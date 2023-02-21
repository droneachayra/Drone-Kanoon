const mongoose =require('mongoose');


const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{type:String},
    email:{type:String,unique:true},
    phone:{type:String,required:true},
    service:{type:String},
    create_at:{type:Number,default:Date.now().valueOf()},
    updated_at:{type:Number,default:Date.now().valueOf()}
})

module.exports=mongoose.model('User',userSchema)