"use client";

import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import { MenuIcon, PlusRoundedSecondaryIcon } from "@/services/assets/svgs";
import { navbarData, routes } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import NavigationSheet from "./NavigationSheet";
import { Button } from "../ui/button";
import { images } from "@/services";
import Image from "next/image";

const Navbar: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Client-side only code
    setIsScrolled(window.scrollY > 10);
    setActiveHash(window.location.hash);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Helper function that works on both server and client
  const isActive = (link: string) => {
    if (link === "/") return pathname === "/" && !activeHash;
    return activeHash === link;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300 font-inter",
        pathname === routes.homepage.link
          ? isScrolled
            ? "bg-white lg:bg-transparent border-b lg:border-none border-natural-300"
            : "bg-transparent"
          : isScrolled
          ? "bg-white lg:bg-transparent border-b lg:border-none border-natural-300"
          : "bg-transparent"
      )}
    >
      <div className="containerX flex flex-row items-center justify-between gap-4 py-4 lg:py-8">
        <div className="flex items-center gap-12">
          <Link href={routes.homepage.link} className="h-fit">
            <div className="flex items-center gap-2">
              {isScrolled ? (
                <Image
                  src={images.LogoBlack}
                  alt="Company logo"
                  width={173}
                  height={35}
                  priority
                />
              ) : (
                <Image
                  src={images.Logo}
                  alt="Company logo"
                  width={173}
                  height={35}
                  priority
                />
              )}
            </div>
          </Link>
        </div>
        <div className="hidden min-[1160px]:flex flex-row items-center bg-[#00214A] rounded-full py-3 px-15">
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <div className="flex flex-row items-center" key={index}>
              <Link
                href={link.startsWith("#") ? link : `/${link}`}
                key={name}
                className="h-[34px] w-fit py-2 px-4 border-none outline-none group flex items-center gap-1 relative"
              >
                <span
                  className={cn(
                    pathname === link &&
                      (pathname === routes.homepage.link
                        ? "navbar-btn-gradient-dark"
                        : "navbar-btn-gradient-lite"),
                    "block navbar-btn-gradient absolute w-full h-1/2 bottom-0 left-0 z-[1]"
                  )}
                />

                <span
                  className={cn(
                    pathname === link
                      ? "text-white font-semibold"
                      : "text-text-100 font-normal",
                    "text-sm !leading-[1.4] relative z-[2] font-inter"
                  )}
                >
                  {name}
                </span>
                {megaMenu && (
                  <PlusRoundedSecondaryIcon
                    className="!h-5 !w-5 !shrink-0 transition_common group-hover:rotate-180 relative z-[3]"
                    color={
                      pathname === link ? colors.text[750] : colors.text[600]
                    }
                  />
                )}
              </Link>
              {/* {index < navbarData.length - 1 && (
                <Dividericon
                  className="w-[7px] h-7"
                  color={
                    pathname === routes.homepage.link
                      ? colors.natural[900]
                      : colors.natural[200]
                  }
                />
              )} */}
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-2 md:gap-3">
          {/* DOWNLOAD APP */}
          <Link href="https://play.google.com/store/apps/details?id=com.noroaming.app&pcampaignid=web_share">
            <Button className="hidden md:flex bg-secondary-600 hover:bg-secondary-700 flex_center gap-2 group ps-3 md:px-5 font-semibold text-white text-sm">
              <span className="!leading-none">Download App</span>
            </Button>
          </Link>

          {/* MOBILE MENU */}

          <div
            className="lg:hidden flex cursor-pointer"
            onClick={() => setIsSheetOpen(true)}
          >
            <MenuIcon
              className="!h-5 !w-5 !shrink-0"
              color={isScrolled ? "black" : "white"}
            />
          </div>
        </div>
      </div>

      <NavigationSheet
        isSheetOpen={isSheetOpen}
        closeSheet={() => setIsSheetOpen(false)}
        pathname={pathname}
      />
    </nav>
  );
};

export default Navbar;
