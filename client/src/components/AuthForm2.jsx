import React from "react";
import img from "../assets/login.svg";
import Form from "./Form";
import { Link } from "react-router-dom";
<<<<<<< HEAD

const AuthForm2 = ({ type , price}) => {
=======
import logo from "../assets/logo.png";
const AuthForm2 = ({ type ,price}) => {
>>>>>>> 4569f38cfd0d0caf69c68163946d1f359240fe7e
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div style={backgroundImageStyle} className="w-[100vw] h-[100vh]">
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="h-[100%] w-[100%] flex justify-center items-center"
      >
        <div className="bg-opacity-70 w-[60rem] bg-white h-[40rem] m-0 p-0 shadow-sm rounded-xl flex items-center justify-center">
          <div className="w-[100%] h-[100%] flex flex-row">
            <div className="w-[70%] h-[100%] rounded-sm">
              <span className="flex w-[20rem] font-bold  text-3xl contain relative mx-[2rem] mt-[8rem] mb-[1rem] ">
                {type}
              </span>
              <span className="flex w-[20rem] font-semibold  text-xl contain relative mx-[2rem] mt-[1rem] mb-[1rem] ">
              Verified Doctors online now 
              </span>
              <span className="flex w-[25rem] font text-l contain relative mx-[2rem] mt-[1rem] mb-[1rem]">
               image
              </span>
              <span className="flex w-[25rem] font text-l contain relative mx-[2rem] mt-[1rem] mb-[1rem] ">
              One of them will speak to you shortly. <br />
            #svg 93% of users found online consultation helpful <br />
            #svg Consultation will happen only on mobile app
              </span>
              <div className="form">
                <Form label="Enter patient's name" htmlFor="name" />
                {/* <Form label="Enter Your Password" htmlFor="password" /> */}
                <div className="w-[20rem] p-[1rem] ml-[2rem]">
                    Final Fee <br />
                    Rs {price}
                </div>
                <button
                  type="submit"
                  className="hover:border-teal-300 w-[15rem] hover:bg-teal-700 h-[3rem] bg-teal-500 ml-[2rem] mt-[2rem] rounded-lg text-white font-sans"
                >
                  Continue to payment
                </button>
                {type === "login" ? (
                  <Link to="/signup">
                    <button
                      type="submit"
                      className="border-[1px] border-solid hover:bg-teal-50 border-teal-500 w-[15rem] h-[3rem] bg-white ml-[2rem] mt-[2rem] hover:transition-shadow rounded-lg text-teal-500 font-bold font-sans"
                    >
                      Sign Up
                    </button>
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="flex justify-center items-center w-[30%] h-[100%] rounded-sm  border-teal-50 bg-gradient-to-b from-teal-50 to-white">
              <div className="flex justify-center items-center">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm2;
