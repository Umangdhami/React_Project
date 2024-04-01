import React from 'react'
import cart1 from '../../images/cart-1.jpg'
import { NavLink } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react"

const NavCart = () => {

    return (
        <Tabs value="html">
            <div className='w-full flex flex-col'>
                <div className='w-full flex justify-center my-10'>
                    <TabsHeader>
                        <Tab key={'ok'} value={'ok'}>
                            <span>Mens</span>
                        </Tab>
                        <Tab key={'ok1'} value={'ok1'}>
                            <span>Womens</span>
                        </Tab>
                        <Tab key={'ok1'} value={'ok1'}>
                            <span>Kids</span>
                        </Tab>
                    </TabsHeader>
                </div>
                <TabsBody>
                    <div className="carts w-full flex flex-wrap gap-y-8 justify-center">
                        <TabPanel className='flex' key={'ok'} value={'ok'}>
                            <div className='saller-cart px-2 w-[270px]'>
                                <div className="w-full">
                                    <div className="cart-img">
                                        <div className="img-box tran clear-starth-[350px] relative">
                                            <div className="cart-option tran absolute opacity-0 flex flex-col justify-between top-0 left-0 w-full h-full">
                                                <div className="options tran flex flex-col items-end gap-3 mt-6">
                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <LuSearch />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <FaRegHeart />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <MdOutlineCompareArrows />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="sa-btn tran w-full bg-black text-center">
                                                    <a href="/" className='text-white'>Quick Select</a>
                                                </div>
                                            </div>
                                            <div className="tag absolute bg-[#F84C5D] px-3 py-1 top-[20px]">
                                                <span className='text-white'>Hot</span>
                                            </div>
                                            <img src={cart1} alt="" />
                                        </div>
                                    </div>
                                    <div className="cart-content flex flex-col gap-3 pt-7">
                                        <NavLink className='text-[16px] tran hover:text-[#C8815F]'>SLC Kids Crew 004</NavLink>
                                        <span className='text-[17px] text-[#111] flex align-center'>
                                            <span>$ 69.00</span>
                                            <span>&nbsp;–&nbsp;</span>
                                            <span>$ 79.00</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='saller-cart px-2 w-[270px]'>
                                <div className="w-full">
                                    <div className="cart-img">
                                        <div className="img-box tran clear-starth-[350px] relative">
                                            <div className="cart-option tran absolute opacity-0 flex flex-col justify-between top-0 left-0 w-full h-full">
                                                <div className="options tran flex flex-col items-end gap-3 mt-6">
                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <LuSearch />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <FaRegHeart />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <MdOutlineCompareArrows />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="sa-btn tran w-full bg-black text-center">
                                                    <a href="/" className='text-white'>Quick Select</a>
                                                </div>
                                            </div>
                                            <div className="tag absolute bg-[#F84C5D] px-3 py-1 top-[20px]">
                                                <span className='text-white'>Hot</span>
                                            </div>
                                            <img src={cart1} alt="" />
                                        </div>
                                    </div>
                                    <div className="cart-content flex flex-col gap-3 pt-7">
                                        <NavLink className='text-[16px] tran hover:text-[#C8815F]'>SLC Kids Crew 004</NavLink>
                                        <span className='text-[17px] text-[#111] flex align-center'>
                                            <span>$ 69.00</span>
                                            <span>&nbsp;–&nbsp;</span>
                                            <span>$ 79.00</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='saller-cart px-2 w-[270px]'>
                                <div className="w-full">
                                    <div className="cart-img">
                                        <div className="img-box tran clear-starth-[350px] relative">
                                            <div className="cart-option tran absolute opacity-0 flex flex-col justify-between top-0 left-0 w-full h-full">
                                                <div className="options tran flex flex-col items-end gap-3 mt-6">
                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <LuSearch />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <FaRegHeart />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <MdOutlineCompareArrows />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="sa-btn tran w-full bg-black text-center">
                                                    <a href="/" className='text-white'>Quick Select</a>
                                                </div>
                                            </div>
                                            <div className="tag absolute bg-[#F84C5D] px-3 py-1 top-[20px]">
                                                <span className='text-white'>Hot</span>
                                            </div>
                                            <img src={cart1} alt="" />
                                        </div>
                                    </div>
                                    <div className="cart-content flex flex-col gap-3 pt-7">
                                        <NavLink className='text-[16px] tran hover:text-[#C8815F]'>SLC Kids Crew 004</NavLink>
                                        <span className='text-[17px] text-[#111] flex align-center'>
                                            <span>$ 69.00</span>
                                            <span>&nbsp;–&nbsp;</span>
                                            <span>$ 79.00</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='saller-cart px-2 w-[270px]'>
                                <div className="w-full">
                                    <div className="cart-img">
                                        <div className="img-box tran clear-starth-[350px] relative">
                                            <div className="cart-option tran absolute opacity-0 flex flex-col justify-between top-0 left-0 w-full h-full">
                                                <div className="options tran flex flex-col items-end gap-3 mt-6">
                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <LuSearch />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <FaRegHeart />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <MdOutlineCompareArrows />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="sa-btn tran w-full bg-black text-center">
                                                    <a href="/" className='text-white'>Quick Select</a>
                                                </div>
                                            </div>
                                            <div className="tag absolute bg-[#F84C5D] px-3 py-1 top-[20px]">
                                                <span className='text-white'>Hot</span>
                                            </div>
                                            <img src={cart1} alt="" />
                                        </div>
                                    </div>
                                    <div className="cart-content flex flex-col gap-3 pt-7">
                                        <NavLink className='text-[16px] tran hover:text-[#C8815F]'>SLC Kids Crew 004</NavLink>
                                        <span className='text-[17px] text-[#111] flex align-center'>
                                            <span>$ 69.00</span>
                                            <span>&nbsp;–&nbsp;</span>
                                            <span>$ 79.00</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='saller-cart px-2 w-[270px]'>
                                <div className="w-full">
                                    <div className="cart-img">
                                        <div className="img-box tran clear-starth-[350px] relative">
                                            <div className="cart-option tran absolute opacity-0 flex flex-col justify-between top-0 left-0 w-full h-full">
                                                <div className="options tran flex flex-col items-end gap-3 mt-6">
                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <LuSearch />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <FaRegHeart />
                                                        </button>
                                                    </div>

                                                    <div className="op1">
                                                        <button className='w-10 h-10 rounded-[50%] bg-white flex justify-center items-center tran hover:text-[#C8815F]'>
                                                            <MdOutlineCompareArrows />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="sa-btn tran w-full bg-black text-center">
                                                    <a href="/" className='text-white'>Quick Select</a>
                                                </div>
                                            </div>
                                            <div className="tag absolute bg-[#F84C5D] px-3 py-1 top-[20px]">
                                                <span className='text-white'>Hot</span>
                                            </div>
                                            <img src={cart1} alt="" />
                                        </div>
                                    </div>
                                    <div className="cart-content flex flex-col gap-3 pt-7">
                                        <NavLink className='text-[16px] tran hover:text-[#C8815F]'>SLC Kids Crew 004</NavLink>
                                        <span className='text-[17px] text-[#111] flex align-center'>
                                            <span>$ 69.00</span>
                                            <span>&nbsp;–&nbsp;</span>
                                            <span>$ 79.00</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        

                    </div>
                </TabsBody>
            </div>
        </Tabs>

    )
}

export default NavCart
