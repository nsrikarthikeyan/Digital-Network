"use client";

import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({
  open,
  onClose,
}: ContactModalProps) {
  if (!open) return null;

  return (
    <>
      <div className="contact-overlay" onClick={onClose}></div>

      <div className="contact-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="contact-header">

          <span className="contact-tag">
            DIGITAL NETWORK
          </span>

          <h2>
            IT Sales & Service Solutions
          </h2>

          <p>
            Get expert assistance for laptops, desktops, printers, networking products, firewalls, servers, Google Workspace, repairs and business IT solutions.
          </p>

        </div>

        <div className="contact-body">

          <a
            href="tel:+919894740202"
            className="contact-card"
          >
            <div className="icon blue">
              <FaPhoneAlt />
            </div>

            <div className="info">
              <h3>Call Our Team</h3>
              <p>Speak directly with a Digital Network specialist.</p>
            </div>
          </a>

          <a
            href="https://wa.me/919894740202"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="icon green">
              <FaWhatsapp />
            </div>

            <div className="info">
              <h3>WhatsApp Enquiry</h3>
              <p>Get quick assistance on products and pricing.</p>
            </div>
          </a>

          <p className="contact-footnote">
            Available for laptop, desktop, printer, networking, firewall, server, Google Workspace, AMC services, repairs and IT support enquiries.
          </p>

        </div>

      </div>
    </>
  );
}