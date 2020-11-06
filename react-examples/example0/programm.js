'use strict';

const container = document.querySelector('#root');
ReactDOM.render(
  React.createElement("h1", null, 
    "Click is this button: ",
    React.createElement(MyButton),
    React.createElement(MyButton1)),
  container
);