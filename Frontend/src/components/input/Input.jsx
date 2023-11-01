import React from 'react'
import './style.scss'
function Input({placeholder}) {
  return (
    <div>
      <input name='userName' type="text" className='w-[100%] outline-none px-3 py-2 input ' placeholder={placeholder}
        />
    </div>
  )
}

export default Input
