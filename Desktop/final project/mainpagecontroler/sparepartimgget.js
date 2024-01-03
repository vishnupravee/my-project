
const mark= require("../schemafunction.js/schema1");
// const modalfunction = require("./modalpost");

const farfunction=async(req,res)=>{
const {Modalname} = req.params;
console.log(Modalname);
//    const data =await mark.find({Modalimage})
    const data=await mark.find({Modalname:Modalname},{Sparepartsimage:1,Spareparts:1,Spareprice:1,Sparedetails:1,_id:0});
    // const filterdata=data.filter(Model=>Model.Modalimage);
    // .select({Modalimage:1});
    // const filterddata=mark.filter(brand=>brand.brandimage);
    // console.log(filterddata);
    console.log(data);
    res.status(200).json(data) 


}
module.exports=farfunction