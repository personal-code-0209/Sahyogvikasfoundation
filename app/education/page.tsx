import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, BookOpenCheck, GraduationCap, Lightbulb, Pencil, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Learning",
  description: "How Sahyog Vikas Foundation supports education and learning opportunities for children and youth.",
};

const initiatives = [
  {
    icon: <BookOpen size={22} />,
    title: "Learning Support",
    text: "Providing children with the resources, encouragement and safe spaces they need to learn with confidence.",
  },
  {
    icon: <Pencil size={22} />,
    title: "Literacy & Numeracy",
    text: "Foundational skills that open doors — helping every child build a strong base for lifelong learning.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Youth Skills",
    text: "Equipping young people with practical skills and confidence to imagine and pursue new possibilities.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Inclusive Spaces",
    text: "Creating welcoming environments where every child feels seen, valued and supported to grow.",
  },
  {
    icon: <Users size={22} />,
    title: "Community Learning",
    text: "Engaging families and communities as active partners in children's education and development.",
  },
  {
    icon: <BookOpenCheck size={22} />,
    title: "Enrichment Programs",
    text: "Going beyond the classroom — arts, sports, culture and curiosity-driven activities for young minds.",
  },
];

export default function EducationPage() {
  return (
    <>
      <section className="inner-hero section-pad" style={{ background: "var(--color-surface-warm)" }}>
        <div className="page-shell inner-hero-grid">
          <div className="inner-hero-copy">
            <span className="eyebrow"><span className="label-line" /> EDUCATION & LEARNING</span>
            <h1>A brighter future<br />for every <em>child.</em></h1>
            <p>We believe every child deserves the opportunity to learn, grow and imagine what comes next. Education is the foundation of everything — and we are committed to making it accessible, inclusive and meaningful for every young person we work with.</p>
            <div className="inner-hero-actions">
              <Link className="button button-dark" href="/donate">Support this cause <ArrowUpRight size={16} /></Link>
              <Link className="text-link" href="/contact">Get involved <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="inner-hero-visual">
            <div className="inner-hero-image education-hero-image" role="img" aria-label="Children learning together; illustrative photograph" />
          </div>
        </div>
      </section>

      <section className="inner-impact section-pad" style={{ background: "var(--paper)" }}>
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR KINDNESS CAN BECOME</span>
              <h2>Education — a brighter<br /><em>future for a child.</em></h2>
            </div>
            <p>A small contribution from you can open the door to a lifetime of opportunity for a child who needs it most.</p>
          </div>
          <div className="initiative-grid">
            {initiatives.map((item) => (
              <article className="initiative-card" key={item.title}>
                <span className="initiative-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-quote section-pad" style={{ background: "var(--color-primary)", color: "white" }}>
        <div className="page-shell inner-quote-inner">
          <span className="inner-quote-mark">"</span>
          <blockquote>When a child learns to read, a whole world opens up — not just for them, but for their family and community.</blockquote>
          <span className="inner-quote-note">Sahyog Vikas Foundation · Education Focus</span>
        </div>
      </section>

      <section className="inner-cta section-pad" style={{ background: "var(--color-blush)" }}>
        <div className="page-shell inner-cta-inner">
          <div>
            <span className="eyebrow">BE PART OF THE CHANGE</span>
            <h2>Help us build a<br /><em>learning future.</em></h2>
            <p>Whether you donate, volunteer your time or spread the word — every act of support helps a child take the next step.</p>
          </div>
          <div className="inner-cta-actions">
            <Link className="button button-dark" href="/donate">Make a contribution <ArrowUpRight size={16} /></Link>
            <Link className="button button-outline-dark" href="/get-involved">Volunteer with us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
