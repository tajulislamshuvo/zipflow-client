import React from 'react';
import { Link } from 'react-router';
import marchent from '../../../assets/location-merchant.png'

const SatisfactionCard = () => {
  return (
    <div className='flex md:flex-row gap-9 flex-col-reverse justify-between items-center bg-[#03373D] sm:rounded-2xl p-6 py-11 text-center md:text-left sm:p-11 md:p-15 lg:p-20 my-17'>
      <div className="  space-y-6">
        <h2 className='font-extrabold text-3xl  md:text-4xl text-white'>Merchant and Customer Satisfaction is Our First Priority</h2>
        <p className='text-white/80 text-sm md:text-[16px]'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
        <div className="flex flex-col md:flex-row md:gap-3 gap-5 items-center">
          <Link to="/login" className='btn bg-[#CAEB66] px-6 py-3 rounded-full font-bold hover:bg-[#CAEB66]/90 hover:shadow-2xl hoverEffect shadow-none'>Become a Merchant</Link>

          <Link to="/rider" className='btn text-[#CAEB66] bg-transparent px-6 py-3 rounded-full font-bold hover:bg-[#CAEB66] hover:text-[#03373D] hoverEffect shadow-none'>Earn with ZipFlow Courier</Link>
        </div>
      </div>
      <div className="object-contain px-6 md:p-0">
        <img src={marchent} alt="" />
      </div>
    </div>
  );
};

export default SatisfactionCard;