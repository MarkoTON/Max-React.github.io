import React, { Component } from 'react';
import Validations from './Validation/Validation'
import Char from './Char/Char.js'
import './App.css';

class App extends Component {
  state = {
    userInput: 'Metallica'
  }

  inputChangeHandler = (event) => {
    // console.log(this.state.userInput)
    this.setState({userInput: event.target.value});
    console.log(this.state.userInput)
  }

  deleteChartHandler = (index) => {
    const text = this.state.userInput.split('');
    console.log(text); // Dobijas array of strings
    text.splice(index,1);
    const updateText = text.join('');
    // Posto ga je ponovo spojio i setovao, ponovo se sve ucitava
    // I sada su druga slova na drugom index-u
    this.setState({userInput:updateText})
  }

  render() { 
    let charList = this.state.userInput.split('').map((ch,index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteChartHandler(index)} />;
    });
    return (
      <div className="App">
        Test 2
        <hr/>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validations inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
