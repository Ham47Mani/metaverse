"use client";

import {motion} from "framer-motion";
import {fadeIn, planetVariants, staggerContainer} from "../../utils/motion";
import styles from "@/app/style";
import { TitleText, TypingText } from "../CustomText";
import { newFeatures } from "@/constants/constants"; 
import Image from "next/image";
import NewFeatures from "../NewFeatures";

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()} initial="hidden" whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="flex-[0.75] flex flex-col justify-center">
          <TypingText textStyles="" title="| What's New?" />
          <TitleText title={<>What's new about Metaversus?</>} textStyles="" />
          <div className="mt-12 flex flex-wrap justify-between gap-6">
            {
              newFeatures.map((feature, index) => (
                <NewFeatures key={feature.title} {...feature}/>
              ))
            }
          </div>
        </motion.div>
        <motion.div variants={planetVariants("right")} className={`${styles.flexCenter} flex-1`}>
          <Image src="/imgs/bg/whats-new.png" alt="Whats new" width={500} height={500} 
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew