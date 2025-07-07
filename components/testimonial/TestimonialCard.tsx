import { QuoteIconv3 } from "@/services";
import Image, { StaticImageData } from "next/image";

interface IFTestimonialCard {
  message: string;
  avatar: StaticImageData;
  name: string;
  title: string;
  customclass: string;
  titleclass: string;
  descriptionclass: string;
  bg: string;
  designation: string;
}

const TestimonialCard = ({
  message,
  avatar,
  name,
  designation,
  customclass,
  bg,
  titleclass,
  descriptionclass
}: IFTestimonialCard) => {
  return (
    <div className={`flex h-full rounded-2xl ${bg} flex-col justify-between flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] select-none p-6 lg:p-8`}>
      <div>
        <div className="w-full flex justify-start">
          <QuoteIconv3 className={`mb-6 lg:mb-8`} color={customclass} />
        </div>
        <div className={`text-xs md:text-sm lg:text-base !leading-[1.6] text-left max-w-full ${titleclass}`}>
          {message}
        </div>
      </div>
      <div className="flex gap-3 items-center mt-6 w-full justify-start">
        <Image
          src={avatar}
          alt="avatar"
          className="w-[42px] md:w-[50px] h-[42px] md:h-[50px] rounded-full border-2 border-white"
          width={500}
          height={500}
        />
        <div className="flex flex-col">
          <p className={`text-sm lg:text-base font-bold uppercase ${titleclass}`}>
            {name}
          </p>
          <p className={`text-xs lg:text-sm ${descriptionclass}`}>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
