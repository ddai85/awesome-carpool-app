import React from 'react';

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

      //update variable names to match mysql database fields
      //Warning: Failed form propType: You provided a `value` prop to a form field without 
      //an `onChange` handler. This will render a read-only field. If the field should be mutable 
      //use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method 
      //of `RegistrationPage`.

      username: '',
      car: '',
      home: '',
      work: '',
      seats: '',
      license: '',
      departureTime: '8:00:00'

    };

    //bind all functions to this context
    this.updateUsername = this.updateUsername.bind(this);
    this.updateCar = this.updateCar.bind(this);
    this.updateHome = this.updateHome.bind(this);
    this.updateWork = this.updateWork.bind(this);
    this.updateSeats = this.updateSeats.bind(this);
    this.updateLicense = this.updateLicense.bind(this);
    this.updateDepartureTime = this.updateDepartureTime.bind(this);
    this.registerDriver = this.registerDriver.bind(this);
    this.registerRider = this.registerRider.bind(this);
  }

  // componentDidMount(){
  //   this.setState({
  //     username: this.props.username
  //   });
  // }

  updateUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  updateCar(e) {
    this.setState({
      car: e.target.value
    });
  }

  updateHome(e) {
    this.setState({
      home: e.target.value
    });
  }

  updateWork(e) {
    this.setState({
      work: e.target.value
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

  registerDriver() {
    this.props.saveDriver(this.state.username, this.state.car, this.state.license, this.state.seats, this.state.home, this.state.work, this.state.departureTime);
  }

  registerRider() {
    this.props.saveRider(this.state.username);
  }
  
  render () {
    return (<div>
      <div>
        <h3>Driver Registration</h3>
        Name: <input onChange={this.updateUsername} defaultValue={this.state.username}></input>
        <br />
        Car: <input onChange={this.updateCar} value={this.state.car}></input>
        <br />
        Home: <input onChange={this.updateHome} value={this.state.home}></input>
        <br />
        Work: <input onChange={this.updateWork} value={this.state.work}></input>
        <br />
        Number of Seats: <input onChange={this.updateSeats} value={this.state.seats} ></input>
        <br />
        License Number: <input onChange={this.updateLicense} value={this.state.license}></input>
        <br />
        Departure Time: <input onChange={this.updatedDepartureTime} defaultValue={this.state.departureTime} ></input>
        <button onClick={this.registerDriver}>Register</button>
        <br />
        <br />
        <br />
      </div>
      <div>
        <h3>Rider Registration</h3>
        Name: <input onChange={this.updateUsername} defaultValue={this.state.username}></input>
        <button onClick={this.registerRider}>Register</button>
      </div>
    </div>);
  }
}

export default RegistrationPage;

