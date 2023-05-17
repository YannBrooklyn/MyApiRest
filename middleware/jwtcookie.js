const jwt = require('jsonwebtoken')
const dotenv = require ('dotenv')
dotenv.config({path: "../.env"})
const token = require('../controller/login');


function verifyToken(req, res, nex) {
    console.log("req", req)
    
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json ({ error: 'Access denied. Token missing.'})
    }
    jwt.verify(token, process.env.J_SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).json ({error: 'Invalid token'})
        }
        req.user = decoded
        nex()
    })
}

