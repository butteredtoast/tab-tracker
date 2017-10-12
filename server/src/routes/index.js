const AuthenticationController = require('../controllers/AuthenticationController')

module.exports = (app) => {
    app.get("/status", (req, res) => {
        res.send({message: "Hello world!"})
    }),
    
    app.post("/register", AuthenticationController.register)
}
