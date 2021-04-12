import React from 'react';
import './Person.css'

const person = (props) => {
  // const {name,age,click,change} = props;
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <div>{props.children}</div>
      <input onChange={props.change} type="text" value={props.name} />
    </div>
  )
};

export default person;