const express = require('express')
const adminRoutes = require('./routes/admin.js')
const bodyParser = require('body-parser')
const sequelize = require('./utils/database')
const shopRoutes = require('./routes/shop.js')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views','views')

app.use(shopRoutes)
app.use(adminRoutes)

sequelize.sync()
.then(result=>{
    console.log('created')
})
.catch(err=>{
    console.log(err)
})

app.listen(5000,()=>{
    console.log('server started at 5000')
})