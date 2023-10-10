import React from "react";
import { useState } from "react";
import img from "../assets/logo.png";

import { useNavigate} from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      axios.post("http://localhost:5000/login", { email, password });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="flex flex-row justify-center items-center w-[80vw] h-[70vh] border-[1px] border-teal-100 rounded-3xl bg-gradient-to-r from-white to to-teal-100">
        <div className="w-[80%] h-[100%]">
          <div className="mt-20 ml-10 text-4xl font-bold heading">Login </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-[35vw] mt-10 ml-10" action="POST">
            <label htmlFor="email" className="font-bold">
              Enter Your Email
            </label>
            <input
              className="border-2 gray-teal-100 rounded-md h-[3rem]"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="password" className="font-bold">
              Enter Your Password
            </label>
            <input
              className="border-2 border-gray-100 rounded-md h-[3rem]"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              className="w-[50%] h-[3rem] mt-4 border-2 border-blue-50 bg-teal-300 rounded-md hover:bg-teal-400"
              type="submit"
            >
              Proceed
            </button>
          </form>
        </div>
        <div className=" bg-gradient-to-b from-white to-teal-100 h-[100%] w-[20%] flex items-center justify-center">
          <img src={img} className="  " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
