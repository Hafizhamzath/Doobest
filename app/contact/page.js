import Hero from "@/sections/contact/Hero";
import GetInTouchForm from "@/sections/contact/GetInTouchForm";
import OurOffices from "@/sections/contact/OurOffices";
import ConsultationProcess from "@/sections/contact/ConsultationProcess";
import Cta from "@/sections/contact/Cta";

export const metadata = {
  title: "Contact & Consultation",
  description:
    "Get in touch with Doobest Consultancy or book a free consultation. Offices in Sri Lanka, the UAE and Qatar.",
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <GetInTouchForm />
      <OurOffices />
      <ConsultationProcess />
      <Cta />
    </>
  );
}
