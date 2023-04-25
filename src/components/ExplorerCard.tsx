import React, { Dispatch, SetStateAction } from 'react'
import {motion} from "framer-motion";
import { fadeIn } from '@/utils/motion';
import styles from "@/app/style";
import Image from 'next/image';

interface ExploreCardProps {
  index: number;
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
  id: string;
  imgUrl: string;
  title: string
}

const ExplorerCard = ({index, id, imgUrl, title, active, handleClick}: ExploreCardProps) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${active === id ? "flex-[10]" : "flex-[2]"} 
      ${styles.flexCenter} min-w-[170px] h-[700px] transition-flex duration-75 ease-in-out cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image src={imgUrl} alt={title} fill objectFit='cover' className='rounded-3xl'/>
      { active !== id ? (
        <h3 className='font-semibold sm:text-2xl text-lg absolute z-0 lg:bottom-5 lg:-rotate-90 origin-0'>
          {title}
        </h3>
      ) : (
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-black/50 rounded-b-3xl'>
          <div className={`${styles.flexCenter} w-16 h-16 rounded-3xl mb-4 glassmorphism`}>
            <Image src="/imgs/icons/headset.svg" alt='headset' width={40} height={40} className='w-1/2 h-1/2 object-contain'/>
          </div>
          <p className="font-normal text-base leading-5 uppercase">Enter the metaverse</p>
          <h2 className='mt-6 font-semibold sm:text-3xl text-2xl'>{title}</h2>
        </div>
      )}
    </motion.div>
  )
}

export default ExplorerCard