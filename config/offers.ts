/** Campaign posters and WhatsApp links. Do not put offer copy in meta, Open Graph or JSON-LD. */

export const BLACK_FRIDAY_WHATSAPP_URL =
  "https://wa.me/919625988950?text=" + encodeURIComponent("Hey, I want to know about the Black Friday offer");

export const FREE_DEMO_WHATSAPP_URL =
  "https://wa.me/919625988950?text=" + encodeURIComponent("Hey, I want to book a free demo");

export const OFFER_SLIDES = [
  {
    id: "black-friday",
    href: BLACK_FRIDAY_WHATSAPP_URL,
    webp: "/images/offers/black-friday-2026.webp",
    jpg: "/images/offers/black-friday-2026.jpg",
    alt: "Datamarcos Black Friday sale: get 25% off on all AI and FDE programs. Level up your skills and accelerate your career. Limited time offer — click to claim your discount on WhatsApp.",
    cta: "black_friday_popup",
    label: "Black Friday offer"
  },
  {
    id: "free-demo",
    href: FREE_DEMO_WHATSAPP_URL,
    webp: "/images/offers/book-free-demo.webp",
    jpg: "/images/offers/book-free-demo.jpg",
    alt: "Book your free Datamarcos demo. Learn GenAI, Agentic AI and FDE careers. Click to book your demo on WhatsApp.",
    cta: "free_demo_popup",
    label: "Free demo"
  }
] as const;
