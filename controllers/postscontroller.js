const connection = require("../data/database");

//index --> GET
const index = (req, res) => {
 const sql = "SELECT * FROM `posts`";
 connection.query(sql, (err, results) => {
    if(err) {
        return res.status(500).json({
            message: "Errore interno del server"
        });
    } else {
        return res.status(200).json({
            status: "success",
            data: results
        })
    }
 })
    }


//show --> GET
const show = (req, res) => {
 const id = req.params.id;
 const sql = "SELECT * FROM `posts` WHERE id = ?"
 connection.query(sql, [id], (err, results) => {
    if(err) {
        return res.status(500).json({
            message: "Errore interno del server"
        });
     }
    
     if(results.length === 0) {
        return res.status(404).json({
            message: "Post non trovato"
        });
    
     } else {
        return res.status(200).json({
            status: "success",
            data: results[0]
        });
     }
 })
 
}


//create --> POST
const create = (req, res) => {
    
}


//update --> PUT
const update = (req, res) => {
    
    }


//modify --> PATCH
const modify = (req, res) => {
    
}


//destroy --> DELETE
const destroy = (req, res) => {
 const id = req.params.id;
 const sql = "DELETE FROM `posts` WHERE id = ?";
 connection.query(sql, [id], (err) => {
    if(err) {
        return res.status(500).json({
            message: "Errore interno del server"
        });
    } else {
        return res.sendStatus(204);
    }
 })
    }


//////ESPORTO TUTTO///////
module.exports = {
    index,
    show,
    // create,
    // update,
    // modify,
    destroy
}