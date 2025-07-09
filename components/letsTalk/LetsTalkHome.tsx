import { cn } from "@/lib/utils";;
import { Button } from "../ui/button";

const LetsTalkHome = () => {
  return (
    <section id="contact" className="containerX py-6 lg:py-10 my-6 lg:my-10 font-inter">
      <div style={{
        background: `
      radial-gradient(ellipse at 30% 70%, #033877 0%, #000 100%)
    `,
        backgroundBlendMode: 'overlay'
      }} className="rounded-3xl px-6 py-[60px] md:py-20 items-center space-y-6 justify-between">
        <div>
          <div>
            <h2 className="text-center max-w-3xl mx-auto leading-[40px] text-2xl md:text-[24px] xl:text-[36px] font-bold text-white">
              Ready to level up your investment and business process?
            </h2>
            <p className="text-center max-w-xl mx-auto font-extralight mt-4 lg:mt-6 text-text-100 text-sm md:text-base lg:text-lg">
              Supports <b className="font-semibold text-text-50">eSim</b> and beginners with simple invoicing,
              powerful integrations, and cash flow management tools.</p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <form className="rounded-2xl border border-[#494949] ps-6 py-3 pe-1 md:pe-3 h-[55px] md:h-[75px] flex items-center justify-between gap-2 lg:gap-4 bg-white w-full max-w-[423px]">
            <input
              type="email"
              placeholder="Your email"
              className={cn(
                "text-xs md:text-sm lg:text-base font-normal !leading-[1.3] bg-transparent border-none outline-none text-black placeholder:text-gray-400 h-full font-inter max-w-[80px] md:max-w-full"
              )}
            />
            <Button
              type="submit"
              className="text-xs md:text-sm lg:text-base px-3 lg:px-5 py-2 md:py-3 lg:py-3 h-[39px] md:h-[49px] hover:bg-secondary-700 bg-secondary-600 rounded-xl"
            >
              <span>Subscribe</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default LetsTalkHome;
