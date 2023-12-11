// eslint-disable-next-line no-unused-vars
import React from "react";
import image from "../../assets/header image.png";
import image2 from "../../assets/header play button.png";
// import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <div>
      <div className="p-10 mt-20 md:p-5 lg:p-10 grid grid-flow-row gap-20 md:gap-0 md:grid-cols-4">
        <div className="flex flex-col justify-center items-center md:block mt-10 xl:mt-14 col-span-2">
          <div>
            <h1 className="text-5xl sm:text-7xl md:text-5xl lg:text-6xl text-[#42454A]">
              LET&apos;S RIDE
            </h1>
            <h1 className="text-[36px] sm:text-7xl md:text-5xl lg:text-6xl text-[#42454A] font-bold">
              THE FUTURE.
            </h1>
          </div>
          <div className=" mt-20 mb-12 border-2 border-[#42454A] w-[50%]"></div>
          <div>
            <p className=" text-xl text-[#42454A]">
              Simple and sleek design with users in mind.
            </p>
          </div>
          <div className="flex items-center gap-5 sm:gap-20 md:gap-12 lg:gap-14 mt-10">
            <div className="flex items-center gap-4">
              <button className=" px-5 py-5 bg-[#42454A]">
                {/* <FaArrowRight className="text-white" /> */}
              </button>
              <div>
                <h1 className="font-bold">Buy Now</h1>
              </div>
            </div>

            <div className=" font-bold">
              <h3>Watch our</h3>
              <h3> Video how it</h3>
              <h3>works</h3>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        <div className=" col-span-2 md:mt-10 lg:mt-0">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
