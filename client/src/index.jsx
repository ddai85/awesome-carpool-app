import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import RiderPage from './rider.jsx';
import DriverPage from './DriverPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      username: '',
      rider: false,
      driver: false,
      startPoint: '',
      endPoint: '',
      departureTime: '00:00:00',
      car: '',
      seats: 0,
      schedule: [] // schedule will contain rideId#'s that refer to entries in the rides join table
    }
    this.handleTime = this.handleTime.bind(this);
    this.handleStartPoint = this.handleStartPoint.bind(this);
    this.handleEndPoint = this.handleEndPoint.bind(this);
  }
  handleTime(e) {


  }

  handleStartPoint(e) {

  }

  handleEndPoint(e) {

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
      <div>
        {this.state.page === 'login'
          ? <Login />
          : this.state.page === 'registration'
            ? <Registration />
            : this.state.page === 'driver'
              ? <Driver driver={this.state.driver} schedule={this.state.schedule}/>
              : <Rider />
       }
      </div>
    )
  }

}
ReactDOM.render(<App />, document.getElementById('app'));
