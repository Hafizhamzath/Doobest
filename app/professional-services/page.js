import Hero from "@/sections/professional-services/Hero";
import ServicesExplorer from "@/sections/professional-services/ServicesExplorer";
import ComprehensiveSolutions from "@/sections/professional-services/ComprehensiveSolutions";
import OurProcess from "@/sections/professional-services/OurProcess";
import Industries from "@/sections/professional-services/Industries";
import WhyChooseCaseStudies from "@/sections/professional-services/WhyChooseCaseStudies";
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
      <ComprehensiveSolutions />
      <OurProcess />
      <Industries />
      <WhyChooseCaseStudies />
      <CtaNewsletter />
    </>
  );
}
