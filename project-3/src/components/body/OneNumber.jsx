// import React from 'react'
import image from "../../assets/01.png";

function OneNumber() {
  return (
    <>
      <div className="mb-10 px-10 sm:px-24 flex items-center justify-center sm:justify-end gap-10">

        <div className=" w-20 sm:w-fit">
          <img src={image} alt="" />
        </div>

        <div className="">
          <button className="px-4 py-2 sm:px-6 sm:py-2 rounded-l-[30px] border border-black border-r-0 font-semibold sm:text-2xl cursor-pointer hover:bg-slate-400">
            &lt;
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-2 rounded-r-[30px] border border-black font-semibold sm:text-2xl cursor-pointer hover:bg-slate-400">
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default OneNumber;
