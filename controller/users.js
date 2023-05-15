const db = require ('../config/dbconfig')

exports.users = (req, res) => {

    const { firstname, surname, email, password} = req.body
    db.query('SELECT IDUser, FirstName, Surname, Email FROM User', {FirstName: firstname, Surname: surname, Email: email, Password: password}, (error, results) => {
        if (error) {
            console.log("Une erreur s'est produite", error)
            return res.status(400)
        } else {
            console.log("Voici les utilisateurs", results)
            return res.status(200)
        }
    })


}