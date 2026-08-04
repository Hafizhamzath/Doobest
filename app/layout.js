import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import { siteConfig } from "@/constants/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Doobest Consultancy | Accounting, Advisory & Academy",
    template: "%s | Doobest Consultancy",
  },
  description:
    "Professional accounting and business support solutions for modern businesses in Sri Lanka and the UAE. Bookkeeping, taxation, payroll, advisory and practical accounting training.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
