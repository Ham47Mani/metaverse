"use client";

import {motion} from "framer-motion";
import {fadeIn, staggerContainer} from "../../utils/motion";
import styles from "@/app/style";
import { TitleText, TypingText } from "../CustomText";
import { insights } from "@/constants/constants";
import InsightCard from "../InsightCard";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()} initial="hidden" whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText textStyles='text-center' title="| Insight" />
        <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
        <div className="mt-12 flex flex-col gap-8">
          {
            insights.map((insight, index) => (
              <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Insights