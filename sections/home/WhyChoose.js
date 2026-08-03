import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/cards/FeatureCard";
import { features } from "@/constants/features";

export default function WhyChoose() {
  return (
    <Container as="section" size="narrow" className="py-24 md:py-28">
      <SectionHeading
        eyebrow="Why Choose Doobest"
        align="center"
        title={
          <>
            Your Trusted Partner for <em className="font-bold text-maroon not-italic">Accounting Excellence</em>
          </>
        }
        description="Managing finances effectively is essential for every successful business. Our team provides practical accounting solutions that help businesses maintain accurate records, improve reporting, stay compliant, and make better financial decisions."
      />

      <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            variant="detailed"
            showDivider={index < features.length - 1}
          />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button href="/professional-services">Explore Our Services</Button>
      </div>
    </Container>
  );
}
