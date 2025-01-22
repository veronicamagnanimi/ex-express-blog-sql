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