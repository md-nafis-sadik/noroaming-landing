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
    activeRoute: "/",
  },
  about: {
    name: "About us",
    link: "/about",
    activeRoute: "/about",
  },
  services: {
    name: "Services",
    link: "/services",
    activeRoute: "/services",
  },
  pricing: {
    name: "Pricing",
    link: "/pricing",
    activeRoute: "/pricing",
  },
  contact: {
    name: "Contact us",
    link: "/contact-us",
    activeRoute: "/contact-us",
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
      "Smart Pathshala has completely transformed our school’s management. From student enrollment to fee collection, everything is now automated. It saves us time, reduces errors, and makes administration effortless!",
    avatar: images.avatar1,
    name: "Jubaer Nuhas",
    title: "Game-Changer for Our School!",
    designation: "Head Teacher, Sunrise Public School"
  },
  {
    id: 2,
    message:
      "The Smart Pathshala mobile app is a lifesaver! Teachers can track student progress, parents stay updated on attendance and grades, and communication between all parties has never been smoother.",
    avatar: images.avatar2,
    name: "Toushik Hasan",
    title: "Great for Teachers & Parents",
    designation: "Teacher, Bluebell High School"
  },
  {
    id: 3,
    message:
      "Smart Pathshala has completely transformed our school’s management. From student enrollment to fee collection, everything is now automated. It saves us time, reduces errors, and makes administration effortless!",
    avatar: images.avatar1,
    name: "Jubaer Nuhas",
    title: "Game-Changer for Our School!",
    designation: "Head Teacher, Sunrise Public School"
  },
];
