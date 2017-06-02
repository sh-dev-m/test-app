const express = require('express');
const port=8081;
var app=express();


app.listen(app.get('port'),()=>{
	console.log('Node app is running on port', app.get('port'));
});
