'use client';
import React, { ChangeEvent, useState, FormEvent } from 'react';
import {
  addDoc,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import db from '@/libs/firebase';
import { WishPost } from '@/types';
import { playfairDisplay, roboto } from '@/app/font';
import useStore from '@/app/stores/wish-store';

const WishForm = ({ parentId }: { parentId?: string }) => {
  const [wishPost, setWishPost] = useState<WishPost>({
    parentId: parentId ?? null,
    name: '',
    message: '',
    attendance: '',
    level: 1,
    replies: [],
    status: !parentId ? 'parent' : 'child',
    createdAt: Timestamp.now(),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>('');

  const { setWishes, getWish } = useStore();

  const resetWishPost = () => {
    setWishPost({
      parentId: parentId ?? null,
      name: '',
      message: '',
      attendance: '',
      level: 1,
      replies: [],
      status: !parentId ? 'parent' : 'child',
      createdAt: Timestamp.now(),
    });
  };

  const addReply = async () => {
    const docRef = doc(db, 'wishes', parentId!);
    const wish = await getWish(parentId!);
    await updateDoc(docRef, {
      replies: [...(wish?.replies || []), wishPost],
    });
    console.log('Reply written with ID: ', docRef.id);
  };

  const addWish = async () => {
    const docRef = await addDoc(collection(db, 'wishes'), {
      ...wishPost,
    });
    console.log('Document written with ID: ', docRef.id);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (wishPost.status == 'parent') {
        await addWish();
      } else if (wishPost.status == 'child') {
        await addReply();
      } else {
        setSuccess('somehing wrong');
      }
      setWishes();
      setSuccess('✓ Wish dan konfirmasi anda telah berhasil terkirim');
      resetWishPost();
    } catch (e) {
      console.error('Error adding document: ', e);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setWishPost((wishPost) => ({ ...wishPost, [name]: value }));
  };

  const handleSelectOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setWishPost((wishPost) => ({ ...wishPost, [name]: value }));
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setWishPost((wishPost) => ({ ...wishPost, [name]: value }));
  };

  return (
    <>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className={`flex flex-col items-center ${
          parentId ? 'gap-4' : 'gap-8'
        } mt-[29px] w-full`}
      >
        <div className="border-2 border-gold h-[45px] w-full p-3 rounded-[10px]">
          <input
            className={`${playfairDisplay.className} text-gold focus:outline-none p-0 text-[12px]`}
            type="text"
            name="name"
            value={wishPost.name}
            onChange={handleInputChange}
            placeholder="Input name"
            required
          />
        </div>
        {parentId ? null : (
          <div className="border-2 border-gold text-gold text-[12px] h-[45px] w-full p-3 rounded-[10px] ">
            <select
              name="attendance"
              className="bg-transparent w-full focus:outline-0"
              onChange={handleSelectOptionChange}
              value={wishPost.attendance}
              required
            >
              <option value="">Konfirmasi kehadiran</option>
              <option value="yes">Hadir / Attend</option>
              <option value="no">Tidak Hadir / No Attend</option>
            </select>
          </div>
        )}

        <div className="w-full">
          <textarea
            name="message"
            value={wishPost.message}
            onChange={handleTextareaChange}
            placeholder="Input wish"
            className={`${playfairDisplay.className}  text-gold border-2 text-[12px] border-gold  w-full p-3 rounded-[10px] focus:outline-none`}
            required
          ></textarea>
        </div>
        <div className="w-full flex flex-col items-center">
          {success ? (
            <div className="flex items-center justify-center p-2 border border-gold rounded-[10px]">
              <span
                className={`${playfairDisplay.className} italic text-[10px] text-gold`}
              >
                {success}
              </span>
            </div>
          ) : null}
          <button
            type="submit"
            className={`${roboto.className} mt-[18px] p-[10px] text-white bg-gold w-full max-w-[234px] rounded-[10px]`}
            disabled={loading}
          >
            {loading ? 'Process' : 'Kirim'}
          </button>
        </div>
      </form>
    </>
  );
};

export default WishForm;
