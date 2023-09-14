// import React from 'react'

import image from "../../assets/serhiy hipskyy.png";
import image1 from "../../assets/Justus Menke.png";
import image2 from "../../assets/Britain Eriksen.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft} from "react-icons/fa";

function Testimonials() {
  return (
    <>
      <div className="py-20 bg-[#FAFAFA]">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#42454A] text-center">
            Testimonials
          </h1>
        </div>

        <div className="flex md:flex-row flex-col gap-10 lg:gap-20 justify-evenly items-center mb-10 md:px-10  xl:px-20 px-3">
          <div className="flex flex-col justify-center items-center py-5 outline-none border border-gray-300 hover:scale-110 duration-500 hover:ease-in-out hover:shadow-lg hover:shadow-gray-500 rounded-lg ">
            <dir className="flex justify-center items-center">
              <img
                className="w-24"
                src="https://as1.ftcdn.net/v2/jpg/01/64/65/46/1000_F_164654600_JJ7D1mPKQCu7hi1VyaN765CNxZEwWsef.jpg"
                alt=""
              />
            </dir>
            <div className="text-center px-5 sm:px-5 lg:px-14">
              <p className="text-lg ">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguilde and demoralized by the charms of
                pleasure.
              </p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-[#42454A]">Serhiy Hipskyy</h3>
                <p>CEO Universal</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-5 outline-none border border-gray-300 hover:scale-110 duration-500 hover:ease-in-out hover:shadow-lg hover:shadow-gray-500 rounded-lg">
            <dir className="flex justify-center items-center">
              <img
                className="w-24"
                src="https://as1.ftcdn.net/v2/jpg/01/64/65/46/1000_F_164654600_JJ7D1mPKQCu7hi1VyaN765CNxZEwWsef.jpg"
                alt=""
              />
            </dir>
            <div className="text-center px-5 sm:px-5 lg:px-14">
              <p className="text-lg ">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguilde and demoralized by the charms of
                pleasure.
              </p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <div>
                <img src={image1} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-[#42454A]">Jetus Menke</h3>
                <p>CEO Eronaman</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-5 outline-none border border-gray-300 hover:scale-110 duration-500 hover:ease-in-out  hover:shadow-lg hover:shadow-gray-500 rounded-lg">
            <dir className="flex justify-center items-center">
              <img
                className="w-24"
                src="https://as1.ftcdn.net/v2/jpg/01/64/65/46/1000_F_164654600_JJ7D1mPKQCu7hi1VyaN765CNxZEwWsef.jpg"
                alt=""
              />
            </dir>
            <div className="text-center px-5 sm:px-5 lg:px-14">
              <p className="text-lg ">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguilde and demoralized by the charms of
                pleasure.
              </p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <div>
                <img src={image2} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-[#42454A]">Britain Eriksen</h3>
                <p>CEO Universal</p>
              </div>
            </div>
          </div>
        </div>



        <div className="flex justify-center gap-10">
            <button className="px-6 py-5 rounded-full border-2 border-[#42454A] hover:bg-[#727374] duration-300 ">
            <FaArrowLeft className="text-black " />
                 </button>
            <button className="px-6 py-5 border-2 border-[#42454A] rounded-full hover:bg-[#727374] duration-300 ">
            <FaArrowRight className="text-black" />
                 </button>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
