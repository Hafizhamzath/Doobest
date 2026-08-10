"use client";

import { useEffect, useRef, useState } from "react";

const numbers = [
  { label: "Sri Lanka", display: "+94 74 041 0943", href: "https://wa.me/94740410943" },
  { label: "UAE", display: "+971 54 374 8522", href: "https://wa.me/971543748522" },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={rootRef} className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3 sm:right-7 sm:bottom-7">
      {open && (
        <div className="w-56 overflow-hidden rounded-2xl bg-white shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
          <p className="border-b border-ink/[0.06] px-4 py-3 text-[12px] font-bold tracking-wide text-ink/70 uppercase">
            Chat on WhatsApp
          </p>
          {numbers.map((number) => (
            <a
              key={number.href}
              href={number.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-2 px-4 py-3 transition-colors hover:bg-[#25D366]/10"
            >
              <span>
                <span className="block text-[13px] font-bold text-ink">{number.label}</span>
                <span className="block text-[12px] text-muted">{number.display}</span>
              </span>
              <span className="shrink-0 text-[#25D366]" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp options" : "Chat with us on WhatsApp"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-110"
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            style={{ animation: "pulseRing 2.2s ease-out infinite" }}
            aria-hidden="true"
          />
        )}
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="relative" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="relative" aria-hidden="true">
            <path d="M17.6 6.32A7.85 7.85 0 0012.02 4c-4.34 0-7.88 3.53-7.88 7.88 0 1.39.37 2.74 1.06 3.94L4 20l4.3-1.13a7.9 7.9 0 003.71.94h.01c4.34 0 7.88-3.53 7.88-7.88 0-2.1-.82-4.08-2.3-5.56v-.05zm-5.58 12.13h-.01a6.55 6.55 0 01-3.34-.92l-.24-.14-2.48.65.66-2.42-.16-.25a6.55 6.55 0 01-1-3.49c0-3.62 2.95-6.57 6.58-6.57a6.53 6.53 0 014.65 1.93 6.53 6.53 0 011.92 4.64c0 3.63-2.95 6.57-6.58 6.57zm3.6-4.92c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.25-.18.2-.68.66-.68 1.62 0 .96.7 1.88.8 2.01.1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" />
          </svg>
        )}
      </button>
    </div>
  );
}
