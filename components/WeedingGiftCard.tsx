"use client"
import { cinzel, roboto } from '@/app/font';
import { cardBow } from '@/public/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const WeedingGiftCard = () => {
    const [showInfo, setshowInfo] = useState<boolean>(false)

  return (
    <div className="px-[18px] mb-[88px]">
      {/* weeding gift  */}
      <div className="text-center mt-[68px] shadow-lg py-[28px] rounded-[10px] px-[10px]">
        <h3 className={`${cinzel.className} text-gold text-[20px] font-bold`}>
          Weeding Gift
        </h3>
        <p
          className={`${cinzel.className} text-gold text-[12px] mt-[22px]`}
        >
          Doa restu anda merupakan karunia yang sangat
          <br /> berarti bagi kami. Jika memberi adalah ungkapan
          <br /> tanda kasih, anda dapat memberi kado ke alamat berikut
          <br /> atau pun secara cashless.
        </p>
        <button
        onClick={() => setshowInfo(!showInfo)}
          className={`${roboto.className} mt-[18px] p-[10px] text-white bg-gold w-full max-w-[234px] rounded-[10px] font-bold`}
        >
          Kirim hadiah
        </button>
        <div className={`${roboto.className} ${!showInfo ? 'hidden' : ''}`}>
        <div className={`text-center mt-[39px]`}>
          <h1 className={`text-navy font-bold text-[24px]`}>BCA</h1>
          <p className="font-bold text-gold">1630602340</p>
          <p className="text-gold">Agusti Frananda A. Naibaho</p>
        </div>
        <div className={`text-center mt-[39px]`}>
          <h1 className={`text-navy font-bold text-[24px]`}>Mandiri</h1>
          <p className="font-bold text-gold">1050019878267</p>
          <p className="text-gold">Betharia Crisdayanti Sitorus</p>
        </div>
        <div className={`text-center mt-[47px]`}>
          <h1 className={`text-navy font-bold text-[24px]`}>GIFT</h1>
          <p className="text-gold">
            Penerima:
            <br /> Agusti Frananda A. Naibaho <br/>
            Perumnas Kp. Ladang, Gang Anggrek, Lubuk Alung, Padang Pariaman, Sumatera Barat, 25581
          </p>
        </div>
        </div>
        <Image src={cardBow} alt="card-bow" className="w-full mt-[62px]" />
      </div>
    </div>
  );
};

export default WeedingGiftCard;
