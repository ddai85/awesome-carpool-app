import React from 'react';
import $ from 'jquery';
import Calendar from './Calendar.jsx';
import Map from './Map.jsx';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';


class DriverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      departureDate: 'Date',
      departureTime: '',
      pickup: '',
      destination: '',
      route: 0
    };
    this.setDate = this.setDate.bind(this);
    // update driver time is a for a future integration
    // this.updateDriverTime = this.updateDriverTime.bind(this);
    this.scheduleRide = this.scheduleRide.bind(this);
    this.setRoute = this.setRoute.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let formattedTime = this.props.departureTime.slice(1, 5); 
    this.setState({
      username: this.props.username,
      departureTime: formattedTime,
      pickup: this.props.home,
      destination: this.props.work
    });
    console.log('component did mount', this.props.username);
    this.props.getRideSchedule(this.props.username);
    this.setRoute();
  }

  setDate(selection) {
    var newDate = JSON.stringify(selection).slice(1, 11);
    this.setState({
      departureDate: newDate
    });
  }

  scheduleRide(event) {
    event.preventDefault();
    alert('Schedule confirmed');
    this.props.postRideSchedule(this.props.username, this.state.departureDate);
  }

    // set a numerical route number to correspond to a given pre-rendered route map in lieu of
  // functional map api
  setRoute() {
    console.log('setting route...');
    if (this.props.home === 'Oakland') {
      if (this.props.work === 'Hack Reactor') {
        this.setState({route: 1});
      } else if (this.props.work === 'Downtown') {
        this.setState({route: 2});
      }
    }
    if (this.props.home === 'San Jose') {
      if (this.props.work === 'Hack Reactor') {
        this.setState({route: 3});
      } else if (this.props.work === 'Downtown') {
        this.setState({route: 4});
      }
    }
  }

  render() {
    return (
      <div className="driver-page">
        <h3 className="header">{`Welcome ${this.state.username}!`}</h3>
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <form>
            <button className="btn btn-outline-light" type="button">
              {this.state.departureDate}
            </button>

            <button onClick={this.scheduleRide} className="btn btn-outline-light">Schedule Now</button>
          </form>
        </nav>
        <div className="container-fluid">
          <div className="row">
          <Calendar setDate={this.setDate}/>
          <Map route={this.state.route} />
          </div>
        </div>
        <br />
        <h5>Your next scheduled ride:</h5>
        <div className="departure-date">Date:  {this.props.departureDate + '  ' + this.state.departureTime}</div>
        <div className="pickup">Pickup Location:  {this.state.pickup}</div>
        <div className="destination">Destination:  {this.state.destination}</div>
        <br/ >
        <h5>Your passengers:</h5>
        <div className="rider-list">{this.props.schedule.map((rider, index) => <div key={index}>{rider}</div>)}</div>
        <br/ >
        <br/ >
      </div>
    );
  }
}


export default DriverPage;



//Google Maps background view via API request
//rider list view rendered based on riders signed up
//calendar schedule widget view
//departure time/date => POST request to /driver to INSERT into rides DB

