const jwt = require('jsonwebtoken')
const dotenv = require ('dotenv')
const token = require('../controller/login')

dotenv.config({path: "../.env"})


console.log(token.user)

function verifyToken(req, res, nex) {
    console.log("req", req)
    console.log("req", req.headers.authorization)
    const tokenHeaders = req.headers.authorization
    if (!tokenHeaders) {
        return res.status(401).json ({ error: 'Access denied. Token missing.'})
    }
    console.log("typeof", typeof token)
    console.log("token", token)
    jwt.verify(tokenHeaders, process.env.J_SECRET, (error, decoded) => {
        console.log("test", tokenHeaders)
        console.log("test", error)

        if (error) {
            return res.status(401).json ({error: 'Invalid token'})
        }
        console.log('rrrrrrrree =>', decoded)
        
        nex()
    })
    
}

module.exports = verifyToken
