import React from "react";

const Section1 = ({ heading, tagline, points, color }) => {

  return (
    <div
      className={`w-[60rem] flex flex-row h-[30rem] ${color} border-2 border-teal-50 rounded-3xl`}
    >
      <div className="w-1/2 h-full">
        <div className="div flex flex-row w-[20rem] mt-20 ml-8">
          <div className="text-teal-500 mr-3">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
            >
              <path
                d="m24 5-7 7.778-4-4.445L7 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M25 10V5h-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <rect
                x="6"
                y="22"
                width="6"
                height="6"
                rx="2"
                fill="currentColor"
                fillOpacity="0.24"
              ></rect>
              <rect
                x="13"
                y="19"
                width="6"
                height="9"
                rx="2"
                fill="currentColor"
                fillOpacity="0.24"
              ></rect>
              <rect
                x="20"
                y="15"
                width="6"
                height="13"
                rx="2"
                fill="currentColor"
                fillOpacity="0.24"
              ></rect>
            </svg>
          </div>
          <p className="text-xl font-bold text-teal-500">{heading}</p>
        </div>
        <div className="ml-8">
          <div className="">
            <p className="text-2xl text-gray-700 font-bold">{tagline}</p>
          </div>
          {points.map((point) => (
            <div key={point} className="mt-5">
              <div className="flex flex-row">
                <div className="w-1 h-12 rounded-full bg-teal-600"></div>
                <p className="text-xl text-gray-600 ml-4">{point}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-8 mt-10">
          <button className="w-[8rem] h-[3rem] bg-teal-400 hover:bg-teal-700 hover:text-white border-2 border-teal-50 rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
};

export default Section1;
