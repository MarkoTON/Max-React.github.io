import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: 'Marko', age: 23},
      {name: 'Milos', age: 25},
      {name: 'Jovana', age: 31}
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log(e)
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: 'Milos', age: 25},
        {name: 'Jovana', age: 31}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Marko', age: 23},
        {name: 'Milos', age: 25},
        {name: event.target.value, age: 31}
      ],
      otherState: 'Some other value',
      showPersons: false
    })
  }

  togglePersonsHandler = (e) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    // this.setState({
    //   persons: [
    //     {name: 'Marko', age: 23},
    //     {name: 'Milos', age: 25},
    //     {name: 'Jovana', age: 31}
    //   ],
    //   otherState: 'Some other value',
    //   showPersons: !this.state.showPersons
    // })
  }

  render() { 
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Person 
            click={this.switchNameHandler.bind(this,'Mirjana')} 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
          />
          <Person 
            click={this.switchNameHandler.bind(this,'Miljana')} 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
          >
            <i>My hobbies; Racing</i>
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
          />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Maksimilijan')}>Switch Name</button>
        <button style={style} onClick={() => this.switchNameHandler('Metallica')}>Switch Name 2</button>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
        
        {persons}
      </div>
    );
  }
}

export default App;
