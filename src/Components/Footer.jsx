import React from "react";
import fbImg from "../assets/fb.png";
import xImg from "../assets/x.png";
import inImg from "../assets/linkend.png";
import mailImg from "../assets/mail.png";
const Footer = () => {
  return (
    <div className="bg-black text-white  ">
      <div className=" md:w-[1440px] md:mx-auto   ">
        <div className=" flex flex-col justify-center md:flex-row  md:justify-between md:pt-[80px] md:pb-12 ">
          <div className="">
            <h2 className="text-2xl font-bold mb-3 text-center md:text-start cursor-pointer hover:text-yellow-400">
              CS — Ticket System
            </h2>
            <p className="footer_text mx-auto md:mx-0 text-center mb-4 md:mb-0  md:text-justify md:w-[300px] w-[100%]">
              A CS ticketing system centralizes customer support inquiries like
              emails and chats, converting them into trackable tickets. This
              streamlines workflows, improves response times, and ensures
              efficient issue resolution for support teams.
            </p>
          </div>

          <div className="md:text-start text-center md:mb-0 ">
            <h2 className="footer_title cursor-pointer hover:text-yellow-400">
              Company
            </h2>

            <ul className="footer_text">
              <li className="cursor-pointer hover:text-yellow-400">About Us</li>
              <li className="cursor-pointer hover:text-yellow-400">
                Our Mission
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                Contact Saled
              </li>
            </ul>
          </div>

          <ul className="md:text-start text-center mb-4 ">
            <h2 className="footer_title mt-2 md:mt-0  cursor-pointer hover:text-yellow-400">
              Services
            </h2>

            <div className="footer_text">
              <li className="cursor-pointer hover:text-yellow-400">
                Products & Services
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                Customer Stories
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                Download Apps
              </li>
            </div>
          </ul>

          <ul className="md:text-start text-center">
            <h2 className="footer_title cursor-pointer hover:text-yellow-400">
              Information
            </h2>

            <div className="footer_text">
              <li className="cursor-pointer hover:text-yellow-400">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:text-yellow-400">Join Us</li>
            </div>
          </ul>

          <div className="mt-2 md:mt-0">
            <h2 className="footer_title md:text-start text-center ">
              Social Links
            </h2>
            <div className="space-y-2 md:text-start text-center ">
              <div className="flex flex-col md:flex-row  items-center md:justify-start justify-center gap-2">
                <img src={xImg} alt="" />
                <p className="footer_text cursor-pointer hover:text-yellow-400">
                  @CS — Ticket System
                </p>
              </div>

              <div className="flex flex-col md:flex-row  items-center gap-2 md:justify-start justify-center">
                <img src={inImg} alt="" />
                <p className="footer_text cursor-pointer hover:text-yellow-400">
                  @CS — Ticket System
                </p>
              </div>

              <div className="flex flex-col md:flex-row  items-center gap-2 md:justify-start justify-center ">
                <img src={fbImg} alt="" />
                <p className="footer_text cursor-pointer hover:text-yellow-400">
                  @CS — Ticket System
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2 md:justify-start justify-center">
                <img src={mailImg} alt="" />
                <p className="footer_text cursor-pointer hover:text-yellow-400">
                  support@cst.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-full border-b-1 border-gray-700 md:mt-0 mt-4 "></div>
        <p className="text-center md:py-8 py-4">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
