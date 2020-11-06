import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import LoginForm from './components/LoginForm';

function App() {
  const data = [{ email: 'adriano.qwe32@gmail.com', pwd: '453231'}];

  return (
    <div className="container">
      <LoginForm data={data}/>
    </div>
  );
}

export default App;
