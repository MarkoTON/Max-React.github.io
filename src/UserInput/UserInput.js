import React from 'react'

const userInput = (props) => {
  const {inputChangeHandler,currentValue} = props
  const style = {
    border: '2px solid red'
  }
  return (
    <div>
      <input 
        style={style}
        type="text" 
        onChange={inputChangeHandler} 
        value={currentValue} />
    </div>
  )
}

export default userInput
