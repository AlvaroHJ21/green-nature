import React from 'react';
import Button from '../../../atoms/button';

export default function Slider2() {
  return (
    <div>
      <img
        src="https://demo.goodlayers.com/greennature/wp-content/uploads/2015/10/slider-2.jpg"
        alt=""
        className="w-full h-screen max-h-[900px] object-cover"
      />
      <div className="absolute inset-0">
        <div className="container h-full flex flex-col gap-4 justify-center items-start mt-32">
          <h2 className="text-xgreen-900">
            <div className="text-7xl font-thin">Help Us</div>
            <div className="text-[72px] font-bold uppercase">Save Anim<span className='text-white'>als</span></div>
          </h2>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
