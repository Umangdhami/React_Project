import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import Button from '../Button/Button'
import slide1Img from '../../images/Group-3628-1-540x840.jpg'
import slide2Img from '../../images/shirts-1-540x840.jpg'
import slide3Img from '../../images/Mask-Group-2-1-540x840.jpg'
import slide4Img from '../../images/Mask-Group-2-1-540x840 (1).jpg'
import slide5Img from '../../images/Group-3629-1-540x840.jpg'



const Carousel = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  useEffect(() => {
    document.querySelector('.slick-prev').innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" tabindex="-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="width: 100%; display: inline-block;"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>'

    document.querySelector('.slick-next').innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>'
  }, []);


  return (
    <section className="slider py-20 ">
      <div className="lg:container mx-auto">
        <div className="row flex flex-wrap relative">
          <div className="px-2 w-full flex justify-between pb-10">
            <div className="slider-hadding">
              <h2 className='pb-2 text-[28px] sm:text-[34px] font-semibold'>Shop by Categories</h2>
            </div>
          </div>
          <div className="w-full overflow-hidden ">
            <div className="slider-container ">
              <Slider {...settings}>
                <div className='px-4 md:px-2'>
                  <div className="flex-shrink-0 cart relative w-full h-[710px] sm:h-[1000px] md:h-[550px] lg:h-[510px] xl:h-[560px] 2xl:h-[640px] overflow-hidden cursor-pointer">
                    <img src={slide1Img} className='tran w-full h-full object-cover' alt="" />
                    <div className="back-img absolute z-10 bottom-0 left-[50%] translate-x-[-50%]">
                      <div className="flex items-end justify-center">
                        <div className="btn pb-16 font-semibold">
                          <Button text={'Womens'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 md:px-2'>
                  <div className="flex-shrink-0 cart relative w-full h-[710px] sm:h-[1000px] md:h-[550px] lg:h-[510px] xl:h-[560px] 2xl:h-[640px] overflow-hidden cursor-pointer">
                    <img src={slide2Img} className='tran w-full h-full object-cover' alt="" />
                    <div className="back-img absolute z-10 bottom-0 left-[50%] translate-x-[-50%]">
                      <div className="flex items-end justify-center">
                        <div className="btn pb-16 font-semibold">
                          <Button text={'Womens'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 md:px-2'>
                  <div className="flex-shrink-0 cart relative w-full h-[710px] sm:h-[1000px] md:h-[550px] lg:h-[510px] xl:h-[560px] 2xl:h-[640px] overflow-hidden cursor-pointer">
                    <img src={slide3Img} className='tran w-full h-full object-cover' alt="" />
                    <div className="back-img absolute z-10 bottom-0 left-[50%] translate-x-[-50%]">
                      <div className="flex items-end justify-center">
                        <div className="btn pb-16 font-semibold">
                          <Button text={'Womens'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 md:px-2'>
                  <div className="flex-shrink-0 cart relative w-full h-[710px] sm:h-[1000px] md:h-[550px] lg:h-[510px] xl:h-[560px] 2xl:h-[640px] overflow-hidden cursor-pointer">
                    <img src={slide4Img} className='tran w-full h-full object-cover' alt="" />
                    <div className="back-img absolute z-10 bottom-0 left-[50%] translate-x-[-50%]">
                      <div className="flex items-end justify-center">
                        <div className="btn pb-16 font-semibold">
                          <Button text={'Womens'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 md:px-2'>
                  <div className="flex-shrink-0 cart relative w-full h-[710px] sm:h-[1000px] md:h-[550px] lg:h-[510px] xl:h-[560px] 2xl:h-[640px] overflow-hidden cursor-pointer">
                    <img src={slide5Img} className='tran w-full h-full object-cover' alt="" />
                    <div className="back-img absolute z-10 bottom-0 left-[50%] translate-x-[-50%]">
                      <div className="flex items-end justify-center">
                        <div className="btn pb-16 font-semibold">
                          <Button text={'Womens'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 md:px-2'>
                  <div className="flex-shrink-0 cart relative w-full h-[710px] sm:h-[1000px] md:h-[550px] lg:h-[510px] xl:h-[560px] 2xl:h-[640px] overflow-hidden cursor-pointer">
                    <img src={slide2Img} className='tran w-full h-full object-cover' alt="" />
                    <div className="back-img absolute z-10 bottom-0 left-[50%] translate-x-[-50%]">
                      <div className="flex items-end justify-center">
                        <div className="btn pb-16 font-semibold">
                          <Button text={'Womens'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 md:px-2'>
                  <div className="flex-shrink-0 cart relative w-full h-[710px] sm:h-[1000px] md:h-[550px] lg:h-[510px] xl:h-[560px] 2xl:h-[640px] overflow-hidden cursor-pointer">
                    <img src={slide3Img} className='tran w-full h-full object-cover' alt="" />
                    <div className="back-img absolute z-10 bottom-0 left-[50%] translate-x-[-50%]">
                      <div className="flex items-end justify-center">
                        <div className="btn pb-16 font-semibold">
                          <Button text={'Womens'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 md:px-2'>
                  <div className="flex-shrink-0 cart relative w-full h-[710px] sm:h-[1000px] md:h-[550px] lg:h-[510px] xl:h-[560px] 2xl:h-[640px] overflow-hidden cursor-pointer">
                    <img src={slide1Img} className='tran w-full h-full object-cover' alt="" />
                    <div className="back-img absolute z-10 bottom-0 left-[50%] translate-x-[-50%]">
                      <div className="flex items-end justify-center">
                        <div className="btn pb-16 font-semibold">
                          <Button text={'Womens'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;