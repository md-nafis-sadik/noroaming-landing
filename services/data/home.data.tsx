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
    category: "General Information",
    question: "What is Smart Pathshala?",
    answer:
      "Smart Pathshala is a modern school and college management system designed to digitalize and simplify institutional administration, helping schools, teachers, students, and parents stay connected.",
  },
  {
    category: "General Information",
    question: "Can Smart Pathshala be used for colleges as well?",
    answer:
      "Yes of course.",
  },
  {
    category: "General Information",
    question:
      " Is Smart Pathshala available as a mobile app?",
    answer:
      "Yes of course.",
  },
  {
    category: "General Information",
    question: "How secure is Smart Pathshala?",
    answer:
      "Very secure",
  },
  {
    category: "General Information",
    question: "How can I get started with Smart Pathshala?",
    answer:
      "By enrolling to our platform.",
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
    address:
      "290/737 York House Green Lane West, Garstang, Preston, Lancashire, England, PR3 1NJ",
    phone: "+880-990-0000",
    email: "hello@smartpathashala.com",
    description: "A Powerful School & College Management System Designed to Streamline Administration, Enhance Learning, and Connect Everyone Seamlessly."
  },
  companyInfo: {
    title: "Important Links",
    links: [
      { text: "Registration", href: "/about-us" },
      { text: "Goals", href: "/careers" },
      { text: "Features", href: "/process" },
      { text: "Benefits", href: "/reviews" },
      { text: "Pricing", href: "/portfolio" },
      { text: "Blogs", href: "/case-studies" },
    ],
  },
  services: {
    title: "Other Links",
    links: [
      { text: "UI/UX Design", href: "/services/ui-ux-design" },
      { text: "Branding & Identity", href: "/services/branding" },
      { text: "Web Development", href: "/services/web-development" },
      { text: "Mobile App Development", href: "/services/mobile-development" },
      { text: "SaaS Development", href: "/services/saas-development" },
      { text: "MVP Development", href: "/services/mvp-development" },
      { text: "3D Animation", href: "/services/3d-animation" },
    ],
  },
  support: {
    title: "Other Links",
    links: [
      { text: "Contact Us", href: "/help" },
      { text: "Privacy Policy", href: "/privacy-policy" },
      { text: "Terms of Service", href: "/terms-of-service" },
      
    ],
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
