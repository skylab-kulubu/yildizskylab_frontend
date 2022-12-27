import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import MembersPage from './pages/MembersPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='w-full h-full'>
      <header>
        <Navbar></Navbar>
      </header>
      <Routes>
          <Route element={<Homepage/>} path="/"/>
          <Route element={<MembersPage/>} path="/ekipler"/>
          <Route element={<ErrorPage/>} path="*"/>
        </Routes>
    </div>
  );
}

export default App;