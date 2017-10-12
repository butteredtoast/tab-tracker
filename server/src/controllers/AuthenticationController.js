const {user} = require('../models')

module.exports = {
    async register(req, res) {
        try{
            const usr = await user.create(req.body)
            res.send({message: usr.toJSON()})
        } catch(err) {
            console.warn("Error! ", err)
            res.status(400).send({
                error: 'This email account is already in use!'
            })
        }
    }
}