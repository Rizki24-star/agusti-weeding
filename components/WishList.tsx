'use client';
import React, { useEffect, useState } from 'react';
import MessageBox from './MessageBox';
import useStore from '@/app/stores/wish-store';
import { playUsTrad } from '@/app/font';

const WishList = () => {
  const { wishes, setWishes } = useStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      setLoading(true);
      setWishes();
    } catch (error) {
      console.log(error);
      setError('Terjadi kesalahan saat memuat wish');
    } finally {
      setLoading(false);
    }
  }, [setWishes]);

  if (loading)
    return (
      <p
        className={`${playUsTrad} mx-[30px] w-full text-gold font-bold italic`}
      >
        Memuat...
      </p>
    );

  if (error !== '') {
    return (
      <p
        className={`${playUsTrad} mx-[30px] w-full text-gold font-bold italic`}
      >
        {error}
      </p>
    );
  }

  return (
    <div className="py-2 px-[30px] text-gold font-bold">
      <h4>{wishes.length} Wishes</h4>
      <div className="flex flex-col gap-2 py-2 max-h-[300px]  overflow-y-auto no-scrollbar">
        {wishes.length > 0 ? (
          wishes.map((wish, i) => <MessageBox key={i.toString()} {...wish} />)
        ) : (
          <p className={`${playUsTrad} w-full text-gold font-bold italic`}>
            No wish found
          </p>
        )}
      </div>
    </div>
  );
};

export default WishList;
