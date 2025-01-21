'use client';
import React, { useCallback, useEffect, useState } from 'react';
import ReplyMessageBox from './ReplyMessageBox';
import { Reply } from '@/types';
import useStore from '@/app/stores/wish-store';

const ReplyList = ({ parentId }: { parentId: string }) => {
  const { getWish, wishes } = useStore();
  const [replies, setReplies] = useState<Reply[]>([]);

  const getReplies = useCallback(async () => {
    const wish = await getWish(parentId);
    setReplies(wish?.replies ?? []);
  }, [getWish, parentId, wishes]);

  useEffect(() => {
    getReplies();
    console.log("test");
  }, [getReplies, getWish, replies]);

  return (
    <div className="ms-3 flex flex-col py-1 max-h-[300px]  overflow-y-auto">
      {replies.length > 0
        ? replies.map((reply, i) => (
            <ReplyMessageBox key={i.toString()} {...reply} />
          ))
        : null}
    </div>
  );
};

export default ReplyList;
