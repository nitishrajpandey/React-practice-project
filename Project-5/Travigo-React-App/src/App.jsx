import { Hero, Navbar } from "./Components";

function App() {
  return (
    <>
      <div className=" w-full overflow-hidden">
        {/* NavBar  */}
        <div className="px-16 lg:px-6 flex-center">
          <div className=" xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>

        {/* Hero section */}
        <div className="sm:px-16 px-6 flex-center">
          <div className=" xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>

        
      </div>
    </>
  );
}

export default App;
