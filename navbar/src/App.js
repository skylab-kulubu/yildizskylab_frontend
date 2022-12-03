import Nav from "./components/Nav";
import QuickMenu from "./components/QuickMenu";
import skyleblebi from "./SKYLAB.gif";

const App = () => {
  return (
    <div className="w-screen h-[200vh] bg-neutral-700">
      <Nav />
      <QuickMenu />
      <img
        draggable="false"
        className=" pt-16 relative z-0 h-screen w-screen"
        src={skyleblebi}
        alt=""
      />
    </div>
  );
};

export default App;
