import React from "react";
import sikaylap from "../images/homepage.gif";
import "./Homepage.css";
import Teams from "../components/Teams";
import Events from "../components/Events";
import Footer from '../components/Footer';
import { Stats } from '../components/Stats';

function Homepage() {

  return (
    <div className="mt-20 bg-[#fff4df5c] flex flex-col">
      <div>
        <img className="banner " alt="" src={sikaylap} />
      </div>
      <div
        className={` mx-2 md:mx-24 my-12 transition-all duration-700  flex flex-col gap-8`}
      >
        <Stats />
        <hr className="border-[#72727269]" />
        <Teams></Teams>
        <Events />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
