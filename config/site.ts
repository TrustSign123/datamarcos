export const site = {
  name: "Datamarcos",
  tagline: "Technology Learning. Workforce Transformation.",
  title: "Datamarcos | Technology Learning & Corporate Training",
  description:
    "Datamarcos helps organizations and technology professionals build modern capabilities across AI, Data Engineering, Cloud, DevOps, Software Engineering and emerging technologies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://datamarcos.com",
  email: "Hello@datamarcos.com",
  phone: "Available on request",
  location: "Global delivery. Remote, onsite and hybrid engagements.",
  founder: {
    name: "Deepesh Kumar Mishra",
    title: "Founder, Datamarcos",
    bio: "Deepesh leads Datamarcos with a focus on technology capability building, expert-led learning and enterprise-ready training across modern engineering domains.",
    imageAlt: "Datamarcos founder profile placeholder"
  },
  legalEntityName: "Datamarcos",
  registeredAddress: "Registered address to be updated",
  clientLogosEnabled: false,
  clientLogos: [] as { name: string; image: string }[],
  stats: [
    { label: "Years", value: "To be updated" },
    { label: "Professionals trained", value: "To be updated" },
    { label: "Corporate clients", value: "To be updated" },
    { label: "Countries", value: "To be updated" }
  ],
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    x: process.env.NEXT_PUBLIC_X_URL,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL
  }
};

export const env = {
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
  razorpayCheckoutUrl: process.env.NEXT_PUBLIC_RAZORPAY_CHECKOUT_URL,
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL,
  corporateFormEndpoint: process.env.NEXT_PUBLIC_CORPORATE_FORM_ENDPOINT,
  leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT
};
