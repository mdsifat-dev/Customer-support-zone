import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-[#FFFFFF]  py-4 border-1 border-gray-200">
      <nav className="flex  md:flex-row flex-col justify-center md:justify-between md:items-center max-w-[1440px] mx-auto">
        <div className="text-center md:text-start">
          <h2 className="text-2xl font-bold md:text-center mb-5 md:m-0 cursor-pointer">
            CS — Ticket System
          </h2>
        </div>

        <div className="flex  flex-col md:flex-row gap-3 md:gap-8 md:items-center">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0  md:space-x-8 md:items-center text-center md:text-start justify-center md:justify-start ">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">FAQ</li>
            <li className=" cursor-pointer">Changelog</li>
            <li className=" cursor-pointer">Blog</li>
            <li className=" cursor-pointer">Download</li>
            <li className=" cursor-pointer">Contact</li>
          </ul>
          <button className="bg-linear-to-l from-[#9F62F2] to-[#632EE3] px-4 py-3 rounded-sm font-bold text-white w-[200px] md:w-full mx-auto cursor-pointer ">
            {" "}
            <span>+</span> New Ticket{" "}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
