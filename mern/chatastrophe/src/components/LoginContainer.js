import React, { useState } from 'react';

function LoginContainer()  {
	const [state, setState] = useState('Hello from state')

	function hendlerState(event) {
		setState('I am defferent now :-)')
	}
	
	return (
  	<div id="LoginContainer" className="inner-container">

  		<div id="Header">
  			<img src="/assets/icon.png" alt="logo" />
  			<h1 onClick={ hendlerState }>{state}</h1>
  		</div>
  		<form>
  			<p>Sign in or sign up by entering your email and password.</p>
  			<input type="text" placeholder="Your email" />
  			<input type="password" placeholder="your password" />
  			<button className="red light" type="submit" >
  				Login
  			</button>
  		</form>
  	</div>
  );

};

export default LoginContainer;