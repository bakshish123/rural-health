import React, { useState } from "react";
import SkySection from "../components/SkySection";
import Nav from "../components/Nav";
import bookImage from "../assets/book.png"; // Make sure to use the correct path
const FindDoctors = () => {
  const [selectedCity, setSelectedCity] = useState(""); // State to keep track of the selected city

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value); // Update the selected city when a radio button is clicked
  };
  return (
    <div>
      <Nav />
      <div
        className="h-[70vh] w-[100vw] shadow-md mt-[6rem]"
        style={{
          backgroundImage: `url(${bookImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="text-black mt-20 items-center flex justify-center flex-col">
          <h1 className="text-4xl font-bold">Your Home For Health</h1>
          <p className="mt-10 text-2xl font-light">Find And Book</p>
        </div>
        <div className="h-[20rem] flex justify-center items-center">
          <div
            style={{
              "background": "rgba(255,255,255,0.7 )",
            }}
            className="flex justify-center items-center border-2 w-[70%] h-[100%] bg-gradient-to-r from-white to to-teal-100  rounded-xl"
          >
            <div className="flex justify-center items-center">
              <form className="flex justify-center items-center" action="">
                <div className="">
                  <label className="font-bold text-2xl">
                    <input
                      type="radio"
                      name="city"
                      value="New York"
                      checked={selectedCity === "New York"}
                      onChange={handleCityChange}
                    />
                    New York
                  </label>
                  <br />
                  <label className="font-bold text-2xl">
                    <input
                      type="radio"
                      name="city"
                      value="Los Angeles"
                      checked={selectedCity === "Los Angeles"}
                      onChange={handleCityChange}
                    />
                    Los Angeles
                  </label>
                  <br />
                  <label className="font-bold text-2xl">
                    <input
                      type="radio"
                      name="city"
                      value="Chicago"
                      checked={selectedCity === "Chicago"}
                      onChange={handleCityChange}
                    />
                    Chicago
                  </label>
                  <br />
                  <label className="font-bold text-2xl">
                    <input
                      type="radio"
                      name="city"
                      value="Miami"
                      checked={selectedCity === "Miami"}
                      onChange={handleCityChange}
                    />
                    Miami
                  </label>
                </div>
                <div className="">
                  <input
                    className="w-[20rem] mb-10 rounded-xl h-[4rem] border-2 border-gray-400  mt-10 ml-10"
                    type="text"
                    name="search"
                    id=""
                    placeholder="Search doctors,clinics, hospitals "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SkySection />
    </div>
  );
};

export default FindDoctors;
