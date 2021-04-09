import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  const {userName} = props;
  return (
    <div className="UserOutput">
      <p>Username: {userName}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis.</p>
    </div>
  )
}

export default userOutput
