import React from 'react'
// import Nav from './Nav'
// import Cart from './Cart'
import NavCart from './NavCart'

const Saller = () => {
    return (
        <section className='saller py-12'>
            <div className="lg:container mx-auto">
                <div className="row flex flex-wrap justify-center">
                    <div className="title w-full">
                        <h2 className='text-center text-[34px] font-medium'>Best Sellers</h2>
                    </div>
                   <NavCart/>
                    <div className="w-full mt-12 flex justify-center">
                        <div className="w-auto relative btn-saller tran overflow-hidden">
                            <button className='px-8 py-3 border border-solid border-black rounded-[5px] text-[#111] text-[17px]  hover:text-white tran hover:border-[#c8815f]'>Explorer More</button>
                            <div className="absolute top-[100%] tran w-full h-full bg-[#c8815f] border border-solid border-[#c8815f] rounded-[5px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Saller
