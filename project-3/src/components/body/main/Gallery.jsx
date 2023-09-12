// import React from 'react'
import image1 from '../../../assets/gallery scooter.png';
import image2 from '../../../assets/gallery built quality.png';
import image3 from '../../../assets/gallery parts.png';

function Gallery() {
  return (
    <>
      <div className="mt-32">
        <div className="px-5 sm:px-0">
          <h1 className=" text-[#42454A] font-bold text-5xl text-center">
            Gallery
          </h1>
          <p className=" text-center mt-10 text-xl text-[#42454A]">
            View gallery of our products and make yourself satisfied with our
            creation.
          </p>
        </div>



        <div className='px-5'>

          <div className='grid grid-flow-row md:grid-cols-2 gap-20 mt-10 sm:mt-12 md:mt-28'>
            <div>
              <h1 className=' z-20 relative font-bold text-4xl text-[#42454A] top-36 left-10'>Scooter</h1>
              <img className='w-full relative top-20' src={image1} alt="" />
            </div>
            <div>
            <h1 className=' z-20 relative font-bold text-4xl text-[#42454A] top-14 left-10'>Built Quality</h1>
              <img src={image2} alt="" />
            </div>
          </div>

          <div className='grid grid-flow-row md:grid-cols-2 gap-10'>
            <div className='z-30 relative md:w-[full] lg:w-[70%] top-20'>
              <div className='border-2 border-[#42454A] rounded-lg my-8 py-4 text-center font-bold text-[#42454A] text-3xl '>Battery Images</div>
              <div className='border-2 border-[#42454A] rounded-lg my-14 py-4 text-center font-bold text-[#42454A] text-3xl'>Spare Parts Images</div>
              <div className='border-2 border-[#42454A] rounded-lg my-8 py-4 text-center font-bold text-[#42454A] text-3xl'>Charging Cable Images</div>
            </div>
            <div>
              <h1 className=' z-20 relative font-bold text-4xl text-[#42454A] top-14 left-10' >Parts</h1>
              <img className='' src={image3} alt="" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
