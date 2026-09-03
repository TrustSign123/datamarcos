export const site = {
  name: "Datamarcos",
  tagline: "Technology Learning. Workforce Transformation.",
  title: "Datamarcos | Technology Learning & Corporate Training",
  description:
    "Datamarcos helps organizations and technology professionals build modern capabilities across AI, Data Engineering, Cloud, DevOps, Software Engineering and emerging technologies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://datamarcos.com",
  email: "Hello@datamarcos.com",
  phone: "+91 84420 32741",
  location: "KLJ NOIDA ONE, Noida, Uttar Pradesh - 201309, India",
  founder: {
    name: "Deepesh Mishra",
    title: "Founder, Datamarcos",
    bio: "Deepesh Mishra is a BITS Pilani alumnus, AI tool power user, corporate trainer, solution architect and technology expert with 18+ years of experience. He has trained 25,000+ professionals across 200+ corporate and academic clients.",
    image: "/images/deepesh-mishra-founder.jpeg",
    imageAlt: "Deepesh Mishra, Founder of Datamarcos",
    capabilities: [
      "BITS Pilani alumnus",
      "AI tool power user",
      "18+ years of experience",
      "Corporate trainer, solution architect and technology expert",
      "Trained 25,000+ professionals",
      "Worked with 200+ corporate and academic clients"
    ],
    workedWith: ["Deloitte", "EY", "Adobe", "Yahoo", "HSBC", "Boeing", "Reliance", "Micro Focus"],
    teaches: ["GenAI", "Data Engineering", "Azure", "AWS", "Snowflake", "Databricks", "Python", "Spark"],
    philosophy: [
      "Concepts made simple with real-world examples",
      "Hands-on learning with projects that matter",
      "Career-focused learning and mentoring",
      "Practical, relevant and impactful delivery"
    ]
  },
  legalEntityName: "Datamarcos",
  registeredAddress: "KLJ NOIDA ONE, Noida, Uttar Pradesh - 201309, India",
  clientLogosEnabled: false,
  clientLogos: [] as { name: string; image: string }[],
  stats: [
    { label: "Years of experience", value: "18+" },
    { label: "Professionals trained", value: "25,000+" },
    { label: "Corporate and academic clients", value: "200+" },
    { label: "Countries worldwide", value: "10+" }
  ],
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    x: process.env.NEXT_PUBLIC_X_URL,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/918442032741?text=Hi%20Datamarcos%2C%20I%20want%20to%20talk%20about%20training."
  }
};

export const env = {
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
  razorpayCheckoutUrl: process.env.NEXT_PUBLIC_RAZORPAY_CHECKOUT_URL,
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/918442032741?text=Hi%20Datamarcos%2C%20I%20want%20to%20talk%20about%20training.",
  corporateFormEndpoint: process.env.NEXT_PUBLIC_CORPORATE_FORM_ENDPOINT,
  leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT
};
