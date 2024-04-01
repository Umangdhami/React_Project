import React from 'react'

const Subscription = () => {
  return (
    <section className='py-12 px-2'>
      <div className="lg:container mx-auto">
        <div className="row flex flex-wrap justify-center">
            <div className="w-full sm:w-[600px] md:w-[550px] flex flex-col items-center">
                <div className="tital text-[17px] mb-5 font-medium">
                    <span>NEWSLETTER</span>
                </div>
                <div className="hadding text-[28px] sm:text-[34px] text-[#111] text-center mb-5">
                    <h3 className='font-medium leading-tight'>Sign up and get up to <span className='text-red-600'>20%</span> off your first purchase</h3>
                </div>
                <div className="email-input w-full mt-6">
                    <div className="w-full flex justify-between border-b pb-3 border-solid border-black">
                        <div className="input w-full">
                            <input className='placeholder-[#555]' placeholder='Enter Your Email' type="email" />
                        </div>
                        <div className="sub-btn w-auto">
                            <button className='font-medium'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
