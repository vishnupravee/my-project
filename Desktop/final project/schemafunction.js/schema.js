const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    password:{type:String}
})
const user=mongoose.model("jung",userschema)
module.exports=user