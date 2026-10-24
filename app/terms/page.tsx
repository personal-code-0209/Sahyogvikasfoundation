import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms for using the Sahyog Vikas Foundation website.",
};

export default function TermsPage() {
  return (
    <section className="privacy-page section-pad">
      <div className="privacy-content">
        <span className="eyebrow"><span className="label-line" /> USING THIS WEBSITE</span>
        <h1>Clear, respectful<br /><em>terms of use.</em></h1>
        <p className="privacy-intro">These draft terms describe the intended use of the Sahyog Vikas Foundation website. The foundation should review them and add its verified legal details before launch.</p>
        <article>
          <h2>Website information</h2>
          <p>Website content is provided for general information about the foundation and its areas of work. Program descriptions, sample photographs and draft copy should not be treated as evidence of completed activities, measured outcomes or current service availability.</p>
        </article>
        <article>
          <h2>Contact and donation forms</h2>
          <p>Sending a contact form submits an enquiry for follow-up. Sending the donation form records a pledge only: it does not take a payment, make a tax-deductible receipt or confirm a donation. Do not include bank, card or other financial credentials in a form submission.</p>
        </article>
        <article>
          <h2>Using website content</h2>
          <p>Please do not misuse this website, interfere with its operation, submit unlawful or harmful content, or present its information in a misleading way. Names, marks, text and photographs may not be reused without permission from the relevant rights holder.</p>
        </article>
        <article>
          <h2>Third-party services</h2>
          <p>Some photographs, fonts or other resources may be delivered by third-party services. Those services may have their own terms and privacy practices. The foundation should document the providers it uses before publication.</p>
        </article>
        <article>
          <h2>Questions</h2>
          <p>For a question about these terms, please <Link href="/contact">contact the foundation</Link>.</p>
        </article>
        <p className="privacy-review-note">This is a starter notice, not legal advice. Have it reviewed for the foundation’s jurisdiction, registration, services and applicable regulations before launch.</p>
      </div>
    </section>
  );
}
