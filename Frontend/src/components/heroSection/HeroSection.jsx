import React from 'react'
import {banner1} from '../../assets/index'
import './style.scss'
import SearchBox from '../searchBox/SearchBox'
const HeroSection = () => {
  return (
    <div>
      <div className=' herobanner bg-night-light  '>
        <div className='banner'>
          <img src={banner1} alt=""
        className=''
        />
        </div>
        <div className="opacity-layer"></div>
        <div className="hero-container w-[100%]">
          <div className="search-com">
          <SearchBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
