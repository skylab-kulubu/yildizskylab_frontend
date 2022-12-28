import { IoPeopleCircleSharp } from "react-icons/io5";
import { GiTeamIdea } from "react-icons/gi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { clubs as initialClubs } from '../global_state/globalState'

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: .85 } },
    hidden: { opacity: 0, scale: .75, }
};

export const Stats = () => {
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
            <h1 className="text-xl md:text-3xl text-[#222] mb-4 font-extrabold text-center">
                SKYLAB, YILDIZ TEKNİK ÜNİVERSİTESİ BİLGİSAYAR BİLİMLERİ KULÜBÜDÜR.
            </h1>
            <hr className="border-[#72727269]" />
            <div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-4 text-center">
                <div className="flex flex-col gap-2">
                    <IoPeopleCircleSharp className="mx-auto" size={96} color='#d80b3e' />
                    <p className="text-2xl font-bold py-1">1200+</p>
                    <p>Katılımcı</p>
                </div>
                <div className="flex flex-col gap-2">
                    <GiTeamIdea className="mx-auto" size={96} color='#1491d1' />
                    <p className="text-2xl font-bold py-1">{clubs.length}</p>
                    <p>Ekip</p>
                </div>
                <div className="flex flex-col gap-2">
                    <BsFillCalendarEventFill className="mx-auto" size={96} color='#1491d1' />
                    <p className="text-2xl font-bold py-1">40+</p>
                    <p>Etkinlik</p>
                </div>
                <div className="flex flex-col gap-2">
                    <AiFillProject className="mx-auto" size={96} color='#d80b3e' />
                    <p className="text-2xl font-bold py-1">10</p>
                    <p>Proje Ekibi</p>
                </div>
            </div>
        </motion.div>
    )
}
