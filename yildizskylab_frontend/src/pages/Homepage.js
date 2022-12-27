import React from "react";
import sikaylap from "../images/homepage.gif";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { GiTeamIdea } from "react-icons/gi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import "./Homepage.css";
import Teams from "../components/Teams";
import Events from "../components/Events";
import { useRecoilState } from "recoil";
import { scrollState } from "../global_state/globalState";

function Homepage() {
  const [scroll, setScroll] = useRecoilState(scrollState);
  window.addEventListener("scroll", () => {
    setScroll(document.documentElement.scrollTop);
  });

  console.log(scroll);

  return (
    <div className="mt-20 bg-[#fff4df5c] flex flex-col">
      <div>
        <img className="banner" alt="" src={sikaylap} />
      </div>
      <div
        className={`${
          scroll < 200 ? "translate-y-12 opacity-0" : null
        } mx-2 md:mx-24 my-12 transition-all duration-700  flex flex-col gap-8`}
      >
        <h1 className="text-3xl  text-[#222] font-extrabold text-center">
          SKYLAB, YILDIZ TEKNİK ÜNİVERSİTESİ BİLGİSAYAR BİLİMLERİ KULÜBÜDÜR.
        </h1>
        <hr className="border-[#72727269]" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 text-center">
          <div className="flex flex-col gap-2">
            <IoPeopleCircleSharp className="mx-auto" size={128} />
            <p className="text-5xl">1200+</p>
            <p>Katılımcı</p>
          </div>
          <div className="flex flex-col gap-2">
            <GiTeamIdea className="mx-auto" size={128} />
            <p className="text-5xl">8</p>
            <p>Ekip</p>
          </div>
          <div className="flex flex-col gap-2">
            <BsFillCalendarEventFill className="mx-auto" size={128} />
            <p className="text-5xl">40+</p>
            <p>Etkinlik</p>
          </div>
          <div className="flex flex-col gap-2">
            <AiFillProject className="mx-auto" size={128} />
            <p className="text-5xl">10</p>
            <p>Proje Ekibi</p>
          </div>
        </div>
        <hr className="border-[#72727269]" />
        <Teams></Teams>
        <Events />
      </div>
    </div>
  );
}

export default Homepage;