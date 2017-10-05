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
}

//insert rider into database after registration
var registerRider = function(riderInfo, res) {
  console.log('rider db method', riderInfo);
}

//insert driver pool date into database from driver page
var registerDriverDate = function() {

}

//get list of riders for driver pool date when logging into driver
var getDriverSchedule = function () {

}

module.exports.registerDriver = registerDriver;
module.exports.registerRider = registerRider;
module.exports.registerDriverDate = registerDriverDate;
module.exports.getDriverSchedule = getDriverSchedule;