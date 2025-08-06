"use client";

import { images } from "@/services";
import Image from "next/image";
import TextFadeIn from "../animations/TextFadeIn";

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="py-4 font-inter lg:py-7 xl:py-10 containerX mx-auto bg-white"
    >
      <div className="text-center mb-4 lg:mb-10">
        <p className="text-base lg:text-lg text-main-600 bg-neutral-100 border border-neutral-300 tracking-wide mb-4 inline-block py-2 px-5 rounded-full">
          Features
        </p>
        <div className="flex justify-center items-center w-full mx-auto">
          <TextFadeIn
            text="Why Choose Noroaming?"
            className="text-2xl lg:text-5xl max-w-2xl lg:text-[48px] font-[700] !leading-[1.2] text-main-600 tracking-wide mb-6"
          />
        </div>
      </div>

      <div className="containerX mx-auto px-0 grid grid-cols-1 lg:grid-cols-3 gap-6 text-center lg:text-left">
        {/* Card 1 - Text Only */}
        <div className="bg-main-600 text-white p-8 lg:p-12 rounded-2xl flex flex-col justify-between gap-14">
          <p className="text-[40px] lg:text-[64px] font-semibold">190+</p>
          <p className="text-sm lg:text-base">
            <span className="text-paste-600">Global Coverage</span> - Connect in
            190+ countries instantly.
          </p>
        </div>

        {/* Card 2 - With Image */}
        <div className="bg-main-600 text-white p-8 lg:p-12 rounded-2xl flex flex-col justify-between gap-14 text-center lg:text-left">
          <p className="text-sm lg:text-base">
            Smart Data Management .Track usage in real-time from your dashboard.
          </p>
          <div className="relative w-full min-h-[78px] rounded-xl overflow-hidden">
            <Image
              src={images.SmartDataManagement}
              alt="Smart Data Management dashboard showing real-time data usage"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              quality={85}
              priority={false}
            />
          </div>
        </div>

        {/* Card 3 - Full Image */}
        <div className="relative bg-[#EDD26F] p-8 lg:p-12 rounded-2xl flex items-center justify-center min-h-[236px]">
          <Image
            src={images.CheckingApp}
            alt="Happy customer using Noroaming app on smartphone"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            quality={90}
            priority={false}
          />
        </div>

        {/* Card 4 - Combined Text and Image */}
        <div className="bg-paste-600 col-span-1 lg:col-span-3 px-6 lg:px-12 pt-8 lg:pt-12 rounded-2xl min-h-[236px] flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="text-main-600 mb-4 lg:mb-0 h-auto lg:h-full lg:pb-20 text-center lg:text-left w-full lg:w-auto">
            <p className="text-2xl lg:text-[64px] lg:max-w-xl font-bold mb-2 lg:mb-4 leading-[50px] lg:leading-[70px]">
              No Roaming Charges
            </p>
            <p className="text-sm font-light">
              Flat-rate pricing with zero hidden fees.
            </p>
          </div>

          <div className="relative w-full lg:w-[452px] h-[130px] lg:h-full rounded-xl flex items-end">
            <Image
              src={images.Charges}
              alt="Illustration showing no roaming charges concept"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 452px"
              className="object-contain"
              quality={90}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
