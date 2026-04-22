import React from 'react';
import bannerImage1 from "../../assets/banner/Gemini_banner_image_1.png"
import bannerImage3 from "../../assets/banner/Gemini_banner_image_3.png"
import bannerImage4 from "../../assets/banner/banner-image-4.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='my-7 mx-2 md:mx-0'>
      <div className="rounded-2xl bg-white overflow-hidden shadow-xl">
       <Carousel 
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}>

        <div className="w-full bg-white   p-6 md:p-10 lg:p-18 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

  {/* Text Section */}
      <div className="space-y-5 text-center lg:text-left max-w-2xl">
    
       <h2 className="text-3xl md:text-5xl lg:text-[56px] leading-tight font-extrabold">
        Lightning <span className="text-[#ACC857]">Fast Delivery</span> & Hassle-Free Pickup
      
       </h2>

       <p className="text-[#606060] text-sm md:text-base">
      Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
      From personal packages to business shipments — we deliver on time, every time.
       </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
      <button className="bg-[#CAEB66] px-6 py-3 rounded-full font-bold hover:bg-[#CAEB66]/80 transition">
        Track your parcel
      </button>

      <button className="bg-white text-black/80 px-6 py-3 border border-gray-300 rounded-full font-bold hover:bg-gray-100 transition">
        Be A Rider
      </button>
    </div>

  </div>

  {/* Image Section */}
  <img 
    src={bannerImage1} 
    alt="banner" 
    className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
  />

      </div>

      <div className="w-full bg-white   p-6 md:p-10 lg:p-18  flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

  {/* Text Section */}
      <div className="space-y-5 text-center lg:text-left max-w-2xl">
    
       <h2 className="text-3xl md:text-5xl lg:text-[56px] leading-tight font-extrabold">
      Fastest <span className="text-[#ACC857]">Delivery</span> & Easy <span className="text-[#ACC857]">Pickup</span>  
      
      
       </h2>

       <p className="text-[#606060] text-sm md:text-base">
      Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
       </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
      <button className="bg-[#CAEB66] px-6 py-3 rounded-full font-bold hover:bg-[#CAEB66]/80 transition">
        Track your parcel
      </button>

      <button className="bg-white text-black/80 px-6 py-3 border border-gray-300 rounded-full font-bold hover:bg-gray-100 transition">
        Be A Rider
      </button>
    </div>

  </div>

  {/* Image Section */}
  <img 
    src={bannerImage3} 
    alt="banner" 
    className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
  />

      </div>

      <div className="w-full bg-white  p-6 md:p-10 lg:p-18  flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

  {/* Text Section */}
      <div className="space-y-5 text-center lg:text-left max-w-2xl">
    
       <h2 className="text-3xl md:text-5xl lg:text-[56px] leading-tight font-extrabold">
      Delivery in <span className='text-[#ACC857]'>30 Minutes</span>  at your doorstep 
      
       </h2>

       <p className="text-[#606060] text-sm md:text-base">
      Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
      From personal packages to business shipments — we deliver on time, every time.
       </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
      <button className="bg-[#CAEB66] px-6 py-3 rounded-full font-bold hover:bg-[#CAEB66]/80 transition">
        Track your parcel
      </button>

      <button className="bg-white text-black/80 px-6 py-3 border border-gray-300 rounded-full font-bold hover:bg-gray-100 transition">
        Be A Rider
      </button>
    </div>

  </div>

  {/* Image Section */}
  <img 
    src={bannerImage4} 
    alt="banner" 
    className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
  />

      </div>

       </Carousel>

      </div>

      

    </div>
  );
};

export default Banner;