import { AvailableVoting } from "@/components/AvailableVoting/AvailableVoting";
import Faq from "@/components/Home/Faq/Faq";
import { HowItWorks } from "@/components/Home/HowItWorks/HowItWorks";
import { Testimonials } from "@/components/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="">
      <HowItWorks/>
      <AvailableVoting/>
      <Testimonials/>
      <Faq/>
    </div>
  );
}
