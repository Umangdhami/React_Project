import React from 'react'
import { FaInstagram } from "react-icons/fa";
import ex1Img from '../../images/ex-1.jpg'
import ex2Img from '../../images/ex-2.jpg'
import ex3Img from '../../images/ex-3.jpg'
import ex4Img from '../../images/ex-4.jpg'
import ex5Img from '../../images/ex-5.jpg'

const Explore = () => {
    return (
        <section className='explore'>
            <div className="mx-auto">
                <div className="row flex flex-wrap px-2">
                    <div className="w-full">
                        <div className="w-full flex justify-center">
                            <span className='flex text-[18px]'>
                                <span><FaInstagram /></span>
                                <span className='ps-3 font-medium'>Follow Us @Uxper</span>
                            </span>
                        </div>
                    </div>
                    <div className="w-full py-8 flex gap-4 flex-wrap xl:flex-nowrap justify-center">
                        <div className="ex-1 w-full sm:w-[250px] md:w-[365px] aspect-square">
                            <div className="w-full h-full">
                                <img src={ex1Img} className='exImg w-full h-full object-cover' alt="" />
                            </div>
                        </div>
                        <div className="ex-1 w-full sm:w-[250px] md:w-[365px] aspect-square">
                            <div className="w-full h-full">
                                <img src={ex2Img} className='exImg w-full h-full object-cover' alt="" />
                            </div>
                        </div>
                        <div className="ex-1 w-full sm:w-[250px] md:w-[365px] aspect-square">
                            <div className="w-full h-full">
                                <img src={ex3Img} className='exImg w-full h-full object-cover' alt="" />
                            </div>
                        </div>
                        <div className="ex-1 w-full sm:w-[250px] md:w-[365px] aspect-square">
                            <div className="w-full h-full">
                                <img src={ex4Img} className='exImg w-full h-full object-cover' alt="" />
                            </div>
                        </div>
                        <div className="ex-1 w-full sm:w-[250px] md:w-[365px] aspect-square">
                            <div className="w-full h-full">
                                <img src={ex5Img} className='exImg w-full h-full object-cover' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore
