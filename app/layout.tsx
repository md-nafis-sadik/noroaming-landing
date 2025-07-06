import type { Metadata } from "next";
import { bonbon, inter, scout, scoutCond, yesevaOne } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/styles/app.css";
import Footer from "@/components/footer/Footer";
import LetsTalk from "@/components/letsTalk/LetsTalkHome";
import Navbar from "@/components/navigation/Navbar";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import Link from "next/link";
import Image from "next/image";
import LenisWrapper from "@/components/wrapper/LenisWrapper";

export const metadata: Metadata = {
  title: "Smart Pathshala",
  description: "A Powerful School & College Management System Designed to Streamline Administration, Enhance Learning, and Connect Everyone Seamlessly",
  icons: {
    icon: "/images/logo-book.png", // Path to your favicon in the public directory
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang="en" data-arp suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          bonbon.variable,
          yesevaOne.variable,
          scoutCond.variable,
          scout.variable,
          "bg-white min-h-screen text-neutral-700 relative"
        )}
      >
        <LenisWrapper>
          <Navbar />
          {children}
          <LetsTalk />
          <Footer />
          <div className="bg-[#082237]">
            <div className="flex flex-col lg:flex-row items-center justify-between  containerX py-6 ">
              <div className="text-white pb-5 lg:pb-0 text-sm lg:text-base text-center lg:text-left">© Copyright 2025 <Link href="/" className="text-skyish-700">Smart Pathshala</Link> | All rights are reserved</div>
              <div className="flex items-center gap-2">
                <div><Image src={images.NetroIcon} alt="" width={27} height={21} /></div>
                <div className="text-white font-bold">Develeped by Netro</div>
              </div>
            </div>
          </div>
        </LenisWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
