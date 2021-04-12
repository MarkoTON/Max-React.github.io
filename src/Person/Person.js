import React from 'react';
import styled from 'styled-components';
// import './Person.css'

// Radium is not working for @media, need to check what is issue

const StyleDiv = styled.div`
  width: 60%;
  margin: 1rem auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px){
    width 450px;
  }
`;

const person = (props) => {
  // const {name,age,click,change} = props;
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }
  return (
    <StyleDiv>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <div>{props.children}</div>
      <input onChange={props.change} type="text" value={props.name} />
    </StyleDiv>
  )
};

export default person;