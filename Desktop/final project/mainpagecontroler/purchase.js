const sark= require("../schemafunction.js/schemapost")


const normafunction=async(req,res)=>{

    
    const{Name,Email,Phone,Adress}=req.body;
    
    
    console.log(req.body)
    const userDetails=await sark.create({
       Name,
       Email,
       Phone,
       Adress

        })
        res.json(userDetails)
}


module.exports=normafunction
            