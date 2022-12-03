import Lottie from "lottie-react";
import animationData from './lotties/404';

function App() {
  return (
    <div className='w-full h-full bg-[#0c0a33]'>
      <div className="h-16 bg-white w-full text-center"> burası header alanı</div>
      <div className="container mx-auto px-4 flex gap-4 pt-8 flex-col md:flex-row items-center justify-center h-[calc(100%-4rem)] ">
        <div className='text-center'>
          <h2 className='text-[#3d99e4] text-4xl md:text-6xl tracking-wider font-extrabold leading-normal mb-8'>Yolunu mu kaybettin?</h2>
          <span className='text-gray-400 text-md md:text-lg'>Üzgünüm, aradığın sayfayı bulamadım. Anasayfaya dönerek sitemizi inceleyebilirsin.</span>
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

export default App;
