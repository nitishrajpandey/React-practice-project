import { Hero, Navbar } from "./Components";
import Explore from "./Components/Explore";
import MembershipPlainCard from "./Components/MembershipPlainCard";
import MemoriesCard from "./Components/MemoriesCard";
import PaymentMethod from "./Components/PaymentMethod";

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

        {/* Hero section */}
        <div className=" px-6 flex-center bg-gradient-to-b from-emerald-200 to-white">
          <div className=" xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>

        {/* MemoriesCard section */}
        <div className="xl:max-w-[1280px] w-full">
          <MemoriesCard />
        </div>

        {/* Explore section  */}
        <div className="xl:max-w-[1280px] w-full">
          <Explore />
        </div>

        {/* brandsection */}

        <div className="xl:max-w-[1280px] w-full">
          <PaymentMethod />
        </div>

        {/* membership card component */}
        <div className="xl:max-w-[1280px] w-full">
          <MembershipPlainCard />
        </div>
      </div>
    </>
  );
}

export default App;
