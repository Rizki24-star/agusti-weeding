import { playfairDisplay } from "@/app/font";
import Image from "next/image";
import React from "react";

const TitleSection = ({ title }: { title: string }) => {
  return (
    <div className="section-title flex flex-col items-center justify-center gap-2  py-8">
      <Image
        src={"/assets/flower_title.png"}
        alt="title-icon"
        width={75}
        height={40}
      />
      <h1
        className={`${playfairDisplay.className} text-black font-bold text-[32px]`}
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleSection;
