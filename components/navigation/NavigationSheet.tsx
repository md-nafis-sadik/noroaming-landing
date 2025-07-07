import { FC, Fragment } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { GradientButton } from "../ui/gradient-button";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  CallMissedIcon,
  CrossIcon,
  DividerFadingDashes,
  PlusRoundedSecondaryIcon,
} from "@/services/assets/svgs";
import colors from "@/lib/colors";
import { navbarData, routes, socialsData } from "@/services/data/shared.data";
import Link from "next/link";

interface IFNavigationSheetProps {
  isSheetOpen: boolean;
  closeSheet: () => void;
  pathname: string;
}

const NavigationSheet: FC<IFNavigationSheetProps> = ({
  isSheetOpen,
  closeSheet,
  pathname,
}) => {
  return (
    <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
      <SheetContent showCrossIcon={false} className=" select-none">
        <SheetHeader className="hidden" />

        <div className="bg-white flex_center justify-end py-3 px-6 border-b ">

          <div className="lg:hidden flex cursor-pointer" onClick={closeSheet}><CrossIcon color="black" className="!h-5 !w-5 !shrink-0" /></div>


        </div>

        <div className="flex flex-col items-center w-full mt-6 mb-10 bg-white">
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <Fragment key={index}>
              <Link
                href={link}
                className="h-[34px] py-3 px-2 outline-none group flex items-center justify-center gap-1 relative min-h-[58px] w-[70%] border-b 
                 border-gray-200 transition_common"
                onClick={closeSheet}
              >
                <span
                  className={cn(
                    pathname === link &&
                    (pathname === routes.homepage.link
                      ? "navbar-btn-gradient-dark"
                      : "navbar-btn-gradient-lite"),
                    "block navbar-btn-gradient absolute w-full h-1/2 bottom-0 left-1/2 -translate-x-1/2 z-[1]"
                  )}
                />

                <span
                  className={cn(
                    pathname === routes.homepage.link
                      ? "font-semibold"
                      : "font-normal",
                    "text-black text-[28px] !leading-[1.2] relative z-[2] text-lg"
                  )}
                >
                  {name}
                </span>
                {megaMenu && (
                  <PlusRoundedSecondaryIcon
                    className="!h-5 !w-5 !shrink-0 transition_common group-hover:rotate-180 relative z-[3]"
                    color={colors.white}
                  />
                )}
              </Link>
            </Fragment>
          ))}
        </div>

        {/* CONNECT & SOCIALS */}
        <div className="flex flex-col items-center gap-6 mt-8 md:mt-[60px] bg-transparent">



          {/* GET IN TOUCH */}
          <Button className="flex bg-secondary-600 hover:bg-secondary-700 flex_center gap-2 group ps-3 md:px-5 font-semibold text-white text-sm px-6 py-3">
            <span className="!leading-none px-4">Download App</span>
          </Button>


          <div className="flex flex-row items-center gap-3">
            {socialsData.map(({ link, icon }, index) => (
              <a
                className="h-10 w-10 rounded-full transition_common bg-natural-900 hover:bg-main-400 flex_center"
                href={link}
                key={index}
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationSheet;
