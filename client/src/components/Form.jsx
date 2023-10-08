import React, { useState } from "react";

const Form = ({ label, htmlFor }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col mx-[2rem]">
          <label className="text-gray-300" htmlFor={htmlFor}>
            {label}
          </label>
          <div className="flex flex-row border-gray-300 rounded-md ">
            <input
              style={{ fontFamily: "Satoshi" }}
              className={`hover:border-black focus:border-red-700 border-2 border-gray-300 rounded-md p-2 ${
                htmlFor === "password" ? "w-1/2" : "w-2/3"
              } h-[3rem]`}
              type={htmlFor === "email" ? "email" : "password"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            {htmlFor === "password" ? (
              <div className="w-[50px] ml-[3rem]">
                <button type="button" className="w-[50px]  rounded-md">
                  <svg
                    className="flex justify-center items-center m-auto fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.20-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                  </svg>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
