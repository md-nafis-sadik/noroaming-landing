import { QuoteIconv2 } from "@/services";
import Image, { StaticImageData } from "next/image";

interface IFTestimonialCard {
  message: string;
  avatar: StaticImageData;
  name: string;
  title: string;
  designation: string;
}

const TestimonialCard = ({
  message,
  avatar,
  name,
  title,
  designation
}: IFTestimonialCard) => {
  return (
    <div className="flex rounded-2xl bg-[#F0F8FF] flex-col mt-10 md:mt-20 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] select-none p-6 lg:p-8">
      <div className="w-full flex justify-start">
        <QuoteIconv2 className="w-5 h-5 md:w-[33px] md:h-[27px] text-primary-500 mb-6" />
      </div>
      <div className="text-base md:text-lg font-semibold text-left mb-3 text-[#191919]">{title}</div>
      <div className="text-xs md:text-sm lg:text-base !leading-[1.6] text-left max-w-full text-[#888888]">
        {message}
      </div>

      <div className="flex gap-3 items-center mt-6 w-full justify-start">
        <Image
          src={avatar}
          alt="avatar"
          className="w-[52px] md:w-[60px] h-[52px] md:h-[60px]"
          width={500}
          height={500}
        />
        <div className="flex flex-col">
          <p className="text-sm lg:text-base font-bold uppercase">
            {name}
          </p>
          <p className="text-xs lg:text-sm text-text-600">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
