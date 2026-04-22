import React from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';



const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, starPeople, casio]

const Brands = () => {
  return (
    <div className='py-15 mx-4 space-y-15 p-5 border-b border-dashed border-[#03373D]'>
      <h2 className='text-[#03373D] text-3xl lg:text-4xl font-extrabold text-center max-w-3xl mx-auto'>We've helped thousands of sales teams</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
      >
        {
          brandLogos.map((logo, index) => <SwiperSlide key={index}><img src={logo} alt="logo" /></SwiperSlide>)
        }
        
        
      </Swiper>
    </div>
  );
};

export default Brands;