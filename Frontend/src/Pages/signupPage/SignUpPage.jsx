import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'

//COSTOM HOOKS

//COMPONENTS
import Button from '../../components/button/Button'
import Input from './Input'
import SocialSec from './SocialSec'

//STYLESHEET
import './style.scss'
import '../../sass/main.scss'

function SignUpPage() {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const navigationHandler = (location) => { 
      navigate(location) 
  }

  const signupHandler = () => {
    const option = {
      username: "manish88",
      email: "manish99@gmail.com",
      password: "manish001"
    }
    console.log(saveUserData(option));
  }

  return (
    <div>
      <div className='
    flex justify-center items-center h-screen w-[100vw] bg-black
    '>
      <div className='bg-white w-[75%] sm:px-8 sm:w-[70%]  lg:w-[65%] xl:w-[30%] max-w-[25rem] min-w-[20rem] rounded-md px-4 pt-5 '>
        <h3 className=' text-center font-normal text-[18px] sm:text-[20px] font-poppins mb-5 current-page '>Sing Up/ <span className='text-black'>Login</span></h3>
        <Input name={'Username'} placeholder={'Enter your Username'} />
        <Input name={'Email'} placeholder={'Enter your Email'} />
        <Input name={'Password'} placeholder={'Enter the Password'} />
        <Input name={'Confirm Password'} placeholder={'Confirm the Password'} />
        <div className='flex justify-center items-center mb-6 mt-4'
        
        >
        <Button 
        name={'Sign Up'}
        />

        </div>
        <hr className=' bg-gray-400 h-[1px] w-[80%] m-auto ' />
        <SocialSec />
        <p className=' text-center text-[13px] sm:text-[14px] text-gray-500 cursor-pointer '
        onClick={() => navigationHandler('/login')}
        >I have an existing account</p>
        <hr className=' bg-gray-800 h-[1px] w-[100px] m-auto mb-2 '  />
      </div>
    </div>
    </div>
  )
}

export default SignUpPage
