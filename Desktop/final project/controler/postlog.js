const user= require("../schemafunction.js/schema")


const postfunction=async(req,res)=>{

    
    const{Email,password}=req.body;
    
    
    console.log(req.body)
    const userDetails=await user.create({
        Email,
        password

        })
        res.json( userDetails)
}


module.exports=postfunction
            