// import React from 'react'

function MembershipPlainCard() {
  return (
    <div>
      <div className="flex flex-col items-center my-20">
        <h1 className="ss:text-2xl md:text-3xl lg:text-4xl text-5xl font-bold mb-4">
          Choose The Plan That Suits You
        </h1>
        <p className="mb-10">
          Many attractive offers by becomming a premium member
        </p>
        <div className=" flex gap-5 px-10  py-3 border border-[#e5e7eb] rounded-full  ring-slate-100 ring-1 shadow shadow-slate-200">
          <button className="button-emrald">Monthly</button>
          <button className="button-light1">Yearly</button>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default MembershipPlainCard;
