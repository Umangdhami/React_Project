import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import { baseUrl } from "./config";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from '../Button/Button';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import paymentImg from '../../images/payment-logos.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Product_Ui = () => {

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`${baseUrl}/payment-logos0${i + 1}.jpg`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        document.querySelector('.slick-prev').innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" tabindex="-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="width: 100%; display: inline-block;"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>'

        document.querySelector('.slick-next').innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>'
    }, []);

    return (
        <section className='pt-[124px] pb-12'>
            <div className="lg:container mx-auto">
                <div className="row flex flex-wrap">
                    <div className="w-full flex flex-wrap justify-center py-4 border-b border-solid md:pe-5">
                        <div className="sm:h-[1200px] md:h-auto sm:overflow-hidden product-slider-img w-full md:w-[100%] md:overflow-hidden lg:px-5 lg:w-[50%] xl:w-[45%] 2xl:w-[600px] flex">
                            <div className="w-[100%] relative flex justify-end h-full">
                                <div className="w-full md:w-5/6 md:px-2 h-full">
                                    <div className="m-0 md:ms-3 slider-container">
                                        <Slider className="w-full" {...settings}>
                                            <div className="h-full">
                                                <img className="h-full" src={baseUrl + "/payment-logos01.jpg"} />
                                            </div>
                                            <div className="h-full">
                                                <img className="h-full" src={baseUrl + "/payment-logos02.jpg"} />
                                            </div>
                                            <div className="h-full">
                                                <img className="h-full" src={baseUrl + "/payment-logos03.jpg"} />
                                            </div>
                                            <div className="h-full">
                                                <img className="h-full" src={baseUrl + "/payment-logos04.jpg"} />
                                            </div>
                                        </Slider>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[100%] lg:w-1/2 px-5 py-5">
                            <div className="w-full">
                                <div className="pro text-[#111] pb-5 border-b border-solid">
                                    <span className='flex pb-3 justify-between items-center font-medium text-[17px] text-[#111]'>
                                        <div className="flex items-center">
                                            <span className='product-text flex items-center text-[red]'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5.25C16.044 5.25 19.4085 8.16 20.1143 12C19.4093 15.84 16.044 18.75 12 18.75C7.95601 18.75 4.59151 15.84 3.88576 12C4.59076 8.16 7.95601 5.25 12 5.25ZM12 17.25C13.5296 17.2497 15.0138 16.7301 16.2097 15.7764C17.4055 14.8226 18.2422 13.4912 18.5828 12C18.2409 10.51 17.4037 9.18 16.208 8.22752C15.0122 7.27504 13.5287 6.7564 12 6.7564C10.4713 6.7564 8.98777 7.27504 7.79204 8.22752C6.5963 9.18 5.75908 10.51 5.41726 12C5.75783 13.4912 6.59451 14.8226 7.79037 15.7764C8.98622 16.7301 10.4704 17.2497 12 17.25ZM12 15.375C11.1049 15.375 10.2465 15.0194 9.61352 14.3865C8.98059 13.7535 8.62501 12.8951 8.62501 12C8.62501 11.1049 8.98059 10.2464 9.61352 9.61351C10.2465 8.98058 11.1049 8.625 12 8.625C12.8951 8.625 13.7536 8.98058 14.3865 9.61351C15.0194 10.2464 15.375 11.1049 15.375 12C15.375 12.8951 15.0194 13.7535 14.3865 14.3865C13.7536 15.0194 12.8951 15.375 12 15.375ZM12 13.875C12.4973 13.875 12.9742 13.6775 13.3258 13.3258C13.6775 12.9742 13.875 12.4973 13.875 12C13.875 11.5027 13.6775 11.0258 13.3258 10.6742C12.9742 10.3225 12.4973 10.125 12 10.125C11.5027 10.125 11.0258 10.3225 10.6742 10.6742C10.3226 11.0258 10.125 11.5027 10.125 12C10.125 12.4973 10.3226 12.9742 10.6742 13.3258C11.0258 13.6775 11.5027 13.875 12 13.875Z" fill="#111111"></path></svg>

                                                25 guests </span>&nbsp; <span className="product-text-2">are viewing this product</span>
                                        </div>
                                        <div className="visitliast w-auto flex items-center ps-3 text-[22px]">
                                            <IoMdHeartEmpty />
                                        </div>
                                    </span>
                                    <div className="pro-tital mb-3">
                                        <h2 className='text-[#111] text-[24px] md:text-[32px]'>Nike Air Max 97 OG</h2>
                                    </div>
                                    <div className="pro-ratting flex text-[#111] text-[20px] gap-1 pb-4">
                                        <span><FaStar /></span>
                                        <span><FaStar /></span>
                                        <span><FaStar /></span>
                                        <span><FaStar /></span>
                                        <span><FaStar /></span>
                                    </div>
                                    <div className="pro-price mb-6">
                                        <span className='text-[24px]'>$229.00</span>
                                    </div>

                                    <div className="mb-4 pro-quantity text-[#555]">
                                        <span>Quantity</span>
                                    </div>

                                    <div className="flex gap-3 flex-wrap ">
                                        <div className="add-cart-count w-full md:w-auto flex justify-between border border-solid px-2 rounded-md">
                                            <button className='p-3 text-[19px]'><FaMinus /></button>
                                            <div className="input aspect-square w-[40px]">
                                                <input type="number" value={0} className='w-full h-full outline-none text-center text-[20px]' />
                                            </div>
                                            <button className='p-3 text-[19px]'><FaPlus /></button>
                                        </div>
                                        <div className="add-cart w-full md:w-auto btn">
                                            <Button text="Add to Cart" bg_color='bg-black' />
                                        </div>
                                        <div className="add-cart w-full md:w-auto btn">
                                            <Button text="Buy Now" bg_color='bg-btn' />
                                        </div>

                                    </div>

                                    <div className="payment w-auto">
                                        <div className="">
                                            <div className="w-auto md:w-[580px] py-3 flex justify-between items-center px-5 mt-5 bg-[#f9f9f9]">
                                                <span className='text-[17px] text-[#555]'>Secure checkout with</span>
                                                <div className="w-[58%]">
                                                    <img className='w-full' src={paymentImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="shipping mt-7">
                                        <div className="delevery flex flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 15.4668C19.5888 15.4668 16 19.0556 16 23.4668C16 27.878 19.5888 31.4668 24 31.4668C28.4112 31.4668 32 27.878 32 23.4668C32 19.0556 28.4112 15.4668 24 15.4668ZM24 30.4001C20.1768 30.4001 17.0667 27.29 17.0667 23.4668C17.0667 19.6436 20.1768 16.5335 24 16.5335C27.8232 16.5335 30.9333 19.6436 30.9333 23.4668C30.9333 27.29 27.8232 30.4001 24 30.4001Z" fill="#111111"></path>
                                                        <path d="M0.333595 25.8276L14.1922 31.4244C14.1924 31.4244 14.1925 31.4244 14.1926 31.4245L14.2003 31.4276C14.2643 31.4534 14.3323 31.4664 14.4 31.4664C14.4677 31.4664 14.5354 31.4534 14.5995 31.4276L14.6069 31.4246C14.6073 31.4244 14.6077 31.4243 14.6081 31.4241L17.6396 30.201C17.9128 30.0909 18.0448 29.7802 17.9346 29.507C17.8247 29.2341 17.5143 29.1016 17.2406 29.212L14.9333 30.1427V12.6262L27.7333 7.457V15.4716C27.7333 15.7661 27.9721 16.0049 28.2667 16.0049C28.5612 16.0049 28.8 15.7661 28.8 15.4716V6.66641C28.8 6.60081 28.7846 6.5389 28.7623 6.47982C28.7555 6.46179 28.7466 6.446 28.7379 6.42894C28.7177 6.38887 28.6931 6.35248 28.6636 6.31869C28.6509 6.30423 28.6396 6.28994 28.6255 6.27695C28.5863 6.24079 28.5421 6.21074 28.4925 6.18727C28.4846 6.18356 28.4785 6.17757 28.4704 6.17422C28.4689 6.17363 28.4679 6.17246 28.4664 6.17188L14.5997 0.571875C14.4716 0.520312 14.3284 0.520312 14.2003 0.571875L0.333595 6.17188C0.332128 6.17246 0.331056 6.17364 0.329621 6.17422C0.321515 6.17757 0.315397 6.18356 0.307488 6.1873C0.257941 6.21074 0.213739 6.24082 0.174576 6.27692C0.160416 6.28994 0.149056 6.30423 0.136357 6.31872C0.106832 6.35244 0.082352 6.3888 0.0621387 6.42884C0.0534773 6.44593 0.044464 6.46182 0.0376587 6.47991C0.0153653 6.53897 0 6.60085 0 6.66641V25.3331C0 25.3344 0.000746667 25.3355 0.000746667 25.3368C0.0012 25.3994 0.0157867 25.4597 0.0372373 25.5174C0.0400053 25.5249 0.0391573 25.5338 0.0422827 25.5412C0.0648747 25.5945 0.100325 25.6413 0.139221 25.685C0.145995 25.6926 0.149051 25.703 0.156245 25.7102C0.164219 25.7182 0.176299 25.722 0.184827 25.7295C0.228544 25.7679 0.275584 25.8028 0.330235 25.8254C0.331541 25.8259 0.332293 25.8271 0.333595 25.8276ZM13.8667 30.1424L1.06667 24.9733V7.457L13.8667 12.6262V30.1424ZM14.4 1.64167L26.8424 6.66641L21.3333 8.89121L8.89098 3.86641L14.4 1.64167ZM7.46667 4.4416L19.909 9.46641L14.4 11.6912L1.95755 6.66641L7.46667 4.4416Z" fill="#111111"></path>
                                                        <path d="M27.018 20.775L24.169 22.7081L21.8344 18.7839C21.6836 18.5308 21.3565 18.4482 21.1034 18.5982C20.8503 18.7488 20.7672 19.0761 20.9177 19.3292L23.5417 23.7399C23.6167 23.8662 23.7406 23.9558 23.8841 23.9878C23.9224 23.9964 23.9615 24.0006 24 24.0006C24.106 24.0006 24.2104 23.9691 24.2995 23.9086L27.6169 21.6579C27.8607 21.4925 27.9242 21.1607 27.7588 20.917C27.5935 20.6732 27.2612 20.6094 27.018 20.775Z" fill="#111111"></path>
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <p className='text-[17px] text-[#555]'>Delivers in: 3-7 Working Days</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13333 30.9333C2.8487 30.9333 3.17422 31.1339 3.5862 31.3875C4.0526 31.6745 4.58125 32 5.5987 32C6.61589 32 7.14453 31.6745 7.61094 31.3875C7.86413 31.2316 8.08535 31.0963 8.38376 31.0148C8.38509 31.0144 8.38643 31.0147 8.38776 31.0143C8.38903 31.0139 8.38982 31.0129 8.39109 31.0125C8.57653 30.9626 8.79183 30.9333 9.0638 30.9333C9.77917 30.9333 10.1049 31.1339 10.5169 31.3875C10.9833 31.6747 11.512 32 12.5292 32C13.5466 32 14.0753 31.6747 14.5417 31.3875C14.9542 31.1339 15.2799 30.9333 15.9956 30.9333C16.7104 30.9333 17.0359 31.1339 17.4479 31.3875C17.9143 31.6745 18.4427 32 19.4599 32C20.4776 32 21.0065 31.6747 21.4729 31.3875C21.8854 31.1339 22.2112 30.9333 22.9271 30.9333C23.6437 30.9333 23.9698 31.1339 24.3825 31.3878C24.8495 31.6747 25.3786 32 26.3969 32C27.4151 32 27.9443 31.6747 28.4112 31.3878C28.824 31.1339 29.15 30.9333 29.8667 30.9333C30.1612 30.9333 30.4 30.6945 30.4 30.4C30.4 30.1055 30.1612 29.8667 29.8667 29.8667C28.8484 29.8667 28.3193 30.1919 27.8523 30.4789C27.4396 30.7328 27.1135 30.9333 26.3969 30.9333C25.6802 30.9333 25.3542 30.7328 24.9414 30.4789C24.7862 30.3835 24.622 30.2847 24.4373 30.1942L29.3076 15.0971C29.3529 14.9565 29.338 14.8036 29.2661 14.6745C29.1945 14.5453 29.0727 14.4518 28.9294 14.4159L26.1333 13.7169V8C26.1333 7.70547 25.8945 7.46667 25.6 7.46667H22.9333V3.73333C22.9333 3.4388 22.6945 3.2 22.4 3.2H20.8V0.533333C20.8 0.2388 20.5612 0 20.2667 0H11.7333C11.4388 0 11.2 0.2388 11.2 0.533333V3.2H9.6C9.30547 3.2 9.06667 3.4388 9.06667 3.73333V7.46667H6.4C6.10547 7.46667 5.86667 7.70547 5.86667 8V13.7169L3.07057 14.4159C2.92734 14.4518 2.80547 14.5453 2.73385 14.6745C2.66197 14.8036 2.64713 14.9565 2.69244 15.0971L7.56171 30.1911C7.37444 30.2825 7.20849 30.3826 7.05156 30.4792C6.63958 30.7328 6.31406 30.9333 5.5987 30.9333C4.88333 30.9333 4.55755 30.7328 4.14557 30.4792C3.67917 30.1919 3.15052 29.8667 2.13333 29.8667C1.8388 29.8667 1.6 30.1055 1.6 30.4C1.6 30.6945 1.8388 30.9333 2.13333 30.9333ZM12.2667 1.06667H19.7333V3.2H12.2667V1.06667ZM10.1333 4.26667H21.8667V7.46667H10.1333V4.26667ZM6.93333 8.53333H25.0667V13.4502L16.1294 11.2159C16.0445 11.1945 15.9555 11.1945 15.8706 11.2159L6.93333 13.4502V8.53333ZM3.88281 15.3125L15.4667 12.4164V22.4C15.4667 22.6945 15.7055 22.9333 16 22.9333C16.2945 22.9333 16.5333 22.6945 16.5333 22.4V12.4164L28.1172 15.3125L23.4123 29.8973C23.2623 29.8795 23.1044 29.8667 22.9271 29.8667C21.9094 29.8667 21.3805 30.1919 20.9141 30.4792C20.5016 30.7328 20.1758 30.9333 19.4599 30.9333C18.7448 30.9333 18.4193 30.7328 18.0073 30.4792C17.5411 30.1922 17.0125 29.8667 15.9956 29.8667C14.9779 29.8667 14.4492 30.1922 13.9828 30.4792C13.5703 30.7328 13.2448 30.9333 12.5292 30.9333C11.8138 30.9333 11.4883 30.7328 11.0763 30.4792C10.6099 30.1922 10.0812 29.8667 9.0638 29.8667C8.88994 29.8667 8.73483 29.879 8.5874 29.8962L3.88281 15.3125Z" fill="#111111"></path>
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <p className='text-[17px] text-[#555]'>Free shipping over $300</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-[17px] gap-3 mt-5">
                                    <p><span className='text-[#555]'>SKU: <span className='text-[#111]'>DM0028-400</span></span></p>
                                    <p><span className='text-[#555]'>Category: <span className='text-[#111]'>Mens</span></span></p>
                                    <div className="mt-4">
                                        <span className='text-[#555] flex gap-4'>Share:
                                            <span className='text-[#111] hover:text-[#c8815f] cursor-pointer'><FaFacebookF /></span>
                                            <span className='text-[#111] hover:text-[#c8815f] cursor-pointer'><FaTwitter /></span>
                                            <span className='text-[#111] hover:text-[#c8815f] cursor-pointer'><FaInstagram /></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Product_Ui
