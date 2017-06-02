const express = require('express');
const port=8081;
var app=express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.listen(app.get('port'),()=>{
	console.log('Node app is running on port', app.get('port'));
});
