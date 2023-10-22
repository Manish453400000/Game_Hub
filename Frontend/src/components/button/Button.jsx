import React from 'react'
import './style.scss'
function Button({name}) {
  return (
    <button className='btn m-auto'>
      {name}
    </button>
  )
}

export default Button
