"use client";

import { fadeIn } from "@/utils/motion";
import {motion} from "framer-motion";
import Image from "next/image";

type InsightCardProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const InsightCard = ({imgUrl, title, subtitle, index} : InsightCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 1)} className="flex md:flex-row flex-col gap-4">
      <Image src={imgUrl} alt={title} width={500} height={500} className="md:w-[270px] h-[250px] w-full rounded-3xl object-cover" />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-16 flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-5xl text-[26px]">{title}</h4>
          <p className="mt-4 font-normal text-sm lg:text-xl text-gray-400">{subtitle}</p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <Image src="/imgs/icons/arrow.svg" alt="arrow" width={200} height={200} className="w-[40%] h-[40%] object-contain" />
        </div>
      </div>
    </motion.div>
  )
}

export default InsightCard