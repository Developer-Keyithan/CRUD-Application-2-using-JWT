import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button style={props.style}>{props.textContent}</button>
    </div>
  )
}

export default Button