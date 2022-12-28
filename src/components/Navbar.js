import { RiTeamFill } from "react-icons/ri";
import { BsFillCalendarEventFill } from "react-icons/bs";
import skylab from "../images/skylab.png";
import "./navbar.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
const listOfElements = (
  <ul className="hidden select-none md:flex text-base text-white my-auto hover:cursor-pointer group transition-all hover:bg-white hover:text-[#d80b3e] rounded-md border-[1px] border-white p-2">
    <li className="flex gap-2">
      <Link to="/skypanel">Kayıt/Giriş</Link>
    </li>
  </ul>
);
const Navbar = () => {
  const ref = useRef(null);
  const refTwo = useRef(null);
  const but = useRef(null);
  const [open, setOpen] = useState(false);
  const openMenu = (e) => {
    but.current.classList.toggle("open");
    ref.current.classList.toggle("fade-in");
    ref.current.classList.toggle("fade-out");
    refTwo.current.classList.toggle("fade-in");
    refTwo.current.classList.toggle("fade-out");
    refTwo.current.classList.toggle("menu");
    refTwo.current.classList.toggle("menuActive");
    setOpen(!open);
  };
  return (
    <>
      <div
        ref={ref}
        onClick={openMenu}
        className="overlay got-fade fade-out"
      ></div>
      <nav
        style={{ zIndex: 3 }}
        className="w-full bg-gradient-to-r from-[#1491d1] to-[#d80b3e] px-4 md:px-12 top-0 fixed"
      >
        <ul className="flex justify-between">
          <li className="p-2">
            <Link to="/">
              <img className="h-16" src={skylab} alt="" />
            </Link>
          </li>
          <ul className="flex gap-4">
            {listOfElements}
            <li className="my-auto block md">
              <div ref={but} onClick={openMenu} className="toggle mx-auto">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>

          <div ref={refTwo} className="menu w-2/3 md:w-1/4 got-fade fade-out">
            <Link to="/ekipler" onClick={openMenu}>
              <div className="flex gap-4">
                <RiTeamFill className=" my-auto" />
                <p>Ekipler</p>
              </div>
            </Link>
            <Link to="/etkinlikler" onClick={openMenu}>
              <div className="flex gap-4">
                <BsFillCalendarEventFill className="my-auto" />
                <p>Etkinlikler</p>
              </div>
            </Link>
            <Link to="/iletisim" onClick={openMenu}>
              <div className="flex gap-4">
                <RiTeamFill className="my-auto" />
                <p>İletişim</p>
              </div>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
