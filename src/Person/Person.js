import React from 'react';

const person = (props) => {
  const {name,age,click,nameChangedhandler,switchNameHandler} = props;

  console.log(click);

  return (
    <div>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>
      {/* Ovde ide ono sto je unutar komponente */}
      <div>{props.children}</div>
      {/* <button onClick={() => this.switchNameHandler('Sepultura')}>Change Name - switchNameHandler</button> */}
      <button onClick={ () => switchNameHandler('Sepultura')}>Change Name to Sepultura</button>
      <input onChange={nameChangedhandler} type="text" value={name} />
    </div>
  )
};

export default person;