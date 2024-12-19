import { Roboto, Playfair_Display, Playwrite_US_Trad } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const playUsTrad = Playwrite_US_Trad({
  weight: ["400"],
  display: "swap",
});
