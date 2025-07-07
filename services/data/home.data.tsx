import colors from "@/lib/colors";
import { images } from "@/services";
import {
  BehanceIcon,
  DribbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinOutlinedIcon,
  TelegramOutlinedIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/services/assets/svgs";





export const faqData = [
  {
    question: "How do I install an eSIM?",
    answer: "Go to your phone's settings > Cellular > Add Cellular Plan, then scan the QR code provided by your carrier. Alternatively, follow the manual setup instructions sent via email.",
  },
  {
    question: "Will this work with my phone?",
    answer: "Most modern smartphones (iPhone XS/newer and Android Pixel 3/newer) support eSIM. Check your device's specifications or contact your carrier for compatibility.",
  },
  {
    question: "What happens if I run out of data?",
    answer: "You can top up your data plan through the app or website. Some plans may also offer automatic rollover or pay-as-you-go options.",
  },
  {
    question: "Is it available in my destination?",
    answer: "Our eSIM covers [X] countries. Check the coverage map in the app or website before traveling.",
  },
  {
    question: "Can I switch plans?",
    answer: "Yes, you can change your plan anytime through your account dashboard. Prorated charges or refunds may apply.",
  },
];



export const pricingData = [
  {
    title: "UI/UX Design",
    subtitle: "For personal or Industrial",
    price: 29,
    period: "per hour",
    popular: false,
    features: [
      "Ensured proper UX",
      "Followed guide or create",
      "Modern softwares",
      "Scalable and ready to develop",
      "Collaborative",
    ],
  },
  {
    title: "Development",
    subtitle: "For personal or Industrial",
    price: 49,
    period: "per hour",
    popular: true,
    features: [
      "Frontend Development",
      "Backend Development",
      "Database, Server Setup",
      "DevOps and Deploy",
      "Bug Fixing",
      "After sales service",
    ],
  },
  {
    title: "Branding",
    subtitle: "For personal or Industrial",
    price: 19,
    period: "per hour",
    popular: false,
    features: [
      "Logo from scratch",
      "Brand Guideline",
      "Animation and Graphical assets",
      "3D Animation",
      "Brand Assets preparation",
    ],
  },
];

export const footerData = {
  inquiries: {
    title: "INQUIRIES",
    
    description: "Stay ahead in the digital age with top-notch cyber solutions."
  },
  companyInfo: {
    title: "Quick Links",
    links: [
      { text: "About Us", href: "#about" },
      { text: "Pricing", href: "#pricing" },
      { text: "Features", href: "#features" },
    ],
  },
  services: {
    title: "Quick Links",
    links: [
      { text: "About Us", href: "#about" },
      { text: "Pricing", href: "#pricing" },
      { text: "Features", href: "#features" },
    ],
  },
  support: {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "#privacy-policy" },
      { text: "Terms of Service", href: "#terms-of-service" },

    ],
  },
  contact: {
    title: "Contact us",
    address:
      "6391 Elgin St. Celina, Delaware 10299",
    phone: "(480) 555-0103",
    email: "cyber.solution@learn.com",
  },
  resources: {
    title: "RESOURCES",
    links: [
      { text: "Our Journal", href: "/journal" },
      { text: "Whitepapers & E-books", href: "/resources/whitepapers" },
      { text: "Tools & Templates", href: "/resources/tools" },
      { text: "Webinars / Workshops", href: "/resources/webinars" },
      { text: "FAQs", href: "/faqs" },
    ],
  },
  copyright: "© 2022 - 2025 • Netro Systems, All Rights Reserved.",
  socialLinks: [
    {
      platform: "twitter",
      href: "#",
      icon: (
        <TwitterIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "linkedin",
      href: "#",
      icon: (
        <LinkedinOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6"
        />
      ),
    },
    {
      platform: "instagram",
      href: "#",
      icon: (
        <InstagramIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "youtube",
      href: "#",
      icon: (
        <YoutubeIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "facebook",
      href: "#",
      icon: (
        <FacebookIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "telegram",
      href: "#",
      icon: (
        <TelegramOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6"
        />
      ),
    },
    {
      platform: "dribbble",
      href: "#",
      icon: (
        <DribbleIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "behance",
      href: "#",
      icon: (
        <BehanceIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "github",
      href: "#",
      icon: (
        <GithubIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
  ],
  actions: [{ text: "Go To Top", href: "#top" }],
};
