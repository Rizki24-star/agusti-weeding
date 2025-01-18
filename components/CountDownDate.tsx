"use client"
import React, { useEffect, useState } from 'react';
import Countdown, { CountdownTimeDelta } from 'react-countdown';

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownTimeDelta) => {
  if (completed) {
    // Render a completed state
    return <div>Acara telah terlaksana</div>;
  } else {
    // Render a countdown
    return (
      <div className="flex items-center justify-between mx-[30px]">
        <div className="text-gold font-bold text-center">
          <h1 className="text-[32px]">{days}</h1>
          <p className="text-[16px]">Days</p>
        </div>
        <div className="text-gold font-bold text-center">
          <h1 className="text-[32px]">{hours}</h1>
          <p className="text-[16px]">Hours</p>
        </div>
        <div className="text-gold font-bold text-center">
          <h1 className="text-[32px]">{minutes}</h1>
          <p className="text-[16px]">Minutes</p>
        </div>
        <div className="text-gold font-bold text-center">
          <h1 className="text-[32px]">{seconds}</h1>
          <p className="text-[16px]">Second</p>
        </div>
      </div>
    );
  }
};

const CountDownDate = () => {
  const [targetDate, setTargetDate] = useState<number>();
  useEffect(() => {
    setTargetDate(Date.now() + (new Date(2025, 1, 8).getTime() - Date.now()));
  }, []);

  if (!targetDate) {
    return null;
  }

  return <Countdown date={targetDate} renderer={renderer}></Countdown>;
};

export default CountDownDate;
