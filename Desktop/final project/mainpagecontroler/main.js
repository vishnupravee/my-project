const mark= require("../schemafunction.js/schema1")


const Normalfunction=async(req,res)=>{

    
    const{Sparedetails,brandname,brandimage,Brandname,Modalname,Manufactureyear,Spareparts,Spareprice,Brandimage,Aftermarketspare,Sparepartsimage,Modalimage}=req.body;
    
    
    console.log(req.body)
    const userDetails=await mark.create({
        Brandname ,
        Modalname,
        Manufactureyear,
        Spareparts,
        Spareprice,
        Brandimage,
        Aftermarketspare,
        Sparepartsimage,
        Modalimage,
        brandimage,
        brandname,
        Sparedetails

        })
        res.json( userDetails)
}


module.exports=Normalfunction
            