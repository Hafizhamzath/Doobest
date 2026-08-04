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
          <Link href="/" className="mb-4 flex flex-col items-start gap-2.5">
            <Image
              src={siteConfig.logoMaroon}
              alt="Doobest"
              width={286}
              height={286}
              className="h-12 w-12 rounded-lg border border-white/15"
            />
            <span className="text-[13px] font-bold tracking-wide text-white">
              {siteConfig.legalName}
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
                target="_blank"
                rel="noopener noreferrer"
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
              <span>{siteConfig.addresses.headOffice}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon
                name="phone"
                size={15}
                strokeWidth={2}
                className="shrink-0 text-maroon"
              />
              {siteConfig.phone.sriLanka} (Sri Lanka)
            </li>
            <li className="flex items-center gap-2.5">
              <Icon
                name="phone"
                size={15}
                strokeWidth={2}
                className="shrink-0 text-maroon"
              />
              {siteConfig.phone.uae} (UAE)
            </li>
            <li>
              <a
                href="https://wa.me/971543748522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#25D366]" aria-hidden="true">
                  <path d="M17.6 6.32A7.85 7.85 0 0012.02 4c-4.34 0-7.88 3.53-7.88 7.88 0 1.39.37 2.74 1.06 3.94L4 20l4.3-1.13a7.9 7.9 0 003.71.94h.01c4.34 0 7.88-3.53 7.88-7.88 0-2.1-.82-4.08-2.3-5.56v-.05zm-5.58 12.13h-.01a6.55 6.55 0 01-3.34-.92l-.24-.14-2.48.65.66-2.42-.16-.25a6.55 6.55 0 01-1-3.49c0-3.62 2.95-6.57 6.58-6.57a6.53 6.53 0 014.65 1.93 6.53 6.53 0 011.92 4.64c0 3.63-2.95 6.57-6.58 6.57zm3.6-4.92c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.25-.18.2-.68.66-.68 1.62 0 .96.7 1.88.8 2.01.1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" />
                </svg>
                WhatsApp: +971 54 374 8522
              </a>
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
            <li className="flex items-center gap-2.5">
              <Icon
                name="mail"
                size={15}
                strokeWidth={2}
                className="shrink-0 text-maroon"
              />
              {siteConfig.academyEmail}
            </li>
            <li className="flex items-center gap-2.5">
              <Icon
                paths={["M4 21V9l8-6 8 6v12", "M9 21v-6h6v6", "M4 9h16"]}
                size={15}
                strokeWidth={2}
                className="shrink-0 text-maroon"
              />
              Company No: {siteConfig.companyNo}
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
