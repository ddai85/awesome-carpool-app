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
    this.setUserPage = this.setUserPage.bind(this);
  }


  renderRegistration () {
    this.setState({page: 'registration'});
  }

  getLogin (name, pass, registration) {
    this.setState({username: name, password: pass}, () => {
      console.log('user state updated:', this.state.username)
    });
    if (registration) {
      this.renderRegistration();
    }
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
        {this.state.page === 'login'
          ? <Navbar 
            getName={this.getLogin}
          />
          : this.state.page === 'registration'
            ? <RegistrationPage saveDriver={this.saveDriver} saveRider={this.saveRider} username={this.state.username} setUserPage={this.setUserPage}/>
            : this.state.page === 'driver'
              ? <DriverPage driver={this.state.driver} getRideSchedule={this.getRideSchedule} schedule={this.state.schedule} />
              : <RiderPage />
       }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
