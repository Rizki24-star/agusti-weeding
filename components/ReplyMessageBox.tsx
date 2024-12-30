import { playfairDisplay } from '@/app/font';
import { Reply } from '@/types';
import React from 'react';
type MessageBoxProps = Reply;

const ReplyMessageBox = ({
  name,
  message,
  attendance,
  createdAt,
}: MessageBoxProps) => {
  return (
    <div
      className={`${playfairDisplay.className} py-[4px] bg-white rounded-[10px]`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[12px] text-gold font-bold">
          {name} {attendance ? '(Hadir)' : attendance ? '(Tidak Hadir)' : ''}
        </p>
        <span className=" text-[10px] text-navy">
          {new Date(createdAt?.toDate()).toDateString()}
        </span>
      </div>
      <p className=" text-[12px] text-gold font-normal">{message}</p>
    </div>
  );
};

export default ReplyMessageBox;
