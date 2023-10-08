import React from 'react';

const Card2 = ({link,title,description, imageUrl }) => {
  return (
    <div className="w-[23rem] h-[16rem] rounded-[2rem] border-2 border-teal-200 overflow-hidden mx-4 my-4">
      <img className="h-[2rem] w-[2rem] mt-6 ml-8" src={imageUrl} alt="" />
      <div className=' font-semibold text-3xl m-3 ml-6'>{title}</div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-2xl">{description}</p>
      </div>
      <button className=' text-teal-500 font-extrabold ml-6'>{link}</button>
    </div>
  );
};
export default Card2;