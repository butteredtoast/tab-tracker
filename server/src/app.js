/* eslint "no-console": ["error", {"allow": ["warn", "info", "error", "log"]}] */
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const {sequelize} = require("./models")
const config = require("./config")

const app = express()
app.use(morgan("combined"))
app.use(bodyparser.json())
app.use(cors())

require("./routes")(app)

sequelize.sync({force: true, logging: console.log})
    .then(() => {
        app.listen(config.port)
        console.info(`Server started on port ${config.port}`)
    })
