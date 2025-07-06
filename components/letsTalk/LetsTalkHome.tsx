import { cn } from "@/lib/utils";;
import { Button } from "../ui/button";

const LetsTalkHome = () => {
  return (
    <section className="relative">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 bg-[url('/images/project/footer-background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#183144]" />

      {/* Content container */}
      <div className="relative z-10 containerX py-[60px] md:py-20 items-center space-y-6 justify-between">
        <div>
          <div>
            <h2 className="text-center text-2xl md:text-[30px] xl:text-[48px] font-bold text-white">
            Stay Updated with Smart Pathshala
            </h2>
            <p className="text-center mt-4 lg:mt-6 text-white text-xs md:text-sm lg:text-base">
            Subscribe today and never miss an update on smarter institute management            </p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <form className="rounded-full border border-[#494949] ps-6 py-1 pe-1 md:pe-3 h-[45px] md:h-[55px] flex items-center justify-between gap-4 bg-white w-full max-w-[540px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className={cn(
                "text-xs md:text-sm lg:text-base font-normal !leading-[1.3] bg-transparent border-none outline-none text-black placeholder:text-gray-400 h-full font-inter max-w-[148px] md:max-w-full"
              )}
            />
            <Button
              type="submit"
              className="text-sm lg:text-base px-5 py-1 md:py-2 lg:py-3 h-[35px] md:h-[45px] bg-skyish-700 hover:bg-sky-600"
            >
              <span>Submit</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default LetsTalkHome;
