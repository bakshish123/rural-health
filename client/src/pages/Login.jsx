import React from "react";
import AuthForm from "../components/AuthForm";
import img from "../assets/login.svg";
const Login = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundImageStyle} className="w-full min-h-screen">
      <AuthForm type="Login" />
    </div>
  );
};

export default Login;
