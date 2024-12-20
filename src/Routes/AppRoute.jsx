
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from '../Layout/Mainlayout';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import AboutUs from '../Pages/AboutUs';
import Login from '../Pages/login';
import Dashboard from "../Pages/Dashboard";
import Food from '../Pages/Food';
import Coupons from "../Pages/Coupons";
import Profile from '../Pages/Profile';
import Orders from "../Pages/Orders"
import Confirmation from '../Pages/Confirmation';
import Adminsignup from '../Pages/Adminloginup';
// import Fooditem from "../Pages/Fooditem";
// import Foodapp from "../Pages/Foodapp";
// import Billing from '../Pages/Billing';

function AppRoute() {
  const isLoggedIn = false; // Example initialization
  const isLoggedOut = false;

  const handleLogout = () => {
  
  }

  return (
    <>
      <Router>
        <Mainlayout isLoggedIn={isLoggedIn}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Food' element={<Food />} />
            <Route path='/Orders' element={<Orders />} />
            <Route path='/Coupons' element={<Coupons />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path='/Confirmation' element={<Confirmation />} />
            <Route path='/Adminsignup' element={<Adminsignup />} />
            {/* <Route path='/Fooditem' element={<Fooditem />} /> */}
            {/* <Route path='/Foodapp' element={<Foodapp />} /> */}
            {/* <Route path='/Billing' element={<Billing />} /> */}
          </Routes>

        </Mainlayout>
      </Router>
    </>
  );
}

export default AppRoute;