import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, HandHeart, Megaphone, Share2, UsersRound } from "lucide-react";
import SubmissionForm from "@/components/SubmissionForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer, partner or spread the word — find your way to support Sahyog Vikas Foundation.",
};

const ways = [
  {
    number: "01",
    icon: <HandHeart size={24} />,
    title: "Volunteer",
    text: "Give your time and skills to support our programs on the ground. Whether it's teaching, organising, outreach or logistics — every hour counts.",
    cta: "Express interest below",
  },
  {
    number: "02",
    icon: <BriefcaseBusiness size={24} />,
    title: "Partner with us",
    text: "Bring your organisation's resources, expertise or network to create lasting impact together. We welcome partnerships built on shared values.",
    cta: "Start a conversation",
  },
  {
    number: "03",
    icon: <Share2 size={24} />,
    title: "Spread the word",
    text: "Share our mission with your network. Awareness is powerful — the more people know about our work, the more lives we can reach.",
    cta: "Tell someone today",
  },
  {
    number: "04",
    icon: <Megaphone size={24} />,
    title: "Fundraise for us",
    text: "Organise a fundraiser, run a campaign or collect donations from your community. Every rupee raised goes directly to our programs.",
    cta: "Get in touch to start",
  },
  {
    number: "05",
    icon: <UsersRound size={24} />,
    title: "In-kind support",
    text: "Donate goods, materials, equipment or services that directly support our communities — food, stationery, clothing, medical supplies and more.",
    cta: "Let us know what you have",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="inner-hero section-pad" style={{ background: "var(--color-primary)" }}>
        <div className="page-shell inner-hero-grid">
          <div className="inner-hero-copy" style={{ color: "white" }}>
            <span className="eyebrow eyebrow-light"><span className="label-line" /> GET INVOLVED</span>
            <h1 style={{ color: "white" }}>There&apos;s a place<br /><em style={{ color: "var(--color-blush)" }}>for you here.</em></h1>
            <p style={{ color: "rgba(255,255,255,0.78)" }}>Every person has something to give — time, skills, resources or simply a caring heart. Find your way to be part of the change we are building together.</p>
            <div className="inner-hero-actions">
              <Link className="button button-lime" href="/donate">Make a donation <ArrowUpRight size={16} /></Link>
              <Link className="text-link" style={{ color: "var(--color-blush)" }} href="#get-involved-form">Volunteer now <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="inner-hero-visual">
            <div className="inner-hero-image getinvolved-hero-image" role="img" aria-label="Volunteers working together; illustrative photograph" />
          </div>
        </div>
      </section>

      <section className="inner-impact section-pad" style={{ background: "var(--paper)" }}>
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WAYS TO HELP</span>
              <h2>Find your way<br /><em>to make a difference.</em></h2>
            </div>
            <p>You don't need to do everything — just one thing, done with care, can change a life.</p>
          </div>
          <div className="ways-grid">
            {ways.map((way) => (
              <article className="way-card" key={way.number}>
                <div className="way-card-top">
                  <span className="way-number">{way.number}</span>
                  <span className="way-icon">{way.icon}</span>
                </div>
                <h3>{way.title}</h3>
                <p>{way.text}</p>
                <span className="way-cta">{way.cta} <ArrowRight size={13} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-form-section section-pad" id="get-involved-form" style={{ background: "var(--cream)" }}>
        <div className="page-shell contact-grid">
          <div className="contact-copy">
            <span className="eyebrow"><span className="label-line" /> REACH OUT</span>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px,4.7vw,58px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.025em", margin: "17px 0 0" }}>
              Tell us how<br /><em>you want to help.</em>
            </h2>
            <p style={{ marginTop: "17px", color: "var(--muted)", fontSize: "14px", lineHeight: 1.9 }}>Fill in the form and our team will get back to you about the best way to get involved. No commitment needed — just a conversation.</p>
            <div className="contact-details" style={{ marginTop: "30px" }}>
              <div>
                <span className="contact-detail-icon"><HandHeart size={19} /></span>
                <span><b>Volunteer or partner</b><small>Tell us what you have in mind.</small></span>
              </div>
              <div>
                <span className="contact-detail-icon"><UsersRound size={19} /></span>
                <span><b>All are welcome</b><small>Students, professionals, organisations.</small></span>
              </div>
            </div>
          </div>
          <div className="contact-form-card">
            <div className="form-card-heading"><span>YOUR MESSAGE</span><span className="form-card-icon"><ArrowUpRight size={16} /></span></div>
            <SubmissionForm kind="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
