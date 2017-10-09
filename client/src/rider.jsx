import React from 'react';
import RideList from './RideList.jsx';
import $ from 'jquery'
import Calendar from './Calendar.jsx';


class RiderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.rider,
      time: 'Time',
      pickup: 'Pickup Location',
      destination: 'Destination',
      date: 'Date',
      rides: []
    }

    this.setTime = this.setTime.bind(this);
    this.setDestination = this.setDestination.bind(this);
    this.setHome = this.setHome.bind(this);
    this.findRides = this.findRides.bind(this);
    this.setDate = this.setDate.bind(this);
    this.bookRide = this.bookRide.bind(this);
  }

  bookRide(event) {
    console.log(event.target);
    var rideIndex = event.target.innerHTML.split(':')[0] - 1;
    console.log(rideIndex);
    $.ajax({
      method: 'POST',
      url: '/rider',
      contentType: 'application/json',
      data: JSON.stringify({rider: this.state.name, ride: this.state.rides[rideIndex]}),
      success: (data) => {
        console.log(data);
        alert(`Your ride with ${this.state.rides[rideIndex].username} has been booked!`)
      },
      error: (err) => {
        console.log('Error', err);
      }
    })
  }

  setDate(selection) {
    var newDate = JSON.stringify(selection).slice(1,11);
    this.setState({
      date: newDate
    });
  }

  findRides(event) {
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/rider',
      contentType: 'application/json',
      data: this.state,
      success: (data) => {
        console.log('rides:', JSON.stringify(data));
        this.setState({rides: data});
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  setTime(event) {
    var time = event.target.innerHTML;
    this.setState({time: time});
  }

  setHome(event) {
    var start = event.target.innerHTML;
    this.setState({pickup: start});
  }

  setDestination(event) {
    var dest = event.target.innerHTML;
    this.setState({destination: dest});
  }

  render() {
    return (
      <div>
        <h3 className="header">{`Welcome ${this.state.name}!`}</h3>
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <form>
            <span className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdown-time" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.time}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdown-time">
                <button onClick={this.setTime} className="dropdown-item btn-outline-light" type="button">7:00</button>
                <button onClick={this.setTime} className="dropdown-item btn-outline-light" type="button">7:30</button>
                <button onClick={this.setTime} className="dropdown-item btn-outline-light" type="button">8:00</button>
                <button onClick={this.setTime} className="dropdown-item btn-outline-light" type="button">8:30</button>
              </div>
            </span>

            <span className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdown-home" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.pickup}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdown-home">
                <button onClick={this.setHome} className="dropdown-item btn-outline-light" type="button">Oakland</button>
                <button onClick={this.setHome} className="dropdown-item btn-outline-light" type="button">San Jose</button>
              </div>
            </span>

            <span className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdown-destination" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.destination}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdown-destination">
                <button onClick={this.setDestination} className="dropdown-item btn-outline-light" type="button">Downtown</button>
                <button onClick={this.setDestination} className="dropdown-item btn-outline-light" type="button">Hack Reactor</button>
              </div>
            </span>

            <button className="btn btn-outline-light" type="button">
              {this.state.date}
            </button>

            <button onClick={this.findRides} className="btn btn-outline-light">Search</button>
          </form>
        </nav>
        <Calendar setDate={this.setDate}/>
        <RideList rides={this.state.rides} bookRide={this.bookRide}/>
      </div>
    )
  }
}
export default RiderPage;
