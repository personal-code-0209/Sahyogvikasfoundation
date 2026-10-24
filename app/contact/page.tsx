import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, HandHeart, MapPin } from "lucide-react";
import SubmissionForm from "@/components/SubmissionForm";

export const metadata: Metadata = {
  title: "Get in touch",
  description: "Contact Sahyog Vikas Foundation about volunteering, partnerships or community support.",
};

export default function ContactPage() {
  return (
    <section className="contact-page section-pad">
      <div className="page-shell contact-grid">
        <div className="contact-copy">
          <span className="eyebrow"><span className="label-line" /> LET&apos;S CONNECT</span>
          <h1>Every good thing<br />starts with <em>a hello.</em></h1>
          <p>Have an idea, a question, or a little time to share? Tell us what brings you here—we&apos;re listening.</p>
          <div className="contact-details">
            <div>
              <span className="contact-detail-icon"><HandHeart size={19} /></span>
              <span>
                <b>Volunteer or partner</b>
                <small><Link href="/get-involved" style={{color:"var(--forest)",fontWeight:600}}>See all ways to get involved →</Link></small>
              </span>
            </div>
            <div>
              <span className="contact-detail-icon"><MapPin size={19} /></span>
              <span><b>Where we work</b><small>J-2-B-31/6, Sangam Vihar, South Delhi – 110062</small></span>
            </div>
            <div>
              <span className="contact-detail-icon"><Clock3 size={19} /></span>
              <span><b>We&apos;ll be in touch</b><small>Our team replies as soon as possible.</small></span>
            </div>
          </div>
          <p className="contact-email-note">
            Prefer email? Write to us at{" "}
            <a href="mailto:Sahyogvikasfoundation@gmail.com" style={{color:"var(--forest)",fontWeight:600}}>
              Sahyogvikasfoundation@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-form-card">
          <div className="form-card-heading"><span>YOUR NOTE</span><span className="form-card-icon"><ArrowUpRight size={16} /></span></div>
          <SubmissionForm kind="contact" />
        </div>
      </div>
    </section>
  );
}
