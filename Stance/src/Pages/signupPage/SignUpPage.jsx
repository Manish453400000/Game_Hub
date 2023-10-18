import React from 'react'
import './style.scss'
import '../../sass/main.scss'
import Button from '../../components/button/Button'
import {google, facebook, gmail} from '../../assets/index'

function SignUpPage() {
  return (
    <div>
      <div className='
    flex justify-center items-center w-[100vw] h-[90vh] bg-black
    '>
      <div className='bg-white w-[75%] sm:px-8 sm:w-[70%]  lg:w-[65%] xl:w-[30%] max-w-[25rem] min-w-[20rem] rounded-md px-4 pt-5 '>
        <h3 className=' text-center font-normal text-[18px] sm:text-[20px] font-poppins mb-5  '>Login/ <span className='primary-text'>Sing Up</span></h3>
        <h4 className=' font-normal text-[14px] sm:text-[16px] font-poppins'>Username</h4>
        <input name='userName' type="text" className='w-[100%] px-3 py-2 input ' placeholder='Enter your Username '
        />
        <h4 className=' font-normal text-[14px] sm:text-[16px] font-poppins'>Email</h4>
        <input name='userName' type="text" className='w-[100%] px-3 py-2 input ' placeholder='Enter your Email '
        />
        <h4 className=' font-normal text-[14px] sm:text-[16px] font-poppins'>Password</h4>
        <input name='password' type="text" className='w-[100%] px-3 py-2 input ' placeholder='Enter the Password ' />
        <h4 className=' font-normal text-[14px] sm:text-[16px] font-poppins'>Confirm Password</h4>
        <input name='password' type="text" className='w-[100%] px-3 py-2 input ' placeholder='Confirm the Password ' />
        <div className='flex justify-center items-center mb-6 mt-4'>
        <Button name={'Sign Up'}/>

        </div>
        <hr className=' bg-gray-400 h-[1px] w-[80%] m-auto ' />
        <div className='flex justify-center items-center mb-6 my-4'>
          <img src={google} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
          <img src={facebook} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
          <img src={gmail} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
        </div>
        <p className=' text-center text-[14px] sm:text-[16px] text-gray-500 cursor-pointer '>Login</p>
        <hr className=' bg-gray-800 h-[1px] w-[100px] m-auto mb-2 '  />
      </div>
    </div>
    </div>
  )
}

export default SignUpPage
