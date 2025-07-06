import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const bonbon = localFont({
  src: [
    {
      path: "../public/fonts/bonbon/Bonbon-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bonbon",
});

export const yesevaOne = localFont({
  src: [
    {
      path: "../public/fonts/yeseva_one/YesevaOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yeseva-one",
});

export const scout = localFont({
  src: [
    {
      path: "../public/fonts/scout/Scout-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-scout-one",
});

export const scoutCond = localFont({
  src: [
    {
      path: "../public/fonts/scout_cond/ScoutCond-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-scout-one",
});
