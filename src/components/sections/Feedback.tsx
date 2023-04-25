"use client";

import {motion} from "framer-motion";
import {fadeIn, staggerContainer, zoomIn} from "../../utils/motion";
import styles from "@/app/style";
import Image from "next/image";

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()} initial="hidden" whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
      >
        <motion.div className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col 
          gradient-05 sm:p-8 p-4 rounded-3xl border border-[#6A6A6A] relative" variants={fadeIn("right", "tween", 0.2, 1)}
        >
          <div className="feedback-gradient"></div>
          <div>
            <h4 className="font-bold sm:text-3xl text-2xl">Samantha</h4>
            <p className="mt-2 font-normal sm:text-lg text-xs text-gray-400">Founder | Metaversus</p>
          </div>
          <p className="mt-6 font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-gray-100">
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className={`relative flex-1 ${styles.flexCenter}`}>
          <Image src="/imgs/planet/planet-09.png" alt="planet 09" width={1000} height={700} 
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
          <motion.div variants={zoomIn(0.4, 1)} className="lg:block hidden absolute -left-[10%] top-[3%]">
            <Image src="/imgs/stamp.png" alt="stamp" width={155} height={155} objectFit="contain"/>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Feedback