import React from "react";
import img from "../assets/img.png";
import Nav from "./Nav";
import { useState } from "react";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import SkySection from "./SkySection";
const Home = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted email:", email);
  };
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="">
      <Nav />
      <div
        /*style={backgroundImageStyle}*/ className="w-full min-h-screen bg-gradient-to-b from-white via-teal-500 to-white"
      >
        <div className="mt-24 hero flex flex-row">
          <div className="text flex flex-col w-[40rem] mt-7 m-4 ml-16">
            <h1 className="heading text-5xl font-semibold">
              Access Expert Health Advice and Care. Anytime, Anywhere.
            </h1>
            <div className="rounded-xl ml-0 m-10 bg-opacity-50 bg-teal-50 border-2 border-white">
              <div key="1" className="1 p-3 m-3 flex flex-row">
                <div className="h-6 w-1 bg-purple-600 rounded-2xl m-4"></div>
                <div>
                  <h6 className="font-semibold text-2xl">
                    Expert Advice from Top Doctors.
                  </h6>
                  <p className="text-xl">At an affordable price.</p>
                </div>
              </div>
              <div key="2" className="1 p-3 m-3 flex flex-row">
                <div className="h-6 w-1 bg-purple-600 rounded-2xl m-4"></div>
                <div>
                  <h6 className="font-semibold text-2xl">
                    ₹500/ Month for Unlimited Consults
                  </h6>
                  <p className="text-xl">
                    Includes 1 Free In-Person Consultation and 1 Free Lab Test
                  </p>
                </div>
              </div>
              <div key="3" className="1 p-3 m-3 flex flex-row">
                <div className="h-6 w-1 bg-purple-600 rounded-2xl m-4"></div>
                <div>
                  <h6 className="font-semibold text-2xl">
                    24x7 Access to Doctors
                  </h6>
                  <p className="text-xl">
                    Get your health queries answered by top doctors, anytime,
                  </p>
                </div>
              </div>
            </div>
            <div className="form">
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-8 relative"
              >
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded-3xl w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 text-xl"
                    placeholder="Enter your email"
                    required
                  />
                  <button
                    type="submit"
                    className="text-xl mt-2 mr-2 absolute right-0 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="image"></div>
        </div>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <SkySection />
    </div>
  );
};

export default Home;
