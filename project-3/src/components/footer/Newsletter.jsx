// import React from 'react'

function Newsletter() {
  return (
    <>
      <div className="mt-10">
        <div className="px-5 sm:px-0">
          <h1 className=" text-[#42454A] font-bold text-5xl md:text-6xl text-center">
            Subscribe To Newsletter
          </h1>
          <p className=" text-center mt-10 text-xl font-semibold text-[#42454A]">
            Subscirbe to our Newsletter to get amazing offers in future.
          </p>
        </div>


        <div className="flex flex-col md:flex-row justify-center gap-5 items-center my-10">

            <input type="email" placeholder="Enter your email" className="bg-[#FAFAFA] rounded-lg text-center py-4 sm:px-14 md:px-20 text-2xl outline-none border border-[#42454A]"  />
            <button className="px-6 py-6 rounded-lg bg-[#42454A] font-semibold text-xl text-white hover:text-[#42454A] hover:bg-[#FAFAFA] border border-[#42454A] shadow-lg duration-500">Get Start</button>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
