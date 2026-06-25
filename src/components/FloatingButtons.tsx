"use client";

import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import ContactModal from "./ContactModal";

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="floating-buttons">

        <button
          className="call-btn"
          onClick={() => setOpen(true)}
          aria-label="Call"
        >
          <FaPhoneAlt />
        </button>

        <button
          className="whatsapp-btn"
          onClick={() => setOpen(true)}
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </button>

      </div>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}