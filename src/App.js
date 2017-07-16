import React, { Component } from 'react';
import './app.min.css';

class App extends Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {inputs: [], text: '', lag: false}
  }
  handleKeyDown(e) {
    if (e.key === 'Backspace') {
      this.setState((prevState) => ({text: prevState.text.slice(0, -1)}))
    }
  }
  handleKeyPress(e) {
      if (this.state.lag) {
        this.setState((prevState) => ({text: prevState.text + this.state.inputs.pop(), lag: false}))
      }
      this.state.inputs.push(e.key);
      var keyRead = (Math.floor(Math.random() * 6));
      if (keyRead) {
        this.setState((prevState) => ({text: prevState.text + this.state.inputs.pop()}))
      }
      else {
        this.setState({lag: true})
      }
  }
  render() {
    return (
      <div className="App">
        <h1>i hate my keyboard</h1>
        <p> a half hour project by Christina Zhang </p>
        <h2>your input:</h2>
        <input type="text" onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress}></input>
        <h2>how my keyboard outputs it:</h2>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
