"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";
import Icon from "@/components/ui/Icon";
import { academyCourses } from "@/constants/academyCourses";
import { siteConfig } from "@/constants/site";
import { buildMailtoLink } from "@/lib/mailtoTemplate";

const courseOptions = academyCourses.map((course) => course.title);

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
  if (!formData.get("course")?.trim()) {
    errors.course = "Please select a course.";
  }
  return errors;
}

export default function EnrollForm({ course, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const phone = formData.get("phone").trim();
    const selectedCourse = formData.get("course").trim();
    const message = formData.get("message")?.trim() || "-";

    const mailtoLink = buildMailtoLink({
      to: siteConfig.academyEmail,
      title: `Course Enrollment Request - ${selectedCourse}`,
      formName: "Doobest Academy — Enrollment Form",
      sections: [
        {
          heading: "Student Details",
          fields: [
            { label: "Name", value: name },
            { label: "Email", value: email },
            { label: "Phone", value: phone },
          ],
        },
        {
          heading: "Enrollment Details",
          fields: [{ label: "Course", value: selectedCourse }],
        },
        {
          heading: "Message",
          fields: [{ label: "Notes", value: message }],
        },
      ],
    });

    window.location.href = mailtoLink;
    setSubmitted(true);
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
    <div>
      <p className="mb-1.5 text-xs font-bold tracking-[0.2em] text-maroon uppercase">
        Doobest Academy
      </p>
      <h3 id="enroll-form-heading" className="mb-2 font-serif text-2xl font-bold text-ink">
        Enroll Now
      </h3>
      <p className="mb-6 text-[13.5px] leading-relaxed text-muted">
        Share your details and we&rsquo;ll get back to you with the next steps.
      </p>

      {submitted ? (
        <div className="rounded-xl border border-maroon/20 bg-cream px-5 py-4">
          <p className="mb-3 text-sm font-semibold text-maroon">
            Your email app should now open with your enrollment details ready
            to send to {siteConfig.academyEmail}.
          </p>
          <p className="mb-4 text-[12.5px] leading-relaxed text-muted">
            If it didn&rsquo;t open automatically, please email us directly at{" "}
            <a href={`mailto:${siteConfig.academyEmail}`} className="font-semibold text-maroon">
              {siteConfig.academyEmail}
            </a>
            .
          </p>
          <Button type="button" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-5 flex flex-col gap-5">
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
            <FormField
              label="Course"
              required
              as="select"
              name="course"
              defaultValue={course}
              options={courseOptions}
              error={errors.course}
              onChange={() => clearError("course")}
            />
            <FormField
              label="Message"
              as="textarea"
              name="message"
              rows={3}
              placeholder="Anything you'd like us to know?"
            />
          </div>

          <Button type="submit" className="w-full justify-center">
            Send Enrollment Request
          </Button>
        </form>
      )}
    </div>
  );
}
