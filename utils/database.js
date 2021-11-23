const Sequelize = require('sequelize')

const sequelize = new Sequelize('giraffe2','root','harry@24',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;