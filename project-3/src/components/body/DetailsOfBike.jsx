// import React from 'react'

function DetailsOfBike() {
  return (
    <>
    <div className="flex md:flex-row md:flex-wrap flex-col items-center gap-10 lg:gap-0  justify-evenly mb-10">
        <div className="border-[1px] border-gray-200 shadow-lg shadow-[#b8b8b8] outline-none w-[200px] h-[140px] flex flex-col items-center justify-center rounded-md hover:scale-110 duration-500 hover:ease-in-out">
            <div className="flex items-baseline gap-3">
                <h1 className="font-bold text-5xl text-[#42454A]">105</h1>
                <h3 className="font-semibold text-2xl text-[#42454A]">lbs</h3>
            </div>
            <h3 className="text-center mt-3">Net Weight</h3>
        </div>
        <div className="border-[1px] border-gray-200 shadow-lg shadow-[#b8b8b8] outline-none w-[200px] h-[140px] flex flex-col items-center justify-center rounded-md hover:scale-110 duration-500 hover:ease-in-out">
            <div className="flex items-baseline gap-3">
                <h1 className="font-bold text-5xl text-[#42454A]">26</h1>
                <h3 className="font-semibold text-2xl text-[#42454A]">mph</h3>
            </div>
            <h3 className="text-center mt-3">Top Speed</h3>
        </div>
        <div className="border-[1px] border-gray-200 shadow-lg shadow-[#b8b8b8] outline-none w-[200px] h-[140px] flex flex-col items-center justify-center rounded-md hover:scale-110 duration-500 hover:ease-in-out">
            <div className="flex items-baseline gap-3">
                <h1 className="font-bold text-5xl text-[#42454A]">38</h1>
                <h3 className="font-semibold text-2xl text-[#42454A]">miles</h3>
            </div>
            <h3 className="text-center mt-3">Max Range</h3>
        </div>
        <div className="border-[1px] border-gray-200 shadow-lg shadow-[#b8b8b8] outline-none w-[200px] h-[140px] flex flex-col items-center justify-center rounded-md hover:scale-110 duration-500 hover:ease-in-out">
            <div className="flex items-baseline gap-3">
                <h1 className="font-bold text-5xl text-[#42454A]">89</h1>
                <h3 className="font-semibold text-2xl text-[#42454A]">nm</h3>
            </div>
            <h3 className="text-center mt-3">Max Torques</h3>
        </div>
        <div className="border-[1px] border-gray-200 shadow-lg shadow-[#b8b8b8] outline-none w-[200px] h-[140px] flex flex-col items-center justify-center rounded-md hover:scale-110 duration-500 hover:ease-in-out">
            <div className="flex items-baseline gap-3">
                <h1 className="font-bold text-5xl text-[#42454A]">22%</h1>
                <h3 className="font-semibold text-2xl text-[#42454A]">slope</h3>
            </div>
            <h3 className="text-center mt-3">Hill Climbing</h3>
        </div>
        <div className="border-[1px] border-gray-200 shadow-lg shadow-[#b8b8b8] outline-none w-[200px] h-[140px] flex flex-col items-center justify-center rounded-md hover:scale-110 duration-500 hover:ease-in-out">
            <div className="flex items-baseline gap-3">
                <h1 className="font-bold text-5xl text-[#42454A]">2x</h1>
                
            </div>
            <h3 className="text-center mt-3">Hydralic disc Brakes</h3>
        </div>
       
    </div>
    </>
  )
}

export default DetailsOfBike