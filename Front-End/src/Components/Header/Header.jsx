import React, {useState} from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Hamburger from './Hamburger'
import Menu from './Menu'

const Header = () => {

  


  return (
    <>
      
      
      <header className='py-4 bg-red absolute top-0 left-0 w-full px-4 xl:px-2 z-20'>
        <div className="mx-auto sm:w-full lg:container">
          <div className="row flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="menu pe-4 lg:hidden">
                  <Menu />
                </div>
                <Logo />
              </div>
              <Navbar />
            </div>
            <Hamburger />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
