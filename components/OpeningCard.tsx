import { roboto } from '@/app/font';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { Dispatch, SetStateAction, Suspense } from 'react';

interface FontType {
  className: string;
  style?: { [key: string]: string | number };
}

interface OpeningCardProps {
  showOpeningCard: boolean;
  setShowOpeningCard: Dispatch<SetStateAction<boolean>>;
  cinzel: FontType;
  roboto: FontType;
}

const GuestName = () => {
  const params = useSearchParams();
  return (
    <h4 className={`${roboto.className} text-gold text-[24px] mt-8`}>
      Yth: {params.get('to')}
    </h4>
  );
}

const MemoizedGuestname = React.memo(GuestName);

export const OpeningCard = ({
  showOpeningCard,
  setShowOpeningCard,
  cinzel,
  roboto,
}: OpeningCardProps) => {
  return (
    <div
      className={`absolute inset-0 bg-white h-[100vw] w-screen z-50 ${
        showOpeningCard ? '' : '-top-[12000px]'
      }`}
      style={{ transition: '0.3s ease' }}
    >
      <div className="max-w-[430px] w-full h-full mx-auto bg-navy relative">
        <Image
          src="/assets/opening-card.png"
          className="object-cover w-full h-screen z-50"
          width={500}
          height={500}
          alt={''}
        />
        <div className="absolute flex flex-col text-center items-center justify-center top-[30%] mx-auto w-full">
          <h1 className={`${cinzel.className} text-gold font-bold text-[48px]`}>
            Agusti
            <br />&<br />
            Betharia
          </h1>
          <p className={`${cinzel.className} text-gold text-[24px] mt-8`}>
            February |<b>8</b>| 2025
          </p>

          <Suspense fallback={<div>Loading...</div>}>
            <MemoizedGuestname />
          </Suspense>

          <br />
          <button
            onClick={() => setShowOpeningCard(!showOpeningCard)}
            className={`${roboto.className} mt-[18px] p-[10px] text-white bg-gold w-full max-w-[234px] rounded-[10px] font-bold`}
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}
