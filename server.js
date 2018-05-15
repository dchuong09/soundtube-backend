const express = require('express');
const app = express();
const soundtubeRouter = require('./config/routes');


const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

// app.get('/', function(req,res){
//     res.send('Server running!!!')
// });
app.get('/', function(req, res) {
	res.send('Yup, working...');
})

app.use(soundtubeRouter);

///LISTEN HERE
app.listen(process.env.PORT || 8080, function() {
	console.log('This server is listening on port 8080')
});