import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import ErrorPage from './pages/ErrorPage';
import ContactPage from './pages/ContactPage';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { clubs as initialClubs } from './global_state/globalState';

function App() {
  const [, setClubs] = useRecoilState(initialClubs)
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://yildizskylab-backend.onrender.com/teams')
      setClubs(data);
    })();
  },[])
  
  return (
    <div className='w-full h-full flex flex-col justify-start'>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route path='ekipler/:teamId' element={<TeamsPage />} />
        <Route path='ekipler' element={<TeamsPage />} />
        <Route element={<ContactPage />} path="/iletisim"/>
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </div>
  );
}

export default App;
