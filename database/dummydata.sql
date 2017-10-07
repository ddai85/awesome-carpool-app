
DROP DATABASE IF EXISTS pools;

CREATE DATABASE pools;

USE pools;

CREATE TABLE driver (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  car VARCHAR(50) NOT NULL,
  license VARCHAR(50) NOT NULL,
  seats INT NOT NULL,
  home VARCHAR(100) NOT NULL,
  work VARCHAR(100) NOT NULL,
  departureTime TIME NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rider (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE rides (
  id INT NOT NULL AUTO_INCREMENT,
  driverID INT NOT NULL,
  driverName VARCHAR(50) NOT NULL,
  rider1 INT,
  rider2 INT,
  rider3 INT,
  rider4 INT,
  rider5 INT,
  rider6 INT,
  departureDate DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(driverID) REFERENCES driver(id),
  FOREIGN KEY(rider1) REFERENCES rider(id),
  FOREIGN KEY(rider2) REFERENCES rider(id),
  FOREIGN KEY(rider3) REFERENCES rider(id),
  FOREIGN KEY(rider4) REFERENCES rider(id),
  FOREIGN KEY(rider5) REFERENCES rider(id),
  FOREIGN KEY(rider6) REFERENCES rider(id)
)

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('rebeccaPhares', 'BMW M3', '1HRB143', 3, 'Oakland', 'Hack Reactor', '08:00:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('fredX', 'Tesla Model S', '1COD34U', 2, 'Oakland', 'Downtown', '08:00:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('dannyT', 'Mercedes-Benz AMG C 63', '7ECH433', 2, 'San Jose', 'Hack Reactor', '08:00:00');

INSERT INTO rider (username) VALUES ('shiHao');
INSERT INTO rider (username) VALUES ('jakeS');
INSERT INTO rider (username) VALUES ('victorN');
INSERT INTO rider (username) VALUES ('solT');
INSERT INTO rider (username) VALUES ('victorL');
INSERT INTO rider (username) VALUES ('ian');
INSERT INTO rider (username) VALUES ('kirk');


INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(1, 'rebeccaPhares', 1, 3, 5, '2017-10-07');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(2, 'fredX', 2, 4, '2017-10-08');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(3, 'dannyT', 6, 7, '2017-10-09');
