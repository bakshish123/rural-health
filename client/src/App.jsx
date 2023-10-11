import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import BookApp from "./pages/BookApp";
import FindDoctors from "./pages/FindDoctors";
// import Blogs from "./pages/Blogs";
import Support from "./pages/Support";
// import BookApp from "./pages/BookApp";
import Payment from "./pages/Payment";
import CardList3 from "./components/CardList3";
import AuthForm2 from "./components/AuthForm2";
import axios from "axios";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/bookAppointment" element={<BookApp />} />
          <Route path="/finddocs" element={<FindDoctors />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/support" element={<Support />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cards" element={<CardList3 />} />
<<<<<<< HEAD
          <Route path="bookAppointment/:id" element={<Payment />} />
        
=======
          <Route path="/auth/:type/:id/:price" element={<AuthForm2 />} />
>>>>>>> 4569f38cfd0d0caf69c68163946d1f359240fe7e
        </Routes>
      </Router>
    </div>
  );
};

export default App;
