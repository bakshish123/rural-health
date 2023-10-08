import React, { useState } from 'react';

const Section2 = () => {
  const [activeDisplay, setActiveDisplay] = useState('display1');

  const handleButtonClick = (display) => {
    setActiveDisplay(display);
  };

  return (
    <div className=' bg-white h-[70rem] w-screen flex flex-col justify-center items-center mt-20'>
      <div className="text text-6xl font-bold ">
        The smarter route to 
        <p className='ml-16'>wealth creation.</p>
      </div>
      <div className="buttons m-4">
        <button
          className={`text-2xl border-2 border-gray-200 m-4 p-4 rounded-full transition-all duration-300 ease-out ${activeDisplay === 'display1' ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('display1')}
        >
          Stocks and ETFs
        </button>
        <button
          className={`text-2xl border-2 border-gray-200 m-4 p-4 rounded-full transition-all duration-300 ease-out ${activeDisplay === 'display2' ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('display2')}
        >
          Mutual Funds
        </button>
        <button
          className={`text-2xl border-2 border-gray-200 m-4 p-4 rounded-full transition-all duration-300 ease-out ${activeDisplay === 'display3' ? 'text-blue-500 border-blue-500' : 'text-gray-500'}`}
          onClick={() => handleButtonClick('display3')}
        >
          US Stocks
        </button>
      </div>
      <div className={`display1 border-2 border-gray-200 rounded-lg h-[30rem] w-[75rem] bg-gradient-to-r from-white via-white to-blue-100 transition-all duration-300 ease-in ${activeDisplay === 'display1' ? 'opacity-100' : 'hidden'}`}></div>
      <div className={`display2 border-2 border-gray-200 rounded-lg h-[30rem] w-[75rem] bg-gradient-to-r from-white via-white to-slate-100 transition-all duration-300 ease-in ${activeDisplay === 'display2' ? 'opacity-100' : 'hidden'}`}></div>
      <div className={`display3 border-2 border-gray-200 rounded-lg h-[30rem] w-[75rem] bg-gradient-to-r from-white via-white to-yellow-100 transition-all duration-300 ease-in ${activeDisplay === 'display3' ? 'opacity-100' : 'hidden'}`}></div>
    </div>
  );
};

export default Section2;
