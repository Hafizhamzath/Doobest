import Hero from "@/sections/professional-services/Hero";
import ServicesExplorer from "@/sections/professional-services/ServicesExplorer";
import OurProcess from "@/sections/professional-services/OurProcess";
import Industries from "@/sections/professional-services/Industries";
import WhyChooseCaseStudies from "@/sections/professional-services/WhyChooseCaseStudies";
import Testimonials from "@/sections/professional-services/Testimonials";
import FAQ from "@/sections/professional-services/FAQ";
import CtaNewsletter from "@/sections/professional-services/CtaNewsletter";

export const metadata = {
  title: "Professional Services",
  description:
    "End-to-end accounting, taxation, payroll, business support, software and corporate services for modern businesses in Sri Lanka and the UAE.",
};

export default function ProfessionalServicesPage() {
  return (
    <>
      <Hero />
      <ServicesExplorer />
      <OurProcess />
      <Industries />
      <WhyChooseCaseStudies />
      <Testimonials />
      <FAQ />
      <CtaNewsletter />
    </>
  );
}
