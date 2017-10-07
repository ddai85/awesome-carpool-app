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
      departureDate: '',
      departureTime: '08:00:00',
      car: '',
      seats: 0,
      upcomingRideDate: '',
      schedule: [] // schedule will contain rideId#'s that refer to entries in the rides join table
      //edited state variable names to match mysql database fields
    }

    this.getLogin = this.getLogin.bind(this);
    this.renderRegistration = this.renderRegistration.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleStartPoint = this.handleStartPoint.bind(this);
    this.handleEndPoint = this.handleEndPoint.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.setUserPage = this.setUserPage.bind(this);
    this.postRideSchedule = this.postRideSchedule.bind(this);
    this.getRideSchedule = this.getRideSchedule.bind(this);
    this.updateRideSchedule - this.updateRideSchedule.bind(this);
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
  
  setUserPage(type){
    console.log('set user page');
    if (type === 'driver') {
      this.setState({page: 'driver', driver: true});
    } else if (type === 'rider') {
      this.setState({page: 'rider', rider: true});
    }
  }

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
  getRideSchedule(username) {
    console.log('username', username);
    var driver = {driverName: username};
    $.ajax({
      method: 'GET',
      url: '/rides', 
      contentType: 'application/json',
      data: driver,
      success: (data) => {
        console.log('success', data);
        this.updateRideSchedule(data);
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  }

  updateRideSchedule(schedule) {
    let nextDate = schedule[0].departureDate.slice(0, 10); 
    schedule.shift();
    var riders = schedule.map(rider => rider.username);
    this.setState({
      departureDate: nextDate,
      schedule: riders
    });
  }
  
  //post request from driver page when date and time is submitted
  //post to '/driver' endpoint and insert into rides database
  postRideSchedule(driver, date) {
    console.log('postRideSchedule!!!!');
    var rideSchedule = {username: driver, departureDate: date};
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
            ? <RegistrationPage saveDriver={this.saveDriver} saveRider={this.saveRider} username={this.state.username} setUserPage={this.setUserPage} />
            : this.state.page === 'driver'
              ? <DriverPage username={this.state.username} departureTime={this.state.departureTime} getRideSchedule={this.getRideSchedule} postRideSchedule={this.postRideSchedule} departureDate={this.state.departureDate} schedule={this.state.schedule} />
              : <RiderPage />
       }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
