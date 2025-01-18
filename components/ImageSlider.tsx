"use client"
import { galeries } from '@/constants/data';
import { iArrow } from '@/public/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleSelectedImage = (operator: string) => {
    if (selectedImage != null) {
      switch (operator) {
        case '+':
          if (selectedImage + 1 <= galeries.length) {
            setSelectedImage(selectedImage + 1);
          } else {
            setSelectedImage(1);
          }
          break;
        case '-':
          if (selectedImage - 1 > 0) {
            setSelectedImage(selectedImage - 1);
          } else {
            setSelectedImage(galeries.length);
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <div className="flex flex-wrap  gap-2 mx-[30px]">
        {galeries.map((galery, i) => (
          <div
            key={i.toString()}
            className="max-w-[180px] max-h-[280] cursor-pointer"
          >
            <Image
              onClick={() => setSelectedImage(i + 1)}
              src={galery.url}
              alt={`image-galery-${i}`}
              className="w-full h-full rounded-[10px] shadow-md object-contain"
              width={150}
              height={100}
            />
          </div>
        ))}
      </div>
      <div
        className={`absolute inset-0 w-full h-screen bg-white bg-opacity-50 z-50 flex flex-col items-center justify-start ${
          !selectedImage ? 'hidden' : ''
        }`}
      >
        <div className="flex justify-between py-4 w-full px-[30px]">
          <div>{selectedImage}/{galeries.length}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedImage(null)}
              className="font-bold text-2xl text-white"
            >
              x
            </button>
          </div>
        </div>
        <div className="my-auto w-full h-full flex items-center justify-between">
          <button
            className="p-4 bg-black bg-opacity-70 rotate-180 text-white flex items-center justify-center"
            onClick={() => handleSelectedImage('+')}
          >
            <Image src={iArrow} alt="arrow-icon" />
          </button>
          <div className="flex items-center overflow-x-auto h-full max-h-[80%] justify-between whitespace-nowrap">
            {galeries.map((galery, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={galery.url}
                  alt={`image-gallery-${i}`}
                  className={`rounded-[10px] m-auto w-full h-full ${
                    selectedImage == i + 1 ? '' : 'hidden'
                  } object-cover`}
                  width={250}
                  height={150}
                />
              </div>
            ))}
          </div>
          <button
            className="p-4 bg-black bg-opacity-70 text-white flex items-center justify-center"
            onClick={() => handleSelectedImage('+')}
          >
            <Image src={iArrow} alt="arrow-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
