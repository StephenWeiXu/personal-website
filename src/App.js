import React, { Component } from 'react';
import './App.css';


class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isButtonON: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState( prevState => ({
      isButtonON: !prevState.isButtonON
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>I am {this.state.isButtonON ? 'ON' : 'OFF'}</button>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>Now is { this.state.date.toLocaleTimeString() }.</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <SwitchButton />
      </div>
    );
  }
}


export default App;
