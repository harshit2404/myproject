const shopController = require('../controllers/shop.js')

const express = require('express')
const router = express.Router()

router.get('/',shopController.getHomePage)

module.exports = router;