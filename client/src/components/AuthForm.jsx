import React from "react";
import img from "../assets/login.svg";
import Form from "./Form";
import { Link } from "react-router-dom";

const AuthForm = ({ type }) => {
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
              <span className="flex w-[8rem] font-bold  text-3xl contain relative mx-[2rem] mt-[8rem] mb-[1rem] ">
                {type}
              </span>
              <div className="form">
                <Form label="Enter Email ID/Mobile No." htmlFor="email" />
                <Form label="Enter Your Password" htmlFor="password" />
                <button
                  type="submit"
                  className="hover:border-blue-300 w-[15rem] hover:bg-blue-700 h-[3rem] bg-blue-500 ml-[2rem] mt-[2rem] rounded-lg text-white font-sans"
                >
                  Proceed
                </button>
                {type === "login" ? (
                  <Link to="/signup">
                    <button
                      type="submit"
                      className="border-[1px] border-solid hover:bg-blue-50 border-blue-500 w-[15rem] h-[3rem] bg-white ml-[2rem] mt-[2rem] hover:transition-shadow rounded-lg text-blue-500 font-bold font-sans"
                    >
                      Sign Up
                    </button>
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="flex justify-center items-center w-[30%] h-[100%] rounded-sm  border-blue-50 bg-gradient-to-b from-blue-50 to-white">
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold">GOAT</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
