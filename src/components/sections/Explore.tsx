"use client";

import { useState } from "react";
import {motion} from "framer-motion";
import {staggerContainer} from "../../utils/motion";
import styles from "@/app/style";
import { exploreWorlds } from "@/constants/constants";
import { TitleText, TypingText } from "../CustomText";
import ExplorerCard from "../ExplorerCard";

const Explore = () => {
  const title = (
  <>
    Choose the world you want
    <br className="md:block hidden"/>
    to explore
  </>);
  const [active, setActive] = useState<string>("world-2");

  return (
    <section id="explore" className={`${styles.paddings}`}>
      <motion.div 
        variants={staggerContainer()} initial="hidden" whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center"/>
        <TitleText title={title} textStyles="text-center"/>
        <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {
            exploreWorlds.map((world, i) => (
              <ExplorerCard key={world.id} {...world} index={i} active={active} handleClick={setActive}/>
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Explore