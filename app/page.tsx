'use client';
import Image from 'next/image';
import { playfairDisplay, roboto, playUsTrad } from './font';
import TitleSection from '@/components/TitleSection';
import BrideCard from '@/components/BrideCard';
import { bride1, bride2, event1, event2 } from '@/constants/data';
import bgFlower from '@/public/assets/bg_flower.png';
import cardBow from '@/public/assets/card_bow.png';
import EventCard from '@/components/EventCard';
import { openingFlowerVertical } from '@/public/assets';
import WishList from '@/components/WishList';
import WishForm from '@/components/WishForm';
import { motion } from 'motion/react';

// TODO: add music
// TODO: add opening cover

export default function Home() {
  return (
    <>
      {/* Opening Section */}
      <section className="relative h-screen bg-[url('../public/assets/img_opening.png')] bg-cover bg-center">
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
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className={`text-center text-4xl pt-[160px] ${playfairDisplay.className} font-bold text-navy`}
          >
            Agusti & Bertaria
          </motion.h1>
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
          <div className="w-[120px] h-[120px] bg-white rounded-full left-0 right-0 mx-auto top-[-72px] flex items-center justify-center shadow-md">
            {/* <div className="flex items-center justify-between"> */}
            <Image
              src="/assets/arrow.png"
              alt="arrow-icon"
              width={49}
              height={53}
            />
            {/* </div> */}
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
            <Image
              src={openingFlowerVertical}
              alt="vertical-flower"
              className="transform scale-x-[-1]"
            />
          </div>
          <TitleSection title="Our Love Story" />
          <BrideCard {...bride1} />
          <div className="flex flex-col bg-lightBrown py-[48px] px-[30px] gap-20">
            <div className="flex flex-col gap-y-6">
              <h5 className={`${playUsTrad.className} text-gold text-[18px]`}>
                First Meet
              </h5>
              <span className={`${roboto.className} text-gold`}>
                Many variations of passages of Lorem Ipsum available, but the
                majority have{' '}
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
        {/* countdown timer  */}
        {/* Countdown timer functionality */}
        <div className="flex items-center justify-between mx-[30px]">
          <div className="text-gold font-bold text-center">
            <h1 className="text-[32px]">03</h1>
            <p className="text-[16px]">Days</p>
          </div>
          <div className="text-gold font-bold text-center">
            <h1 className="text-[32px]">15</h1>
            <p className="text-[16px]">Hours</p>
          </div>
          <div className="text-gold font-bold text-center">
            <h1 className="text-[32px]">23 </h1>
            <p className="text-[16px]">Minutes</p>
          </div>
          <div className="text-gold font-bold text-center">
            <h1 className="text-[32px]">55</h1>
            <p className="text-[16px]">Second</p>
          </div>
        </div>
        <div className="text-center mt-[34px]">
          <i className={`${playfairDisplay.className} text-[14px] text-gold`}>
            TUHAN Allah berfirman: {'"Tidak baik, kalau'}
            <br />
            manusia itu seorang diri saja. Aku akan
            <br />
            {'menjadikan penolong baginya, yang sepadan dengan dia".'}
          </i>
          <p
            className={`${playfairDisplay.className} font-bold text-gold mt-[20px]`}
          >
            Kejadian 2:8
          </p>
        </div>
        {/* weeding gift card  */}
        <div className="px-[18px] mb-[88px]">
          {/* weeding gift  */}
          <div className="text-center mt-[68px] shadow-lg py-[28px] rounded-[10px]">
            <h3 className={`${playUsTrad.className} text-gold text-[20px]`}>
              Weeding Gift
            </h3>
            <p
              className={`${playUsTrad.className} text-gold text-[12px] mt-[22px]`}
            >
              Doa restu anda merupakan karunia yang sangat
              <br /> berarti bagi kami. Jika memberi adalah ungkapan
              <br /> tanda kasih, anda dapat memberi kado ke alamat berikut
              <br /> atau pun secara cashless.
            </p>
            <button
              className={`${roboto.className} mt-[18px] p-[10px] text-white bg-gold w-full max-w-[234px] rounded-[10px]`}
            >
              Klik Disini
            </button>
            <div className={`${roboto.className} text-center mt-[39px]`}>
              <h1 className={`text-navy font-bold text-[24px]`}>BCA</h1>
              <p className="font-bold text-gold">5485126381</p>
              <p className="text-gold">Betaria Sitorus</p>
            </div>
            <div className={`${roboto.className} text-center mt-[47px]`}>
              <h1 className={`text-navy font-bold text-[24px]`}>GIFT</h1>
              <p className="font-bold text-gold">
                Penerima:
                <br /> Agusti Naibaho (085297598063)
              </p>
              <p className="text-gold">
                Jln. Gelong Baru Tengah no.23 Tomang, Grogol Petamburan. Jakarta
                Barat 11440
              </p>
            </div>
            <Image src={cardBow} alt="card-bow" className="w-full mt-[62px]" />
          </div>
        </div>
        <TitleSection title="Galery Photos" />
      </section>
      {/* rsv & wishes  */}
      {/* <Wishes> */}
      <section className="flex flex-col items-center justify-center mt-[69px] mb-[34px]">
        <TitleSection title="RSV & Wishes" />
        <div className="w-full  bg-[url('../public/assets/bg_rsv.png')] px-[10px] mx-auto py-[70px] mt-[34px]">
          <div className="flex flex-col items-center justify-center min-w-[270px] w-full h-[528px] px-12 bg-[url('../public/assets/bg_rsv_form.png')] bg-contain bg-no-repeat bg-center">
            <h2
              className={`${playfairDisplay.className} text-gold font-bold text-[24px]`}
            >
              Are you attended?
            </h2>
            {<WishForm />}
            {/* <form
              action=""
              className="flex flex-col items-center gap-8 mt-[29px] w-full"
            >
              <div className="border-2 border-gold h-[45px] w-full p-3 rounded-[10px]">
                <input
                  type="text"
                  className={`${playfairDisplay.className} text-gold focus:outline-none p-0 text-[12px]`}
                  placeholder="Name"
                />
              </div>
              <div className="border-2 border-gold text-gold text-[12px] h-[45px] w-full p-3 rounded-[10px]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="true">Hadir / Attend</option>
                  <option value="false">Tidak Hadir / No Attend</option>
                </select>
              </div>
              <div className="w-full">
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className={`${playfairDisplay.className}  text-gold border-2 text-[12px] border-gold  w-full p-3 rounded-[10px] focus:outline-none`}
                ></textarea>
              </div>
            </form> */}
          </div>
          <WishList />
        </div>
      </section>
      {/* </Wishes> */}
    </>
  );
}
