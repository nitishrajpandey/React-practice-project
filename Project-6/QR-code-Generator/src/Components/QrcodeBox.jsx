// import React from 'react'
import QRCode from "react-qr-code";
function QrcodeBox() {
  return (
    <div className=" mt-10 flex flex-col items-center justify-center">
      <QRCode
        value="hello"
        fgColor="blue"
        bgColor="white"
        className="border border-[#DBEE] p-5 rounded-xl"
      />
      {/* <h2 className="mt-3 normal-text-size font-semibold">Hello</h2> */}

      <h3 className=" mt-5 xxs:mt-8 mb-2 opacity-25 text-slate-500 font-medium font-serif">
        Made by Nitish Raj
      </h3>
    </div>
  );
}

export default QrcodeBox;
