import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import animationData from '../lotties/404';

function ErrorPage() {
  return (
    <div className='w-full h-full bg-gradient-to-r from-[#1491d1] to-[#d80b3e]'>
      <div className="container mx-auto px-4 flex gap-4 pt-24 flex-col md:flex-row items-center justify-center h-[calc(100%-4rem)] ">
        <div className='text-center'>
          <h2 className='text-[#791a31] text-4xl md:text-6xl tracking-wider font-extrabold leading-normal mb-8'>Yolunu mu kaybettin?</h2>
          <span className='text-[#040d11] text-md md:text-lg'>Üzgünüm, aradığın sayfayı bulamadım. Anasayfaya dönerek sitemizi inceleyebilirsin.</span>
          <Link to={'/'} className='flex items-center justify-center p-4 mt-4 border-2 rounded-md border-[#d80b3e] text-[#e1f4fb] tracking-wider leading-relaxed text-base md:text-lg font-bold'>Anasayfaya Dön</Link>
        </div>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{width: "100%", height: "100%", maxHeight: "30rem"}}
        />
      </div>
    </div>
  );
}

export default ErrorPage;