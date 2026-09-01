export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  quote: string;
  videoUrl: string;
  thumbnailUrl: string;
  type: "youtube" | "vimeo" | "mp4";
};

export const testimonials: Testimonial[] = [
  {
    id: "video-placeholder",
    name: "Verified testimonial",
    role: "Role to be added",
    company: "Company to be added",
    country: "Country to be added",
    quote: "Real Datamarcos learner and client testimonials will be added after verification.",
    videoUrl: "",
    thumbnailUrl: "",
    type: "youtube"
  }
];
