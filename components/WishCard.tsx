import { Wish } from "@/types";
import React from "react";

const WishCard = (data: Wish) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "10px" }}>{JSON.stringify(data)}</div>
      </div>
    </>
  );
};

export default WishCard;
