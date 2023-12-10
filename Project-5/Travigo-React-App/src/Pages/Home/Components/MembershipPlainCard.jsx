// import React from 'react'

import { memberShipPlanDetails } from "../../../ContextData/travigoData";
import PlainCard from "./PlainCard";

function MembershipPlainCard() {
  return (
    <div className="mb-20 ">
      <div className="flex flex-col items-center my-20">
        <h1 className="ss:text-2xl md:text-3xl lg:text-4xl text-5xl font-bold mb-4">
          {memberShipPlanDetails.title}
        </h1>
        <p className="mb-10">{memberShipPlanDetails.subtitle}</p>
        <div className=" flex gap-5 px-10  py-3 border border-[#e5e7eb] rounded-full  ring-slate-100 ring-1 shadow shadow-slate-200">
          <button className="button-emrald">
            {memberShipPlanDetails.btn1}
          </button>
          <button className="button-light1">
            {memberShipPlanDetails.btn2}
          </button>
        </div>
      </div>

      <div className="flex flex-row lg:flex-col lg:items-center justify-center gap-10 ">
        {memberShipPlanDetails.plan.map((item) => (
          <PlainCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MembershipPlainCard;
