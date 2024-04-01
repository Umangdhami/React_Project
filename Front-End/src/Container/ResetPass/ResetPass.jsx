import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Components/Button/Button'

const ResetPass = () => {
  return (
    <section className='pt-[138px] pb-[200px]'>
    <div className="container mx-auto">
        <div className="row flex flex-col gap-[40px]">
            <div className="w-full flex flex-col items-center gap-5">
                <span className='text-[17px] text-[#111] font-medium'>New Password</span>
            </div>
            <div className="w-full justify-center flex mt-5">
                <div className="w-full px-2 sm:w-1/2 lg:w-1/3 flex gap-[30px] flex-wrap">

                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex justify-between">
                            <label htmlFor="password">New Password*</label>
                        </div>
                        <input className='w-full border border-solid py-2 rounded-md px-5 outline-[#c8815f]' name='password' type="password" placeholder='******' />
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex justify-between">
                            <label htmlFor="password">Confirm Password*</label>
                        </div>
                        <input className='w-full border border-solid py-2 rounded-md px-5 outline-[#c8815f]' name='password' type="password" placeholder='******' />
                    </div>

                    <div className="flex gap-3 w-full">
                        <input type="checkbox" name='policy' />
                        <span className='font-medium'>
                            Remember Me
                        </span>
                    </div>

                    <Button text='Reset' bg_color='bg-btn' />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ResetPass
