import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Super Marko'
  }

  inputChangeHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() { 
    return (
      <div className="App">
        <ol>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, ut odit.</li>
          <li>Consequatur itaque necessitatibus ducimus dolor expedita nisi numquam neque repellat iste.</li>
          <li>Iure, fugit fugiat ipsum debitis dolorum quo quas nobis sequi amet!</li>
          <li>Laudantium, obcaecati corporis. Consequuntur deleniti officiis necessitatibus accusantium exercitationem. Adipisci, ipsam.</li>
          <li>In minima recusandae nisi, labore consequatur voluptas quisquam cumque nulla iusto!</li>
          <li>At ipsum placeat eveniet, vero voluptatum voluptates adipisci laudantium a consequatur?</li>
          <li>Dicta enim rerum similique! Quas odio sequi, quaerat nobis cupiditate animi.</li>
          <li>Odit enim error laborum sequi iure asperiores obcaecati totam atque. Explicabo!</li>
          <li>Alias esse blanditiis qui officia beatae, corrupti eaque eius ipsa modi!</li>
          <li>Officia animi porro itaque sapiente sint, quos reiciendis in dicta laboriosam.</li>
        </ol>

        <UserInput currentValue={this.state.username} inputChangeHandler={this.inputChangeHandler} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Marko" />
      </div>
    );
  }
}

export default App;
