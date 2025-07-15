import FAQ from "@/components/faq/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
import HeroHome from "@/components/hero/HeroHome";
import OurGoals from "@/components/home/OurGoals";
import Destinations from "@/components/home/Destinations";
import WhyChoose from "@/components/home/WhyChoose";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import LetsTalkHome from "@/components/letsTalk/LetsTalkHome";

const HomePage = () => {
  return (
    <main className="relative mt-[-127px] overflow-hidden">
      <HeroHome />
      <Destinations />
      <WhyChoose />
      <OurGoals />
      <Testimonial />
      <FAQ />
      <CollaborateMarquee/>
      <LetsTalkHome />
    </main>
  );
};

export default HomePage;
