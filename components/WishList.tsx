import db from "@/libs/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import WishCard from "./WishCard";
import { Wish } from "@/types";

const WishList = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes();
  }, []);

  const getWishes = async () => {
    const query = await getDocs(collection(db, "wishes"));
    query.forEach((doc) => {
      const wish = {
        id: doc.id,
        ...doc.data(),
      } as Wish;
      setWishes((wishes) => [...wishes, wish]);
    });
  };
  return (
    <div>
      {wishes.length > 0 ? (
        wishes.map((wish) => <WishCard key={wish.id} {...wish} />)
      ) : (
        <div>No wish found</div>
      )}
    </div>
  );
};

export default WishList;
