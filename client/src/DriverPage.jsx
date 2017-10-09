import React from 'react';
import $ from 'jquery';
import Calendar from './Calendar.jsx';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';


class DriverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      departureDate: 'Date',
      departureTime: ''
    };
    this.setDate = this.setDate.bind(this);
    // update driver time is a for a future integration
    // this.updateDriverTime = this.updateDriverTime.bind(this);
    this.scheduleRide = this.scheduleRide.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let formattedTime = this.props.departureTime.slice(1, 5); 
    this.setState({
      username: this.props.username,
      departureTime: formattedTime
    });
    console.log('component did mount', this.props.username);
    this.props.getRideSchedule(this.props.username);
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
        <Calendar setDate={this.setDate}/>
        <br />
        <h5>Your next scheduled ride:</h5>
        <div className="departure-date">Date:  {this.props.departureDate + ' at ' + this.state.departureTime + ' AM'}</div>
        <div className="pickup">Pickup Location:  {this.props.home}</div>
        <div className="destination">Destination:  {this.props.work}</div>
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

