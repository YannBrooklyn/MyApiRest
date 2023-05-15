const db = require ('../config/dbconfig')

exports.user = (req, res) => {
        
    const iduser = parseInt(req.params.iduser)
    console.log("uuu", req.params.iduser)

    const { firstname, surname, email, password} = req.body
     db.query(`UPDATE user SET ? WHERE Iduser = ?`, [{FirstName: firstname, Surname: surname, Email: email, Password: password}, iduser], (error, results) => {
     if (error) {
         console.log("Message d'erreur", error)
         return res.status(400)
     } else {
          console.log("Message de results", results)
         return res.status(201)
     }
 })

}
