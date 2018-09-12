const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.use(express.static(path.resolve(__dirname, 'build')));

app.listen('https://nitjai07.github.io/portfolio', () => {
  console.log('server started');
});
