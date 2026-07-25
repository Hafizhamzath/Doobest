import Hero from "@/sections/get-started/Hero";
import Process from "@/sections/get-started/Process";
import Cta from "@/sections/get-started/Cta";

export const metadata = {
  title: "Get Started",
  description:
    "Take the first step towards financial clarity. Share your details and the Doobest team will connect with you shortly.",
};

export default function GetStartedPage() {
  return (
    <>
      <Hero />
      <Process />
      <Cta />
    </>
  );
}
