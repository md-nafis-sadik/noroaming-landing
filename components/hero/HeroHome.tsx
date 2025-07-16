"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextFadeIn from "../animations/TextFadeIn";
import AnimatedText from "../ui/AnimatedTitle";
import { GradientButton } from "../ui/gradient-button";
import Image from "next/image";
import { DownloadAppIcon, images } from "@/services";
import Link from "next/link";

// Import other components & assets...
// (your existing imports)

gsap.registerPlugin(ScrollTrigger);

const HeroHome = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textBlockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text from bottom
      gsap.fromTo(
        textBlockRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Animate image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-[170px] font-inter"
      style={{
        background: `
      radial-gradient(ellipse at 50% 80%, #033877 0%, #000 100%)
    `,
        backgroundBlendMode: "overlay",
      }}
    >
      <section className="containerX relative min-h-[630px] font-[600] w-full pt-10 lg:pt-0 pb-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left portion */}
          <div
            ref={textBlockRef}
            className="flex flex-col w-full lg:w-[48%] pb-10"
          >
            <div className="w-full lg:w-auto flex items-center justify-center lg:justify-start gap-[10px] mb-3.5 font-normal">
              <div className="bg-paste-600 rounded-lg text-xs lg:text-sm py-[6px] px-4 text-main-600">
                New
              </div>
              <div className="text-text-200 font-semibold text-sm lg:text-base">
                Download and enjoy!
              </div>
            </div>
            <TextFadeIn
              text="Stay connected up anywhere without any stress."
              className="text-center lg:text-left text-4xl lg:text-[50px] xl:text-[64px] font-extrabold !leading-[1.2] mt-3 lg:mt-2 text-white"
              extraClassName="lg:justify-start"
            />
            <AnimatedText
              text="Noroaming is your one-stop eSIM solution for seamless global connectivity. No physical SIMs, no surprise fees."
              className="mt-8 text-center text-text-50 lg:text-left text-sm lg:text-base"
            />

            <div className="mt-5 lg:mt-12 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
              <Link href="https://play.google.com/store/apps/details?id=com.noroaming.app&pcampaignid=web_share">
                <GradientButton className="w-fit group bg-white text-text-900 hover:bg-neutral-100 py-2.5 lg:py-3">
                  <span>
                    <DownloadAppIcon className="block lg:hidden w-5" />
                    <DownloadAppIcon className="hidden lg:block" />
                  </span>
                  <span className="!leading-none text-sm lg:text-lg">
                    Download App
                  </span>
                </GradientButton>
              </Link>
              <Link href="#pricing">
              <GradientButton className="w-fit group bg-main-600 text-white border border-white hover:bg-main-700 py-3 lg:py-3.5">                
                  <span className="!leading-none text-sm lg:text-lg">
                    View Plans
                  </span>
              </GradientButton>
              </Link>
            </div>
          </div>

          {/* Right portion */}
          <div className="relative lg:absolute lg:right-0 lg:bottom-0 w-full h-[212px] sm:h-[480px] md:h-[680px] lg:w-[59%] lg:h-[500px] xl:h-[620px] 2xl:h-[720px]">
            <Image
              ref={imageRef}
              alt="hero star glass image"
              src={images.hero}
              className="h-full w-full object-contain sm:object-cover"
              fill
              priority
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroHome;
