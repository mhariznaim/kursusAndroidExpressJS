var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
//var Place
//mongoose.connect('mongodb://mhariznaim:abc1234@ds245022.mlab.com:45022/expressjslabrat');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {
res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/apiFire', router);

app.listen(port);
console.log('Magic happens on port ' + port);