import Hero from "@/sections/about/Hero";
import StatsBar from "@/sections/about/StatsBar";
import OurJourney from "@/sections/about/OurJourney";
import Leadership from "@/sections/about/Leadership";
import Cta from "@/sections/about/Cta";

export const metadata = {
  title: "About Doobest",
  description:
    "Doobest Consultancy (Pvt) Ltd. — our story, journey and leadership team behind trusted accounting and advisory services in Sri Lanka and the UAE.",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <OurJourney />
      <Leadership />
      <Cta />
    </>
  );
}
