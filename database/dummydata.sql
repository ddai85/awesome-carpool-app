
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
  departureDate DATE,
  PRIMARY KEY (id),
  FOREIGN KEY(driverID) REFERENCES driver(id),
  FOREIGN KEY(rider1) REFERENCES rider(id),
  FOREIGN KEY(rider2) REFERENCES rider(id),
  FOREIGN KEY(rider3) REFERENCES rider(id),
  FOREIGN KEY(rider4) REFERENCES rider(id),
  FOREIGN KEY(rider5) REFERENCES rider(id),
  FOREIGN KEY(rider6) REFERENCES rider(id)
);

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('alex', 'Toyota Camry', '8RNB401', 3, 'Oakland', 'Hack Reactor', '07:00:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('kaila', 'Honda Accord', '7THT934', 2, 'Oakland', 'Downtown', '07:00:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('angel', 'Kia Optima', '3HRT114', 6, 'San Jose', 'Hack Reactor', '07:30:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('olaf', 'Toyota Sienna', '4GRU461', 2, 'San Jose', 'Downtown', '07:30:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('rebeccaPhares', 'Tesla Model X', '1HRB143', 3, 'Oakland', 'Hack Reactor', '08:00:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('fredX', 'BMW M3', '1COD34U', 2, 'Oakland', 'Downtown', '08:00:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('dannyT', 'Mercedes-Benz AMG C 63', '7ECH433', 2, 'San Jose', 'Hack Reactor', '08:00:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('alan', 'Mini Cooper', '5CNU039', 2, 'San Jose', 'Downtown', '08:00:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('jonathanLee', 'Toyota Camry', '0HOT123', 3, 'Oakland', 'Hack Reactor', '08:30:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('brianP', 'Honda CRV', '7VYN312', 2, 'Oakland', 'Downtown', '08:30:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('mary', 'Volkswagon Bus', '6MER100', 6, 'San Jose', 'Hack Reactor', '08:30:00');

INSERT INTO driver (username, car, license, seats, home, work, departureTime)
VALUES ('blake', 'Mini Cooper', '5CNU039', 2, 'San Jose', 'Downtown', '08:30:00');


INSERT INTO rider (username) VALUES ('shiHao');
INSERT INTO rider (username) VALUES ('jakeS');
INSERT INTO rider (username) VALUES ('victorN');
INSERT INTO rider (username) VALUES ('solT');
INSERT INTO rider (username) VALUES ('victorL');
INSERT INTO rider (username) VALUES ('ian');
INSERT INTO rider (username) VALUES ('kirk');


INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(5, 'rebeccaPhares', 1, 3, 5, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(6, 'fredX', 2, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(7, 'dannyT', 6, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(8, 'alan', 4, 7, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(1, 'alex', 1, 3, 5, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(2, 'kaila', 2, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(3, 'angel', 6, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(4, 'olaf', 4, 7, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(9, 'jonathanLee', 1, 3, 5, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(10, 'brianP', 2, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(11, 'mary', 6, '2017-10-10');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(12, 'blake', 4, 7, '2017-10-10');

INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(5, 'rebeccaPhares', 1, 3, 5, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(6, 'fredX', 2, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(7, 'dannyT', 6, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(8, 'alan', 4, 7, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(1, 'alex', 1, 3, 5, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(2, 'kaila', 2, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(3, 'angel', 6, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(4, 'olaf', 4, 7, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(9, 'jonathanLee', 1, 3, 5, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(10, 'brianP', 2, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(11, 'mary', 6, '2017-10-11');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(12, 'blake', 4, 7, '2017-10-11');

INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(5, 'rebeccaPhares', 1, 3, 5, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(6, 'fredX', 2, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(7, 'dannyT', 6, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(8, 'alan', 4, 7, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(1, 'alex', 1, 3, 5, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(2, 'kaila', 2, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(3, 'angel', 6, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(4, 'olaf', 4, 7, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(9, 'jonathanLee', 1, 3, 5, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(10, 'brianP', 2, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(11, 'mary', 6, '2017-10-12');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(12, 'blake', 4, 7, '2017-10-12');

INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(5, 'rebeccaPhares', 1, 3, 5, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(6, 'fredX', 2, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(7, 'dannyT', 6, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(8, 'alan', 4, 7, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(1, 'alex', 1, 3, 5, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(2, 'kaila', 2, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(3, 'angel', 6, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(4, 'olaf', 4, 7, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(9, 'jonathanLee', 1, 3, 5, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(10, 'brianP', 2, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(11, 'mary', 6, '2017-10-13');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(12, 'blake', 4, 7, '2017-10-13');

INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(5, 'rebeccaPhares', 1, 3, 5, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(6, 'fredX', 2, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(7, 'dannyT', 6, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(8, 'alan', 4, 7, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(1, 'alex', 1, 3, 5, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(2, 'kaila', 2, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(3, 'angel', 6, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(4, 'olaf', 4, 7, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, rider2, rider3, departureDate) VALUES
(9, 'jonathanLee', 1, 3, 5, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(10, 'brianP', 2, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, departureDate) VALUES
(11, 'mary', 6, '2017-10-14');
INSERT INTO rides (driverID, driverName, rider1, rider2, departureDate) VALUES
(12, 'blake', 4, 7, '2017-10-14');
