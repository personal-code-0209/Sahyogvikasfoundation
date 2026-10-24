import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CircleCheck,
  HandHeart,
  HeartPulse,
  Leaf,
  Sprout,
  UsersRound,
} from "lucide-react";

const focusAreas = [
  {
    title: "Education & learning",
    text: "Opening up welcoming spaces where children and young people can learn, build skills and imagine what comes next.",
    image: "focus-learning",
    icon: <BookOpenCheck size={20} />,
    href: "/education",
  },
  {
    title: "Health & wellbeing",
    text: "Supporting healthier, more connected communities through awareness, care and access to essential resources.",
    image: "focus-wellbeing",
    icon: <HeartPulse size={20} />,
    href: "/wellbeing",
  },
  {
    title: "Skills & livelihoods",
    text: "Working alongside people to strengthen practical skills and locally shaped livelihood opportunities.",
    image: "focus-livelihoods",
    icon: <Sprout size={20} />,
    href: "/livelihoods",
  },
];

const projectFocus = [
  {
    number: "01",
    category: "Education & learning",
    title: "Learning, shaped around learners",
    text: "Learning support is one of the areas Sahyog Vikas Foundation aims to explore with communities. Specific locations, activities and results will be shared when verified.",
    image: "project-learning",
    href: "/education",
  },
  {
    number: "02",
    category: "Health & wellbeing",
    title: "Care that starts with listening",
    text: "Community wellbeing begins by understanding what people need. Confirmed project activities and outcomes will be published here as the foundation reports them.",
    image: "project-wellbeing",
    href: "/wellbeing",
  },
  {
    number: "03",
    category: "Skills & livelihoods",
    title: "Local skills, future possibilities",
    text: "The foundation's livelihood focus puts local knowledge first. Project details and measurable results are not yet available for publication.",
    image: "project-livelihoods",
    href: "/livelihoods",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-layout page-shell">
          <div className="hero-content">
            <span className="eyebrow"><span /> A foundation for shared futures</span>
            <h1>Stronger communities.<br /><em>Brighter futures.</em></h1>
            <p>We believe lasting change grows when communities have the support, opportunity and space to shape their own future.</p>
            <div className="hero-actions">
              <Link className="button button-lime" href="/donate">Support our work <ArrowUpRight size={16} /></Link>
              <Link className="text-link text-link-light" href="#our-work">Explore our impact <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image" role="img" aria-label="Community members together outdoors; illustrative photograph" />
            <div className="hero-stamp"><Sprout size={19} /><span>People first.<br />Progress together.</span></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="commitments-heading" className="trust-section">
        <div className="page-shell trust-inner">
          <div className="trust-heading">
            <span className="eyebrow">OUR COMMITMENT</span>
            <h2 id="commitments-heading">The way we work<br /><em>matters.</em></h2>
          </div>
          <div className="trust-item">
            <UsersRound size={22} />
            <h3>People first</h3>
            <p>Listen to lived experience and community priorities.</p>
          </div>
          <div className="trust-item">
            <HeartPulse size={22} />
            <h3>Locally led</h3>
            <p>Build with people, not simply for them.</p>
          </div>
          <div className="trust-item">
            <CircleCheck size={22} />
            <h3>Accountable</h3>
            <p>Share verified progress when it is ready to report.</p>
          </div>
          <p className="trust-disclosure">Verified reach figures and annual results will be published here once confirmed by the foundation.</p>
        </div>
      </section>

      <section className="about-home section-pad" id="about-foundation">
        <div className="page-shell about-home-grid">
          <div className="about-home-photo" role="img" aria-label="People sharing a moment outdoors; illustrative photograph" />
          <div className="about-home-copy">
            <span className="eyebrow"><span className="label-line" /> ABOUT THE FOUNDATION</span>
            <h2>Progress begins<br />with <em>people.</em></h2>
            <p>Sahyog Vikas Foundation is built around a simple belief: lasting progress grows through listening, partnership and care. We want to work alongside communities as they identify priorities and shape the change they want to see.</p>
            <div className="mission-vision">
              <article>
                <span>OUR MISSION</span>
                <p>To work in partnership with communities to support opportunity, wellbeing and dignity.</p>
              </article>
              <article>
                <span>OUR VISION</span>
                <p>A future where every person has room and support to thrive.</p>
              </article>
            </div>
            <Link className="button button-dark" href="/about">Know our story <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="our-work">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR FOCUS AREAS</span>
              <h2>Support that starts<br /><em>with listening.</em></h2>
            </div>
            <p>These focus areas are a starting point for conversation—not a substitute for community priorities or verified program details.</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map((item) => (
              <article className={`focus-card ${item.image}`} key={item.title}>
                <div className="focus-card-image" role="img" aria-label={`${item.title}; illustrative photograph`} />
                <div className="focus-card-content">
                  <div className="focus-card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href}>Explore initiative <ArrowRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section-pad">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR WORK IN ACTION</span>
              <h2>Community priorities.<br /><em>Shared progress.</em></h2>
            </div>
            <p>We're preparing this space for verified project locations, activities and results. The cards below introduce our focus areas; they are not claims of completed projects or outcomes.</p>
          </div>
          <div className="project-grid">
            {projectFocus.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-card-image ${project.image}`} role="img" aria-label={`${project.category}; illustrative photograph`} />
                <div className="project-card-content">
                  <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <Link className="project-status" href={project.href}>Learn more <ArrowRight size={12} /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="project-footnote">
            <span>Real communities deserve accurate reporting. No locations or impact figures are published here until verified.</span>
            <Link className="quiet-link" href="/programs">View all programs <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="stories-section section-pad">
        <div className="page-shell stories-grid">
          <div className="stories-photo" role="img" aria-label="Community members together; illustrative photograph" />
          <div className="stories-copy">
            <span className="eyebrow">STORIES OF CHANGE</span>
            <span className="stories-mark" aria-hidden="true">"</span>
            <h2>Every story belongs<br />to <em>the person who lived it.</em></h2>
            <p>We're making space for community members, volunteers and partners to share their experiences in their own words—with their informed permission. No personal stories or quotes are published until they have been verified and approved.</p>
            <span className="stories-note">Consent first. Community voice always.</span>
            <Link className="text-link" href="/contact">Share a story with us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="get-involved-section section-pad">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow eyebrow-light">HOW YOU CAN HELP</span>
              <h2>There&apos;s a place<br />for <em>you here.</em></h2>
            </div>
            <p>Give in a way that feels right to you. Start a conversation and we'll help you explore the next step.</p>
          </div>
          <div className="help-grid">
            <article>
              <span className="help-icon"><HandHeart size={23} /></span>
              <span className="eyebrow eyebrow-light">01 · CONTRIBUTE</span>
              <h3>Donate</h3>
              <p>Make a contribution to support community-led work. Every rupee goes directly to our programs.</p>
              <Link href="/donate">Support our work <ArrowUpRight size={16} /></Link>
            </article>
            <article>
              <span className="help-icon"><UsersRound size={23} /></span>
              <span className="eyebrow eyebrow-light">02 · SHOW UP</span>
              <h3>Volunteer</h3>
              <p>Share your time, experience or skills. Tell us what you're interested in.</p>
              <Link href="/get-involved">Explore volunteering <ArrowUpRight size={16} /></Link>
            </article>
            <article>
              <span className="help-icon"><BriefcaseBusiness size={23} /></span>
              <span className="eyebrow eyebrow-light">03 · COLLABORATE</span>
              <h3>Partner with us</h3>
              <p>Bring people and ideas together around a shared purpose.</p>
              <Link href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="updates-section section-pad">
        <div className="page-shell updates-grid">
          <div className="updates-copy">
            <span className="eyebrow">LATEST UPDATES & EVENTS</span>
            <h2>Good work deserves<br />to be <em>shared.</em></h2>
            <p>Field visits, events and milestones will appear here when the foundation has confirmed details ready to share.</p>
            <Link className="button button-dark" href="/contact">Ask us for an update <ArrowRight size={16} /></Link>
          </div>
          <div className="updates-empty">
            <span className="updates-empty-icon"><Leaf size={23} /></span>
            <span className="eyebrow">THE NEWSROOM IS GROWING</span>
            <h3>No verified updates published yet.</h3>
            <p>We'd rather share a real update when it's ready than fill this space with unverified activity. Check back soon or get in touch.</p>
            <Link className="quiet-link" href="/contact">Contact the foundation <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="transparency-section section-pad" id="transparency">
        <div className="page-shell transparency-grid">
          <div className="transparency-copy">
            <span className="eyebrow eyebrow-light">TRANSPARENCY & ACCOUNTABILITY</span>
            <h2>Trust is built<br />with <em>openness.</em></h2>
            <p>We're preparing a public resource library for verified registration details, annual reports, audited accounts and applicable certificates. No documents are linked until the foundation confirms and approves them for publication.</p>
            <span className="reports-coming"><CircleCheck size={17} /> Verified documents will be added here when available.</span>
          </div>
          <div className="reports-list">
            <div><span>01</span><span>Registration information</span><span>To be published</span></div>
            <div><span>02</span><span>Annual reports</span><span>To be published</span></div>
            <div><span>03</span><span>Audited financial statements</span><span>To be published</span></div>
            <div><span>04</span><span>Applicable tax certificates</span><span>To be published</span></div>
          </div>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="page-shell final-cta-inner">
          <span className="eyebrow">SMALL ACTS. SHARED FUTURES.</span>
          <h2>A better tomorrow begins<br />with what we do <em>today.</em></h2>
          <p>Give your time, share an idea, explore a partnership or make a contribution. Every good thing begins with showing up.</p>
          <Link className="button button-dark" href="/get-involved">Be part of the change <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
