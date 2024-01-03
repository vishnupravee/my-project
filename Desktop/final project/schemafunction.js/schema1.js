const mongoose=require("mongoose")

const userschema=mongoose.Schema({
   Brandname:{type:String},
   Modalname:{type:String},
   Manufactureyear:{type:String},
    Spareparts:{type:String},
    Spareprice:{type:String},
    Brandimage:{type:String},
    Modalimage:{type:String},
    Sparepartsimage:{type:String},
    Aftermarketspare:{type:String},
    brandimage:{type:String},
    brandname:{type:String},
    modalimage:{type:String},
    modalname:{type:String},
    Sparedetails:{type:String}
})
 const mark=mongoose.model("mac",userschema)
module.exports=mark