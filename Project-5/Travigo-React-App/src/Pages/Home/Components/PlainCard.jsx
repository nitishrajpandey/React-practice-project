/* eslint-disable react/prop-types */
// import React from 'react'

function PlainCard({ item }) {
  return (
    <div className="border border-slate-100 rounded-2xl shadow-lg shadow-slate-200 p-5 hover:scale-105 duration-300 ease-in-out lg:max-w-[650px]">
      <div className="flex justify-between gap-10  items-center ">
        <div className="flex gap-5 items-center">
          <img className="w-14" src={item.planIcon} alt="" />
          <div className="">
            <h1 className="font-semibold text-xl">{item.cardTitle}</h1>
            <p>{item.cardSubtitle}</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">{item.cardType}</h2>
        </div>
      </div>

      <div className="border-t border-[#cfcfcf] my-5"></div>

      <div className=" px-5 ">
        {item.planContent.map((contentItem, index) => (
          <div key={index} className="flex items-center gap-5 mb-4">
            <img src={contentItem.iconbox} alt="" />
            <p className=" hover:text-[#10B981]  font-medium text-base">
              {contentItem.Text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5 ">
        <button className="button-emrald">{item.btn}</button>
      </div>
    </div>
  );
}

export default PlainCard;
