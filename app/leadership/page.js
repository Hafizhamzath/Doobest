import Hero from "@/sections/leadership/Hero";
import StatsBar from "@/sections/leadership/StatsBar";
import LeadershipGrid from "@/sections/leadership/LeadershipGrid";
import TeamValues from "@/sections/leadership/TeamValues";
import TeamGallery from "@/sections/leadership/TeamGallery";
import Cta from "@/sections/leadership/Cta";

export const metadata = {
  title: "Leadership & Team",
  description:
    "Meet the leaders and team behind Doobest Consultancy — experienced professionals dedicated to your business success in Sri Lanka and the UAE.",
};

export default function LeadershipPage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LeadershipGrid />
      <TeamValues />
      <TeamGallery />
      <Cta />
    </>
  );
}
