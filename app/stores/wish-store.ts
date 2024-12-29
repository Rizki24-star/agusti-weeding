import db from '@/libs/firebase';
import { Wish } from '@/types';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { create } from 'zustand';

interface WishState {
  wishes: Wish[];
  setWishes: () => Promise<void>;
  getWish: (id: string) => Promise<Wish | undefined>;
}

const useStore = create<WishState>((set, get) => ({
  wishes: [],
  setWishes: async () => {
    try {
      const q = query(
        collection(db, 'wishes'),
        orderBy('createdAt', 'desc'),
        where('parentId', '==', null)
      );
      const querySnapshot = await getDocs(q);
      const fetchedWishes: Wish[] = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Wish)
      );

      set({ wishes: fetchedWishes });
    } catch (error) {
      console.error(`Error fetcing wishes: ${error}`);
    }
  },
  getWish: async (id: string) => {
    const currentState = get();
    const { wishes }: { wishes: Wish[] } = currentState;
    try {
      const wish = wishes.find((wish) => wish.id === id);
      return wish;
    } catch (error) {
      console.error(`Error fetcing replies: ${error}`);
    }
  },
}));

export default useStore;
