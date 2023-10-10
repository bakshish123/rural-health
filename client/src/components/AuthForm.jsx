import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import img from "../assets/login.svg";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      await axios.post("/signup",  email, password);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

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
              <span className="flex w-[8rem] font-bold text-3xl contain relative mx-[2rem] mt-[8rem] mb-[1rem]">
                {type}
              </span>
              <div className="form">
                <Form
                  action="POST"
                  label="Enter Email ID/Mobile No."
                  htmlFor="email"
                >
                </Form>
                <Form
                  action="POST"
                  label="Enter Your Password"
                  htmlFor="password"
                >
                </Form>
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
            <div className="flex justify-center items-center w-[30%] h-[100%] rounded-sm border-teal-50 bg-gradient-to-b from-teal-50 to-white">
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

export default AuthForm;
