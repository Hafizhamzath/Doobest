import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants/navigation";
import { footerServiceLinks, socialLinks } from "@/constants/footer";
import { siteConfig } from "@/constants/site";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function Footer({
  thirdColumnTitle = "Our Services",
  thirdColumnLinks = footerServiceLinks,
  showNewsletter = true,
  legalColumn,
}) {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="mb-4 flex items-center gap-2.5">
            <Image
              src={siteConfig.logoGold}
              alt="Doobest D mark"
              width={414}
              height={448}
              className="h-7 w-auto"
            />
            <span className="leading-[1.15]">
              <span className="block font-serif text-base font-bold tracking-wide">
                DOOBEST
              </span>
              <span className="block text-[8.5px] tracking-[0.15em] text-white/50">
                CONSULTANCY (PVT) LTD
              </span>
            </span>
          </Link>
          <p className="mb-5 max-w-xs text-[13.5px] leading-relaxed text-white/55">
            {siteConfig.description}
          </p>
          <div className="flex gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="grid h-[34px] w-[34px] place-items-center rounded-full border border-white/25 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon name={social.icon} size={15} strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-[13px] font-bold tracking-wide text-gold">
            Quick Links
          </h3>
          <span className="mb-4 block h-0.5 w-4 bg-gold" aria-hidden="true" />
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-[13px] font-bold tracking-wide text-gold">
            {thirdColumnTitle}
          </h3>
          <span className="mb-4 block h-0.5 w-4 bg-gold" aria-hidden="true" />
          <ul className="flex flex-col gap-3">
            {thirdColumnLinks.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-[13px] font-bold tracking-wide text-gold">
            Contact Us
          </h3>
          <span className="mb-4 block h-0.5 w-4 bg-gold" aria-hidden="true" />
          <ul className="flex flex-col gap-3.5 text-[13.5px] text-white/70">
            <li className="flex items-start gap-2.5">
              <Icon
                name="mapPin"
                size={15}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-maroon"
              />
              <span>{siteConfig.addresses.sriLanka}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon
                name="phone"
                size={15}
                strokeWidth={2}
                className="shrink-0 text-maroon"
              />
              {siteConfig.phone.sriLanka}
            </li>
            <li className="flex items-center gap-2.5">
              <Icon
                name="mail"
                size={15}
                strokeWidth={2}
                className="shrink-0 text-maroon"
              />
              {siteConfig.email}
            </li>
            <li className="flex items-start gap-2.5">
              <Icon
                name="mapPin"
                size={15}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-maroon"
              />
              <span>
                {siteConfig.addresses.uae}, {siteConfig.phone.uae}
              </span>
            </li>
          </ul>
        </div>

        {legalColumn ? (
          <div>
            <h3 className="mb-2 text-[13px] font-bold tracking-wide text-gold">
              {legalColumn.title}
            </h3>
            <span className="mb-4 block h-0.5 w-4 bg-gold" aria-hidden="true" />
            <ul className="flex flex-col gap-3">
              {legalColumn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          showNewsletter && (
            <div>
              <h3 className="mb-2 text-[13px] font-bold tracking-wide text-gold">
                Stay Updated
              </h3>
              <span className="mb-4 block h-0.5 w-4 bg-gold" aria-hidden="true" />
              <p className="mb-4 text-[13px] leading-relaxed text-white/60">
                Subscribe to get the latest updates and insights.
              </p>
              <NewsletterForm />
            </div>
          )
        )}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-6 text-[12.5px] text-white/50">
          <p>
            © {new Date().getFullYear()} Doobest Consultancy (PVT) LTD. All
            Rights Reserved.
          </p>
          {!legalColumn && (
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white/80">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white/80">
                Terms &amp; Conditions
              </Link>
            </div>
          )}
        </Container>
      </div>
    </footer>
  );
}
