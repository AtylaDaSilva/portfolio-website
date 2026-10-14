import { useEffect, useState } from "react";
import { PHONE } from '../../../utils/constants.jsx'

/**
 * Floating WhatsApp link, pinned to the bottom-right of the viewport.
 * It stays in place while the page scrolls.
 *
 * Props:
 *  - phone:     number with country code, digits only (e.g. "5585999999999")
 *  - message:   pre-filled text for the chat
 *  - showAfter: pixels scrolled before the button appears (0 = always visible)
 */
export default function WhatsAppButton({
  showAfter = 0,
}) {
  const [visible, setVisible] = useState(showAfter === 0);

  useEffect(() => {
    if (showAfter === 0) return;
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const href = `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre seus serviços de Tradução/Intéprete.")}`;

  return (
    <>
      <style>{`
        .wa-float {
          position: fixed;
          right: calc(60px + env(safe-area-inset-right, 0px));
          bottom: calc(60px + env(safe-area-inset-bottom, 0px));
          z-index: 1000;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
        }
        .wa-float[data-visible="false"] {
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px);
        }
        .wa-float:hover { background: #1ebe5b; transform: scale(1.06); }
        .wa-float:focus-visible { outline: 3px solid #075e54; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .wa-float { transition: none; }
        }
      `}</style>

      <a
        className="wa-float"
        data-visible={visible}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        tabIndex={visible ? 0 : -1}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>
    </>
  );
}