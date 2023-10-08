import React from "react";
import CardList from "./CardList";

const Section3 = () => {
  return (
    <div className="w-full h-[40rem] flex flex-col items-center">
      <h1 className="text-6xl font-bold m-6 ml-10">Why Should You Use Our Platform?</h1>
      <div className="container mx-auto">
      <CardList />
    </div>
    </div>
  );
};

export default Section3;
