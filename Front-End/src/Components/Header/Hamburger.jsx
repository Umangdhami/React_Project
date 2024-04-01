import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Button from '../Button/Button'

const Hamburger = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div>
        <div id="drawer-right-example"
          className={`offcanavas-width w-[90%] text-[11px] fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`} // Conditional class to show/hide drawer
          tabIndex="-1" aria-labelledby="drawer-right-label">
          <h5 id="drawer-right-label" className="inline-flex items-center mb-5 text-[24px] font-medium dark:text-gray-400">Your Vart (0)</h5>
          <button type="button" onClick={toggleDrawer} // Toggle the drawer on button click
            aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="w-full relative">
            <h6 className='font-semibold text-[17px]'>Free Shipping <span className='font-normal'>on orders over</span> $300</h6>
            <div className="progress-bar mt-4">
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div className="mt-5 w-full">
              <div className="cart p-4 bg-[#f9f9f9] relative">
                <div className="absolute top-0 right-0 p-4">
                  <button className='text-[18px]'><MdClose/></button>
                </div>
                <div className="w-full flex">
                  <div className="w-1/3 h-[150px] overflow-hidden cursor-pointer">
                    <button className='w-full h-full object-cover object-center'>
                      <img className='w-full tran' src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/05/25896ef1-ff68-48b0-bfd1-61359ea95e3d-480x600.jpg" alt="" />
                    </button>
                  </div>
                  <div className="w-2/3 flex justify-between">
                    <div className="flex flex-col justify-center gap-4 ps-4">
                      <div className="w-full">
                        <a href='/' className='text-[#111111] font-semibold'> Nike Air Max 97 OG </a>
                      </div>
                      <div className="w-full">
                        <div className="w-[80px] p-2 flex border border-solid justify-between">
                          <button><FaMinus /></button>
                          <button>1</button>
                          <button><FiPlus /></button>
                        </div>
                      </div>
                    </div>
                    <div className="price flex flex-col justify-center mt-12 items-end">
                    <span className='font-medium'>$250.00</span>
                  </div>
                  </div>
                 
                </div>
              </div>
            </div>

            <div className="w-full bottom-0 left-0 fixed">
              <div className="w-full p-5">
                <div className="flex justify-between">
                  <span className='font-medium text-[18px] text-[#555555]'>Subtotal:</span>
                  <span className='font-medium text-[18px]'>$250.00</span>
                </div>
                <div className="flex mt-6 justify-between">
                  <Button text='View Cart' className='border me-2 py-3 w-1/2 border-solid border-black' bg_color='bg-white'/>
                  <Button text='Checkout' className='w-1/2 ms-2 py-3'  bg_color='bg-black'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 ham-birgers'>
          <div className="icons flex w-full justify-end">
            <div className="flex gap-6 text-2xl">
              <div className="text-[20px]">
                <NavLink className='ham-icon' to=''>
                  <FiSearch />
                </NavLink>
              </div>
              <div className="hidden md:block">
                <NavLink className='ham-icon' to='/sign-in'>
                  <RiUserLine />
                </NavLink>
              </div>
              <div className="hidden md:block">
                <NavLink className='ham-icon' to='/'>
                  <FaRegHeart />
                </NavLink>
              </div>
              <div className="text-[20px]">
                <NavLink className='relative ham-icon' to='/'>
                  <HiOutlineShoppingBag type="button"
                    onClick={showDrawer} // Toggle the drawer on button click
                    aria-controls="drawer-right-example" />
                    <div class="absolute inline-flex items-center justify-center w-[20px] h-[20px] text-[9px] font-bold text-white bg-black border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">0</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hamburger
