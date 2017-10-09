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

// WHERE EVENT_START_DATE > NOW() 
// ORDER BY EVENT_START_DATE 
// LIMIT 3 

//get list of riders for driver pool date when logging into driver
var getDriverSchedule = function (driverName, res) {
	console.log('getDriverSchedule db method');
	connection.query(`SELECT departureDate from rides where driverName = '${driverName.driverName}' and departureDate >= CURDATE() order by departureDate limit 1;`, function(err, departureDate, fields) {
  	if (err) {
  		res.send(err);
  	} 
  	else if(departureDate.length !== 0) {
  		var modifiedDate = JSON.stringify(departureDate[0].departureDate).slice(1, 11);
  		console.log(modifiedDate);
    }
    connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider1 and rides.departureDate = '${modifiedDate}';`, function(err, rider1, fields) {
	  	if (err) {
	  		res.send(err);
	  	}
	  	console.log("rider1", rider1);
	    connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider2 and rides.departureDate = '${modifiedDate}';`, function(err, rider2, fields) {
		  	if (err) {
		  		res.send(err);
		  	}
		  	console.log("rider2", rider2);
		  	connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider3 and rides.departureDate = '${modifiedDate}';`, function(err, rider3, fields) {
			  	if (err) {
			  		res.send(err);
			  	}
			  	console.log("rider3", rider3);
			  	connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider4 and rides.departureDate = '${modifiedDate}';`, function(err, rider4, fields) {
				  	if (err) {
				  		res.send(err);
				  	}
				  	console.log("rider4", rider4);
				  	connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider5 and rides.departureDate = '${modifiedDate}';`, function(err, rider5, fields) {
					  	if (err) {
					  		res.send(err);
					  	}
					  	console.log("rider5", rider5);
					  	connection.query(`SELECT username from rider, rides where rides.driverName = '${driverName.driverName}' and rider.id = rides.rider6 and rides.departureDate = '${modifiedDate}';`, function(err, rider6, fields) {
						  	if (err) {
						  		res.send(err);
						  	}
						  	console.log("rider6", rider6);
						  	var schedule = [departureDate[0], rider1[0], rider2[0], rider3[0], rider4[0], rider5[0], rider6[0]];
						  	schedule.forEach(function(element, index){
						  		if(element === undefined) {
						  			schedule = schedule.slice(0, index);
						  		}
						  	})
						  	console.log(schedule);
						  	res.send(schedule);
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

// get list of rides matching user query
var getRideList = (req, res) => {
	const ridesQuery = `
	SELECT 
		driver.username, 
		driver.car, 
		driver.seats, 
		rides.rider1, 
		rides.rider2, 
		rides.rider3, 
		rides.rider4, 
		rides.rider5, 
		rides.rider6 
	FROM driver, rides
	WHERE 
		driver.home = '${req.query.pickup}' 
		AND rides.departureDate = '${req.query.date}' 
		AND driver.work = '${req.query.destination}'
		AND driver.departureTime = '${req.query.time}' 
		AND driver.id = rides.driverID`;
	connection.query(ridesQuery, (err, data) => {
		res.send(data);
		res.end();
	});
}

// add a rider to a preexisting ride
var addRider = (req, res) => {
	var pos = 1;
	var riderID = null;
	for (var i = 0; i < 6; i++) {
		if (req.body.ride[`rider${i + 1}`] !== null) {
			pos++;
		}
	}
	var idQuery = `
	SELECT id from rider WHERE username = '${req.body.rider}'`;
	connection.query(idQuery, (err, data) => {
		var result = data[0];
		var newRider = `
		UPDATE rides SET rider${pos}=${result.id} WHERE driverName = '${req.body.ride.username}'`;
		connection.query(newRider, (err, data) => {
			if (err) throw err;
			console.log('Inserted', req.body.rider, 'into position', pos);
			res.send(data);
			res.end();
		});
	});
};

module.exports.fetchUserData = fetchUserData;
module.exports.registerDriver = registerDriver;
module.exports.registerRider = registerRider;
module.exports.registerDriverRide = registerDriverRide;
module.exports.getDriverSchedule = getDriverSchedule;
module.exports.getRideList = getRideList;
module.exports.addRider = addRider;