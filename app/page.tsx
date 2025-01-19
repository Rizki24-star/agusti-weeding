'use client';
import Image from 'next/image';
import { playfairDisplay, roboto, playUsTrad } from './font';
import TitleSection from '@/components/TitleSection';
import BrideCard from '@/components/BrideCard';
import { bride1, bride2, event1, event2, loveStories } from '@/constants/data';
import bgFlower from '@/public/assets/bg_flower.png';
import EventCard from '@/components/EventCard';
import { openingFlowerVertical } from '@/public/assets';
import WishList from '@/components/WishList';
import WishForm from '@/components/WishForm';
import CountDownDate from '@/components/CountDownDate';
import WeedingGiftCard from '@/components/WeedingGiftCard';
import Galeries from '@/components/ImageSlider';

// TODO: add music
// TODO: add opening cover
// TODO: Fetch all image from cloudinary

export default function Home() {
  return (
    <>
      {/* Opening Section */}
      <section className="relative h-screen bg-[url('https://res.cloudinary.com/dzhce2fub/image/upload/v1736214290/img_opening_dm7frq.jpg')] bg-cover bg-center">
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
      </section>
      <div className="relative mx-auto z-10">
        <div className="absolute flex items-center justify-between inset-0">
          <Image
            src="/assets/opening_flower.png"
            alt="arrow-icon"
            width={155}
            height={63}
          />
          <div className="w-[80px] h-[80px] bg-white rounded-full left-0 right-0 mx-auto top-[-72px] flex items-center justify-center shadow-md">
            <Image
              src="/assets/arrow.png"
              alt="arrow-icon"
              width={30}
              height={35}
            />
          </div>
          <Image
            src="/assets/opening_flower.png"
            alt="arrow-icon"
            width={155}
            height={63}
          />
        </div>
      </div>
      {/* love story section  */}
      <section className="relative bg-[url('../public/assets/sky.gif')]">
        <div className="absolute inset-0 bg-white opacity-85" />
        <div className="relative">
          <div className="flex justify-between relative">
            <Image src={openingFlowerVertical} alt="vertical-flower" />
            <div className="pt-8">
              <TitleSection title="Our Love Story" />
            </div>
            <Image
              src={openingFlowerVertical}
              alt="vertical-flower"
              className="transform scale-x-[-1]"
            />
          </div>
          <BrideCard {...bride1} />
          <BrideCard {...bride2} />
          <div className="flex flex-col bg-lightBrown py-[48px] px-[30px] gap-20">
            {loveStories.map((item, i) => (
              <div key={i.toString()} className="flex flex-col gap-y-6">
                <h5 className={`${playUsTrad.className} text-gold text-[18px]`}>
                  {item.time}
                </h5>
                <span className={`${roboto.className} text-gold`}>
                  {item.story}
                </span>
              </div>
            ))}
          </div>
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
      {/* weeding event  */}
      <section className="mt-12">
        <TitleSection title="Weeding Event" />
        <div className="h-[34px]" />
        <EventCard {...event1} />
        <div className="h-[21px]" />
        <EventCard {...event2} />
      </section>
      {/* gift and hours  */}
      <section>
        <Image src={bgFlower} alt="flower" />
        {/* Countdown timer functionality */}
        <CountDownDate />
        <div className="text-center mt-[34px] mx-[30px]">
          <i
            className={`${playfairDisplay.className} text-[14px] text-gold italic`}
          >
            Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan
            ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi
            satu daging. Demikianlah mereka bukan lagi dua, melainkan satu.
            Karena itu, apa yang telah dipersatukan Allah, tidak boleh
            diceraikan manusia.
          </i>
          <p
            className={`${playfairDisplay.className} font-bold text-gold mt-[20px]`}
          >
            Matius 19:5-6
          </p>
        </div>
        {/* weeding gift card  */}
        <WeedingGiftCard />
        <TitleSection title="Galery Photos" />
        {/* galery slider  */}
        <Galeries />
      </section>
      {/* rsv & wishes  */}
      {/* <Wishes> */}
      <section className="flex flex-col items-center justify-center mt-[69px]">
        <TitleSection title="RSV & Wishes" />
        <div className="w-full  bg-[url('../public/assets/bg_rsv.png')] px-[10px] mx-auto py-[70px] mt-[34px]">
          <div className="flex flex-col items-center justify-center min-w-[270px] w-full h-[528px] px-12 bg-[url('../public/assets/bg_rsv_form.png')] bg-contain bg-no-repeat bg-center">
            <h2
              className={`${playfairDisplay.className} text-gold font-bold text-[24px]`}
            >
              Are you attended?
            </h2>
            {<WishForm />}
          </div>
          <WishList />
        </div>
      </section>
      <div className="relative -top-8 bg-gold">
        <div className="absolute flex items-center justify-center z-20">
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

      {/* footer  */}
      <section>
        <div className="relative flex items-center justify-center bg-navy">
          <div className="flex flex-col mx-[30px] text-center my-24">
            <h1
              className={`${playfairDisplay.className} text-white font-bold text-[32px]`}
            >
              Terimaksih
            </h1>
            <p
              className={`${playfairDisplay.className} text-white font-bold text-[16px] mt-6`}
            >
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
              Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu
              kepada kami.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <p className={`${roboto.className} text-white`}>
                Kami yang Berbahagia
              </p>
              <h1
                className={`${playfairDisplay.className} text-white font-bold text-[32px]`}
              >
                Agusti & Bertaria
              </h1>
              <Image
                src={'/assets/flower_title.png'}
                alt="title-icon"
                width={75}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
