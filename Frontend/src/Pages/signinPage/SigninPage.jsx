import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.scss'
import '../../sass/main.scss'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import {google, facebook, gmail} from '../../assets/index'



const SignInPage = () => {

  const navigate = useNavigate();


  const navigationHandler = (location) => {
    
      navigate(location)
    
  }

  return (
    <div className='
    flex justify-center items-center h-screen w-[100vw] bg-black
    '>
      <div className='bg-white w-[75%] sm:px-8 sm:w-[70%]  lg:w-[65%] xl:w-[30%] max-w-[25rem] min-w-[20rem] rounded-md px-4 pt-5 '>
        <h3 className=' text-center font-normal text-[18px] sm:text-[20px] font-poppins mb-5 current-page '>Login/ <span className='text-black'>Sing Up</span></h3>
        <h4 className=' font-normal text-[14px] sm:text-[16px] font-poppins'>Username</h4>
       <Input placeholder={'Enter the username'} />
        <h4 className=' font-normal text-[14px] sm:text-[16px] font-poppins'>Password</h4>
       <Input placeholder={'Enter the password '} />
        <div className='flex justify-center items-center mb-6 mt-4'>
        <Button name={'Login'}/>
        </div>
        <hr className=' bg-gray-400 h-[1px] w-[80%] m-auto ' />
        <div className='flex justify-center items-center mb-6 my-4'>
          <img src={google} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
          <img src={facebook} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
          <img src={gmail} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
        </div>
        <p className=' text-center text-[13px] sm:text-[14px] text-gray-400 cursor-pointer '
        onClick={() => navigationHandler('/signup')}
        >Create a new account</p>
        <hr className=' bg-gray-800 h-[1px] w-[100px] m-auto mb-2 '  />
      </div>
    </div>
  )
}

export default SignInPage
