import { playUsTrad, roboto } from "@/app/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BrideCardProps {
  photo: string;
  name: string;
  parentsName: string;
  ig_link: string;
  ig_username: string;
}

const BrideCard = ({
  photo,
  name,
  parentsName,
  ig_link,
  ig_username,
}: BrideCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-[30px]">
      <Image
        src={photo}
        alt="bride-photo"
        // TODO:  fixing widht and height
        width={200}
        height={207}
        className="rounded-full object-cover"
      />
      <div className="w-full mt-[35px]">
        <h5 className={`${playUsTrad.className} text-navy text-[18px]`}>
          {name}
        </h5>
        <p className={`${roboto.className} text-gold font-medium mt-[26px]`}>
          Putra pertama dari :
        </p>
        <p className={`${roboto.className} text-gold mt-[13px]`}>
          {parentsName}
        </p>
        <button className="bg-lightBrown px-[11px] py-[8px] rounded-[10px] mt-[22px]">
          <Link href={ig_link}>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/assets/ic_instagram.png"
                width={16}
                height={16}
                alt=""
              />
              <span className={`${roboto.className} text-white`}>
                {ig_username}
              </span>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BrideCard;
