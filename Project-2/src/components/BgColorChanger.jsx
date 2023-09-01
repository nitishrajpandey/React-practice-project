import { useState } from "react";

function BgColorChanger() {
  const [color,setColor] = useState("black");

  return (
    <>
      <div className=" w-full h-screen bg-[{current}] "style={{backgroundColor:color}}>
        <div className="flex justify-center">
        <div className=" fixed flex flex-wrap gap-5 m-7 rounded-2xl items-center bottom-20 p-2 bg-white outline-none justify-center">
            <button onClick={() => setColor("red")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-red-500">red</button>
            <button onClick={() => setColor("green")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-green-500">green</button>
            <button onClick={() => setColor("blue")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-blue-600">blue</button>
            <button onClick={() => setColor("pink")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-pink-500">pink</button>
            <button onClick={() => setColor("orange")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-orange-500">orange</button>
            <button onClick={() => setColor("yellow")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-yellow-500">yellow</button>
            <button onClick={() => setColor("gray")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-gray-500">gray</button>
            <button onClick={() => setColor("cyan")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-cyan-500">cyan</button>
            <button onClick={() => setColor("lime")} className="px-6 py-2 text-white rounded-2xl capitalize outline-none bg-lime-500">lime</button>
            <button onClick={() => setColor("white")} className="px-6 py-2 border border-black text-black font-bold rounded-2xl capitalize outline-none bg-white">white</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default BgColorChanger;
