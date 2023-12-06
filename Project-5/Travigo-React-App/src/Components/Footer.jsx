// import React from 'react'

import { footer } from "../ContextData/travigoData";
// import FooterNavLink from "./FooterNavLink";

function Footer() {
  console.log(footer);
  return (
    <div className="sm:px-5 lg:px-10 px-32 pb-10 pt-28 bg-[#44D99D]">
      <div className="flex justify-between mb-10">
        <div>
          {footer.section1.map((item, index) => (
            <div key={index}>
              <h1 className="font-bold text-center ">{item.title}</h1>
              <li className="list-none mb-2 text-center">
                <a href="#">{item.link}</a>
              </li>
            </div>
          ))}
        </div>
        <div>
          {footer.section2.map((item, index) => (
            <div key={index}>
              <h1 className="font-bold text-center">{item.title}</h1>
              <li className="list-none mb-2 text-center">
                <a href="#">{item.link}</a>
              </li>
            </div>
          ))}
        </div>
        <div>
          {footer.section2.map((item, index) => (
            <div key={index}>
              <h1 className="font-bold text-center">{item.title}</h1>
              <li className="list-none mb-2 text-center">
                <a href="#">{item.link}</a>
              </li>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#444444] w-[75%] mx-auto"></div>
      <div>
        <div className="mt-10">
          {footer.bottomBar.map((item, index) => (
            <div key={index}>
              <div className="text-center font-semibold">
                <p className="">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
