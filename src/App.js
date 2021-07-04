import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.changeCharacters = this.changeCharacters.bind(this);
  }

  changeCharacters = (event) => {
    this.setState({
      counter: event.target.value.length,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="container">
        <textarea
          rows="3"
          onChange={this.changeCharacters}
          ref={this.textarea}
        ></textarea>
        <div className="counter">{counter}</div>
      </div>
    );
  }
}

export default App;
