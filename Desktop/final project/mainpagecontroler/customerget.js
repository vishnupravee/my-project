const sark= require("../schemafunction.js/schemapost")

const customerfunction=async(req,res)=>{

    
    const mate=await sark.find()
    
    res.json(mate)

}
module.exports=customerfunction