const mark= require("../schemafunction.js/schema1")

const mainfunction=async(req,res)=>{

   
    const date=await mark.find().select({brandimage:1,brandname:1,_id:0});
    const filterddata=date.filter(brand=>brand.brandimage);
    console.log(date);
    // const resdata=date.filter(item=>Object.keys(item)>0)
    // console.log(resdata);
    res.json(filterddata)

}
module.exports=mainfunction