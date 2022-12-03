import logo from "../skylab_logo.png";
import ytuLogo from "../ytu.png";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { sidebar } from "../globalState";

function Nav() {
  const [show, setShow] = useState(true);
  const [side, setSide] = useRecoilState(sidebar);

  const teams = [
    "Weblab",
    "Skysis",
    "Gamelab",
    "Mobilab",
    "Skysec",
    "Algolab",
    "AiResearch",
    "Chainlab",
  ];

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  const upperNavOpened =
    "fixed select-none w-screen z-20 shadow-lg bg-neutral-600 transition-all duration-100";
  const upperNavClosed =
    "fixed select-none w-screen z-20 shadow-lg bg-neutral-600 transition-all duration-100 -translate-y-16";

  return (
    <div className={show ? upperNavOpened : upperNavClosed}>
      <div className="h-16 w-full flex items-center justify-between">
        <div className="h-full w-72 flex items-center justify-between">
          <div
            onClick={() => setSide(!side)}
            className="text-3xl flex items-center justify-center cursor-pointer text-white w-14 h-full"
          >
            <AiIcons.AiOutlineMenu className="" />
          </div>
          <img
            draggable="false"
            className="h-10 mt-1 opacity-40"
            src={logo}
            alt=""
          />
          <img
            draggable="false"
            className="h-4/6 opacity-40"
            src={ytuLogo}
            alt=""
          />
        </div>
        <div className="flex h-full mr-10 w-72 justify-between items-center">
          <div className="hover:border rounded-sm cursor-pointer bg-purple-300 transition-all duration-200 hover:bg-transparent text-neutral-700 border-white flex justify-center p-2 w-32 hover:text-purple-300">
            Kayıt Ol
          </div>
          <div className="hover:border rounded-sm cursor-pointer bg-purple-300 transition-all duration-200 hover:bg-transparent text-neutral-700 border-white flex justify-center p-2 w-32 hover:text-purple-300">
            Giriş Yap
          </div>
        </div>
      </div>
      <div className="w-full h-14 flex justify-between border-b border-white border-solid">
        {teams.map((item, key) => {
          return (
            <div className="cursor-pointer hover:text-lg transition-all duration-300 text-white hover:border-b hover:border-b-purple-600 hover:bg-neutral-500 flex justify-center items-center h-14 w-full">
              <h3 key={key}>{item}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
