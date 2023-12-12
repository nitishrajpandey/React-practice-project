/* eslint-disable react/prop-types */
// import React from 'react'

function Container({ children }) {
  return (
    <div className="mt-20 w-fit p-5 pt-8 pb-0 xxs:p-8 xxs:pb-0 rounded-2xl card-bg-color shadow-2xl">
      {children}
    </div>
  );
}

export default Container;
