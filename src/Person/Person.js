import React from 'react';
import './Person.css'

const person = (props) => {
  const {name,age,click,nameChangedhandler} = props;
  return (
    <div className="Person">
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      <div>{props.children}</div>
      <input onChange={nameChangedhandler} type="text" value={name} />
    </div>
  )
};

export default person;