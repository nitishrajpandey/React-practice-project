// import React from 'react'
import image from "../../../assets/product information image.png";
import image2 from '../../../assets/Icon.png';

function ProductInformation() {
  return (
    <>
      <div className=" mt-28">
        <div className="px-5 sm:px-0">
          <h1 className=" text-[#42454A] font-bold text-5xl text-center">
            Product Information
          </h1>
          <p className=" text-center mt-10 text-xl text-[#42454A]">
            Our Scooter has following unique design and technology features:
          </p>
        </div>

        <div className="mt-20 px-10 md:px-0 flex flex-col md:flex-row lg:gap-20">
          <div>
            <img className=" animate-pulse" src={image} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <ul className=" flex flex-col gap-8">
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Lightweight aircraft grade aluminium frame</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Car grade lithium battery</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Self-balanced</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Plug n play</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Quick release adapter</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">RFID key card</span></li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInformation;
