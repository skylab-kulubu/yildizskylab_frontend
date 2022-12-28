import { IoPeopleCircleSharp } from "react-icons/io5";
import { GiTeamIdea } from "react-icons/gi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: .85 } },
    hidden: { opacity: 0, scale: .75, }
};

export const Stats = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

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
            <h1 className="text-xl md:text-2xl text-[#222] mb-4 font-extrabold text-center">
                SKYLAB, YILDIZ TEKNİK ÜNİVERSİTESİ BİLGİSAYAR BİLİMLERİ KULÜBÜDÜR.
            </h1>
            <hr className="border-[#72727269]" />
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-4 text-center">
                <div className="flex flex-col gap-2">
                    <IoPeopleCircleSharp className="mx-auto" size={96} />
                    <p className="text-2xl">1200+</p>
                    <p>Katılımcı</p>
                </div>
                <div className="flex flex-col gap-2">
                    <GiTeamIdea className="mx-auto" size={96} />
                    <p className="text-2xl">8</p>
                    <p>Ekip</p>
                </div>
                <div className="flex flex-col gap-2">
                    <BsFillCalendarEventFill className="mx-auto" size={96} />
                    <p className="text-2xl">40+</p>
                    <p>Etkinlik</p>
                </div>
                <div className="flex flex-col gap-2">
                    <AiFillProject className="mx-auto" size={96} />
                    <p className="text-2xl">10</p>
                    <p>Proje Ekibi</p>
                </div>
            </div>
        </motion.div>
    )
}
