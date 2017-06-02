const express = require('express');

var app=express();
app.set('port', process.env.PORT || 8081);

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.listen(app.get('port'),()=>{
	console.log('Node app is running on port', app.get('port'));
});
