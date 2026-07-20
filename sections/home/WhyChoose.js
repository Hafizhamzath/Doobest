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
            Smart Support. <em className="text-maroon">Real Impact.</em>
          </>
        }
        description="We go beyond numbers to deliver expertise, guidance, and solutions that help your business grow with confidence."
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
