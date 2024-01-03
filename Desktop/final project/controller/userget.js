const user= require("../schemafunction.js/schema")

const usergetfunction=async(req,res)=>{
     
    
    const data=await user.find()
    
    res.json(data)

}
module.exports=usergetfunction