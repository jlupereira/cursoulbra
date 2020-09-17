const express = require("express");

const app = express();

//Conexão com o banco de dados
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "ulbra",
	password: "250199",
	database: "cursoulbra"
});

connection.connect(function(err){
	if(err) {
		console.error("erro de conexão: "+err.stack);
		return;
	}

	console.log("Id da conexão: "+connection.threadId);
});

app.get("/", function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.get("/curso", function(req,res){
	res.sendFile(__dirname+"/src/curso.html");
});

app.get("/novaconta", function(req,res){
	res.sendFile(__dirname+"/src/novaconta.html");
});

//localhost:8080
app.listen(8080);