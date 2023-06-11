import React from "react";
import background from "../assets/background.png";
import zara from "../assets/1024px-Zara_Logo 2.png";
const Adverts = () => {
  return (
    <div className="relative w-[100%] overflow-hidden">
      <img src={background} alt="" className="w-[100%]" />
      <img
        src={zara}
        alt=""
        className="absolute top-[50px] w-[600px] h-[209px] right-[-50px] "
        style={{ opacity: 0.08 }}
      />

      <div className="absolute top-[150px] right-0 z-10 w-[47%] m-auto">
        <div>
          <img src={zara} alt="" />
          <p className="text-white w-[50%] py-[55px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="bg-white py-[19px] px-[26px]">
            see collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adverts;
