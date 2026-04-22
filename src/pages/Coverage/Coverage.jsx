import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const position = [23.6850, 90.3563];
  const serviceCenters = useLoaderData();
  const locationRef = useRef(null);
  // console.log(serviceCenters)

  const handleSearch = (e) =>{
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
    const coord = [district.latitude, district.longitude];
    locationRef.current.flyTo(coord, 13)
    console.log(coord)
  }
  return (
    <div className='my-8 sm:rounded-2xl p-3 bg-white px-4 py-6 sm:px-7 sm:py-7 md:px-10 md:lg-10 lg:px-15 lg:py-15 space-y-6'>
      <h2 className='text-[#03373D] text-2xl sm:text-3xl lg:text-4xl flex font-extrabold justify-center md:justify-start'>We are available in 64 districts</h2>
      <div className="">
        <form onSubmit={handleSearch} className='flex gap-2 justify-center md:justify-start'>
                  <label className="input rounded-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" name='location' className="grow" placeholder="Search" />
        </label>
        <button className="btn bg-[#caeb66] font-bold rounded-full">Success</button>
        </form>
      </div>
      <div className="space-y-5">
        <div className="">
          <h3 className='text-[#03373D] text-xl sm:text-xl lg:text-2xl flex font-bold justify-center md:justify-start mt-9 border-t border-dashed border-[#03373D] pt-5'>We deliver almost all over Bangladesh</h3>
        </div>
        <div className="w-full h-130 border border-gray-50 rounded-2xl overflow-hidden">
           <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='h-full w-full' ref={locationRef}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

              {
                serviceCenters.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Service area: {center.covered_area.join(', ')}
                
              </Popup>
            </Marker>)
              }

            
           </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;