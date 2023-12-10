import { Outlet } from "react-router-dom";
import { Navbar } from "./Components";

import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className=" w-full  overflow-hidden">
        {/* NavBar  */}
        <div className=" flex-center ">
          <div className={`  fixed  top-0    z-50  xl:max-w-[1280px] w-full`}>
            <Navbar />
          </div>
        </div>
        <div>
          <Outlet />
        </div>

        {/* footer */}
        <div className="w-full">
          <Feedback />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
