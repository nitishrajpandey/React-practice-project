// import React from 'react'

import { banner } from "../../../Assets";
import { bannerData } from "../../../ContextData/travigoData";

function Banner() {
  return (
    <div className="xl:max-w-[90%] max-w-[75%] mx-auto mb-20 ">
      <div className="relative   ">
        <img className="h-[35vh] w-full rounded-xl" src={banner} alt="" />
        <div className=" absolute top-[50%] translate-y-[-50%] left-[10%] ">
          <h1 className="font-bold text-3xl mb-2">{bannerData.title}</h1>
          <p className="mb-2">{bannerData.subtitle}</p>
          <button className="text-white px-5 py-2 bg-[#1f1e1e] rounded-3xl active:scale-95 duration-300 ease-in-out">
            {bannerData.btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
