import React from 'react';
import AlertDismissible from './components/AlertDismissible'
import FlatButton from './components/FlatButton'
import Test from './components/Test'

function App() {
  return (
    <div>
      <FlatButton />
      <hr />
      <AlertDismissible />
      <Test />
    </div>
  );
}

export default App;

// https://react-bootstrap.github.io/layout/grid/