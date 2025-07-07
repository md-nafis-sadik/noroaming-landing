"use client";

import { cn } from "@/lib/utils";
import { FacebookLineIcon, images, InstaLineIcon, LinkedInLineIcon, TwitterLineIcon, YoutubeLineIcon } from "@/services";
import Image from "next/image";
import { footerData } from "@/services/data";
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";


const Footer = () => {
  return (
    <footer className="bg-white relative">
      <div className="absolute bottom-0 left-0 h-[405px] w-[290px]">
        <Image
          alt="hero star glass image"
          src={images.FooterBackground}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <div className="py-6 md:py-20">

        <div className="containerX">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Inquiries */}
            <div  className="text-[#151515] col-span-1 md:col-span-2 flex-col flex items-center md:items-start max-w-auto md:max-w-[363px]">

              <div className="max-w-[363px] flex flex-col  items-center md:items-start"><Link href='/' className="h-fit">
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={images.LogoWhite} className="w-[173px]" />
                </div>
              </Link>
                <p
                  className={cn(
                    "text-xs md:text-sm lg:text-base mt-4 md:mt-6 text-center md:text-start font-inter"
                  )}
                >
                  {footerData.inquiries.description}
                </p>

              </div>

              <div className="flex items-center space-x-4 mt-6">
                <div><FacebookLineIcon /></div>

                <div><LinkedInLineIcon /></div>
                <div><TwitterLineIcon /></div>
              </div>
            </div>

            {/* Company Info */}
            <div className="text-[#151515] col-span-1 flex items-center md:items-start flex-col">
              <p
                className={cn(
                  "text-center sm:text-start font-semibold text-lg lg:text-xl"
                )}
              >
                {footerData.companyInfo.title}
              </p>
              <ul className="mt-4 md:mt-6">
                {footerData.companyInfo.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={cn(
                        "footer_el_text block mb-2 text-center sm:text-start font-inter"
                      )}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-[#151515] col-span-1 flex items-center md:items-start flex-col">
              <p
                className={cn(
                  " text-center sm:text-start font-semibold text-lg lg:text-xl"
                )}
              >
                {footerData.support.title}
              </p>
              <ul className="mt-4 md:mt-6">
                {footerData.support.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={cn(
                        "footer_el_text block mb-2 text-center sm:text-start font-inter"
                      )}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-[#151515] col-span-1 flex items-center ju md:items-start flex-col">
              <p
                className={cn(
                  " text-center sm:text-start font-semibold text-lg lg:text-xl"
                )}
              >
                {footerData.contact.title}
              </p>
              <ul className="mt-4 md:mt-6">
                <div className="flex items-center lg:items-start justify-center lg:justify-start gap-3">

                  <div className="text-sm lg:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                      <path d="M3.0013 11.2881H17.0013M3.0013 16.2881H17.0013M9.58306 6.28809C8.17918 8.53776 7.4349 11.1363 7.4349 13.7881C7.4349 16.4399 8.17918 19.0384 9.58306 21.2881M10.4167 6.28809C11.8205 8.53776 12.5648 11.1363 12.5648 13.7881C12.5648 16.4399 11.8205 19.0384 10.4167 21.2881M2.5 13.7881C2.5 14.773 2.69399 15.7483 3.0709 16.6582C3.44781 17.5682 4.00026 18.3949 4.6967 19.0914C5.39314 19.7878 6.21993 20.3403 7.12987 20.7172C8.03982 21.0941 9.01509 21.2881 10 21.2881C10.9849 21.2881 11.9602 21.0941 12.8701 20.7172C13.7801 20.3403 14.6069 19.7878 15.3033 19.0914C15.9997 18.3949 16.5522 17.5682 16.9291 16.6582C17.306 15.7483 17.5 14.773 17.5 13.7881C17.5 11.799 16.7098 9.89131 15.3033 8.48479C13.8968 7.07826 11.9891 6.28809 10 6.28809C8.01088 6.28809 6.10322 7.07826 4.6967 8.48479C3.29018 9.89131 2.5 11.799 2.5 13.7881Z" stroke="#151515" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <p className="footer_el_text">{footerData.contact.address}</p>
                </div>
                <div className="flex items-center lg:items-start justify-center lg:justify-start gap-3 mt-3 lg:mt-4 md:mt-6">

                  <div className="text-sm lg:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path d="M3.15322 10.7394C2.36321 9.36185 1.98175 8.237 1.75174 7.09678C1.41156 5.41042 2.19005 3.76311 3.47969 2.71199C4.02475 2.26775 4.64957 2.41954 4.97187 2.99777L5.69952 4.30319C6.27628 5.33791 6.56466 5.85526 6.50746 6.40376C6.45027 6.95226 6.06135 7.39899 5.28352 8.29244L3.15322 10.7394ZM3.15322 10.7394C4.7523 13.5277 7.26174 16.0385 10.0532 17.6394M10.0532 17.6394C11.4308 18.4294 12.5556 18.8109 13.6959 19.0409C15.3822 19.3811 17.0295 18.6026 18.0806 17.3129C18.5249 16.7679 18.3731 16.1431 17.7949 15.8208L16.4895 15.0931C15.4547 14.5164 14.9374 14.228 14.3889 14.2852C13.8404 14.3424 13.3936 14.7313 12.5002 15.5091L10.0532 17.6394Z" stroke="#151515" strokeWidth="1.25" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <p className="footer_el_text">{footerData.contact.phone}</p>
                </div>
                <div className="flex items-center lg:items-start justify-center lg:justify-start gap-3  mt-3 lg:mt-4 md:mt-6">
                  <div className="text-sm lg:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path d="M5.82812 7.87207L8.27981 9.32157C9.70913 10.1667 10.2805 10.1667 11.7098 9.32157L14.1615 7.87207" stroke="#151515" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.68501 12.0171C1.7395 14.5717 1.76673 15.849 2.70934 16.7952C3.65195 17.7415 4.96382 17.7744 7.58757 17.8403C9.20463 17.881 10.8058 17.881 12.4229 17.8403C15.0466 17.7744 16.3585 17.7415 17.301 16.7952C18.2437 15.849 18.271 14.5717 18.3254 12.0171C18.343 11.1957 18.343 10.3791 18.3254 9.55779C18.271 7.00315 18.2437 5.72584 17.301 4.77965C16.3585 3.83346 15.0466 3.8005 12.4229 3.73458C10.8058 3.69394 9.20463 3.69394 7.58756 3.73457C4.96382 3.80049 3.65195 3.83344 2.70934 4.77964C1.76673 5.72584 1.73949 7.00314 1.68501 9.55771C1.6675 10.3791 1.6675 11.1957 1.68501 12.0171Z" stroke="#151515" strokeWidth="1.25" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="footer_el_text">{footerData.contact.email}</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6 lg:py-8 text-[#151515] text-sm lg:text-base">
        © 2025 NoRoaming • All rights reserved
      </div>
    </footer>
  );
};

export default Footer;