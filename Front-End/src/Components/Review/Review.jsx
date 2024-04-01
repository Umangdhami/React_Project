import React from 'react'

const Review = () => {
    return (
        <section className='review w-full py-12 px-2'>
            <div className="lg:container mx-auto">
                <div className="row w-full flex flex-wrap">
                    <div className="w-full">
                        <div className="w-auto flex flex-col items-center">
                            <div className="tital text-[28px] sm:text-[34px] text-[#111] mb-11 font-medium">
                                <span>Customers Reviews</span>
                            </div>
                            <div className="re-details">
                                <p className='text-[28px] sm:w-[650px] w-full text-center text-[#111] leading-tight'>
                                    “ As women who value our health, we’re here to do what we do best - roll up our sleeves to get it done right.”
                                </p>
                            </div>
                            <div className="pe-name text-center mt-12 font-medium">
                                <span>Randy Workman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review
