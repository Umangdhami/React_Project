import React from 'react'
import Button from '../Button/Button'

const Banner = () => {
    return (
        <section className='banner w-full h-svh px-4 md:max-h-[700px] xl:max-h-svh'>
            <div className="mx-auto h-full lg:container">
                <div className="row flex flex-wrap h-full">
                    <div className="w-full flex items-center">
                        <div className="w-full">
                            <div className="w-full">
                                <p className='text-[17px] mb-5'>HOLIDAY 2022</p>

                                <h1 className='banner-hadding text-[62px] font-semibold md:w-1/2 xl:w-1/3'>Men's New  Arrivals</h1>
                                <div className="des mt-5 mb-8">
                                    <p className='text-xl'>New colors, now also available in men's sizing</p>
                                </div>

                                <div className="btn w-auto">
                                    <Button text="View Collection" bg_color="bg-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
