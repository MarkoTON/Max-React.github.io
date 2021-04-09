import React from 'react';

const person = (props) => {
  const {name,age,click,nameChangedhandler} = props;
  return (
    <div>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      <div>{props.children}</div>
      <input onChange={nameChangedhandler} type="text" value={name} />
    </div>
  )
};

export default person;