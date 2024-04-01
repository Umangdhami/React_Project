import React from 'react'
import saleImg from '../../images/sale.jpg'
import Button from '../Button/Button'


const Sale = () => {

    return (
        <section className='sale w-full pt-6 pb-12'>
            <div className="xl:w-[1140px] mx-auto">
                <div className="row flex flex-wrap">
                    <div className="w-full flex flex-wrap gap-2 px-2 md:flex-nowrap">
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-full">
                                <img className='w-full h-full object-cover' src={saleImg} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-16 bg-[#f6e5cf] flex justify-center items-center">
                            <div className="w-auto text-center flex flex-col gap-y-4">
                                <div className="w-auto">
                                    <span className='text-[#111] text-[17px] font-medium'>SALE EVENT</span>
                                </div>
                                <div className="w-auto">
                                    <h2 className='text-[#111] text-[34px] font-medium' >Summer Shirt <br /><p className='pt-2'> Limited Offer – $20</p></h2>
                                </div>
                                <div className="w-auto mt-1">
                                    <p className='text-[#555] text-[17px] font-normal' >Until 12/27/21. Use code FESTIVE at checkout</p>
                                </div>
                                <div className="btn mt-2">
                                    <Button text="Shop Now" bg_color="bg-black"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sale
