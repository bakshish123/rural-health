import React, { useState } from "react";
import SkySection from "../components/SkySection";
import Nav from "../components/Nav";
import img from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Support = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_73wsfmu",
        "template_0o0w0ky",
        form.current,
        "5zDZ2txWqNCCI5VBy"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
          setEma;
          setSuccessMessage("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Email could not be sent. Please try again.");
        }
      );
  };

  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center w-[100vw] h-[100vh] mt-[5rem] ">
        <div className="flex w-[90%] shadow-md h-[90%] justify-center items-center flex-row">
          <div className="flex bg-gradient-to-r from-white to to-teal-50 flex-col w-[70%] h-[100%]">
            <form
              className="ml-20 w-[100%] h-[100%] flex flex-col mt-20"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="mt-3 font-light text-3xl">Name</label>
              <input
                className="rounded-md h-[2rem] border-2 border-gray-400 w-1/2"
                type="text"
                name="user_name"
              />
              <label className="mt-3 font-light text-3xl">Email</label>
              <input
                className="rounded-md h-[2rem] border-2 border-gray-400 w-1/2"
                type="email"
                name="user_email"
              />
              <label className="mt-3 font-light text-3xl">Message</label>
              <textarea
                className="rounded-md h-[5rem] border-2 border-gray-400 w-1/2"
                name="message"
              />
              <button
                className="rounded-md h-[2rem] border-2 w-1/3 border-gray-400 bg-teal-100 hover:bg-teal-300  mt-10"
                type="submit"
              >
                Proceed
              </button>
            </form>
            {successMessage && (
              <div className="text-green-600 text-4xl mb-40 text-center mt-4">
                {successMessage}
              </div>
            )}
          </div>
          <div className="bg-gradient-to-b from-white to to-teal-50  w-[30%] h-[100%] flex justify-center items-center">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <SkySection />
    </div>
  );
};

export default Support;
