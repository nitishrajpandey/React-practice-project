// import React from 'react'

function Input() {
  return (
    <div>
      <div className="flex flex-col  xs:flex-row justify-center gap-5 items-center mt-8">
        <input
          type="text"
          placeholder="Enter text here.."
          className="border border-green-600 text-center py-2 px-4 normal-text-size outline-none rounded-xl shadow shadow-green-300 "
          required
        />
        <button className="px-4 py-2 bg-blue-500 shadow shadow-blue-800  rounded-xl font-semibold normal-text-size text-white active:scale-95 duration-300 ease-in-out">
          Generate
        </button>
      </div>
    </div>
  );
}

export default Input;
