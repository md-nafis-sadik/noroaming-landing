import FAQ from "@/components/home/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
import HeroHome from "@/components/home/HeroHome";
import OurGoals from "@/components/home/OurGoals";
import Destinations from "@/components/home/Destinations";
import WhyChoose from "@/components/home/WhyChoose";
import CollaborateMarquee from "@/components/home/CollaborateMarquee";
import LetsTalkHome from "@/components/home/LetsTalkHome";

const HomePage = () => {
  return (
    <main className="relative mt-[-127px] overflow-hidden">
      <HeroHome />
      <Destinations />
      <WhyChoose />
      <OurGoals />
      <Testimonial />
      <FAQ />
      <CollaborateMarquee />
      <LetsTalkHome />
    </main>
  );
};

export default HomePage;
