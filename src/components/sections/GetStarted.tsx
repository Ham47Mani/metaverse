"use client";

import {motion} from "framer-motion";
import {fadeIn, planetVariants, staggerContainer} from "../../utils/motion";
import styles from "@/app/style";
import { TitleText, TypingText } from "../CustomText";
import { startingFeatures } from "@/constants/constants";
import Image from "next/image";
import StartSteps from "../StartSteps";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()} initial="hidden" whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        <motion.div variants={planetVariants("left")} className={`${styles.flexCenter} flex-1`}>
          <Image src="/imgs/get-started.png" alt="Get Started" width={500} height={500} 
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="flex-[0.75] flex flex-col justify-center">
          <TypingText textStyles="" title="| How Metaversus Works" />
          <TitleText title={<>Get started with just a few clicks</>} textStyles="" />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-6">
            {
              startingFeatures.map((feature, index) => (
                <StartSteps key={feature} number={index + 1} text={feature}/>
              ))
            }
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetStarted