import React from 'react'
import './style.scss'
import {
  Header, Footer, HeroSection
} from '../../components/index'

function HomePage() {
  return (
    <div>
      <Header />
      <div className='bg-night-dark h-[2000px]'>
        <HeroSection />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
