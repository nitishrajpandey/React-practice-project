// import React from 'react'

import { memory } from "../../../Assets";

function MemoriesCard() {
  return (
    <div className="flex flex-row xl:flex-col-reverse xl:justify-center xl:items-center lg:gap-10 gap-20 px-10  my-28  ">
      <div className="xl:w-[50%] w-[30%]">
        <img src={memory} alt="" />
      </div>
      <div className="xl:w-[100%] w-[60%] ss:px-0 px-5 pt-10">
        <div>
          <h1 className="ss:text-3xl text-5xl font-semibold">
            Sweet Memories <br /> Come To Life Again
          </h1>
          <p className="my-6 ">
            What we have always taken care for 10 years is always prioritizing
            the comfort of our users. So, do not our quality.
          </p>
        </div>

        <div className="flex  justify-between   ">
          <div className="w-[30%] h-[200px]  items-center flex flex-col justify-center text-center bg-[#75EAB4] rounded-xl hover:scale-105 duration-300 ease-in-out">
            <h1 className="font-bold md:text-2xl lg:text-3xl text-4xl">10</h1>
            <h3 className="font-medium ss:text-sm md:text-lg text-xl">
              Year Experience
            </h3>
          </div>
          <div className="w-[30%] flex flex-col items-center justify-center bg-[#75EAB4] rounded-xl hover:scale-105 duration-300 ease-in-out ">
            <h1 className="font-bold md:text-2xl lg:text-3xl text-4xl">400</h1>
            <h3 className="font-medium ss:text-sm  md:text-lg text-xl ">
              Year Collaboration
            </h3>
          </div>
          <div className="w-[30%] flex flex-col items-center justify-center bg-[#75EAB4] rounded-xl hover:scale-105 duration-300 ease-in-out ">
            <h1 className="font-bold md:text-2xl lg:text-3xl text-4xl">30K+</h1>
            <h3 className="font-medium ss:text-sm md:text-lg text-xl">
              Happy Customer
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoriesCard;
