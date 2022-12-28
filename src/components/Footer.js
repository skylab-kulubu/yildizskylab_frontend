import logo from "./../images/skylab.png";
import * as AiIcons from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen mt-auto flex flex-col items-center justify-between gap-4 py-6 bg-gradient-to-r from-cyan-400/80 to-purple-200 ">
      <img src={logo} alt="logo" className="w-24 h-24" />
      <div className="flex gap-2 md:gap-6 text-white  justify-between ">
        <AiIcons.AiFillLinkedin  className="p-2 cursor-pointer hover:text-teal-100 text-[3rem]" />
        <AiIcons.AiFillInstagram  className="p-2 cursor-pointer hover:text-teal-100 text-[3rem]" />
        <AiIcons.AiOutlineTwitter  className="p-2 cursor-pointer hover:text-teal-100 text-[3rem]" />
        <AiIcons.AiFillYoutube  className="p-2 cursor-pointer hover:text-teal-100 text-[3rem]" />
        <FaDiscord  className="p-2 cursor-pointer hover:text-teal-100 text-[3rem]" />
      </div>
    </footer>
  );
};

export default Footer;