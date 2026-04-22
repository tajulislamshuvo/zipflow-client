import React from 'react';
import { 
  FaTruck, 
  FaGlobe, 
  FaBox, 
  FaMoneyBillWave, 
  FaBuilding, 
  FaUndo 
} from 'react-icons/fa';

const services = [
  {
    icon: FaTruck,
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    highlight: false,
  },
  {
    icon: FaGlobe,
    title: "Nationwide Delivery",
    description: "We deliver nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    highlight: true,
  },
  {
    icon: FaBox,
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    highlight: false,
  },
  {
    icon: FaMoneyBillWave,
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    highlight: false,
  },
  {
    icon: FaBuilding,
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support.",
    highlight: false,
  },
  {
    icon: FaUndo,
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    highlight: false,
  },
];

const Services = () => {
  return (
    <div className="bg-[#0A3D3A] py-16 px-6 font-sans my-7 sm:rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  service.highlight 
                    ? 'bg-[#CAEB66] text-black ' 
                    : 'bg-white text-gray-900'
                }`}
              >
                {/* Icon Circle */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all group-hover:rotate-12 ${
                  service.highlight 
                    ? 'bg-white text-[#0A3D3A]' 
                    : 'bg-[#0A3D3A] text-white'
                }`}>
                  <Icon className="text-4xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-center mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-center text-[15px] leading-relaxed ${
                  service.highlight ? 'text-gray-800' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;