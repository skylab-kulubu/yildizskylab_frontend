import logo from "./../images/skylab.png";
import * as AiIcons from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-between gap-4 py-6 bg-gradient-to-r from-cyan-400/80 to-purple-200 ">
      <img src={logo} alt="logo" className="w-24 h-24" />
      <div className="flex gap-2 md:gap-6 text-white  justify-between ">
        <AiIcons.AiFillLinkedin size={48} className="p-2 cursor-pointer hover:text-teal-100" />
        <AiIcons.AiFillInstagram size={48} className="p-2 cursor-pointer hover:text-teal-100" />
        <AiIcons.AiOutlineTwitter size={48} className="p-2 cursor-pointer hover:text-teal-100" />
        <AiIcons.AiFillYoutube size={48} className="p-2 cursor-pointer hover:text-teal-100" />
        <FaDiscord size={48} className="p-2 cursor-pointer hover:text-teal-100" />
      </div>
    </div>
  );
};

export default Footer;