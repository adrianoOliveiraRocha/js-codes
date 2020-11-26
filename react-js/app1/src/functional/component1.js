import React from 'react';

function Component1(props) {

  return (
    <div>
      Component1
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      
    </div>
  );
}

export default Component1;