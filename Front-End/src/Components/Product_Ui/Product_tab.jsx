import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Button from '../Button/Button';
import img from '../../images/pe1.jpg';

const Product_tab = () => {
    return (
        <section className='pb-16 border-b border-solid'>
            <div className="lg:container mx-auto">
                <div className="row pb-5 flex flex-col">
                    <Tabs value="ok"> {/* Set the value prop to 'ok' for the Description tab */}
                        <TabsHeader>
                            <Tab key={'ok'} value={'ok'}>
                                <span>Description</span>
                            </Tab>
                            <Tab key={'ok1'} value={'ok1'}>
                                <span>Additional Information</span>
                            </Tab>
                            <Tab key={'ok2'} value={'ok2'}>
                                <span>Reviews (3)</span>
                            </Tab>
                        </TabsHeader>
                        <TabsBody>
                            <div className="w-full flex justify-center mt-8">

                                <TabPanel className='flex justify-center' key={'ok'} value={'ok'}>
                                    <div className="w-full px-2 lg:w-[50%]">
                                        <div className="w-full text-[17px] text-[#555]">
                                            <div className="details mb-4">
                                                <p className='leading-snug text-[16px] sm:text-[17px]'>Push your style full speed ahead with the Nike Air Max 97 OG. Its iconic design takes inspiration from water droplets and Japanese bullet trains. Full-length Nike Air cushioning lets you ride in first-class comfort.</p>
                                            </div>

                                            <div className="other-details ps-12 text-[16px] sm:text-[17px]">
                                                <ul className='list-disc flex flex-col gap-3'>
                                                    <li>
                                                        <p>Colour Shown: Atlantic Blue Heather/Metallic Silver/Black/Voltage Yellow</p>
                                                    </li>
                                                    <li>
                                                        <p>Colour Shown: Atlantic Blue Heather/Metallic Silver/Black/Voltage Yellow</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className='flex justify-center' key={'ok1'} value={'ok1'}>
                                    <div className="w-full md:w-1/2">
                                        <div className="w-full">

                                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                <tbody>
                                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" class="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Brand
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            Silver
                                                        </td>

                                                    </tr>
                                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" class="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Niki
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            XXl
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                                            </div>

                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className='flex justify-center' key={'ok2'} value={'ok2'}>
                                    <div className="w-full px-5 lg:w-[50%]">
                                        <div className="w-full">
                                            <div className="re-hadding">
                                                <h3 className='text-[176x] sm:text-[20px] font-semibold mb-6'>3 reviews for Nike Air Max 97 OG</h3>
                                            </div>
                                            <div className="flex flex-col gap-6">
                                                <div className="review flex">
                                                    <div className="re-img-box w-[50px] h-[50px] rounded-full overflow-hidden">
                                                        <img src={img} alt="" />
                                                    </div>
                                                    <div className="re-content ms-5">
                                                        <div className="date w-full flex flex-wrap justify-between">
                                                            <div className="re-per-name flex flex-col gap-1">
                                                                <span className='text-[#111] font-normal'>uxper - <span className='text-[#767676]'>june 3, 2022</span></span>
                                                                <p className='text-[17px] text-[#555] font-semibold'>Nice. i like it</p>
                                                            </div>
                                                            <div className="ratting flex gap-1 text-[#fed202]">
                                                                <span><FaStar /></span>
                                                                <span><FaStar /></span>
                                                                <span><FaStar /></span>
                                                                <span><FaStar /></span>
                                                                <span><FaStar /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review flex">
                                                    <div className="re-img-box w-[50px] h-[50px] rounded-full overflow-hidden">
                                                        <img src={img} alt="" />
                                                    </div>
                                                    <div className="re-content ms-5">
                                                        <div className="date flex flex-col gap-3 ">
                                                            <span className='text-[#111] font-normal'>uxper - <span className='text-[#767676]'>june 3, 2022</span></span>
                                                            <p className='text-[17px] text-[#555] font-semibold'>Nice. i like it</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review flex">
                                                    <div className="re-img-box w-[50px] h-[50px] rounded-full overflow-hidden">
                                                        <img src={img} alt="" />
                                                    </div>
                                                    <div className="re-content ms-5">
                                                        <div className="date flex flex-col gap-3 ">
                                                            <span className='text-[#111] font-normal'>uxper - <span className='text-[#767676]'>june 3, 2022</span></span>
                                                            <p className='text-[17px] text-[#555] font-semibold'>Nice. i like it</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mt-10">
                                            <h4 className='text-[18px] mb-5 font-semibold'>Add your review</h4>

                                            <p className='text-[17px] text-[#999] mb-5'>Your email address will not be published. Required fields are marked *</p>

                                            <form>
                                                <div className="w-full flex flex-wrap gap-y-5">
                                                    <div className="flex flex-col w-full sm:w-1/2 sm:pe-3 gap-3">
                                                        <label className='text-[#555] text-[17px]' htmlFor="name">Name*</label>
                                                        <input placeholder='Name' type="text" name='name' className='w-full border border-solid p-2 outline-[#c8815f]' />
                                                    </div>

                                                    <div className="flex flex-col w-full sm:w-1/2 sm:ps-3 gap-3">
                                                        <label className='text-[#555] text-[17px]' htmlFor="email">Email*</label>
                                                        <input placeholder='Email' type="text" name='email' className='w-full border border-solid p-2 outline-[#c8815f]' />
                                                    </div>

                                                    <div className="w-full flex gap-2 items-center">
                                                        <span className='text-[#111] text-[17px]'>Your rating</span>
                                                        <div className="ratting">
                                                            <div className="stars flex text-[22px] text-[#fed202]">
                                                                <button><CiStar /></button>
                                                                <button><CiStar /></button>
                                                                <button><CiStar /></button>
                                                                <button><CiStar /></button>
                                                                <button><CiStar /></button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-full flex flex-col gap-4">
                                                        <label htmlFor="review">Your review *</label>
                                                        <textarea className='rounded-md p-7 border border-solid outline-none' name="review" cols="30" rows="7"></textarea>
                                                    </div>

                                                    <div className="btn flex justify-center w-full">
                                                        <Button text='Submit' bg_color='bg-btn'/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>

                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default Product_tab;
