import React from 'react';

// This page is the default rendered page - the links on this page switch the view
// to registration or will take the login information and retrieve the user information

const Navbar = (props) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-transparent">
      <div className="navbar-brand" id="title">Awesome Carpool App</div>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="username" aria-label="username"></input>
        <input className="form-control mr-sm-2" type="text" placeholder="password" aria-label="username"></input>
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Login</button>
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Register</button>
      </form>
    </nav>
  </div>
)


export default Navbar;