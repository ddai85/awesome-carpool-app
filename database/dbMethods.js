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

//get user info on login
var fetchUserData = (res, username) => {
	var riderQuery = `SELECT * FROM rider WHERE username = '${username}'`
	var driverQuery = `SELECT * FROM driver WHERE username = '${username}'`
	var userType = null;
	connection.query(driverQuery, (err, rows) => {
		if (err) reject(err);
		if (rows.length > 0) {
			res.send(['driver', rows]);
			res.end();
		} else {
			connection.query(riderQuery, (err, rows, fields) => {
				if (err) reject(err);
				if (rows.length > 0) {
					res.send(['rider', rows]);
					res.end();
				} else {
					res.send([]);
					res.end;
				}
			});
		}
	});
}

module.exports.fetchUserData = fetchUserData;
module.exports.registerDriver = registerDriver;
module.exports.registerRider = registerRider;
module.exports.registerDriverDate = registerDriverDate;
module.exports.getDriverSchedule = getDriverSchedule;