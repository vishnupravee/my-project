const mongoose=require("mongoose")
const newschema=mongoose.Schema({
    Name:{type:String},
    Phone:{type:String},
    Email:{type:String},
    Adress:{type:String}
})
const sark=mongoose.model("was",newschema)
module.exports=sark