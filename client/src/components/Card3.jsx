import React from "react";
import { Link } from "react-router-dom";
const Card = ({ heading, tagline, link }) => {
  return (
    <div className="flex flex-col rounded-3xl bg-white border-[2px] shadow-md  border-gray-300 p-4 w-[20rem] h-[15rem]">
      <div className="">
        <p className="text-2xl ml-5 mt-14 text-gray-700">{heading}</p>
        <p className="text-xl ml-5 text-gray-600 mt-4">{tagline}</p>
      </div>
      <div className="">
        <Link to='/support'>
          <button >
            <span>
              <p className="ml-5 mt-3 text-2xl text-teal-600 hover:text-teal-700">{link}</p>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
