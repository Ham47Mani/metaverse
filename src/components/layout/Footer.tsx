"use client";

import {motion} from "framer-motion";
import styles from "@/app/style";
import { footerVariants } from "@/utils/motion";
import Image from "next/image";
import { socials } from "@/constants/constants";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants} initial="hidden" whileInView="show" className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient"></div>
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex justify-between items-center flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px]">Enter the Metaverse</h4>
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-3">
            <Image src="/imgs/icons/headset.svg" alt="headset" width={24} height={24} className="object-contain"/>
            <span className="font-normal text-base uppercase">Enter Metavers</span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-12 h-[2px] bg-white/10"></div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-4 text-center flex-col lg:flex-row">
          <h4 className="font-extrabold text-2xl uppercase">Metaversus</h4>
          <p className="font-normal text-sm opacity-80 leading-5">Copyright © 2023 Metaversus. Made By Ham47Mani.</p>
          <div className="flex gap-4">
            {
              socials.map(social => (
                <Image src={social.url} alt={social.name} key={social.name} width={24} height={24} className="object-contain cursor-pointer" />
              ))
            }
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer