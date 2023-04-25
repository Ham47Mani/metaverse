import styles from "@/app/style";
import Image from "next/image";

type NewFeaturesProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures = ({imgUrl, title, subtitle} : NewFeaturesProps) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323F5D]`}>
        <Image src={imgUrl} alt="icon" width={500} height={500} className="w-1/2 h-1/2 object-contain"/>
      </div>
      <h1 className="mt-7 font-bold text-2xl leading-8">Title {title}</h1>
      <p className="flex-1 mt-4 font-normal text-lg text-[#B0B0B0] leading-8">{subtitle}</p>
    </div>
  )
}

export default NewFeatures