import React from 'react';

// This page is the default rendered page - the links on this page switch the view
// to registration or will take the login information and retrieve the user information

const Login = (props) => (
	<div>
    <div>
      <button 
        type="button"
        id="login"
        className="btn btn-primary"
      > Login
      </button>
    </div>
    <div>Registration</div>
  </div>
)


export default Login;