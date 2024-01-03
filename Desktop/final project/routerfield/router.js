const express=require("express")
const Schemafunction= require("../controler/con1")
const login = require("../controler/conlog")
const Normalfunction = require("../mainpagecontroler/main")
const getfunction = require("../mainpagecontroler/mainget")
const normalfunction = require("../mainpagecontroler/mainremove")
const mainfunction = require("../mainpagecontroler/brandimageget")
const starfunction = require("../mainpagecontroler/modalimageget")
const postfunction = require("../controler/postlog")
const modalfunction = require("../mainpagecontroler/modalpost")
const getmodalfunction = require("../mainpagecontroler/modalget")
const farfunction = require("../mainpagecontroler/sparepartimgget")
const usergetfunction = require("../controler/userget")
const normafunction = require("../mainpagecontroler/purchase")
const customerfunction = require("../mainpagecontroler/customerget")
const payfunction = require("../mainpagecontroler/paymentget")
const cartfunction = require("../mainpagecontroler/cart")
const cartgetfunction = require("../mainpagecontroler/getcart")




// const middleware=[project]
const router=express.Router()


router.route('/chat') .post(Schemafunction)
router.route('/what').post(login)
router.route('/set').post(Normalfunction )
// router.route('/bat').post(middleware,Sche//mafunction)
router.route('/sat').get(getfunction)
router.route('/now').get(mainfunction)
router.route('/jet/:id').delete(normalfunction)
router.route('/cow/:brandname').get(starfunction)
router.route('/pos').post(postfunction)
router.route('/modal').post(modalfunction)
router.route('/modget').get(getmodalfunction)
router.route('/sparget/:Modalname').get(farfunction)
router.route('/user').get(usergetfunction)
router.route('/adduser').post(normafunction)
router.route('/cust').get(customerfunction)
router.route('/paid/:Spareparts').get(payfunction)
router.route('/chart').post(cartfunction)
router.route('/kart').get(cartgetfunction)
module.exports=router

