const { Model } = require("mongoose");
const mark= require("../schemafunction.js/schema1")

const starfunction=async(req,res)=>{
const {brandname} = req.params;
console.log(brandname);
//    const data =await mark.find({Modalimage})
    const data=await mark.find({Brandname:brandname},{Modalname:1,Modalimage:1,_id:0});
    const filterdata=data.filter(Model=>Model.Modalimage);
    // .select({Modalimage:1});
    // const filterddata=mark.filter(brand=>brand.brandimage);
    // console.log(filterddata);
    console.log(data);
    res.status(200).json(filterdata) 


}
module.exports=starfunction