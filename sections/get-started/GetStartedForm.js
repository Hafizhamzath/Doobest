"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import FormField from "@/components/ui/FormField";
import { footerServiceLinks } from "@/constants/footer";

export default function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="h-full rounded-[20px] bg-white px-6 py-8 shadow-[0_25px_55px_rgba(17,17,17,0.12)] sm:px-7">
      <div className="mb-6.5 flex items-start gap-3.5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0E6DC] text-maroon">
          <Icon
            paths={["M4 4h13l3 3v13a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z", "M8 15h8M8 11h4"]}
            size={21}
            strokeWidth={1.8}
          />
        </div>
        <div>
          <h3 className="mb-1.5 font-serif text-xl font-bold text-maroon">
            Start Your Journey
          </h3>
          <p className="text-[12.5px] leading-relaxed text-muted">
            Fill in your details and our team will connect with you shortly.
          </p>
        </div>
      </div>

      {submitted ? (
        <p className="rounded-xl border border-maroon/20 bg-cream px-5 py-4 text-sm font-semibold text-maroon">
          Thank you — we&rsquo;ve received your details and will be in touch
          shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
          <FormField label="Full Name" required name="name" placeholder="Enter your full name" />
          <FormField
            label="Email Address"
            required
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <FormField
            label="Phone Number"
            required
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
          <FormField
            label="How Can We Help You?"
            required
            as="select"
            name="service"
            options={footerServiceLinks}
          />

          <Button type="submit" className="mt-1 w-full justify-center">
            Submit &amp; Get Started
          </Button>

          <p className="flex items-center justify-center gap-2 text-[11.5px] text-faint">
            <Icon
              paths={[
                "M12 2a5 5 0 00-5 5v3H6a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-9a1 1 0 00-1-1h-1V7a5 5 0 00-5-5zm0 2a3 3 0 013 3v3H9V7a3 3 0 013-3z",
              ]}
              size={12}
              strokeWidth={0}
              className="fill-current"
            />
            Your information is safe with us.
          </p>
        </form>
      )}
    </div>
  );
}
