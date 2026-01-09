import React from "react";


import ManAndThreeDots from "../components/AboutUsComponents/ManAndThreeDots";
import ManNearWhiteBoard from "../components/AboutUsComponents/ManNearWhiteBoard";
import MobileScreen from "../components/AboutUsComponents/MobileScreen";

const AboutUs = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 overflow-x-hidden">
        <div className=""> 
        <ManAndThreeDots/>
        <ManNearWhiteBoard/>
        <MobileScreen/>
        </div>

       
    </section>
  );
};

export default AboutUs; 
