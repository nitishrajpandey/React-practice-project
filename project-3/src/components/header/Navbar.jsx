import logo from "../../assets/logo.png";
import { FaBars } from 'react-icons/fa';
function Navbar() {
  return (
    <>
    <nav className=" fixed w-full h-[10vh] flex justify-between items-center px-5 md:px-10 border-b border-b-gray shadow-md">


    <div className=" inline-block md:hidden">
        <FaBars className="inline-block text-xl"/>
        <img className=" inline-block ml-5 w-14" src={logo} alt="" />
    </div>

    <div className=" hidden md:block">
        <img className="" src={logo} alt="" />
    </div>
    <div className=" hidden md:block">
        <ul className="flex justify-between gap-10 lg:gap-20">
            <li className=""><select name="" id="" className=" bg-transparent border-none outline-none">
                <option value=""><a href="">PRODUCT</a></option>
                <option value=""><a href="">E-BIKE</a></option>
                <option value=""><a href="">SMART HELMET</a></option>
                <option value=""><a href="">SPORTS GEARS</a></option>
                <option value=""><a href="">SAFETY GEARS</a></option>
                </select></li>

                <li><a href="">GALLERY</a></li>
                <li><a href="">CONTACT</a></li>
        </ul>
    </div>

    <div className="">
        <button className=" mr-4 px-2 py-1 sm:px-4 sm:py-2 shadow-md rounded-md ">LOG IN</button>
        <button className="px-2 py-1 sm:px-4 sm:py-2 bg-[#42454A] text-white  rounded-md ">SIGN UP</button>
    </div>
    </nav>
    </>
  );
}
export default Navbar;
