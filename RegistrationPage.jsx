import React from 'react';

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

      //driver fields
      driverName: '',
      car: '',
      route: '',
      seats: '',
      license: '',
      departureTime: '8:00 AM',

      //rider fields
      riderName: '',
    };

    //bind all functions to this context
    this.updateDriverName = this.updateDriverName.bind(this);
    this.updateCar = this.updateCar.bind(this);
    this.updateRoute = this.updateRoute.bind(this);
    this.updateSeats = this.updateSeats.bind(this);
    this.updateLicense = this.updateLicense.bind(this);
    this.updateDepartureTime = this.updateDepartureTime.bind(this);
    this.updateRiderName = this.updateRiderName.bind(this);
    this.registerDriver = this.registerDriver.bind(this);
    this.registerRider = this.registerRider.bind(this);
  }

  updateDriverName(e) {
    this.setState({
      driverName: e.target.value
    });
  }

  updateCar(e) {
    this.setState({
      car: e.target.value
    });
  }

  updateRoute(e) {
    this.setState({
      route: e.target.value
    });
  }

  updateSeats(e) {
    this.setState({
      seats: e.target.value
    });
  }

  updateLicense(e) {
    this.setState({
      license: e.target.value
    });
  }

  updateDepartureTime(e) {
    this.setState({
      departureTime: e.target.value
    });
  }

  updateRiderName(e) {
    this.setState({
      riderName: e.target.value
    });
  }

  registerDriver() {
    this.props.registrationFuncDriver(this.state.driverName, this.state.car, this.state.route, this.state.seats, this.state.license, this.state.departureTime);
  }

  registerRider() {
    this.props.registrationFuncRider(this.state.riderName);
  }
  
  render () {
    return (<div>
      <h3>Driver Registration</h3>
      Name: <input onChange={this.updateDriverName} value={this.state.driverName}></input>
      <br />
      Car: <input onChange={this.updateCar} value={this.state.car}></input>
      <br />
      Route: <input onChange={this.updateRoute} value={this.state.route}></input>
      <br />
      Number of Seats: <input onChange={this.updateSeats} value={this.state.seats}></input>
      <br />
      License Number: <input onChange={this.updateLicense} value={this.state.license}></input>
      <br />
      Departure Time: <input onChange={this.updatedDepartureTime} value={this.state.departureTime}></input>
      <button onClick={this.registerDriver}>Register</button>
      <br />
      <br />
      <br />
      <h3>Rider Registration</h3>
      Name: <input onChange={this.updateRiderName} value={this.state.riderName}></input>
      <button onClick={this.registerRider}>Register</button>
    </div>);
  }
}

export default RegistrationPage;

