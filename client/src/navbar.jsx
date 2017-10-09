import React from 'react';

// This page is the default rendered page - the links on this page switch the view
// to registration or will take the login information and retrieve the user information

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.getName = props.getName;
    this.handleUpdate = this.handleUpdate.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleUpdate(event) {
    console.log(event.target.value);
    event.target.name === 'username'
      ? this.setState({username: event.target.value})
      : this.setState({password: event.target.value})
  }

  submit(e) {
    e.preventDefault();
    var registration = e.target.name === 'registration';
    this.getName(this.state.username, this.state.password, registration);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <div className="navbar-brand" id="title">Awesome Carpool App</div>
          <form onSubmit={this.submit} className="form-inline">
            <input onChange={this.handleUpdate} value={this.state.username} className="form-control mr-sm-2" type="text" placeholder="username" aria-label="username" name="username"></input>
            <input onChange={this.handleUpdate} value={this.state.password} className="form-control mr-sm-2" type="password" placeholder="password" aria-label="password" name="password"></input>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Login</button>
            <button onClick={this.submit} className="btn btn-outline-light my-2 my-sm-0" type="submit" name="registration">Register</button>
          </form>
        </nav>
      </div>
    )
  }
}


export default Navbar;