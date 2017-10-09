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
      departureTime: '',
      departureDate: 'Date'
    };
    this.setDate = this.setDate.bind(this);
    // update driver time is a for a future integration
    // this.updateDriverTime = this.updateDriverTime.bind(this);
    this.scheduleRide = this.scheduleRide.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      username: this.props.username,
      departureTime: this.props.departureTime
    });
    console.log('component did mount', this.props.username);
    this.props.getRideSchedule(this.props.username);
  }

  //update driver time on the driver page will be a future integration
  // updateDriverTime(event) {
  //   var time = event.target.innerHTML;
  //   this.setState({departureTime: time});
  // }

  setDate(selection) {
    var newDate = JSON.stringify(selection).slice(1, 11);
    this.setState({
      departureDate: newDate
    });
  }

  scheduleRide(event) {
    //add this.props.departureTime for future integration
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
        <div className="departure-date">Date:  {this.props.departureDate + ' ' + '8:00 AM'}</div>
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

// <form onSubmit={this.scheduleRide}>
//           <label>
//           Date:
//           <input type="text" value={this.state.value} placeholder={'yyyy-mm-dd'} onChange={this.updateDriverDate} />
//           </label>
//           <label>
//           Time:
//           <input type="text" value={this.state.departureTime} onChange={this.updateDriverTime} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>


//Google Maps background view via API request
//rider list view rendered based on riders signed up
//calendar schedule widget view
//departure time/date => POST request to /driver to INSERT into rides DB
