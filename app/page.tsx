import FAQ from "@/components/faq/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
import HeroHome from "@/components/hero/HeroHome";
import EffortLessManagement from "@/components/home/EffortLessManagement";
import IntroHome from "@/components/home/IntroHome";
import FeaturesHome from "@/components/home/FeaturesHome";
import OurGoals from "@/components/home/OurGoals";
import Benifits from "@/components/home/Benefits";
import BlogSection from "@/components/home/BlogSection";

const HomePage = () => {
  return (
    <main className="relative mt-[-120px] overflow-hidden">
      <HeroHome />
      {/* <div className="w-full relative -mt-40">
        <MarqueeHome
          dark={true}
          className="absolute -bottom-20 md:bottom-0 left-1/2 -translate-x-1/2"
        />
        <MarqueeHome
          dark={false}
          className="absolute -bottom-16 md:bottom-10 left-1/2 -translate-x-1/2"
        />
      </div> */}
      <IntroHome />
      <EffortLessManagement />

      <OurGoals />

      <FeaturesHome />
      <Benifits />
      <Testimonial />
      <BlogSection />

      <FAQ />
    </main>
  );
};

export default HomePage;
