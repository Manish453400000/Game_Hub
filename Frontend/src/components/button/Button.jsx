import React from 'react'
import './style.scss'
function Button({name, onClick}) {

  const buttonClicked = () => {
    onClick();
    console.log('click');
  }

  return (
    <button className='btn m-auto' onClick={buttonClicked}>
      {name}
    </button>
  )
}

export default Button
