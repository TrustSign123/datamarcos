import Link from "next/link";

export default function ProgramNotFound() {
  return (
    <section className="hero-simple">
      <div className="container">
        <p className="eyebrow">Program not found</p>
        <h1 className="section-title">This Datamarcos program is not available.</h1>
        <p className="section-copy">Explore the program catalog or return home to continue browsing technology learning paths.</p>
        <div className="hero-actions">
          <Link className="button primary" href="/programs">Explore All Programs</Link>
          <Link className="button secondary" href="/">Return Home</Link>
        </div>
      </div>
    </section>
  );
}
