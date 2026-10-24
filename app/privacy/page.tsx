import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Sahyog Vikas Foundation handles information sent through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="privacy-page section-pad">
      <div className="privacy-content">
        <span className="eyebrow"><span className="label-line" /> YOUR INFORMATION</span>
        <h1>Your trust matters.<br /><em>So does your privacy.</em></h1>
        <p className="privacy-intro">This notice explains what information this website collects when you contact us or submit a donation pledge, and how it is used.</p>
        <article>
          <h2>What we collect</h2>
          <p>When you send a message, we collect your name, email address, optional phone number, enquiry topic and message. A donation pledge also includes the amount and frequency you choose, plus any optional note.</p>
        </article>
        <article>
          <h2>How we use it</h2>
          <p>We use these details to respond to your enquiry, follow up about your pledge and coordinate related support. We do not use this form to take payment, and you should not include card, bank-account or other financial credentials in a message.</p>
        </article>
        <article>
          <h2>Storage and sharing</h2>
          <p>Submissions are stored in the website’s configured database and are accessible to authorized foundation administrators. The foundation should retain them only as long as needed to respond, manage the relationship and meet applicable obligations. Hosting and database providers may process data to operate the website.</p>
        </article>
        <article>
          <h2>Your choices</h2>
          <p>You can ask us to access, correct or delete information you submitted, subject to applicable record-keeping obligations. Use the <Link href="/contact">contact form</Link> and mention “Privacy request” in your message.</p>
        </article>
        <p className="privacy-review-note">Before launch, the foundation should review this notice, identify its hosting and database providers, and add any required registration, grievance and contact details.</p>
      </div>
    </section>
  );
}
