import { playUsTrad, roboto } from "@/app/font";
import Link from "next/link";
import React from "react";

interface EventCardProps {
  title: string;
  background: string;
  date: string;
  location: string;
  address: string;
  mapLink: string;
}

const EventCard = ({
  title,
  background,
  date,
  location,
  address,
  mapLink,
}: EventCardProps) => {
  console.log("ng" +background);
  
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`relative py-[38px] px-[30px] bg-cover bg-opacity-50 `}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50" />

      <div className="flex flex-col relative items-center justify-center text-center bg-white p-6 z-10">
        <h2 className={`${playUsTrad.className} text-[24px] text-gold`}>
          {title}
        </h2>
        <h4
          className={`${roboto.className} text-[20px] font-bold mt-[19px]`}
          dangerouslySetInnerHTML={{ __html: date }}
        />
        <p className={`${roboto.className} pt-[26px]`}>Location</p>
        <p className={`${roboto.className} font-bold mt-[11px]`}>{location}</p>
        <p>{address}</p>
        <button
          className={`${roboto.className} mt-[38px] py-[13px] bg-[#3C5B6F] text-white w-full rounded-[10px]`}
        >
          <Link href={mapLink}>Google Maps</Link>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
