import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Components/Button/Button'

const ForgotPass = () => {
    return (
        <section className='pt-[138px] pb-[200px]'>
            <div className="container mx-auto">
                <div className="row flex flex-col gap-[40px]">
                    <div className="w-full flex flex-col items-center gap-5">
                        <span className='text-[17px] text-[#111] font-medium'>Forgot Password</span>
                        <span className='text-[17px] text-[#555] font-medium'>Already have an account? <NavLink className='hover:text-[#c8815f]' to='/sign-in'>Sign in</NavLink> </span>
                    </div>
                    <div className="w-full justify-center flex mt-5">
                        <form className="w-full px-2 sm:w-1/2 lg:w-1/3 flex gap-[30px] flex-wrap">
                            <div className="flex flex-col gap-3 w-full">
                                <input className='bg-[#f9f9f9] w-full border border-solid py-3 rounded-md px-5 outline-[#c8815f]' name='email' type="email" placeholder='ex@gmail.com' />
                            </div>

                            <Button text='Get OTP' bg_color='bg-btn' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPass
