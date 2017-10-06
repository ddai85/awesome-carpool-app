var express = require('express');
var bodyParser = require('body-parser');
var pools = require('../database/dbMethods');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.use(express.static(__dirname + '/../client/dist'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bin', express.static(__dirname + '/../client/bin'));


app.get('/driver', function (req, res) {
  driver.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/driver', function (req, res) {


	let driverId = req.body.driverId;
	let description = req.body.description;

});

app.get('/rides', function (req, res) {
  rider.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/rider', function (req, res) {

})

app.post('/rider', function (req, res) {

});

app.get('/registration', function (req, res) {
  registration.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/login', (req, res) => {
  pools.fetchUserData(res, req._parsedOriginalUrl.query);
})

app.post('/registration', function (req, res) {
  console.log('posted', req.body);
  if(req.body.hasOwnProperty('driver')) {
    pools.registerDriver(req.body, res);
  } else if(req.body.hasOwnProperty('rider')) {
    pools.registerRider(req.body, res);
  }
  //res sent in database methods
});



app.listen(3000, function() {
  console.log('listening on port 3000!');
});
