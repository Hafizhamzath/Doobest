"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const WHATSAPP_ICON_PATH =
  "M17.6 6.32A7.85 7.85 0 0012.02 4c-4.34 0-7.88 3.53-7.88 7.88 0 1.39.37 2.74 1.06 3.94L4 20l4.3-1.13a7.9 7.9 0 003.71.94h.01c4.34 0 7.88-3.53 7.88-7.88 0-2.1-.82-4.08-2.3-5.56v-.05zm-5.58 12.13h-.01a6.55 6.55 0 01-3.34-.92l-.24-.14-2.48.65.66-2.42-.16-.25a6.55 6.55 0 01-1-3.49c0-3.62 2.95-6.57 6.58-6.57a6.53 6.53 0 014.65 1.93 6.53 6.53 0 011.92 4.64c0 3.63-2.95 6.57-6.58 6.57zm3.6-4.92c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.25-.18.2-.68.66-.68 1.62 0 .96.7 1.88.8 2.01.1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z";

const POPOVER_WIDTH = 168;

export default function PhoneChoice({ label, tel, wa, triggerClassName, align = "left" }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState(null);
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  function openPopover() {
    const rect = triggerRef.current.getBoundingClientRect();
    const left =
      align === "right"
        ? Math.max(8, rect.right - POPOVER_WIDTH)
        : Math.min(rect.left, window.innerWidth - POPOVER_WIDTH - 8);
    setCoords({ top: rect.bottom + 8, left });
    setOpen(true);
  }

  function closePopover() {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event) {
      if (
        triggerRef.current?.contains(event.target) ||
        popoverRef.current?.contains(event.target)
      ) {
        return;
      }
      closePopover();
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") closePopover();
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", closePopover, true);
    window.addEventListener("resize", closePopover);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", closePopover, true);
      window.removeEventListener("resize", closePopover);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        onClick={() => (open ? closePopover() : openPopover())}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Contact options for ${label}`}
        className={cn("inline-flex cursor-pointer items-center gap-1 text-left", triggerClassName)}
      >
        {label}
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("shrink-0 opacity-60 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open &&
        coords &&
        createPortal(
          <div
            ref={popoverRef}
            style={{ position: "fixed", top: coords.top, left: coords.left, width: POPOVER_WIDTH }}
            className="z-[999] overflow-hidden rounded-xl bg-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.32)] ring-1 ring-black/[0.06]"
          >
            <a
              href={`tel:${tel}`}
              onClick={closePopover}
              className="flex items-center gap-2.5 border-b border-ink/[0.06] px-4 py-3 text-[13px] font-semibold text-ink transition-colors hover:bg-maroon/10"
            >
              <Icon name="phone" size={14} strokeWidth={2} className="shrink-0 text-maroon" />
              Call
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closePopover}
              className="flex items-center gap-2.5 px-4 py-3 text-[13px] font-semibold text-ink transition-colors hover:bg-[#25D366]/10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#25D366]" aria-hidden="true">
                <path d={WHATSAPP_ICON_PATH} />
              </svg>
              WhatsApp
            </a>
          </div>,
          document.body
        )}
    </>
  );
}
