import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <section className='footer bg-[#111] text-white border-b border-solid border-[#FFFFFF22] px-3 py-16'>
                <div className="lg:container mx-auto">
                    <div className="row flex flex-wrap">
                        <div className="w-full mb-8 lg:w-1/3">
                            <div className="tital mb-9">
                                <span className='text-[18px]'>About Shop</span>
                            </div>
                            <div className="para">
                                <p className='text-[17px] mb-8 text-[#FFFFFFCC]'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Read More</p>
                            </div>
                            <div className="contact-email flex flex-col gap-y-3 text-[15px]">
                                <span>E. hello@uxper.co</span>
                                <span>T. (00) 342 489 33</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap gap-y-10 lg:w-2/3">
                            <div className="w-full sm:w-1/2 lg:w-1/4">
                                <div className="w-full">
                                    <h5 className='text-[18px] font-medium mb-6'>Company</h5>
                                    <ul className='flex flex-col gap-y-5 text-[#FFFFFFCC] text-[17px]'>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>About Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Careers</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Store Locator</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4">
                                <div className="w-full">
                                    <h5 className='text-[18px] font-medium mb-6'>Customer Care</h5>
                                    <ul className='flex flex-col gap-y-5 text-[#FFFFFFCC] text-[17px]'>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Size Guide</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Help & FAQs</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Return My Order</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Refer A Friend</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4">
                                <div className="w-full">
                                    <h5 className='text-[18px] font-medium mb-6'>Quick Links</h5>
                                    <ul className='flex flex-col gap-y-5 text-[#FFFFFFCC] text-[17px]'>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Duties & Taxes</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Shipping Info</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Privacy Policy</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Term Conditions</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/4">
                                <div className="w-full">
                                    <h5 className='text-[18px] font-medium mb-6'>Follow Us</h5>
                                    <ul className='flex flex-col gap-y-5 text-[#FFFFFFCC] text-[17px]'>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Instagram</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Facebook</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Pinterest</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='after:transition-all relative after:absolute after:w-[0] after:h-[1px] after:bg-[#c8815f] after:bottom-[-5px] after:left-0 hover:after:w-full'>Tiktok</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer-copyrigth py-10 bg-[#111]'>
                <div className="lg:container mx-auto">
                    <div className="row flex flex-wrap items-center justify-center gap-y-4 lg:justify-between">
                        <div className="w-full copy text-[#FFFFFFCC] flex justify-center lg:w-auto">
                            ©2022 July. All rights reserved
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4">
                            <div className="w-full others flex justify-center">
                                <ul className='flex text-[#FFFFFFCC] text-[32px] gap-4'>
                                    <li>
                                        <NavLink>
                                            <FaCcVisa />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink>
                                            <FaCcMastercard />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink>
                                            <FaStripe />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink>
                                            <FaCcPaypal />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full justify-center flex gap-4 mt-2 md:mt-0 md:ps-2">
                                <div className='flex items-center'>
                                    <span className='flex text-[#FFFFFFCC] text-[16px]'>EN&nbsp; <MdKeyboardArrowDown /></span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='flex text-[#FFFFFFCC] text-[16px]'>USD&nbsp; <MdKeyboardArrowDown /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer
