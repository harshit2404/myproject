const Product = require('../models/product')
exports.getaddProduct = (req,res)=>{
    res.render('add-product.ejs')
}

exports.postaddProduct = (req,res)=>{

    console.log(req.body)

    
    Product.create({
        title:req.body.title,
        price:req.body.price,
        imageUrl:req.body.image,
        description:req.body.description
        
    })
    .then(product=>{
        console.log('values inserted')
        res.redirect('/')
    })
    .catch(
        err=>{
            console.log('error occured')
        }
    )
    
    

}

exports.productDetail = (req,res)=>{
    console.log(req.params.id)
    Product.findByPk(req.params.id)
    .then(product=>{
        
        res.render('product-detail.ejs',{
            product:product
        })
    .catch(err=>{
        console.log("errrrrot")
    })    
    })
}


