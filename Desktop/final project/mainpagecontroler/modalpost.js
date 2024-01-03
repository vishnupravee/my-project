const mark= require("../schemafunction.js/schema1")


const modalfunction=async(req,res)=>{

    
    const{modalimage,modalname}=req.body;
    
    
    console.log(req.body)
    const userDetails=await mark.create({
       modalimage,
       modalname

        })
        res.json( userDetails)
}


module.exports=modalfunction
            