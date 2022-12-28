import logo from "./../images/skylab.png";
import * as AiIcons from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-between py-10 px-16 md:px-60 bg-gradient-to-r from-cyan-400/80 to-purple-200 ">
      <img src={logo} alt="logo" className="md:h-auto h-0" />
      <div className="flex md:w-full md:mt-10 text-white text-6xl justify-between ">
        <AiIcons.AiFillLinkedin className="p-2 cursor-pointer hover:text-teal-100" />
        <AiIcons.AiFillInstagram className="p-2 cursor-pointer hover:text-teal-100" />
        <AiIcons.AiOutlineTwitter className="p-2 cursor-pointer hover:text-teal-100" />
        <AiIcons.AiFillYoutube className="p-2 cursor-pointer hover:text-teal-100" />
        <FaDiscord className="p-2 cursor-pointer hover:text-teal-100" />
      </div>
    </div>
  );
};

export default Footer;
