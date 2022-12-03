import { useRecoilValue } from "recoil";
import { sidebar } from "../globalState";

const QuickMenu = () => {
  const side = useRecoilValue(sidebar);

  const sideOpened =
    "transition-all shadow-lg duration-300 bg-neutral-600 z-10 fixed w-60 h-screen";
  const sideClosed =
    "transition-all shadow-lg duration-300 bg-neutral-600 z-10 fixed w-60 h-screen -translate-x-60";

  return <div className={side ? sideOpened : sideClosed}></div>;
};

export default QuickMenu;
