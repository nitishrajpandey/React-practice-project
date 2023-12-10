// import React from 'react'

import { hero } from "../../../ContextData/travigoData";

function Hero() {
  return (
    <div className="w-full flex flex-col pb-20 mb-20 justify-center items-center relative top-40">
      <div className="flex flex-col py-8">
        <h1 className=" text-7xl lg:text-5xl md:text-4xl sm:text-3xl pb-2 font-bold">
          {hero.title1}
        </h1>
        <h1 className=" text-7xl lg:text-5xl md:text-4xl sm:text-3xl pb-2 font-bold">
          {hero.title2}
        </h1>
      </div>

      <div>
        <p className="text-center pb-8 font-normal ">{hero.description}</p>
      </div>

      <div className=" py-5 flex xss:flex-col gap-10">
        <button className=" button-emrald">{hero.btn1}</button>
        <button className=" button-light">{hero.btn2}</button>
      </div>
      <div className="flex justify-center mt-10">
        <img
          src={hero.img}
          alt=""
          className="drop-shadow-emrald ss:w-[100%] md:w-[90%] w-[75%]"
        />
      </div>
    </div>
  );
}

export default Hero;
