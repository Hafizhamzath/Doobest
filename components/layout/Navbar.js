"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { navLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const primaryNavLinks = navLinks.filter((link) => link.label !== "Get Started");

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.06] bg-cream/90 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3.5 px-6 py-4 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative block h-[41px] w-[93px] shrink-0 overflow-hidden"
        >
          <Image
            src={siteConfig.logo}
            alt="Doobest"
            width={1536}
            height={1024}
            className="absolute -top-[33px] -left-[38px] h-28 w-auto max-w-none"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-x-5 gap-y-4 lg:flex"
        >
          {primaryNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "border-b-2 pb-1.5 text-[13.5px] font-semibold whitespace-nowrap transition-colors hover:text-maroon",
                  isActive
                    ? "border-maroon text-maroon"
                    : "border-transparent text-ink/85"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href="/get-started" size="sm">
              Get Started
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-maroon lg:hidden"
          >
            {open ? (
              <Icon name="close" size={18} />
            ) : (
              <span className="grid grid-cols-3 gap-[3px]" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-[3px] w-[3px] rounded-full bg-ink"
                  />
                ))}
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-ink/[0.06] bg-cream px-6 py-4 lg:hidden"
        >
          {primaryNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-semibold",
                  isActive
                    ? "bg-maroon/10 text-maroon"
                    : "text-ink/85 hover:bg-ink/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-2 sm:hidden">
            <Button
              href="/get-started"
              size="sm"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
