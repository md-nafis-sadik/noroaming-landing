import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IFProjectHomeCard {
  name: string;
  description: string;
  tagList: string;
  image: StaticImageData;
  icon: StaticImageData;
}

const ProjectHomeCard = ({
  item,
  top = 0,
  index = 0,
  className = "",
  showBottom = false,
}: {
  item: IFProjectHomeCard;
  top?: number;
  index?: number;
  className?: string;
  showBottom?: boolean;
}) => {
  return (
    <Link
      href={`/portfolio/${item?.name}`}
      className={cn(
        "w-full sticky left-0 h-[450px] max-h-[450px] md:h-[640px] md:max-h-[640px] overflow-hidden bg-text-700 group transition_common cursor-pointer",
        className
      )}
      style={{ top: `${top}px` }}
    >
      <Image
        src={item?.image}
        alt={item?.name}
        className="min-h-full min-w-full absolute_center"
        width={1920}
        height={1280}
      />

      <div
        className={cn(
          " w-full absolute left-0 transition_common  mt-auto",
          showBottom
            ? "bottom-0 h-max bg-blandGradient backdrop-blur-md"
            : "project-home-blur md:-translate-x-full group-hover:translate-x-0 bottom-0 md:bottom-auto md:top-0 h-max md:h-full max-w-[320px]"
        )}
      >
        <div className="p-6 md:p-8 h-full flex flex-col justify-between gap-6">
          <div className="flex flex-col">
            <Image
              src={item?.icon}
              alt={item?.name}
              className="h-auto w-[112px]"
              height={200}
              width={300}
            />

            <p
              className={cn(
                "text-sm sm:text-base font-normal !leading-[1.4] text-text-200 mt-4 sm:mt-5 md:mt-7 font-inter line-clamp-2"
              )}
            >
              {item?.description}
            </p>
          </div>
          <div className="flex flex-col">
            <p
              className={cn(
                "text-[10px] md:text-xs font-normal !leading-[1.6] text-text-200 font-inter"
              )}
            >
              {item?.tagList}
            </p>

            <Button className="w-fit group mt-4 sm:mt-6 md:mt-12">
              <span className="!leading-none">View Case</span>
              <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectHomeCard;
