var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const apiRoute = require('./routes/api');
const port = process.env.port || 3076
var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get("/",(req,res)=>{
	res.send("Api Server");
})

app.get("/api",(req,res)=>{
	res.send("Welcome to the api");
})


app.post("/api/query",jsonParser,apiRoute);



app.listen(port, function () {
  console.log('Server listening in port:',port);
});


