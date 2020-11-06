import React from 'react';

function LoginForm(props) {
  console.log(props);
  return (
    <form action="/action_page.php">
     <div className="form-group">
       <label htmlFor="email">Email address:</label>
       <input type="email" className="form-control" placeholder="Enter email" id="email" />
     </div>
     <div className="form-group">
       <label htmlFor="pwd">Password:</label>
       <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
     </div>
     <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default LoginForm;
