const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/products');
const Product = require('../models/product');


router.get('/add-product',ProductController.getaddProduct)

module.exports = router;

router.post('/add-product',ProductController.postaddProduct)

router.get('/product-detail/:id',ProductController.productDetail)