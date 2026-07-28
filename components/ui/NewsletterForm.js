"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function NewsletterForm({ className }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`flex overflow-hidden rounded-full bg-white/[0.06] ${
          error ? "ring-1 ring-[#E4787A]" : ""
        } ${className ?? ""}`}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          aria-invalid={!!error}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSubmitted(false);
            if (error) setError("");
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
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#E4787A]">
          <Icon
            paths={["M12 9v4", "M12 16.5h.01"]}
            circles={[{ cx: 12, cy: 12, r: 9 }]}
            size={12}
            strokeWidth={2}
            className="shrink-0"
          />
          {error}
        </p>
      )}
    </div>
  );
}
