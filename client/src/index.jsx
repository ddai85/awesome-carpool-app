import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navbar from './navbar.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import RiderPage from './rider.jsx';
import DriverPage from './DriverPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      username: '',
      password: '',
      rider: false,
      driver: false,
      home: '',
      work: '',
      departureTime: '',
      car: '',
      seats: 0,
      schedule: [] // schedule will contain rideId#'s that refer to entries in the rides join table
      //edited state variable names to match mysql database fields
    }

    this.getLogin = this.getLogin.bind(this);
    this.renderRegistration = this.renderRegistration.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleStartPoint = this.handleStartPoint.bind(this);
    this.handleEndPoint = this.handleEndPoint.bind(this);
<<<<<<< HEAD
    this.checkUser = this.checkUser.bind(this);
=======
    this.setUserPage = this.setUserPage.bind(this);
>>>>>>> 7ec73f5b448eee5828acc6477ff3dc4e0eb9b824
  }


  renderRegistration () {
    this.setState({page: 'registration'});
  }

  getLogin (name, pass, registration) {
    this.setState({username: name, password: pass}, () => {
      this.checkUser();
    });
    if (registration) {
      this.renderRegistration();
    } else {
    }
  }
  
<<<<<<< HEAD
  checkUser() {
    $.ajax({
      method: 'GET',
      url: '/login',
      contentType: 'text/html',
      data: this.state.username,
      success: (data) => {
        if (data !== []) {
          if (data[0] === 'rider') {
            console.log('Rider logged in');
            this.setState({
              rider: true,
              page: 'rider'
            })
          }
          if (data[0] === 'driver') {
            var driver = data[1][0];
            console.log(`${driver.username} is logged in as a driver.`);
            this.setState({
              driver: true,
              car: driver.car,
              home: driver.home,
              work: driver.work,
              departureTime: driver.departureTime,
              seats: driver.seats,
              page: 'driver'
            })
          }
        }
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  
=======
  setUserPage(type){
    console.log('set user page');
    if (type === 'driver') {
      this.setState({page: 'driver', driver: true});
    } else if (type === 'rider') {
      this.setState({page: 'rider', rider: true});
    }
  }

>>>>>>> 7ec73f5b448eee5828acc6477ff3dc4e0eb9b824
  handleTime(e) {


  }

  handleStartPoint(e) {

  }

  handleEndPoint(e) {

  }

  saveDriver(username, car, license, seats, home, work, departureTime) {
    var driverInfo = { driver: username, car: car, license: license, seats: seats, home: home, work: work, departureTime: departureTime };
    $.ajax({
      method: 'POST',
      url: '/registration', 
      contentType: 'application/json',
      data: JSON.stringify(driverInfo),
      success: (data) => {
        console.log('POST success!');
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  saveRider(username) {
    console.log('save rider');
    var riderInfo = { rider: username };
    $.ajax({
      method: 'POST',
      url: '/registration', 
      contentType: 'application/json',
      data: JSON.stringify(riderInfo),
      success: (data) => {
        console.log('POST success!');
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  //get riders schedule for driver on driver login success
  //get request to '/rides' endpoint?
  //query rides database
  //set schedule in state to data received from get request
  getRideSchedule() {
    $.ajax({
      method: 'GET',
      url: '/rides', 
      success: (data) => {
        console.log('success');
        this.setState({
          schedule: data
        })
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  }
  
  //post request from driver page when date and time is submitted
  //post to '/driver' endpoint and insert into rides database
  postRideSchedule(driver, date, time) {
    var rideSchedule = {driver: driver, date: date, time: time};
    $.ajax({
      method: 'POST',
      url: '/driver', 
      contentType: 'application/json',
      data: JSON.stringify(rideSchedule),
      success: (data) => {
        console.log('POST success!');
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
          <Navbar 
            getName={this.getLogin}
          />
        {this.state.page === 'login'
          ? <div></div>
          : this.state.page === 'registration'
            ? <RegistrationPage saveDriver={this.saveDriver} saveRider={this.saveRider} username={this.state.username} setUserPage={this.setUserPage}/>
            : this.state.page === 'driver'
<<<<<<< HEAD
              ? <DriverPage driver={this.state.driver} schedule={this.state.schedule} />
=======
              ? <DriverPage driver={this.state.driver} getRideSchedule={this.getRideSchedule} schedule={this.state.schedule} />
>>>>>>> 7ec73f5b448eee5828acc6477ff3dc4e0eb9b824
              : <RiderPage />
       }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
