const https = require("https");
const mysql = require('mysql');


exports.executeQuery = (req, res) => {
    console.log("inside execute query")
    let queryToExecute = req.body.query;

    var connection = mysql.createConnection({
        host: 'XXXXX',
        user: 'root',
        password: 'example',
        database: 'example',
        port: 3308
     });
     connection.connect(function(error){
        if(error){
           throw error;
        }else{
           console.log('Conexion correcta.');
        }
     });
    var execution = connection.query(queryToExecute, function(error, result){
        if(error){
           throw error;
        }else{
           console.log(result);
           res.json(result)
        }
      }
     );
     connection.end();


    
};


