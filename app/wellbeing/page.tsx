import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Heart, HeartHandshake, HeartPulse, ShieldCheck, Stethoscope, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Wellbeing",
  description: "How Sahyog Vikas Foundation supports healthcare and community wellbeing across underprivileged communities.",
};

const initiatives = [
  {
    icon: <HeartPulse size={22} />,
    title: "Health Awareness",
    text: "Spreading awareness about preventive healthcare, hygiene and nutrition in underserved communities.",
  },
  {
    icon: <Stethoscope size={22} />,
    title: "Healthcare Access",
    text: "Connecting people with essential health services, check-ups and medical support they need.",
  },
  {
    icon: <Heart size={22} />,
    title: "Mental Wellbeing",
    text: "Recognising that wellbeing is more than physical — supporting emotional health and community connection.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Child Health",
    text: "Ensuring children receive the nutrition, vaccinations and care they need to grow up healthy.",
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Care & Support",
    text: "Standing alongside vulnerable individuals and families with compassion, dignity and practical help.",
  },
  {
    icon: <Users size={22} />,
    title: "Community Outreach",
    text: "Reaching the most marginalised through on-the-ground outreach, camps and awareness drives.",
  },
];

export default function WellbeingPage() {
  return (
    <>
      <section className="inner-hero section-pad" style={{ background: "var(--color-surface-warm)" }}>
        <div className="page-shell inner-hero-grid">
          <div className="inner-hero-copy">
            <span className="eyebrow"><span className="label-line" /> COMMUNITY WELLBEING</span>
            <h1>Hope and support<br />for those <em>in need.</em></h1>
            <p>Healthier communities grow when people can access care, find support and connect with essential services in ways that respect their needs and dignity. We are committed to making healthcare and wellbeing a reality for every person we serve.</p>
            <div className="inner-hero-actions">
              <Link className="button button-dark" href="/donate">Support this cause <ArrowUpRight size={16} /></Link>
              <Link className="text-link" href="/contact">Get involved <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="inner-hero-visual">
            <div className="inner-hero-image wellbeing-hero-image" role="img" aria-label="Community health outreach; illustrative photograph" />
          </div>
        </div>
      </section>

      <section className="inner-impact section-pad" style={{ background: "var(--paper)" }}>
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR KINDNESS CAN BECOME</span>
              <h2>Healthcare — hope for<br /><em>those in need.</em></h2>
            </div>
            <p>Your support helps us reach communities where healthcare is out of reach and hope is in short supply.</p>
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
          <blockquote>Good health is not a privilege — it is a right. We work to make that right a reality for every person, regardless of where they were born.</blockquote>
          <span className="inner-quote-note">Sahyog Vikas Foundation · Community Wellbeing Focus</span>
        </div>
      </section>

      <section className="inner-cta section-pad" style={{ background: "var(--color-blush)" }}>
        <div className="page-shell inner-cta-inner">
          <div>
            <span className="eyebrow">BE PART OF THE CHANGE</span>
            <h2>Help us bring care<br /><em>to every doorstep.</em></h2>
            <p>Your contribution — big or small — helps us reach more people with the healthcare and support they deserve.</p>
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
