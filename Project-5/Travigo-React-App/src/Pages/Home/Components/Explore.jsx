// import React from 'react'

import { exploredata } from "../../../ContextData/travigoData";
import City from "./City";

function Explore() {
  return (
    <div className="px-10 mb-20">
      <div>
        <h1 className="text-center font-bold text-5xl mb-8">
          Explore The Beauty of World
        </h1>
      </div>
      <div className="flex my-10  flex-wrap lg:justify-center justify-start gap-10">
        {exploredata.map((item) => (
          <City key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
