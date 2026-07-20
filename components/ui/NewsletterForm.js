"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function NewsletterForm({ className }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex overflow-hidden rounded-full bg-white/[0.06] ${className ?? ""}`}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setSubmitted(false);
        }}
        placeholder={submitted ? "Thanks, you're subscribed!" : "Enter your email"}
        className="w-full min-w-0 flex-1 bg-transparent px-4 py-3 text-[13px] text-white outline-none placeholder:text-white/50"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex w-11 shrink-0 items-center justify-center bg-maroon text-white transition-colors hover:bg-maroon-dark"
      >
        <Icon name="arrowRight" size={16} strokeWidth={2} />
      </button>
    </form>
  );
}
