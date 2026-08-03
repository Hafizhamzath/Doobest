"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import FormField from "@/components/ui/FormField";
import Reveal from "@/components/ui/Reveal";
import { footerServiceLinks } from "@/constants/footer";

const contactItems = [
  {
    label: "Call Us",
    lines: ["+94 74 041 0943 (Sri Lanka)", "+971 54 374 8522 (UAE)"],
    icon: {
      paths: [
        "M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1.1z",
      ],
    },
  },
  {
    label: "Email Us",
    lines: ["info@doobestco.com", "academy@doobestco.com"],
    icon: { paths: ["M3 6h18v12H3z", "M3 6l9 7 9-7"] },
  },
  {
    label: "Visit Us",
    lines: ["148, Office 2, Eravur Town, Batticaloa", "Postal Code: 30300"],
    icon: {
      paths: [
        "M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z",
        "M12 12a3 3 0 100-6 3 3 0 000 6z",
      ],
    },
  },
  {
    label: "Business Hours",
    lines: ["Mon - Fri : 9:00 AM - 6:00 PM", "Saturday : 9:00 AM - 1:00 PM"],
    icon: { paths: ["M12 21a9 9 0 100-18 9 9 0 000 18z", "M12 7v5l3 3"] },
  },
  {
    label: "Company No",
    lines: ["PV 00316023"],
    icon: { paths: ["M4 21V9l8-6 8 6v12", "M9 21v-6h6v6", "M4 9h16"] },
  },
];

function validate(formData) {
  const errors = {};
  if (!formData.get("name")?.trim()) {
    errors.name = "Please enter your full name.";
  }
  const email = formData.get("email")?.trim();
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!formData.get("phone")?.trim()) {
    errors.phone = "Please enter your phone number.";
  }
  if (!formData.get("message")?.trim()) {
    errors.message = "Please tell us how we can help.";
  }
  if (!formData.get("agree")) {
    errors.agree = "Please agree to the Privacy Policy and Terms & Conditions.";
  }
  return errors;
}

export default function GetInTouchForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function clearError(field) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  return (
    <Container id="get-in-touch" as="section" className="pb-20 md:pb-24">
      <div className="flex flex-wrap overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
        <div className="flex-1 basis-[280px] bg-[#111] bg-[url('/assets/contact-wave-connector.png')] bg-right bg-no-repeat px-8 py-10 [background-size:auto_100%] sm:px-10">
          <h2 className="mb-2.5 font-serif text-[28px] font-semibold text-white">
            Get in Touch
          </h2>
          <span className="mb-5 block h-[3px] w-9 bg-gold" aria-hidden="true" />
          <p className="mb-8 text-[13.5px] text-white/60">
            We are just a call or message away.
          </p>
          <div className="flex flex-col gap-6.5">
            {contactItems.map((item, index) => (
              <Reveal key={item.label} delay={index * 80} className="group flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-maroon text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon paths={item.icon.paths} size={19} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="mb-1.5 text-[13px] font-bold text-gold">{item.label}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-[13.5px] leading-relaxed text-white/85">
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative flex-[2] basis-[520px] bg-cream px-6 py-10 sm:px-10">
          <div className="mb-8 flex items-center gap-2.5 rounded-xl border border-ink/[0.08] bg-white px-4 py-3 sm:absolute sm:top-10 sm:right-10 sm:mb-0">
            <div className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-[#E9F3EC] text-[#2E7D46]">
              <Icon paths={["M20 6L9 17l-5-5"]} size={13} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[12.5px] font-bold text-ink">100% Confidential</p>
              <p className="text-[11px] text-faint">Your information is safe with us.</p>
            </div>
          </div>

          <div className="mb-8 flex max-w-[520px] items-start gap-3.5">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#F0E6DC] text-maroon">
              <Icon name="calendar" size={19} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="mb-1.5 font-serif text-xl font-bold text-ink">
                Book a Free Consultation
              </h3>
              <p className="text-[13px] leading-relaxed text-muted">
                Schedule a meeting with our experts and discover how we can
                support your business.
              </p>
            </div>
          </div>

          {submitted ? (
            <p className="rounded-xl border border-maroon/20 bg-white px-5 py-4 text-sm font-semibold text-maroon">
              Thank you — your consultation request has been received. Our
              team will be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  required
                  name="name"
                  placeholder="Enter your full name"
                  error={errors.name}
                  onChange={() => clearError("name")}
                />
                <FormField
                  label="Email Address"
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  error={errors.email}
                  onChange={() => clearError("email")}
                />
                <FormField
                  label="Phone Number"
                  required
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  error={errors.phone}
                  onChange={() => clearError("phone")}
                />
                <FormField label="Company Name" name="company" placeholder="Enter your company name" />
                <FormField
                  label="Service You're Interested In"
                  as="select"
                  name="service"
                  options={footerServiceLinks}
                />
                <FormField
                  label="How Can We Help You?"
                  required
                  as="textarea"
                  name="message"
                  rows={1}
                  placeholder="Tell us about your business needs..."
                  error={errors.message}
                  onChange={() => clearError("message")}
                />
              </div>

              <div className="mb-6.5">
                <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-body">
                  <input
                    type="checkbox"
                    name="agree"
                    className="h-4 w-4 accent-maroon"
                    onChange={() => clearError("agree")}
                  />
                  I agree to the <a href="#">Privacy Policy</a> and{" "}
                  <a href="#">Terms &amp; Conditions</a>
                </label>
                {errors.agree && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#D64545]">
                    <Icon
                      paths={["M12 9v4", "M12 16.5h.01"]}
                      circles={[{ cx: 12, cy: 12, r: 9 }]}
                      size={13}
                      strokeWidth={2}
                      className="shrink-0"
                    />
                    {errors.agree}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Button type="submit">Schedule Consultation</Button>
                <Button
                  href="/about"
                  variant="text"
                  arrow={false}
                  icon={
                    <span className="flex h-7.5 w-7.5 items-center justify-center rounded-full border-[1.3px] border-maroon">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" className="text-maroon" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  }
                >
                  Learn More About Us
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
