import React from "react";

const Subscribe = () => {
  return (
    <div className="px-[20px] md:px-0">
      <h1 className="text-[50px] leading-[59px] font-[500] text-center">
        Or subscribe to the newsletter
      </h1>
      <div className="flex flex-row gap-3 mt-[74px]">
        <input
          type="text"
          className="flex-1 border-b bg-transparent border-b-black p-3"
          placeholder="Email address..."
        />
        <button className="p-3 border-b border-b-black">SUBMIT</button>
      </div>
    </div>
  );
};

export default Subscribe;
