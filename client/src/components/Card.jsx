import React from 'react';

const Card = ({description, imageUrl }) => {
  return (
    <div className="w-[23rem] h-[12rem] rounded-[2rem] border-2 border-slate-200 overflow-hidden mx-4 my-4">
      <img className="h-[2rem] w-[2rem] mt-6 ml-8" src={imageUrl} alt="" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-2xl">{description}</p>
      </div>
      
    </div>
  );
};
export default Card;