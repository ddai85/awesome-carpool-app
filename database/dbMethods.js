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
  	console.log("driver table results", results);
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
var registerDriverRide = function(driverInfo, res) {
	connection.query(`SELECT id FROM driver WHERE username = '${driverInfo.username}'`, function(err, results, fields) {
  	if (err) {
  		res.send(err);
  	}
  	console.log("driver table query results");
  	console.log(results[0].id, driverInfo.username, driverInfo.departureDate);
    connection.query('INSERT into rides (driverID, driverName, departureDate) values (?, ?, ?)', [results[0].id, driverInfo.username, driverInfo.departureDate], function(err, results, fields) {
	  	if (err) {
	  		res.send(err);
	  	}
	  	console.log("rides table results", results);
	  	res.send();
	  });
	});
}

//get list of riders for driver pool date when logging into driver
var getDriverSchedule = function (driverName, res) {
	console.log('getDriverSchedule db method');
	connection.query(`SELECT departureDate from rides where driverName = '${driverName.driverName}'`, function(err, departureDate, fields) {
  	if (err) {
  		res.send(err);
  	}
  	console.log("departure date", departureDate);
  	connection.query(`SELECT home from driver where username = '${driverName.driverName}'`, function(err, home, fields) {
	  	if (err) {
	  		res.send(err);
	  	}
	  	console.log("home", home);
	  	connection.query(`SELECT work from driver where username = '${driverName.driverName}'`, function(err, work, fields) {
		  	if (err) {
		  		res.send(err);
		  	}
		  	console.log("work", work);
		    connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider1;`, function(err, rider1, fields) {
			  	if (err) {
			  		res.send(err);
			  	}
			  	console.log("rider1", rider1);
			    connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider2;`, function(err, rider2, fields) {
				  	if (err) {
				  		res.send(err);
				  	}
				  	console.log("rider2", rider2);
				  	connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider3;`, function(err, rider3, fields) {
					  	if (err) {
					  		res.send(err);
					  	}
					  	console.log("rider3", rider3);
					  	connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider4;`, function(err, rider4, fields) {
						  	if (err) {
						  		res.send(err);
						  	}
						  	console.log("rider4", rider4);
						  	connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider5;`, function(err, rider5, fields) {
							  	if (err) {
							  		res.send(err);
							  	}
							  	console.log("rider5", rider5);
							  	connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider6;`, function(err, rider6, fields) {
								  	if (err) {
								  		res.send(err);
								  	}
								  	console.log("rider6", rider6);
								  	res.send([departureDate, home, work, rider1, rider2, rider3, rider4, rider5, rider6]);
						  	  });
					  	  });
				  	  });
			  	  });
		  	  });
	  	  });
  	  });
  	});
  });
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
module.exports.registerDriverRide = registerDriverRide;
module.exports.getDriverSchedule = getDriverSchedule;