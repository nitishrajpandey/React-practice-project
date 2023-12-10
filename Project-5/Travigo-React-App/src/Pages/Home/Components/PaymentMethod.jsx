// import React from 'react'

import { brand1, brand2, brand3, brand4, brand5 } from "../../../Assets";

function PaymentMethod() {
  return (
    <div className="my-10 md:px-10 px-20">
      <div className="flex justify-between gap-5 overflow-x-scroll scroll-smooth scroll-hidden ">
        <img className="w-44" src={brand1} alt="" />
        <img className="w-44" src={brand2} alt="" />
        <img className="w-44" src={brand3} alt="" />
        <img className="w-44" src={brand4} alt="" />
        <img className="w-44" src={brand5} alt="" />
      </div>
    </div>
  );
}

export default PaymentMethod;
