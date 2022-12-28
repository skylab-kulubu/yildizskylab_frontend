import { Link } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import "tw-elements";
import { clubs as initialClubs } from '../global_state/globalState'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: .85 } },
  hidden: { opacity: 0, scale: .85, }
};

const Teams = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const clubs = useRecoilValue(initialClubs);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className={`flex transition-all duration-[0.8s] flex-col`}>
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4">AR-GE EKİPLERİ</h1>
        <section className=" text-gray-700">
          <div className="container overflow-visible px-5 py-2 mx-auto lg:pt-16 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap-reverse md:flex-wrap w-full md:w-1/2">
                <div className="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                  <Link to={`/ekipler/${clubs?.[0]?._id}`}>
                    <img
                      alt={clubs?.[0]?.teamName}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="/weblab-black.png"
                    />
                  </Link>
                </div>
                <div className="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                  <Link to={`/ekipler/${clubs?.[1]?._id}`}>
                    <img
                      alt={clubs?.[1]?.teamName}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="/weblab-black.png"
                    />
                  </Link>
                </div>
                <div className="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                  <Link to={`/ekipler/${clubs?.[2]?._id}`}>
                    <img
                      alt={clubs?.[2]?.teamName}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="/weblab-black.png"
                    />
                  </Link>
                </div>
                <div className="w-full p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                  <Link to={`/ekipler/${clubs?.[3]?._id}`}>
                    <img
                      alt={clubs?.[3]?.teamName}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="/weblab-black.png"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/2 ">
                <div className="w-full p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                  <Link to={`/ekipler/${clubs?.[4]?._id}`}>
                    <img
                      alt={clubs?.[4]?.teamName}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="/weblab-black.png"
                    />
                  </Link>
                </div>
                <div className="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                  <Link to={`/ekipler/${clubs?.[5]?._id}`}>
                    <img
                      alt={clubs?.[5]?.teamName}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="/weblab-black.png"
                    />
                  </Link>
                </div>
                <div className="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                  <Link to={`/ekipler/${clubs?.[6]?._id}`}>
                    <img
                      alt={clubs?.[6]?.teamName}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="/weblab-black.png"
                    />
                  </Link>
                </div>
                <div className="w-1/3 p-1 md:p-2 hover:scale-110 opacity-50 hover:opacity-100 hover:cursor-pointer transition-all">
                  <Link to={`/ekipler/${clubs?.[7]?._id}`}>
                    <img
                      alt={clubs?.[0]?.teamName}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="/weblab-black.png"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="mt-16 border-[#72727269]" />
      </div>
    </motion.div>
  );
};

export default Teams;
