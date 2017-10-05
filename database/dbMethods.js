var mysql = require('mysql');

var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '',
	database: 'pools'

});

//insert driver into database after registration
var registerDriver = function(driverInfo, res) {
  console.log('driver db method', driverInfo);
  connection.query('INSERT into driver (username, car, license, seats, home, work, departureTime) values (?, ?, ?, ?, ?, ?, ?)', [driverInfo.driver, driverInfo.car, driverInfo.license, driverInfo.seats, driverInfo.home, driverInfo.work, driverInfo.departureTime], function(err, results, fields) {
  	if (err) {
  		res.send(err);
  	}
  	console.log("results", results);
  	res.send();
  });
}

//insert rider into database after registration
var registerRider = function(riderInfo, res) {
  console.log('rider db method', riderInfo);
  connection.query('INSERT into rider (username) values (?)', [riderInfo.rider], function(err, results, fields) {
  	if (err) {
  		res.send(err);
  	}
  	console.log("results", results);
  	res.send();
  });
}

//insert driver pool date into database from driver page
var registerDriverDate = function(driverInfo, res) {

}

//get list of riders for driver pool date when logging into driver
var getDriverSchedule = function () {

}

module.exports.registerDriver = registerDriver;
module.exports.registerRider = registerRider;
module.exports.registerDriverDate = registerDriverDate;
module.exports.getDriverSchedule = getDriverSchedule;