import React from 'react'
import { NavLink } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import cart1 from '../../images/cart-1.jpg'


const Product_suggetion = () => {

    

    return (
        <section className='pt-16 pb-[100px]'>
            <div className="lg:container mx-auto">
                <div className="row flex flex-wrap flex-col">
                    <div className="tital">
                        <h2 className='text-center font-semibold mb-10 text-[34px]'>You May Also Like</h2>
                    </div>
                    <div className="flex flex-wrap justify-center">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product_suggetion
