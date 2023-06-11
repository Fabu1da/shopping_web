import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="py-[141px]">
      <div className="md:w-[80%] w-[100%] px-[20px] md:px-0 m-auto flex md:flex-row flex-col gap-[24px]">
        <div className="flex-1 w-[400px]">
          <img src={logo} alt="" className="w-[180px] h-[34px] mb-[32px]" />
          <p className=" leading-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex-1">
          <h4 className="font-[600] mb-[22px]">CATALOG</h4>
          <ul>
            <li className="mb-[12px]">Necklaces</li>
            <li className="mb-[12px]">hoodies</li>
            <li className="mb-[12px]">Jewelry Box</li>
            <li className="mb-[12px]">t-shirt</li>
            <li className="mb-[12px]">jacket</li>
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="font-[600] mb-[22px]">ABOUT US</h4>
          <ul>
            <li className="mb-[12px]">Our Producers</li>
            <li className="mb-[12px]">Sitemap</li>
            <li className="mb-[12px]">FAQ</li>
            <li className="mb-[12px]">About Us</li>
            <li className="mb-[12px]">Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="font-[600] mb-[22px]">CUSTOMER SERVICES</h4>
          <ul>
            <li className="mb-[12px]">Contact Us</li>
            <li className="mb-[12px]">Track Your Order</li>
            <li className="mb-[12px]">Product Care & Repair</li>
            <li className="mb-[12px]">Book an Appointment</li>
            <li className="mb-[12px]">Shipping & Returns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
