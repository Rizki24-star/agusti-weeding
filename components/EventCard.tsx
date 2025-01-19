import { playUsTrad, roboto } from "@/app/font";
import Link from "next/link";
import Image from "next/image";
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
  return (
    <div className="relative w-full h-full">
      {/* Container untuk background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={background}
          alt=""
          fill
          priority
          quality={75}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content container */}
      <div className="relative py-10 px-8">
        <div className="relative flex flex-col items-center justify-center text-center bg-white p-6 z-10 shadow-sm">
          <h2 className={`${playUsTrad.className} text-2xl text-gold`}>
            {title}
          </h2>
          <h4
            className={`${roboto.className} text-xl font-bold mt-5`}
            dangerouslySetInnerHTML={{ __html: date }}
          />
          <p className={`${roboto.className} pt-6`}>Location</p>
          <p className={`${roboto.className} font-bold mt-3`}>{location}</p>
          <p>{address}</p>
          <Link 
            href={mapLink}
            className={`${roboto.className} mt-10 py-3 px-4 bg-[#3C5B6F] text-white w-full rounded-lg text-center hover:bg-[#2f4757] focus:ring-2 focus:ring-offset-2 focus:ring-[#3C5B6F]`}
          >
            Google Maps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;