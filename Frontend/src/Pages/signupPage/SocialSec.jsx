import React from 'react'
import {google, facebook, gmail} from '../../assets/index'


function SocialSec() {
  return (
    <div className='flex justify-center items-center mb-6 my-4'>
          <img src={google} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
          <img src={facebook} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
          <img src={gmail} alt="google" className='w-[35px] h-[35px] mx-3 cursor-pointer' />
    </div>
  )
}

export default SocialSec
