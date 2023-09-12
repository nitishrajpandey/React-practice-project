// import React from 'react'

import image from '../../../assets/golf bag rock.png';
import image2 from '../../../assets/Icon.png';
import image3 from '../../../assets/shopping rack.png';

function MultipleAccessories() {
  return (
    <>
    <div>
    <div className="px-5 sm:px-0">
          <h1 className=" text-[#42454A] font-bold text-5xl text-center">
          Multiple Accessories
          </h1>
          <p className=" text-center mt-10 text-xl text-[#42454A]">
          There are multiple modes for the scooter for your multiple needs.
          </p>
        </div>




        <div className="mt-20 px-10 md:px-0 flex flex-col md:flex-row lg:gap-20">
         
          <div className="flex justify-center md:justify-start items-center px-8 md:w-[100%] lg:w-fit">

            <ul className=" flex flex-col gap-8">
            <h1 className='text-[#42454A] font-bold text-5xl block '>Golf Bag Rock</h1>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Material: Aluminium alloy</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Color: Black</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Capacity: 45lbs</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Ease: Steady & adjustable</span></li>

            </ul>
          </div>

          <div className='flex items-center mt-10 md:mt-0'>
            <img className="" src={image} alt="" />
          </div>
        </div>


        <div className="mt-20 px-10  flex flex-col md:flex-row md:gap-10 lg:gap-20">
          <div className='md:w-[50%] lg:w-fit'>
            <img className="" src={image3} alt="" />
          </div>
          <div className="flex justify-center items-center mt-10 md:mt-0">
            <ul className=" flex flex-col gap-8">
            <h1 className='text-[#42454A] font-bold text-5xl block '>Shopping Rack</h1>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Material: Aluminium alloy</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Color: Black</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Capacity: 45lbs</span></li>
             <li className="flex"><img className=" inline-block" src={image2} alt="" />
             <span className=" inline-block font-semibold text-xl pl-4">Ease: Steady & adjustable</span></li>

            </ul>
          </div>
        </div>


    <div className='flex justify-center mt-20 px-8 '>
        <div className='border-2 border-[#42454A] rounded-lg inline-block'>
            <h1 className=" text-[#42454A] font-bold text-2xl md:text-3xl lg:text-4xl text-center px-4 py-2 sm:px-10 sm:py-4 md:px-12 md:py-4 lg:px-16 lg:py-8">More Accessories Coming Soon</h1>
        </div>
    </div>


    </div>
    </>
  )
}

export default MultipleAccessories