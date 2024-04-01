import React from 'react'
import { RiHome3Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const FooterNav = () => {
    return (
        <div className="md:hidden fixed z-50 bottom-0 w-full bg-white">
            <div className='flex '>
                <div className="w-1/4 py-3 flex justify-center flex-col border-r border-r-[#ddd] border-solid">
                    <div className="w-auto flex justify-center text-[19px] pb-2">
                        <RiHome3Line />
                    </div>
                    <span className='text-center text-[12px]'>Home</span>
                </div>
                <div className="w-1/4 py-3 flex justify-center flex-col border-r border-r-[#ddd] border-solid">
                    <div className="w-auto flex justify-center text-[19px] pb-2">
                        <FiSearch />
                    </div>
                    <span className='text-center text-[12px]'>Search</span>
                </div>
                <div className="w-1/4 py-3 flex justify-center flex-col border-r border-r-[#ddd] border-solid">
                    <div className="w-auto flex justify-center text-[19px] pb-2">
                        <FaRegHeart />
                    </div>
                    <span className='text-center text-[12px]'>Wishlist</span>
                </div>
                <div className="w-1/4 py-3 flex justify-center flex-col">
                    <div className="w-auto flex justify-center text-[19px] pb-2">
                        <RiUserLine />
                    </div>
                    <span className='text-center text-[12px]'>Account</span>
                </div>
            </div>
        </div>

    )
}

export default FooterNav
