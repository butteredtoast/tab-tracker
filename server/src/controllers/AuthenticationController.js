const {User} = require('../models')

module.exports = {
    async register(req, res) {
        try{
            body = req.body
            console.log("Body is: ", body)                        
            const usr = await User.create(body)
            res.send({message: usr.toJSON()})
        } catch(err) {
            console.warn("Error! ", err)
            res.status(400).send({
                error: 'This email account is already in use!'
            })
        }
    }
}