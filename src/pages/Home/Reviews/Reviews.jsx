import React, { use } from 'react';
import 'swiper/css';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewPromise}) => {

  const reviews = use(reviewPromise);

  return (
    <div className='my-7 space-y-5 md:px-5'>
      <h2 className='text-[#03373D] text-3xl lg:text-4xl font-extrabold text-center max-w-3xl mx-auto'>What our customers are sayings</h2>
      <p className='text-[#606060] max-w-208 py-2 px-5 md:px-0 text-center mx-auto text-sm md:text-[16px]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      <Swiper
      
      
      modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="mySwiper"
      >
        {
          reviews.map((review, index) => 
            <SwiperSlide key={index} className='overflow-hidden'>
                <div className="h-full p-3">
                  <ReviewCard review={review}></ReviewCard>
                </div>
             </SwiperSlide>)
        }
        
      </Swiper>
    </div>
  );
};

export default Reviews;