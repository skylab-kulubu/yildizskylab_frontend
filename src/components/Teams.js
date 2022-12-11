import 'tw-elements';




const teamArray = ["weblab","gamelab","mobilab","air","chainlab","skysec","skysis","algolab",",",",",","];

const Teams = () => {
   return (<div className='flex flex-col'>
    <h1 className="text-3xl font-bol text-center">AR-GE EKİPLERİ</h1>
    <section class="overflow-hidden text-gray-700">
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="/weblab-black.png"/>
        </div>
        <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="/weblab-black.png"/>
        </div>
        <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="/weblab-black.png"/>
        </div>
        <div class="w-full p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="/weblab-black.png"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 ">
        <div class="w-full p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="/weblab-black.png"/>
        </div>
        <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="/weblab-black.png"/>
        </div>
        <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="/weblab-black.png"/>
        </div>
        <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="/weblab-black.png"/>
        </div>
      </div>
    </div>
  </div>
</section></div>);
};

export default Teams;