
const mark= require("../schemafunction.js/schema1");
// const modalfunction = require("./modalpost");

const payfunction=async(req,res)=>{
const {Spareparts} = req.params;
console.log(Spareparts);
//    const data =await mark.find({Modalimage})
    const data=await mark.find({Spareparts:Spareparts},{Sparepartsimage:1,Spareprice:1,_id:0});
    // const filterdata=data.filter(Model=>Model.Modalimage);
    // .select({Modalimage:1});
    // const filterddata=mark.filter(brand=>brand.brandimage);
    // console.log(filterddata);
    console.log(data);
    res.status(200).json(data) 


}
module.exports=payfunction