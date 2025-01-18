import { AvailableVoting } from "@/components/AvailableVoting/AvailableVoting";
import { HowItWorks } from "@/components/Home/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <HowItWorks/>
      <AvailableVoting/>
    </div>
  );
}
