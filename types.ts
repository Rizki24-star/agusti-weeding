import { Timestamp } from 'firebase/firestore';

export type Wish = {
  id: string;
  parentId?: string | null;
  attendance: string;
  level: number;
  message: string;
  name: string;
  status: 'parent' | 'child';
  createdAt: Timestamp;
  replies?: Reply[];
};

export type Reply = Wish;

export type WishPost = Omit<Wish, 'id'>;
