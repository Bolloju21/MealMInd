
import React from "react";
import Header from "../Components/Header";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import { useAuth } from "../Context/Authcontext";


function MainLayout({ children }) {
  const { isLoggedIn } = useAuth();
  return (
    <>
  {isLoggedIn ? <Header2 /> : <Header />}
      
      <main>{children}</main>
      

      <Footer />
      
    </>
  );
}

export default MainLayout;