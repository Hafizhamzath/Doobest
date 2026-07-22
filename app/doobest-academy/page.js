import Hero from "@/sections/doobest-academy/Hero";
import OurPrograms from "@/sections/doobest-academy/OurPrograms";
import LearningApproach from "@/sections/doobest-academy/LearningApproach";
import Testimonials from "@/sections/doobest-academy/Testimonials";
import UpcomingBatches from "@/sections/doobest-academy/UpcomingBatches";
import Cta from "@/sections/doobest-academy/Cta";

export const metadata = {
  title: "Doobest Academy",
  description:
    "Practical accounting, taxation, payroll and software training programs designed to build confident finance professionals.",
};

export default function DoobestAcademyPage() {
  return (
    <>
      <Hero />
      <OurPrograms />
      <LearningApproach />
      <Testimonials />
      <UpcomingBatches />
      <Cta />
    </>
  );
}
