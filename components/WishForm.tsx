"use client";
import React, { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import db from "@/libs/firebase";
import { WishPost } from "@/types";

const WishForm = () => {
  const [wishes, setWishes] = useState<WishPost>({
    name: "",
    message: "",
    attendance: false,
    level: 1,
    replies: null,
    status: "parent",
    createdAt: Timestamp.now(),
  });

  useEffect(() => {
    console.log(wishes);
  }, [wishes]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "wishes"), {
        ...wishes,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setWishes((wishes) => ({ ...wishes, [name]: value }));
  };

  const handleSelectOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setWishes((wishes) => ({ ...wishes, [name]: value }));
  };

  return (
    <>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          name="name"
          value={wishes.name}
          onChange={handleInputChange}
          placeholder="Input name"
        />
        <input
          type="text"
          name="message"
          value={wishes.message}
          onChange={handleInputChange}
          placeholder="Input wish"
        />
        <select name="attendance" onChange={handleSelectOptionChange}>
          <option value="">Are you attend?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default WishForm;
