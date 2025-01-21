'use client';
import { audioPause, audioPlay } from '@/public/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const AudioPlay = ({play}: {play: boolean}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    console.log("test");
    
    if (audioRef.current) {
      const attemptAutoplay = async () => {
        if (play) {
          if (audioRef.current) {
            try {
              // First try playing with user interaction
              const playPromise = audioRef.current.play();
              if (playPromise !== undefined) {
                await playPromise;
                setIsPlaying(true);
              }
            } catch (err) {
              console.log('Autoplay blocked:', err);
              // if autoplay failes, try muted autoplay
              try {
                audioRef.current.muted = true;
                await audioRef.current.play();
                setIsPlaying(true);
                // After successful muted play, unmute
                audioRef.current.muted = false;
              } catch (mutedErr) {
                console.log('Muted autoplay also failed: ', mutedErr);
                setIsPlaying(false);
              }
            }
          }
        }
        
      };

      // Try autoplay when component mounts
      attemptAutoplay();

      // Add event listener for first user interaction
      const handleFirstInteraction = () => {
        if (audioRef.current && !isPlaying) {
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((err) => console.error('Play failed:', err));
        }
      };

      window.addEventListener('click', handleFirstInteraction, {once: true});
      window.addEventListener('touchstart', handleFirstInteraction, {once: true});

      return () => {
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction)
      };
   
  }}, [play]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error('Play failed', err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute bg-transparent bottom-0 w-full  flex justify-end p-4 z-20">
      <audio ref={audioRef} className="" autoPlay loop>
        <source src="audio/weeding-song.mp3" type="audio/mp3" />
      </audio>
      <div
        className="bg-gold w-8 h-8 rounded-full cursor-pointer flex items-center justify-center"
        onClick={togglePlayPause}
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            duration: 3,
            repeat: isPlaying ? Infinity : 0,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="w-max h-max"
        >
          {isPlaying ? (
            <Image src={audioPlay} alt="audio-control" />
          ) : (
            <Image
              src={audioPause}
              alt="audio-control"
              className="w-[15px] h-[15px] m-auto"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AudioPlay;
