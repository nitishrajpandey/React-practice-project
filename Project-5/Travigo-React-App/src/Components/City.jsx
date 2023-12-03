/* eslint-disable react/prop-types */
// import React from 'react'

function City({ item }) {
  return (
    <div className="flex gap-5 w-[300px] items-center ">
      <div className=" w-20">
        <img src={item.img} alt="" className="w-full rounded-xl" />
      </div>
      <div>
        <h1 className="font-bold">{item.city}</h1>
        <p>{item.time}</p>
      </div>
    </div>
  );
}

export default City;
