import localFont from "next/font/local";

// Primary font - Inter Tight Variable (with italic support)
export const interTight = localFont({
  src: [
    {
      path: "../public/fonts/inter_tight/InterTight-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/inter_tight/InterTight-Italic-VariableFont_wght.ttf",
      weight: "100 900", 
      style: "italic",
    },
  ],
  variable: "--font-inter-tight",
  display: "swap",
});


// Local font - Bonbon
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
  variable: "--font-scout",
});

// Local font - Scout Condensed (multiple weights)
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
  variable: "--font-scout-cond",
});

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const interTightStyle = (weight: FontWeight, italic = false) => {
  return {
    fontFamily: "var(--font-inter-tight)",
    fontStyle: italic ? "italic" : "normal",
    fontVariationSettings: `"wght" ${weight}`,
  };
};

export const fonts = {
  interTight,
  bonbon,
  yesevaOne,
  scout,
  scoutCond,
};