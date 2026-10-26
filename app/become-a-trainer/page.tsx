import { pageMetadata } from "@/lib/seo";
import { TrainerApplicationForm } from "@/components/Forms";

export const metadata = pageMetadata({
  path: "/become-a-trainer",
  title: "Become a Datamarcos Trainer | Join Our Technology Expert Network",
  description: "Experienced technology professional? Apply to join the Datamarcos trainer network by sharing your expertise, role, availability and delivery preferences."
});

export default function BecomeTrainerPage() {
  return (
    <>
      <section className="hero-simple"><div className="container"><p className="eyebrow">Trainer network</p><h1 className="section-title">Become a Datamarcos Expert.</h1><p className="section-copy">Join a network of experienced technology professionals and subject matter experts matched to serious learning requirements.</p></div></section>
      <section className="section"><div className="container grid two"><div><h2>Experts Who Know the Work.</h2><p className="section-copy">Submit your expertise, role, availability and delivery preferences. Backend submission can be connected later.</p></div><TrainerApplicationForm /></div></section>
    </>
  );
}
