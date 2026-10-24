import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, HeartPulse, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "Our programs",
  description: "Explore the education, wellbeing and livelihood priorities of Sahyog Vikas Foundation.",
};

const programs = [
  {
    id: "01",
    title: "Learning & youth",
    subtitle: "Room to discover. Support to grow.",
    text: "We want every child and young person to have the encouragement, resources and safe spaces they need to learn with confidence and imagine new possibilities.",
    actions: ["Learning support and enrichment", "Youth skills and confidence", "Welcoming, inclusive spaces"],
    icon: <BookOpenCheck size={27} />,
    tone: "program-green",
    href: "/education",
  },
  {
    id: "02",
    title: "Community wellbeing",
    subtitle: "Care, connection and dignity.",
    text: "Healthier communities grow when people can find information, support one another and connect with essential services in ways that respect their needs.",
    actions: ["Health awareness and outreach", "Community care and connection", "Support for dignity and inclusion"],
    icon: <HeartPulse size={27} />,
    tone: "program-peach",
    href: "/wellbeing",
  },
  {
    id: "03",
    title: "Skills & livelihoods",
    subtitle: "Opportunity shaped from within.",
    text: "We support the building blocks of sustainable livelihoods: practical skills, local networks and pathways that help people make their own choices.",
    actions: ["Skills and capacity building", "Local opportunity and enterprise", "Resilience for the future"],
    icon: <Sprout size={27} />,
    tone: "program-sand",
    href: "/livelihoods",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="programs-header section-pad">
        <div className="page-shell">
          <span className="eyebrow"><span className="label-line" /> WHAT WE DO</span>
          <h1>Rooted in what<br />people <em>need most.</em></h1>
          <div className="programs-header-bottom">
            <p>Our work takes its shape from community voices. These focus areas are a starting point for partnership—not a one-size-fits-all answer.</p>
            <span className="hand-note">People first, always <ArrowRight size={16} /></span>
          </div>
        </div>
      </section>
      <section className="program-list page-shell">
        {programs.map((program) => (
          <article className={`program-row ${program.tone}`} id={`program-${program.id}`} key={program.id}>
            <div className="program-row-number">{program.id}</div>
            <div className="program-row-main">
              <div className="program-icon">{program.icon}</div>
              <span className="eyebrow">{program.subtitle}</span>
              <h2>{program.title}</h2>
              <p>{program.text}</p>
              <ul>{program.actions.map((action) => <li key={action}>{action}</li>)}</ul>
              <Link className="text-link" href={program.href} style={{marginTop:"18px", display:"inline-flex"}}>Explore this area <ArrowRight size={15} /></Link>
            </div>
            <div className="program-row-image" role="img" aria-label={`${program.title} community program`} />
          </article>
        ))}
      </section>
      <section className="programs-note section-pad">
        <div className="page-shell programs-note-inner">
          <p>Our work grows through conversation. If you&apos;re part of a community or organization with a shared purpose, we&apos;d be glad to listen.</p>
          <Link className="button button-dark" href="/get-involved">Get involved <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
