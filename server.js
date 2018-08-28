const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3000);
