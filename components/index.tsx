import dynamic from "next/dynamic";
import React from "react";
import { OpeningCard } from "./OpeningCard";
import { LoveStory } from "./LoveStory";

export const DynamicWishList = dynamic(() => import('./WishList'), {
    ssr: false,
    loading: () => <p>Loading...</p>
})

export const MemoizedOpeningCard = React.memo(OpeningCard);

export const MemoizedLoveStory = React.memo(LoveStory)
