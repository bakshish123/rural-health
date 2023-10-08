import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Invest from "./pages/Invest";
import Pricing from "./pages/Pricing";
import Learn from "./pages/Learn";
import Blogs from "./pages/Blogs";
import Support from "./pages/Support";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
