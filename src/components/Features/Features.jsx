import React from 'react';

import { 
  FaMapMarkedAlt, 
  FaShieldAlt, 
  FaHeadset 
} from 'react-icons/fa';

const features = [
  {
    icon: FaMapMarkedAlt,
    title: "Live Parcel Tracking",
    description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    icon: FaShieldAlt,
    title: "100% Safe Delivery",
    description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Call Center Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.",
  },
];

const Features = () => {
  return (
    <div className="mx-4 py-16 px-2 font-sans border-b border-dashed border-[#03373D]">
      <div className="max-w-5xl mx-auto space-y-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 md:p-10 flex flex-col md:flex-row items-start gap-8 group"
            >
              {/* Icon / Illustration Area */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-[#0A3D3A] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-5xl" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;