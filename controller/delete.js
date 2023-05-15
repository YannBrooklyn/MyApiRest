const db = require ('../config/dbconfig')
exports.user = (req,res) => {

    const iduser = parseInt(req.params.iduser)
    console.log("rrr", req.params.iduser)

    
    db.query(`DELETE FROM user WHERE Iduser = ?`, iduser, (error, results) => {
        if (error) {
            console.log("Cette utilisateur n'as pas été supprimer", error)
            return res.status(400)
        } 
        
        // else if (params = invalide) {
        //     console.log("Cette utilisateur a été supprimé", results)
        //     return res.status(200)
        // }

        else {
            console.log("Cette utilisateur a été supprimé", results)
            return res.status(200)
        }
    })
}