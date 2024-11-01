const express=require('express')
const router=express.Router()
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Temporary upload directory

//all controller being accessible by admin only
const CountUser = require('../Controllers/Users/NoUsers')
const GetUsers = require('../Controllers/Users/GetLatestUser')
const CreateProduct = require('../Controllers/Product/CreateProduct')
const AllProducts = require('../Controllers/Product/GetAll')

//routes
router.route('/admin/user-count').get(CountUser) //sends the number of registed users on the app.
router.route('/admin/get-users').get(GetUsers)
router.route('/admin/product/upload').post(upload.array("images", 3),CreateProduct)
router.route('/admin/product/all').get(AllProducts)//get all products
module.exports=router