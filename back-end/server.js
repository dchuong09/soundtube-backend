const express = require('express');
const app = express();
// const db = require('./models');
const bodyParser = require('body-parser');
// const controllers = require('./controllers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req,res){
    res.send('Server running!!!')
});


///LISTEN HERE
app.listen(process.env.PORT || 8080, function() {
	console.log('This server is listening on port 8080')
});