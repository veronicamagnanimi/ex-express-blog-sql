const connection = require("..data/database");

//INDEX
const index = (req, res) => {
 const sql = "SELECT * FROM `tags`";
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



