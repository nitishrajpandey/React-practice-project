// import React from 'react'

function Feedback() {
  return (
    <div className=" lg:max-w-[90%] max-w-[70%] p-5 mx-auto  border border-[#45D99D] rounded-2xl relative top-14 bg-white bg-opacity-50 z-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-4xl mb-2">Get In Touch With Us</h1>
          <p className=" font-medium">
            Questions and Feedback? We would love to hear for you.
          </p>
        </div>
        <div className="outline-none border border-slate-100 shadow-md shadow-slate-100 rounded-3xl ">
          <input
            type="text"
            placeholder="Email Address"
            className="outline-none text-xl px-4 py-2 border- border-slate-100 shadow-md shadow-slate-100 rounded-3xl "
          />
          <button className="button-emrald ">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
