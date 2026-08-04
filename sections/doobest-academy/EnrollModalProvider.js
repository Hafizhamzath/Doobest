"use client";

import { createContext, useContext, useState } from "react";
import Modal from "@/components/ui/Modal";
import EnrollForm from "@/sections/doobest-academy/EnrollForm";

const EnrollModalContext = createContext(null);

export function useEnrollModal() {
  const ctx = useContext(EnrollModalContext);
  if (!ctx) {
    throw new Error("useEnrollModal must be used within an EnrollModalProvider");
  }
  return ctx;
}

export default function EnrollModalProvider({ children }) {
  const [enrollCourse, setEnrollCourse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function openEnroll(course) {
    setEnrollCourse(course ?? "");
    setIsOpen(true);
  }

  function closeEnroll() {
    setIsOpen(false);
  }

  return (
    <EnrollModalContext.Provider value={{ openEnroll }}>
      {children}

      <Modal open={isOpen} onClose={closeEnroll} labelledBy="enroll-form-heading">
        <EnrollForm course={enrollCourse} onClose={closeEnroll} />
      </Modal>
    </EnrollModalContext.Provider>
  );
}
