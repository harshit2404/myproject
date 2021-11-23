const Product = require('../models/product')

exports.getHomePage = (req,res)=>{
    Product.findAll()
    .then(products=>{
        res.render('homepage.ejs',{products:products})
    })
    .catch(err=>{
        console.log('eroor occured at home')
    })
    
}