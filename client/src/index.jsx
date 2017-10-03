import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import RiderPage from './rider.jsx';
import DriverPage from './DriverPage.jsx';

class App extends React.Component {
  constructor() {
    super();
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

  render() {
    return (
      <RiderPage />
      // <div>
      //   {this.state.page === 'login'
      //     ? <Login />
      //     : this.state.page === 'registration'
      //       ? <Registration />
      //       : this.state.page === 'driver'
      //         ? <Driver />
      //         : <Rider />
      //  }
      // </div>
    )
  }

}
ReactDOM.render(<App />, document.getElementById('app'));
