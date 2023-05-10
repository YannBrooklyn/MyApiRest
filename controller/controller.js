const controller = {
    index : (req, res) => {
        res.send("<h1>test</h1>")
        res.render('pages/index')
        
    },
    users : (req, res) => {
        res.render('pages/users')
    }
}

module.exports = controller