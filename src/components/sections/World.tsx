"use client";

import {motion} from "framer-motion";
import {fadeIn, staggerContainer} from "../../utils/motion";
import styles from "@/app/style";
import { TitleText, TypingText } from "../CustomText";
import Image from "next/image";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()} initial="hidden" whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText textStyles='text-center' title="| People on the World" />
        <TitleText title={<>Track fiends around you and invite them to play together in the same world</>} textStyles="text-center" />
      </motion.div>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="relative mt-16 flex w-full h-[550px]">
        <Image src="/imgs/bg/map.png" alt="map" width={2000} height={2000} className="w-full h-full object-cover"/>
        <div className="absolute bottom-20 right-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src="/imgs/people/people-01.png" alt="people" width={500} height={500} className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src="/imgs/people/people-02.png" alt="people" width={500} height={500} className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src="/imgs/people/people-03.png" alt="people" width={500} height={500} className="w-full h-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default World