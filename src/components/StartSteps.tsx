import styles from "@/app/style";

interface StartStepsProps {
  text : string;
  number: number;
}

const StartSteps = ({text, number}: StartStepsProps) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323F5D]`}>
        <p className="font-bold text-2xl" >{number}</p>
      </div>
      <p className="flex-1 ml-8 font-normal text-lg text-[#B0B0B0] leading-8">{text}</p>
    </div>
  )
}

export default StartSteps