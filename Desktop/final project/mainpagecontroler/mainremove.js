const mark = require("../schemafunction.js/schema1");

const normalfunction=async(req,res)=>{
console.log("IN THIS FUNCTION")
   console.log(req.params)


    const id = req.params.id
    console.log(id)
    try {
      const gate=await mark.findByIdAndRemove(id)
      console.log(gate);
      
      if(!gate) return res.json("No item deleted")
      
      return  res.json("item deleted")
      
    } catch (error) {
      console.log(error)
      return res.json("Error while deleting")
    }
 
   
}

module.exports=normalfunction