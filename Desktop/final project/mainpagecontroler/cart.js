const dark= require("../schemafunction.js/schema2")


const cartfunction=async(req,res)=>{
console.log(req.body);
    
    const{Sparepartsimage,Spareprice}=req.body;
    
    
    
    const userDetails=await dark.create({
        
        Sparepartsimage,
         Spareprice,
         
        })
        console.log(userDetails);
        res.json( {userDetails})
}


module.exports=cartfunction
            