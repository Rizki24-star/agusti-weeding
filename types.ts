import { Timestamp } from "firebase/firestore";

export type Wish = {
  id: string;
  attendance: boolean;
  level: number;
  message: string;
  name: string;
  replies: string | null;
  status: "parent" | "child";
  createdAt: Timestamp;
};

export type WishPost = Omit<Wish, "id">;
