"use client"
import { playfairDisplay } from '@/app/font';
import { Reply, Wish } from '@/types';
import React, { useCallback, useEffect, useState } from 'react';
import WishForm from './WishForm';
import { motion } from 'motion/react';
import ReplyList from './ReplyList';
import Image from 'next/image';
import { reply } from '@/public/assets';
import useStore from '@/app/stores/wish-store';

type MessageBoxProps = Wish;

const MessageBox = ({
  id,
  name,
  message,
  attendance,
  createdAt,
}: MessageBoxProps) => {
  const [openReply, setOpenReply] = useState<boolean>(false);
  console.log('message-box' + id);

  const { getWish } = useStore();
  const [replies, setReplies] = useState<Reply[]>([]);

  const getReplies = useCallback( async () => {
    const wish = await getWish(id);
    setReplies(wish?.replies ?? []);
  }, [getWish, id])

  useEffect(() => {
    getReplies();
  }, [getReplies, getWish, replies]);

  return (
    <div
      className={`${playfairDisplay.className} py-[10px] px-[16px] bg-white rounded-[10px] shadow-md`}
    >
      <div className="flex items-center justify-between">
        <p className=" text-[12px] text-gold font-bold">
          {name} ({attendance === 'yes' ? 'Hadir' : 'Tidak Hadir'})
        </p>
        <span className=" text-[10px] text-navy">
          {new Date(createdAt?.toDate()).toDateString()}
          {/* {createdAt?.toDate().getUTCDate().toString()} */}
        </span>
      </div>
      <p
        className={`${playfairDisplay.className} text-[12px] text-gold font-normal`}
      >
        {message}
      </p>
      {/* reply form */}
      <div className="mt-2">
        <div className="flex flex-col  gap-1 text-[10px]">
          <span
            onClick={() => setOpenReply(!openReply)}
            className="flex items-center gap-1 text-navy cursor-pointer"
          >
            <Image src={reply} width={7} height={6} alt="reply-icon" />
            Balas ({replies.length})
          </span>
          {openReply ? (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WishForm parentId={id} />
            </motion.div>
          ) : null}
        </div>
      </div>
      {/* reply list  */}
      <ReplyList parentId={id} />
    </div>
  );
};

export default MessageBox;
