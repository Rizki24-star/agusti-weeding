import { openingFlowerVertical } from "@/public/assets";
import Image from "next/image";
import TitleSection from "./TitleSection";
import BrideCard from "./BrideCard";
import { bride1, bride2 } from "@/constants/data";

export const LoveStory = () => {
  return (
    <section className="relative bg-[url('../public/assets/sky.gif')]">
      <div className="absolute inset-0 bg-white opacity-85" />
      <div className="relative">
        <div className="flex justify-between relative">
          <Image src={openingFlowerVertical} alt="vertical-flower" />
          <div className="pt-8">
            <TitleSection title="Groom" />
          </div>
          <Image
            src={openingFlowerVertical}
            alt="vertical-flower"
            className="transform scale-x-[-1]"
          />
        </div>
        <BrideCard {...bride1} />
        <TitleSection title="Bride" />
        <BrideCard {...bride2} />
      </div>
      <div className="h-10" />
      <div className="relative mx-auto z-10">
        <div className="absolute flex items-center justify-between inset-0">
          <Image
            src="/assets/opening_flower.png"
            alt="arrow-icon"
            width={155}
            height={63}
          />
          <Image
            src="/assets/opening_flower.png"
            alt="arrow-icon"
            width={155}
            height={63}
          />
          <Image
            src="/assets/opening_flower.png"
            alt="arrow-icon"
            width={155}
            height={63}
          />
        </div>
      </div>
    </section>
  );
}