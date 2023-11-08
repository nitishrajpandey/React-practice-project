// import React from 'react'3

import { NavLink } from "react-router-dom"
import logo from "../Assets/logo.png"
import menu from "../Assets/menu.svg"
import close from "../Assets/close.svg"
import { navlinks } from "../ContextData/travigoData"
import { useState } from "react"


function Navbar() {

  const [toggle,setToggle]=useState(false)

  return (
    <>
    <nav className=" w-full flex justify-between py-6 items-center">
      <div className=" flex justify-center items-center">
        <NavLink to="/">
          <img src={logo} alt=""  className="w-[128px] h-[48px] "/>
        </NavLink>
      </div>

      <div className="">
        <ul className="flex md:hidden  justify-center items-center">
          {
            navlinks?.map((nav,index)=>(
              <li key={nav.id} className={`font-semibold ${index == navlinks.length-1 ? 'mr-0' : 'mr-10'} cursor-pointer text-lg`}>
                <NavLink className="text-black">
                  {nav.link}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="md:hidden">
            <button className="button-emrald">Join Us</button>
      </div>

      <div className="hidden md:flex">
        <img

        src={toggle ? close : menu}

        alt="menu"
        className="w-[34px] h-[34px] object-contain duration-800 active:ease-in-out "
        onClick={() => setToggle(!toggle)}

        />

        <div
        className={`${toggle ? 'flex' : 'hidden'} 
        absolute top-20 right-0 p-8`
       }
        >

<ul className="flex flex-col items-center gap-5 ">
          {
            navlinks?.map((nav)=>(
              <li key={nav.id} className={`font-semibold  cursor-pointer text-lg`}>
                <NavLink className="text-black">
                  {nav.link}
                </NavLink>
              </li>
            ))
          }
            <button className="font-semibold text-lg button-emrald">Join Us</button>
        </ul>

  

        </div>

        
      </div>
    </nav>
    </>
  )
}

export default Navbar