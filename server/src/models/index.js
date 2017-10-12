const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config')
const db = {}

console.log("Database is ", config.db.database)
console.log("User is ", config.db.user)
console.log("Pwd is ", config.db.password)
console.log("Options are ", config.db.options)

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)


console.log("Directory is ", __dirname)

fs
    .readdirSync(__dirname)
    .filter((file) => 
        file !== "index.js"
    )
    .forEach((file) => {        
        const model = sequelize.import(path.join(__dirname, file))        
        db[file.slice(0, -3)] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db