import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.jsx';
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
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.page === 'login'
          ? <Navbar />
          : this.state.page === 'registration'
            ? <RegistrationPage />
            : this.state.page === 'driver'
              ? <Driver />
              : <RiderPage />
       }
      </div>
    )
  }

}
ReactDOM.render(<App />, document.getElementById('app'));
