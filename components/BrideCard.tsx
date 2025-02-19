import { cinzel, roboto } from '@/app/font';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

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
    <div className=" w-full px-[30px] bg-cover py-[28px]">
      <motion.div
        whileInView={{ opacity: 1 }}
        className=" flex flex-col justify-center items-center "
      >
        <Image
          src={photo}
          alt="bride-photo"
          width={250}
          height={250}
          className="rounded-full w-[250px] h-[250px] object-contain border-black shadow-md"
        />
        <div className="w-full mt-[35px]">
          <h5 className={`${cinzel.className} text-navy text-[18px]`}>
            {name}
          </h5>
          <p className={`${roboto.className} text-gold font-bold mt-[26px]`}>
            { ig_username == "bethariacrisdayanti" ? "Putri kedua" : "Putra pertama"} dari :
          </p>
          <p className={`${roboto.className} text-gold`}>{parentsName}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lightBrown px-[11px] py-[8px] rounded-[10px] mt-[22px]"
          >
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
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BrideCard;
