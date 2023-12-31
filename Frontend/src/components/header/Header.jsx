import React from 'react'
import {useNavigate, useLocation } from 'react-router-dom'
import './style.scss'
import { useState, useEffect } from 'react'
import {logo} from '../../assets/index'
function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false)
    setShowSearch(false)
  }, [location])


  const menuClicked = () => {
    setShowSearch(false)
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }
  const searchClicked = () => {
    setShowMenu(false)
    showSearch ? setShowSearch(false) : setShowSearch(true)
  }

  const navigationHandler = (location) => {
    navigate(location)
    
  }

  return (
    <div className='header'>
      <header className='  flex h-11 text-white bg-blend text-main sm:justify-around justify-between px-2 w-[100%]'>
        <div className="left flex items-center ">
          <div className='flex items-center cursor-pointer '
          onClick={() => navigationHandler('/')}
          >
            <h3 className='logo text-[30px] sm:text-[34px]'><span className='text-logo'>S</span>tance</h3>
          </div>
          <div className='sm:flex hidden items-center user-box px-3 ml-5 rounded-[6px] user-box  cursor-pointer '
          onClick={() => navigationHandler('/login')}
          >
            <span className=' flex items-center'>
            <i className='bx bxs-user-circle '></i>
            </span>
            <h5 className='pl-2 text-[14px]'>Login/ Sign up</h5>
            {/* User Name */}
          </div>
        </div>
        <div className="right flex items-center ">
          <div 
          onClick={searchClicked}
          className='searchbox flex items-center text-[24px] mr-5 hover-effect'>
            <i className='bx bx-search-alt-2 p-2' ></i>
          </div>
          <nav className='sm:block hidden'>
            <ul className='text-white font-gaba flex   ' >
              <li className='text-purpal px-3 py-2 cursor-pointer'
              onClick={() => navigationHandler('/')}
              >Home</li>
              <li className='text-purpal px-3 py-2 cursor-pointer'>New</li>
              <li className='text-purpal px-3 py-2 cursor-pointer'>Support</li>
            </ul>
          </nav>
          <div
          onClick={menuClicked}
          className='text-white hover-effect text-[28px] flex items-center sm:hidden' >
            {
              showMenu ? <i className='bx bx-x text-[29px] '></i> :  <i className='bx bx-menu text-[29px]'></i>
            }
          </div>
        </div>
      </header>
      <div className={`search-box w-[100%] bg-white z-10 flex items-center ${showSearch ? 'block': 'hidden'}`}>
        <input
        name='navSearch' 
      type="text" 
      className='w-[95%] px-3 py-2 search-box'
      placeholder='Enter the game you want'
      />
      <div className='flex items-center'
      onClick={searchClicked}
      >
        <i className='bx bx-x text-[29px]'></i>
      </div>
      </div>
      <div className={`w-[100%] relative z-10 menu bg-black ${showMenu ? 'block': 'hidden'}`}>
        <ul className='text-white font-gaba flex flex-col items-center ' >
              <li className='text-purpal px-3 py-2 cursor-pointer'
              onClick={() => navigationHandler('/')}
              >Home</li>
              <li className='text-purpal px-3 cursor-pointer py-2'>New</li>
              <li className='text-purpal px-3 cursor-pointer py-2'>Support</li>
              <li className='text-purpal px-3 cursor-pointer py-2 flex items-center'
              onClick={() => navigationHandler('/login')}
              >
                <i className='bx bxs-user-circle pr-1 '></i>
                Login</li>
            </ul>
      </div>
    </div>
  )
}

export default Header
