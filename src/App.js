import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <Routes>
          <Route element={<Homepage/>} path="/"/>
        </Routes>
    </div>
  );
}

export default App;
