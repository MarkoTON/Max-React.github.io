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
    otherState: 'Some other value'
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

  nameChangedhandler = (e) => {
    this.setState({
      persons: [
        {name: 'newName', age: 23},
        {name: 'Milos', age: 25},
        {name: e.target.value, age: 31}
      ]
    })
  }

  render() { 
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maksimilijan')}>Switch Name</button>
        <button onClick={() => this.switchNameHandler('Metallica')}>Switch Name 2</button>

        {/* Bacace gresku jer nije dinamicki izmenljivo. Nije bajdovano. */}
        {/* <Person 
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
        </Person> */}

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          nameChangedhandler={this.nameChangedhandler}
        />
      </div>
    );
  }
}

export default App;

// export default app;
// const app = (props) => {

//   const [personState, setPersonsState] = useState({
//     persons: [
//       {name: 'Marko', age: 23},
//       {name: 'Milos', age: 25},
//       {name: 'Jovana', age: 31}
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value')
  

    
//   const switchNameHandler = (e) => {
//     console.log(e)
//     setPersonsState({
//       persons: [
//         {name: 'John', age: 23},
//         {name: 'Milos', age: 25},
//         {name: 'Jovana', age: 31}
//       ]
//     })
//   }

// switchNameHandler = (e) => {
//   console.log(e)
//   setPersonsState({
//     persons: [
//       {name: 'John', age: 23},
//       {name: 'Milos', age: 25},
//       {name: 'Jovana', age: 31}
//     ]
//   })
// }

//   // render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}><i>My hobbies; Racing</i></Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       </div>
//     );
//   // }
// }