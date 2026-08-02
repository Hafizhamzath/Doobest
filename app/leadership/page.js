import Hero from "@/sections/leadership/Hero";
import StatsBar from "@/sections/leadership/StatsBar";
import DirectorProfile from "@/sections/leadership/DirectorProfile";
import Foreword from "@/sections/leadership/Foreword";
import LeadershipGrid from "@/sections/leadership/LeadershipGrid";
import TeamValues from "@/sections/leadership/TeamValues";
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
      <DirectorProfile />
      <Foreword />
      <LeadershipGrid />
      <TeamValues />
      <Cta />
    </>
  );
}
