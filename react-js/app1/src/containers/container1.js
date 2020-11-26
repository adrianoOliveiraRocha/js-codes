import React, { Component } from 'react';

class Container1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stateprop1: "Our initial state"
    }
    
  }
  //wrong way
  changeState() {
    this.setState({stateprop1: "New state"})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>Button</button>
        <p>{this.props.nickname}</p>
        <p>State: {this.state.stateprop1}</p>

      </div>
    );
  }
}

export default Container1;