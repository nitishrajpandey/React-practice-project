// import React from 'react'

import { hero } from "../../ContextData/travigoData";

function Explore() {
  return (
    <div className="w-full flex flex-col pb-20 mb-40 justify-center items-center relative top-40">
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

export default Explore;
