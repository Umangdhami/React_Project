import React from 'react'
import { NavLink, useFormAction } from "react-router-dom";
import Button from '../../Components/Button/Button';
import { useForm } from "react-hook-form"

const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit =async (data) => {
        console.log('datas',data)
    
        let r =await fetch('http://localhost:5011/register', {method: "POST", headers: {"Content-type" : "application/json"}, body : JSON.stringify(data)});
        let res =await r.json();
        console.log('datas',data, res)
    
      }

    return (
        <section className='pt-[138px] pb-[100px]'>
            <div className="container mx-auto">
                <div className="row flex flex-col gap-[40px]">
                    <div className="w-full flex flex-col items-center gap-5">
                        <span className='text-[17px] text-[#111] font-medium'>Sign Up</span>
                        <span className='text-[17px] text-[#555] font-medium'>Already have an account? <NavLink className='hover:text-[#c8815f]' to='/sign-in'>Sign In</NavLink> </span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full justify-center flex mt-5">
                        <div className="w-full px-2 sm:w-1/2 lg:w-1/3 flex gap-[30px] flex-wrap">
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="fname">First Name*</label>
                                <input {...register("fname")} className='w-full border border-solid py-2 rounded-md px-5 outline-[#c8815f]' name='fname' type="text" placeholder='First Name' />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="lname">Last Name*</label>
                                <input {...register("lname")} className='w-full border border-solid py-2 rounded-md px-5 outline-[#c8815f]' name='lname' type="text" placeholder='Last Name' />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="email">Email*</label>
                                <input {...register("email")} className='w-full border border-solid py-2 rounded-md px-5 outline-[#c8815f]' name='email' type="email" placeholder='ex@gmail.com' />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="password">Password*</label>
                                <input {...register("password")} className='w-full border border-solid py-2 rounded-md px-5 outline-[#c8815f]' name='password' type="password" placeholder='******' />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="conf_pass">Confirm Password*</label>
                                <input {...register("conf_pass")} className='w-full border border-solid py-2 rounded-md px-5 outline-[#c8815f]' name='conf_pass' type="password" placeholder='******' />
                            </div>

                            <div className="flex gap-3 w-full">
                                <input {...register("policy")} type="checkbox" name='policy'/>
                                <span className='font-medium'>
                                    I agree to the <span className='text-[#c8815f] font-semibold'>Tearm</span> and <span className='text-[#c8815f] font-semibold'>Privacy Policy</span>
                                </span>
                            </div>

                            <Button type='submit' text='Sign Up' bg_color='bg-btn'/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup
