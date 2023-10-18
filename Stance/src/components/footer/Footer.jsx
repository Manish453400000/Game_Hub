import React from 'react'
import './style.scss'
import { facebook, gmail } from '../../assets'
const Footer = () => {
  return (
    <div className=' '>
      
      <div className='footer py-3 h-full bg-black flex flex-col items-center text-white'>
        <div className="divider"></div>
        <div className="links text-[14px]">
          <ul className=' text-center '>
            <li className='link'>Contact us</li>
            <li className='py-1 link'>About us</li>
            <li className='link'>Policy</li>
          </ul>
        </div>
        <div className="social-icon">
          <i class='bx px-2 bxl-facebook-circle'></i>
          <i class='bx px-2 bxl-twitter' ></i>
          <i class='bx px-2 bxl-linkedin-square' ></i>
          <i class='bx px-2 bxl-instagram' ></i>
        </div>
      <p className=' text-[14px] sm:text-[16px] copyright '>&copy;Stance</p>
      </div>
    </div>
  )
}

export default Footer
