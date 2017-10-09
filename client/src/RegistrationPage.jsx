import React from 'react';

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

      username: 'Name',
      car: 'Car Make/Model',
      home: 'Pickup Location',
      work: 'Destination',
      seats: 'Seats Available',
      license: 'License Plate Number',
      departureTime: '08:00:00',
      displayTime: 'Time'
    };

    //bind all functions to this context
    this.updateUsername = this.updateUsername.bind(this);
    this.updateCar = this.updateCar.bind(this);
    this.updateHome = this.updateHome.bind(this);
    this.updateWork = this.updateWork.bind(this);
    this.updateSeats = this.updateSeats.bind(this);
    this.updateLicense = this.updateLicense.bind(this);
    // this.updateDepartureTime = this.updateDepartureTime.bind(this);
    this.updateDisplayTime = this.updateDisplayTime.bind(this);
    this.registerDriver = this.registerDriver.bind(this);
    this.registerRider = this.registerRider.bind(this);
  }


  componentDidMount(){
    this.setState({
      username: this.props.username
    });
  }

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
      home: e.target.innerHTML
    });
  }

  updateWork(e) {
    this.setState({
      work: e.target.innerHTML
    });
  }

  updateSeats(e) {
    this.setState({
      seats: e.target.innerHTML
    });
  }

  updateDisplayTime(e) {
    this.setState({
      displayTime: e.target.innerHTML
    });
  }

  updateLicense(e) {
    this.setState({
      license: e.target.value
    });
  }

  // add more times in future development
  // updateDepartureTime(e) {
  //   this.setState({
  //     departureTime: e.target.value
  //   });
  // }

  registerDriver() {
    this.props.saveDriver(this.state.username, this.state.car, this.state.license, this.state.seats, this.state.home, this.state.work, this.state.departureTime);
    this.props.setUserPage('driver');
  }

  registerRider() {
    this.props.saveRider(this.state.username);
    this.props.setUserPage('rider');
  }
  
  render () {
    return (<div>
        <h3 className="header">Driver Registration</h3>
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <form>
            <span className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdown-time" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.username}
              </button>
            </span>

            <span className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdown-home" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.home}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdown-home">
                <button onClick={this.updateHome} className="dropdown-item btn-outline-light" type="button">Oakland</button>
                <button onClick={this.updateHome} className="dropdown-item btn-outline-light" type="button">San Jose</button>
              </div>
            </span>

            <span className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdown-destination" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.work}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdown-destination">
                <button onClick={this.updateWork} className="dropdown-item btn-outline-light" type="button">Downtown</button>
                <button onClick={this.updateWork} className="dropdown-item btn-outline-light" type="button">Hack Reactor</button>
              </div>
            </span>

            <span className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" id="seats" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.seats}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdown-home">
                <button onClick={this.updateSeats} className="dropdown-item btn-outline-light" type="button">1</button>
                <button onClick={this.updateSeats} className="dropdown-item btn-outline-light" type="button">2</button>
                <button onClick={this.updateSeats} className="dropdown-item btn-outline-light" type="button">3</button>
                <button onClick={this.updateSeats} className="dropdown-item btn-outline-light" type="button">4</button>
                <button onClick={this.updateSeats} className="dropdown-item btn-outline-light" type="button">5</button>
                <button onClick={this.updateSeats} className="dropdown-item btn-outline-light" type="button">6</button>
              </div>
            </span>
            <span className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" id="time" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.displayTime}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdown-home">
                <button onClick={this.updateDisplayTime} className="dropdown-item btn-outline-light" type="button">8:00 AM</button>
              </div>
            </span>
          </form>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <form onClick={this.submit} className="form-inline">
            <input onChange={this.updateCar} className="form-control mr-sm-2" type="text" placeholder="Car Make/Model" aria-label="car" name="car"></input>
            <input onChange={this.updateLicense} className="form-control mr-sm-2" type="text" placeholder="License Plate Number" aria-label="license" name="license"></input>
            <button onClick={this.registerDriver} className="btn btn-outline-light">Register Driver</button>
          </form>
        </nav>
        <h3 className="header">Rider Registration</h3>
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <form onClick={this.submit} className="form-inline">
          <span className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdown-time" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.username}
            </button>
          </span>
          <button onClick={this.registerRider} className="btn btn-outline-light">Register Rider</button>
          </form>
        </nav>
    </div>);
  }
}

export default RegistrationPage;

