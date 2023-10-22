import React from 'react'
import './style.scss'
import {
  Header, Footer, HeroSection
} from '../../components/index'

function HomePage() {
  return (
    <div>
      <div className='bg-night-dark h-[2000px]'>
        <HeroSection />
      </div>
    </div>
  )
}

export default HomePage
