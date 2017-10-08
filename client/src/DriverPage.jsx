import React from 'react';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';


class DriverPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
      username: '',
      departureTime: '',
      departureDate: ''
		};
		this.updateDriverDate = this.updateDriverDate.bind(this);
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

	updateDriverDate(e) {
    this.setState({
      departureDate: e.target.value
    });
  }

  //update driver time on the driver page will be a future integration
  // updateDriverTime(e) {
  //   this.setState({
  //     departureTime: e.target.value
  //   });
  // }

	scheduleRide(event) {
    //add this.props.departureTime for future integration
    event.preventDefault();
    alert('Schedule confirmed');
    this.props.postRideSchedule(this.props.username, this.state.departureDate);
  }

	render() {
		return(
		  <div className="driver-page">
        <form onSubmit={this.scheduleRide}>
        	<label>
          Date:
          <input type="text" value={this.state.value} placeholder={'yyyy-mm-dd'} onChange={this.updateDriverDate} />
          </label>
          <label>
          Time:
          <input type="text" value={this.state.departureTime} onChange={this.updateDriverTime} />
          </label>
        	<input type="submit" value="Submit" />
      	</form>
        <br />
        <h5>Your next scheduled ride:</h5>
        <div className="departure-date">{this.props.departureDate}</div>
        <br/ >
        <h5>Your passengers:</h5>
        <div className="rider-list">{this.props.schedule.map((rider, index) => <div key={index}>{rider}</div>)}</div>
		  </div>
    )
  }
};

export default DriverPage;

//Google Maps background view via API request
//rider list view rendered based on riders signed up
//calendar schedule widget view
//departure time/date => POST request to /driver to INSERT into rides DB
