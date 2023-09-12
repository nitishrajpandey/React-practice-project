// import React from 'react'
import image from "../../../assets/gallery scooter.png";
import image1 from "../../../assets/color-scooter-1.png";
import image2 from '../../../assets/color-scooter-2.png';
import image3 from '../../../assets/color-scooter-3.png';
import image4 from '../../../assets/color-scooter-4.png';

function Color() {
  return (
    <>
      <div className="mt-20">
        <div className="px-5 sm:px-0">
          <h1 className=" text-[#42454A] font-bold text-5xl text-center">
            Colors
          </h1>
          <p className=" text-center mt-10 text-xl text-[#42454A]">
            Checkout our Products.
          </p>
        </div>

        <div className="mt-20">
          <img className="w-full" src={image} alt="" />
        </div>

        <div className="flex flex-col  items-center md:flex-row">
          <div className=" relative">
            <img className="" src={image1} alt="" />
            <h1 className=" absolute bottom-24 right-20 md:bottom-20 md:right-16 opacity-60 text-white  text-6xl font-bold ">01</h1>
          </div>
          <div className=" relative">
            <img className="" src={image2} alt="" />
            <h1 className="absolute  bottom-24 right-20 md:bottom-20 md:right-16 opacity-60 text-white  text-6xl font-bold  ">02</h1>
          </div>
          <div className=" relative">
            <img className="" src={image3} alt="" />
            <h1 className="absolute bottom-24 right-20 md:bottom-20 md:right-16 opacity-60 text-white  text-6xl font-bold  ">03</h1>
          </div>
          <div className=" relative">
            <img className="" src={image4} alt="" />
            <h1 className="absolute bottom-24 right-20 md:bottom-20 md:right-16 opacity-60 text-white  text-6xl font-bold  ">04</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Color;
