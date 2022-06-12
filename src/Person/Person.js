import React from 'react';

const person = (props) => {
  const {name,age,click,nameChangedhandler} = props;

  console.log(click);

  return (
    <div>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      {/* Ovde ide ono sto je unutar komponente */}
      <div>{props.children}</div>
      <input onChange={nameChangedhandler} type="text" value={name} />
    </div>
  )
};

export default person;