"use client";
import Image from "next/image";
import { playfairDisplay, roboto, playUsTrad } from "./font";
import TitleSection from "@/components/TitleSection";
import BrideCard from "@/components/BrideCard";
import { bride1, bride2, event1, event2 } from "@/constants/data";
import bgFlower from "@/public/assets/bg_flower.png"
import cardBow from "@/public/assets/card_bow.png"
import EventCard from "@/components/EventCard";
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
      {/* weeding event  */}
      <div className="h-[124px]">
        <TitleSection title="Weeding Event" />
        {/* <EventCard {...event1} /> */}
        <div className="h-[21px]"></div>
        {/* <EventCard {...event2} /> */}
      </div>
      {/* gift and hours  */}
      <div>
        <Image src={bgFlower} alt="flower" />
        {/* countdown timer  */}
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
            TUHAN Allah berfirman: "Tidak baik, kalau
            <br />
            manusia itu seorang diri saja. Aku akan
            <br />
            menjadikan penolong baginya, yang sepadan dengan dia."
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
        <TitleSection  title="Galery Photos"/>
      </div>
    </>
  );
}
