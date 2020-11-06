class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPropertie: 'Click-me'
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      myPropertie: 'I am the button 0'
    });
  }

  render() {
    return React.createElement('button',
      {
        onClick: this.changeState
      },
      this.state.myPropertie);
  }

}

class MyButton1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPropertie: 'Click-me'
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      myPropertie: 'I am the button 1'
    });
  }

  render() {
    return React.createElement('button',
      {
        onClick: this.changeState
      },
      this.state.myPropertie);
  }

}
