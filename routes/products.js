const express = require('express')
const router = express.Router()

// to import all the controller functions
const {getAllProducts,getAllProductsTesting} = require("../controllers/products.js")
// main route of request after /api/products =/api/products/
router.route("/").get(getAllProducts)
// testing route of request ,will be used on postman
router.route("/testing").get(getAllProductsTesting)

module.exports = router