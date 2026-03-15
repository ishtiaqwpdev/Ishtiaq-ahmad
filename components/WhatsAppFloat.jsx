"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923220541903"; // 03220541903 with country code

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="whatsapp-float-tooltip">Chat on WhatsApp</span>
      <FaWhatsapp className="whatsapp-float-icon" />
    </a>
  );
}
