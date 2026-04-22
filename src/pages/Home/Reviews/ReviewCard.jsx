import React from 'react';

const ReviewCard = ({review}) => {
  const {user_email, userName, review:testimonial,user_photoURL 
} = review
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-md p-8 relative h-full flex flex-col  items-center">
      <div className="text-6xl text-gray-200 font-light leading-none mb-4">“</div>
      
      <p className="text-gray-600 text-[15.5px] leading-relaxed h-5 mb-8">
        {testimonial}
      </p>

      <div className="border-t border-dashed border-gray-300 mb-6"></div>

      <div className="flex items-center gap-4">
        <div className={`w-11 h-11 bg-teal-700 rounded-full flex items-center justify-center text-white font-semibold overflow-hidden text-lg`}>
          <img src={user_photoURL} alt="" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-lg">
          {userName}
            </h4>
          <p className="text-gray-500 text-sm">
            {user_email}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;