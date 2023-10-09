import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/logo.png";
const Nav = ({ active }) => {
  return (
    <div
      className="fixed top-0 text-gray-600 text-xl rounded-2xl w-full flex justify-center bg-white h-[6rem]"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} // Adjust the alpha value (0.7) for transparency
    >
      <div className="container flex justify-between items-center md:py-5 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1 rounded-full">
          <Link 
          to="/"
          style={{ backgroundColor: "rgba(255, 255, 255, 0)" }} // Adjust the alpha value (0.7) for transparency
          >
            <img
              src={headerLogo} // Use the src attribute to specify the image source
              alt="Header Logo" // Provide an alt attribute for accessibility
              style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} // Adjust the alpha value (0.7) for transparency
              className="rounded-full h-8 md:h-9 lg:h-[6rem] w-[6rem] cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-grow gap-4 items-center lg:hidden">
          <Link to="/">
            <button className="w-full p-1 px-4 bg-neutral-white border-2 border-primary-teal rounded-full text-primary-teal font-semibold text-14">
              Get App
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <button className=" flex flex-row items-center cursor-pointer text-neutral-black/80 border border-black rounded-full min-w-[150px] rounded-24 py-2 px-4 text-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 inline-block mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
            <span>Search</span>
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-60">
          <nav className="flex space-x-10 items-center">
            <Link to="/pricing">
              <span className="cursor-pointer hover:text-teal-700 font-medium text-14 md:text-16 lg:text-20 smooth-transition text-neutral-black/60">
                Pricing
              </span>
            </Link>
            <Link to="/bookAppointment">
              <span className="cursor-pointer hover:text-teal-700 font-medium text-14 md:text-16 lg:text-20 smooth-transition text-neutral-black/60">
                Book Appointment
              </span>
            </Link>
            <Link to="/learn">
              <span className="cursor-pointer hover:text-teal-700 font-medium text-14 md:text-16 lg:text-20 smooth-transition text-neutral-black/60">
                Learn
              </span>
            </Link>
            {/* <Link to="/blogs">
              <span className="cursor-pointer hover:text-teal-700 font-medium text-14 md:text-16 lg:text-20 smooth-transition text-neutral-black/60">
                Blogs
              </span>
            </Link> */}
            <Link to="/support">
              <span className="cursor-pointer hover:text-teal-700 font-medium text-14 md:text-16 lg:text-20 smooth-transition text-neutral-black/60">
                Support
              </span>
            </Link>
          </nav>
          <div className="flex gap-5">
            <Link to="/signup" className="">
              <button className=" bg-teal-400 flex items-center shrink-0 gap-2 rounded-full   hover:bg-teal-500 bg-primary-teal hover:bg-primary-hover smooth-transition h-12 px-6">
                <span className="tracking-loose text-white">Sign Up</span>
              </button>
            </Link>
            <Link to="/login">
              <button className="w-[7rem] hover:text-white hover:bg-teal-50 items-center gap-2 rounded-full border-2 border-teal-400 h-12 px-6 bg-white">
                <span className=" text-teal-700 flex-none">Login</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
