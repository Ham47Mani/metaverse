"use client";

import Image from "next/image";

import {motion} from "framer-motion";
import {navVariants} from "../../utils/motion";
import styles from "@/app/style";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-1/2 inset-0 gradient-01"></div>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <Image src="imgs/icons/search.svg" alt="search" width={24} height={24} className="object-contain"/>
        <h2 className="font-extrabold text-2xl leading-[30px] uppercase">Metaversus</h2>
        <Image src="imgs/icons/menu.svg" alt="menu bar" width={24} height={24} className="object-contain"/>
      </div>
    </motion.nav>
  )
}

export default Navbar