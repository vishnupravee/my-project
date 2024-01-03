const mongoose=require("mongoose")

const userschema=mongoose.Schema({
 
    
    Spareprice:{type:String},
    
   
    Sparepartsimage:{type:String},
    
    
    
})
 const dark=mongoose.model("wak",userschema)
module.exports=dark