const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3002);
