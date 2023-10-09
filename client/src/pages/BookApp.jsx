import React from "react";
import SkySection from "../components/SkySection";
import Nav from "../components/Nav";

import CardList3 from "../components/CardList3";

const BookApp = () => {
    
  return (
    <div>
      <Nav active='bookAppointment' />
      <h1 className="text-5xl font-bold m-6 ml-[10rem] mt-[10rem]">Consult with top doctors across specialities</h1>
      <div className="container mx-auto">
      <CardList3 />
    </div>
      <SkySection />
    </div>
  );
};

export default BookApp;
