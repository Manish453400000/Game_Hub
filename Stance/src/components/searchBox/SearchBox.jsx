import React from 'react'
import './style.scss'
const SearchBox = () => {
  return (
    <div className='w-[100%] flex flex-col items-center'>
      <div className="hero-content text-white">
        <div className="title text-center text-[38px] sm:text-[52px] xl:text-[68px] "><span className='h-text'>W</span>ellcome</div>
        <div className="subtitle text-[16px] sm:text-[20px] xl:text-[22px] mb-6 ">This is a GameStation Project made by Manish. Explore Now</div>
      </div>
      <div className="bg-white w-[80%] sm:w-[60%] xl:w-[50%] flex items-center rounded-3xl ">
        <input type="text" placeholder='Search the game you wanna play ' className=' px-4  w-[80%] text-[16px] sm:text-[18px] xl:text-[22px] search-input border-none outline-none ' />
        <button className=' text-[16px] sm:text-[18px] xl:text-[22px] search-button w-[21%] px-[7px] py-[9px]  '>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBox
