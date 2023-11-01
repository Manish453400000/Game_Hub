import React from 'react'

function Input({name, placeholder}) {
  return (
    <>
      <h4 className=' font-normal text-[14px] sm:text-[16px] font-poppins'>{name}</h4>
        <input name='userName' type="text" className='w-[100%] outline-none px-3 py-2 input ' placeholder={placeholder}
        />
    </>
  )
}

export default Input
