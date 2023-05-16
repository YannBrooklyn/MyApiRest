const jwt = require('jsonwebtoken')
const token = require('../controller/login')

exports.jwtcookie = (req, res, nex) => {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded)
    req.user = decoded
    nex();
}

