import React from 'react';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';


class DriverPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			departureDate: '',
      departureTime: '8:00 AM'
		};
		this.updateDriverDate = this.updateDriverDate.bind(this);
		this.updateDriverTime = this.updateDriverTime.bind(this);
		this.scheduleRide = this.scheduleRide.bind(this);
	}

	updateDriverDate(e) {
    this.setState({
      departureDate: e.target.value
    });
  }

  updateDriverTime(e) {
    this.setState({
      departureTime: e.target.value
    });
  }

	scheduleRide() {
    this.props.postRideSchedule(this.props.driver, this.state.departureDate, this.state.departureTime);
  }

	render() {
		return(
		  <div className="driver-page">
        <form onSubmit={this.scheduleRide}>
        	<label>
          Date:
          <input type="text" value={this.state.value} onChange={this.updateDriverDate} />
          </label>
          <label>
          Time:
          <input type="text" value={this.state.value} onChange={this.updateDriverTime} />
          </label>
        	<input type="submit" value="Submit" />
      	</form>
		  </div>
    )
  }
};

export default DriverPage;

//Google Maps background view via API request
//rider list view rendered based on riders signed up
//calendar schedule widget view
//departure time/date => POST request to /driver to INSERT into rides DB
