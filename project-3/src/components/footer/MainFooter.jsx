// import React from 'react'

import image from "../../assets/footer scooter.png";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

function MainFooter() {
  return (
    <>
      <div className=" grid gap-20 grid-flow-row mt-20 pb-20 md:grid-cols-3 bg-[#42454A] ">
        <div className="">
          <img className=" md:relative md:bottom-20" src={image} alt="" />
        </div>

        <div className=" flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-32 mt-20 col-span-2">
          <div>
            <h1 className="text-white font-bold text-xl">About</h1>
            <ul className="flex flex-col gap-5 mt-5">
              <li>
                <a className="text-white" href="#">
                  Company
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Teams
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-white font-bold text-xl">Resources</h1>
            <ul className="flex flex-col gap-5 mt-5">
              <li>
                <a className="text-white" href="">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-white" href="">
                  Application
                </a>
              </li>
              <li>
                <a className="text-white" href="">
                  FQA Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl">Legals</h1>
            <ul className="flex flex-col gap-5 mt-5">
              <li>
                <a className="text-white" href="">
                  Copyright Privacy
                </a>
              </li>
              <li>
                <a className="text-white" href="">
                  Policy Disclaimer
                </a>
              </li>
              <li>
                <a className="text-white" href="">
                  Terms
                </a>
              </li>
            </ul>

            <div className="flex gap-5 mt-4">
              {/* <FaFacebook className="text-3xl text-white" />
              <FaTwitterSquare className="text-3xl text-white" />
              <FaInstagram className="text-3xl text-white" /> */}
            </div>
          </div>
        </div>
        <div className="text-center md:col-span-3 text-white">
          <h1>© Nitish Raj 2023. All rights reserved.</h1>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
