import { images } from "../assets";
import {
  LinkedinOutlinedIcon,
  TelegramOutlinedIcon,
  WhatsappOutlinedIcon,
} from "../assets/svgs";

export const routes = {
  homepage: {
    name: "Home",
    link: "/",
    activeRoute: "#",
  },
  about: {
    name: "About",
    link: "#about",
    activeRoute: "#about",
  },
  services: {
    name: "Services",
    link: "#services",
    activeRoute: "#services",
  },
  pricing: {
    name: "Pricing",
    link: "#pricing",
    activeRoute: "#pricing",
  },
  contact: {
    name: "Contact us",
    link: "#contact",
    activeRoute: "#contact",
  },

};

export const navbarData = [
  {
    name: routes.homepage.name,
    link: routes.homepage.link,
  },
  {
    name: routes.about.name,
    link: routes.about.link,
  },
  {
    name: routes.services.name,
    link: routes.services.link,
    megaMenu: false,
  },
  {
    name: routes.pricing.name,
    link: routes.pricing.link,
    megaMenu: false,
  },
  {
    name: routes.contact.name,
    link: routes.contact.link,
  },

];

export const successStoryData = [
  {
    type: "Experience",
    value: "5",
    ext: "YRS",
    color: "#91FF76",
  },
  {
    type: "Raised",
    value: "70",
    ext: "M",
    color: "#FFF146",
  },
  {
    type: "Happy Clients",
    value: "84",
    ext: "+",
    color: "#91FF76",
  },
  {
    type: "Projects",
    value: "153",
    ext: "+",
    color: "#FFF146",
  },
];

export const socialsData = [
  {
    icon: (
      <WhatsappOutlinedIcon className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0" />
    ),
    link: "",
  },
  {
    icon: (
      <TelegramOutlinedIcon className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0" />
    ),
    link: "",
  },
  {
    icon: (
      <LinkedinOutlinedIcon className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0" />
    ),
    link: "",
  },
];

export const testimonialsData = [
  {
    id: 1,
    message:
      "Noroaming saved my trip to Japan! Instant activation, perfect coverage, and no hidden fees. Never going back to physical SIMs.",
    avatar: images.avatar1,
    name: "Jubaer Nuhas",
    title: "Game-Changer for Travelers!",
    designation: "Digital Nomad",
    titleclass: "text-text-900",
    descriptionclass: "text-black-600",
    customclass: '#D1D1D1',
    bg: "bg-white border border-neutral-300",
  },
  {
    id: 2,
    message:
      "Switched 8 employees to Noroaming for business trips. The dashboard makes managing data plans across time zones effortless.",
    avatar: images.avatar2,
    name: "Toushik Hasan",
    title: "Corporate Travel Solved",
    designation: "IT Manager",
    titleclass: "text-white",
    descriptionclass: "text-[#ACACAC]",
    customclass: '#5E7085',
    bg: "bg-main-600",
  },
  {
    id: 3,
    message:
      "Used Noroaming across 5 European countries. Flawless connectivity, and the auto-top-up feature saved me when I ran low on data.",
    avatar: images.avatar1,
    name: "Sarah Chen",
    title: "Seamless Europe Trip",
    designation: "Frequent Flyer",
    titleclass: "text-text-900",
    descriptionclass: "text-black-600",
    customclass: '#D1D1D1',
    bg: "bg-white border border-neutral-300",
  },
  {
    id: 4,
    message:
      "As a backpacker, Noroaming’s pay-as-you-go plans are perfect. No contracts, and coverage even in remote areas of Thailand.",
    avatar: images.avatar2,
    name: "Alex Rivera",
    title: "Budget Travel Essential",
    designation: "Backpacker",
    titleclass: "text-white",
    descriptionclass: "text-[#ACACAC]",
    customclass: '#5E7085',
    bg: "bg-main-600",
  },
  {
    id: 5,
    message:
      "The customer support team helped me troubleshoot my eSIM setup at 2AM before a flight. Above and beyond service!",
    avatar: images.avatar1,
    name: "Priya Patel",
    title: "24/7 Support Wins",
    designation: "Solo Traveler",
    titleclass: "text-text-900",
    descriptionclass: "text-black-600",
    customclass: '#D1D1D1',
    bg: "bg-white border border-neutral-300",
  },
  {
    id: 6,
    message:
      "Noroaming’s transparent pricing puts shady airport SIM vendors to shame. I knew exactly what I paid for upfront.",
    avatar: images.avatar2,
    name: "Marcus Lee",
    title: "No More Surprise Fees",
    designation: "Business Traveler",
    titleclass: "text-white",
    descriptionclass: "text-[#ACACAC]",
    customclass: '#5E7085',
    bg: "bg-main-600",
  },
];
