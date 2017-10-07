
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
)
