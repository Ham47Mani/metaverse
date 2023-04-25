"use client";

import Image from "next/image";

import {motion} from "framer-motion";
import {slideIn, staggerContainer, textVariant} from "../../utils/motion";
import styles from "@/app/style";


const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>Metaverse</motion.h1>
          <motion.div variants={textVariant(1.1)} className={`flex justify-center items-center`}>
            <h1 className={`${styles.heroHeading}`}>Ma</h1>
            <div className={styles.heroDText}></div>
            <h1 className={`${styles.heroHeading}`}>Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-5 -mt-3"
        >
          <div className="hero-gradient absolute w-full h-[300px] rounded-tl-[140px] z-0 -top-[30px]"></div>
          <img src="/imgs/bg/cover.png" alt="Hero cover"
            className="w-full sm:h-[500px] h-[350px] rounded-tl-[140px] z-10 relative object-cover" 
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-10 relative z-10">
              <Image src="/imgs/stamp.png" alt="stamp" width={155} height={155} objectFit="contain"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px]"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero;