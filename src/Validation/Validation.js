import React from 'react'

export default function validation(props) {
  let validationMessage = 'Text long enough';

  if(props.inputLength <= 5){
    validationMessage = 'Text too short';
  }

  return (
    <div>
      <p>{props.inputLength}</p>
      {/* {
        props.inputLength > 5 ? 
        <p>Text long enough</p> :
        <p>Text too short</p>
      } */}

      <p>{validationMessage}</p>

    </div>
  );
}
