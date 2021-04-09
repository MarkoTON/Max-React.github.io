import React from 'react';

const person = (props) => {
  const {name,age,click} = props;
  return (
    <div>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      <div>{props.children}</div>
    </div>
  )
};

export default person;