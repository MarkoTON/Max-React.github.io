import React from 'react';
import Radium from 'radium';
import './Person.css'

// Radium is not working for @media, need to check what is issue

const person = (props) => {
  // const {name,age,click,change} = props;
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <div>{props.children}</div>
      <input onChange={props.change} type="text" value={props.name} />
    </div>
  )
};

// export default person;
export default Radium(person);