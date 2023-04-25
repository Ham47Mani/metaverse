import {motion} from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

type TypingTextProps = {
  title: string,
  textStyles: string
}

export const TypingText = ({title, textStyles}: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-sm text-gray-300 ${textStyles} mb-4`}
  >
    {
      Array.from(title).map((letter, i) => (
        <motion.span variants={textVariant2} key={i}>
          {letter === " " ? '\u00A0' : letter}
        </motion.span>
      ))
    }
  </motion.p>
);

type TextProps ={
  title: React.ReactElement,
  textStyles: string
}

export const TitleText = ({title, textStyles}: TextProps) => (
  <motion.h2 variants={textVariant2} initial="hidden" whileInView="show"
    className={`${textStyles} mt-2 font-bold md:text-6xl text-4xl`}
  >
    {title}
  </motion.h2>
);
