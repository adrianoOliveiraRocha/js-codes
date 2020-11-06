import React, { Component } from 'react';
import './../css/Sum.css';

export default class Sum extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      value1: '',
      value2: '',
      result: 0
    };

    this.sumMethod = this.sumMethod.bind(this)
  }

  sumMethod() {
    let runned = parseFloat(this.state.value1) + parseFloat(this.state.value2)
    this.setState({
      result: runned
    })       
  }  

  result() {
    if (this.state.result === 0) {
      return "Waiting..."
    } else {
      if (isNaN(this.state.result)) {
        return 0
      } else {
        return this.state.result
      }      
    }
  }

  render() {
    return (
      <div>
        <div className="sum">
          <h3>Sum</h3>
          <input type="text" onChange={(event) => {
            this.setState({ value1: event.target.value });          
          }}/>
          <input type="text" onChange={(event) => {
            this.setState({ value2: event.target.value });
          }} />
          <br />
          <input type="button" value="Sum Now" 
          onClick={this.sumMethod}/>
          
        </div>
        <div className="sum">
          result: {this.result()}
        </div>
      </div>
      
    )
  }
};
