import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Briefcase, HandCoins, Hammer, Sprout, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills & Livelihoods",
  description: "How Sahyog Vikas Foundation supports skills development and livelihood opportunities for underprivileged communities.",
};

const initiatives = [
  {
    icon: <Hammer size={22} />,
    title: "Vocational Training",
    text: "Practical, hands-on skills training that equips people with tools to earn a sustainable livelihood.",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Employment Support",
    text: "Connecting trained individuals with employment opportunities and local enterprises.",
  },
  {
    icon: <HandCoins size={22} />,
    title: "Micro-Enterprise",
    text: "Supporting small business ideas and self-employment pathways rooted in local knowledge and need.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Financial Literacy",
    text: "Building confidence around savings, budgeting and financial planning for long-term resilience.",
  },
  {
    icon: <Sprout size={22} />,
    title: "Women's Empowerment",
    text: "Prioritising skills and livelihood opportunities for women to foster independence and dignity.",
  },
  {
    icon: <Users size={22} />,
    title: "Community Networks",
    text: "Building local networks and peer support systems that sustain livelihoods beyond our programs.",
  },
];

export default function LivelihoodsPage() {
  return (
    <>
      <section className="inner-hero section-pad" style={{ background: "var(--color-surface-warm)" }}>
        <div className="page-shell inner-hero-grid">
          <div className="inner-hero-copy">
            <span className="eyebrow"><span className="label-line" /> SKILLS & LIVELIHOODS</span>
            <h1>Local skills,<br /><em>future possibilities.</em></h1>
            <p>We support the building blocks of sustainable livelihoods — practical skills, local networks and pathways that help people make their own choices and build a future on their own terms.</p>
            <div className="inner-hero-actions">
              <Link className="button button-dark" href="/donate">Support this cause <ArrowUpRight size={16} /></Link>
              <Link className="text-link" href="/contact">Get involved <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="inner-hero-visual">
            <div className="inner-hero-image livelihoods-hero-image" role="img" aria-label="Community skills training; illustrative photograph" />
          </div>
        </div>
      </section>

      <section className="inner-impact section-pad" style={{ background: "var(--paper)" }}>
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR KINDNESS CAN BECOME</span>
              <h2>Skills that open<br /><em>doors for life.</em></h2>
            </div>
            <p>When someone gains a skill, they gain independence. Your support makes that possible.</p>
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
          <blockquote>A skill is more than a means to earn — it is a source of dignity, independence and hope for the future.</blockquote>
          <span className="inner-quote-note">Sahyog Vikas Foundation · Skills & Livelihoods Focus</span>
        </div>
      </section>

      <section className="inner-cta section-pad" style={{ background: "var(--color-blush)" }}>
        <div className="page-shell inner-cta-inner">
          <div>
            <span className="eyebrow">BE PART OF THE CHANGE</span>
            <h2>Help someone build<br /><em>their own future.</em></h2>
            <p>Your support funds training, tools and opportunities that transform lives from the ground up.</p>
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
