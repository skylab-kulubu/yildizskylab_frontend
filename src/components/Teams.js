import { useRecoilValue } from "recoil";
import "tw-elements";
import { scrollState } from "../global_state/globalState";

const teamArray = [
  "weblab",
  "gamelab",
  "mobilab",
  "air",
  "chainlab",
  "skysec",
  "skysis",
  "algolab",
  ",",
  ",",
  ",",
];

const Teams = () => {
  const scroll = useRecoilValue(scrollState);

  return (
    <div className={`flex ${scroll < 630 ? "translate-y-10 md:translate-y-28 md:opacity-0" : "mt-10"} transition-all duration-[0.8s] flex-col`}>
      <h1 className="text-3xl font-bold text-center">AR-GE EKİPLERİ</h1>
      <section class=" text-gray-700">
        <div class="container overflow-visible px-5 py-2 mx-auto lg:pt-16 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/weblab-black.png"
                />
              </div>
              <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/weblab-black.png"
                />
              </div>
              <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/weblab-black.png"
                />
              </div>
              <div class="w-full p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/weblab-black.png"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2 ">
              <div class="w-full p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/weblab-black.png"
                />
              </div>
              <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/weblab-black.png"
                />
              </div>
              <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/weblab-black.png"
                />
              </div>
              <div class="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/weblab-black.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-16 border-[#72727269]"/>
    </div>
  );
};

export default Teams;
