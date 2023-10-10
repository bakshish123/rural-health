import React from 'react';
import { Link } from "react-router-dom";
const Card = ({description, imageUrl,link,id }) => {
  return (
    <div className="w-[23rem] h-[12rem] rounded-[2rem] border-2 border-teal-200 overflow-hidden mx-4 my-4">
      <img className="h-[2rem] w-[2rem] mt-6 ml-8" src={imageUrl} alt="" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-2xl">{description}</p>
        

      </div>
      <div className="">
        <Link to='/payment'>
          <button >
            <span>
              <p className="ml-5  mt-4 text-2xl text-teal-600 hover:text-teal-700">{link}</p>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Card;