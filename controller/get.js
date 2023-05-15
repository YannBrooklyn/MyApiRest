const db = require ('../config/dbconfig')

exports.user = (req, res) => {
        
    const iduser = parseInt(req.params.iduser)
    console.log("voici", req.params.iduser)

    
     db.query(`Select * From user WHERE Iduser = ?`, iduser , (error, results) => {
     if (error) {
         console.log("Une erreur s'est produit", error)
         return res.status(400)
     } else {
          console.log("L'utilisateur a bien été récupéré", results)
         return res.status(201)
     }
 })

}
