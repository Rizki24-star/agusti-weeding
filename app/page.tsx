"use client";
import Image from "next/image";
import { playfairDisplay, roboto, playUsTrad } from "./font";
import TitleSection from "@/components/TitleSection";
import BrideCard from "@/components/BrideCard";
import { bride1, bride2 } from "@/constants/data";
// import "";

export default function Home() {
  return (
    <>
      {/* Opening Section */}
      <div className="relative h-screen bg-[url('../public/assets/img_opening.png')] bg-cover bg-center">
        <style jsx>{`
          .gradient-linear {
            background: linear-gradient(
              to bottom,
              rgba(59, 130, 246, 0) 32%,
              rgba(180, 192, 223, 1) 63%,
              rgba(0, 30, 107, 1) 75%,
              rgba(2, 49, 167, 1) 100%
            );
          }
        `}</style>
        <div className="absolute inset-0 gradient-linear opacity-[0.54]"></div>
        <div className="flex flex-col justify-between h-full">
          <h1
            className={`text-center text-4xl pt-[160px] ${playfairDisplay.className} font-bold text-navy`}
          >
            Agusti & Bertaria
          </h1>
          <div className="mx-[30px] text-white z-10 mb-[129px]">
            <p className={`${roboto.className} font-bold text-[30px]`}>
              February 8, 2025
            </p>
            <p className={`${playfairDisplay.className} text-[22px]`}>
              Will get meried
            </p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto bg-lightBrown">
        <div className="absolute w-[120px] h-[120px] bg-white rounded-full left-0 right-0 mx-auto top-[-72px] flex items-center justify-center shadow-md">
          <Image
            src="/assets/arrow.png"
            alt="arrow-icon"
            width={49}
            height={53}
          />
        </div>
      </div>
      {/* love story section  */}
      <div className="">
        <TitleSection title="Our Love Story" />
        <BrideCard {...bride1} />
        <div className="flex flex-col bg-lightBrown py-[48px] px-[30px] gap-20 my-20">
          <div className="flex flex-col gap-y-6">
            <h5 className={`${playUsTrad.className} text-gold text-[18px]`}>
              First Meet
            </h5>
            <span className={`${roboto.className} text-gold`}>
              Many variations of passages of Lorem Ipsum available, but the
              majority have{" "}
            </span>
          </div>
          <div className="flex flex-col gap-y-6">
            <h5 className={`${playUsTrad.className} text-gold text-[18px]`}>
              Love Story
            </h5>
            <span className={`${roboto.className} text-gold`}>
              Many variations of passages of Lorem Ipsum available, but the
              majority have
            </span>
          </div>
          <div className="flex flex-col gap-y-6">
            <h5 className={`${playUsTrad.className} text-gold text-[18px]`}>
              Weeding Day
            </h5>
          </div>
        </div>
        <BrideCard {...bride2} />
      </div>
    </>
  );
}
