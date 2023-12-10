// import React from 'react'

import {
  Banner,
  Explore,
  Hero,
  MembershipPlainCard,
  MemoriesCard,
  PaymentMethod,
} from "./Components";

function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className=" px-6 flex-center bg-gradient-to-b from-emerald-200 to-white">
        <div className=" xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>
      ;{/* MemoriesCard section */}
      <div className="xl:max-w-[1280px] w-full">
        <MemoriesCard />
      </div>
      ;{/* Explore section  */}
      <div className="xl:max-w-[1280px] w-full">
        <Explore />
      </div>
      ;{/* brandsection */}
      <div className="xl:max-w-[1280px] w-full">
        <PaymentMethod />
      </div>
      ;{/* membership card component */}
      <div className="xl:max-w-[1280px] w-full">
        <MembershipPlainCard />
      </div>
      ;{/* banner */}
      <div className="xl:max-w-[1280px] w-full">
        <Banner />
      </div>
      ;
    </div>
  );
}

export default Home;
