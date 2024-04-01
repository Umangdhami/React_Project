import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Components/Button/Button'

const OTP = () => {

    const inputs = Array.from({ length: 6 }, (_, i) => i + 1);
    const inputRefs = inputs.map(() => useRef(null));

    const handleInputChange = (index, e) => {
        const input = e.target;
        const maxLength = parseInt(input.getAttribute('maxlength'));
        const currentLength = input.value.length;

        if (currentLength >= maxLength) {
            const nextIndex = index + 1;
            if (nextIndex < inputs.length) {
                inputRefs[nextIndex].current.focus();
            }
        }
    };

    return (
        <>
            <section className='pt-[138px] pb-[100px]'>
                <div className="container mx-auto">
                    <div className="row flex flex-col gap-[40px]">
                        <div className="w-full flex flex-col items-center gap-5">
                            <span className='text-[17px] text-[#111] font-medium'>Enter OTP</span>
                            <span className='text-[17px] text-[#555] font-medium'>Didn't Recive OTP? <button className='hover:text-[#c8815f]'>Resend OTP</button> </span>
                        </div>
                        <div className="w-full justify-center flex mt-5">
                            <div className="w-full px-2 sm:w-1/2 lg:w-1/3 flex gap-[30px] flex-wrap">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
                                    <div className="flex justify-between gap-5">
                                        {inputs.map((index) => (
                                            <input
                                                key={index}
                                                ref={inputRefs[index - 1]}
                                                type="text"
                                                maxLength="1"
                                                className="w-1/6 py-2 px-4 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500"
                                                onChange={(e) => handleInputChange(index - 1, e)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <Button text='Submit' bg_color='bg-btn'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default OTP
