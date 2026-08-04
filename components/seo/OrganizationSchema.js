import { siteConfig } from "@/constants/site";
import { socialLinks } from "@/constants/footer";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logoMaroon}`,
    image: `${siteConfig.url}${siteConfig.logoMaroon}`,
    description: siteConfig.description,
    telephone: siteConfig.phone.sriLanka,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "148, Office 2, Eravur Town, Batticaloa",
      postalCode: "30300",
      addressCountry: "LK",
    },
    areaServed: ["Sri Lanka", "United Arab Emirates"],
    sameAs: socialLinks.map((social) => social.href).filter((href) => href && href !== "#"),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
