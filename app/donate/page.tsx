import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleCheck, HandHeart, HeartPulse, Leaf, PawPrint, TreePine, UsersRound } from "lucide-react";
import SubmissionForm from "@/components/SubmissionForm";

export const metadata: Metadata = {
  title: "Support our work",
  description: "Make a contribution to support the community work of Sahyog Vikas Foundation.",
};

export default function DonatePage() {
  return (
    <section className="donate-page section-pad">
      <div className="page-shell donate-grid">
        <div className="donate-copy">
          <span className="eyebrow"><span className="label-line" /> TOGETHER, WE CAN CREATE A BETTER TOMORROW</span>
          <h1>Your kindness can<br /><em>change a life.</em></h1>
          <p>Creating Opportunities • Supporting Communities • Protecting Lives • Building a Better Future</p>
          <p style={{marginTop: "10px"}}>At Sahyog Vikas Foundation, we believe that every act of kindness has the power to transform a life. We are committed to creating meaningful change by working for Education, Healthcare, Child Welfare, Community Welfare, Animal Welfare, Environmental Protection and the well-being of underprivileged communities.</p>
          <div className="donate-promises">
            <div><BookOpen size={18} /><span>Education — A brighter future for a child</span></div>
            <div><HeartPulse size={18} /><span>Healthcare — Hope and support for those in need</span></div>
            <div><CircleCheck size={18} /><span>Child Welfare — Protecting and empowering vulnerable children</span></div>
            <div><UsersRound size={18} /><span>Community Welfare — Supporting families and communities</span></div>
            <div><PawPrint size={18} /><span>Animal Welfare — Compassion for all living beings</span></div>
            <div><TreePine size={18} /><span>Environmental Protection — Preserving our planet</span></div>
          </div>
          <div className="donate-note"><HandHeart size={22} /><p>A small contribution from you can become a life-changing opportunity for someone in need. Every act of kindness matters.</p></div>
        </div>
        <div className="donation-card">
          <div className="donation-card-heading">
            <div><span className="eyebrow">MAKE A CONTRIBUTION</span><h2>Choose how you'd like to help.</h2></div>
            <span className="donation-leaf"><Leaf size={21} /></span>
          </div>
          <SubmissionForm kind="donation" />

          <div className="bank-transfer-section">
            <div className="bank-transfer-divider">
              <span>OR DONATE VIA BANK TRANSFER</span>
            </div>
            <div className="bank-details">
              <div className="bank-detail-row">
                <span className="bank-detail-label">Bank</span>
                <span className="bank-detail-value">Yes Bank</span>
              </div>
              <div className="bank-detail-row">
                <span className="bank-detail-label">Account Name</span>
                <span className="bank-detail-value">Sahyog Vikas Foundation</span>
              </div>
              <div className="bank-detail-row">
                <span className="bank-detail-label">Account Type</span>
                <span className="bank-detail-value">Current Account</span>
              </div>
              <div className="bank-detail-row">
                <span className="bank-detail-label">Account No.</span>
                <span className="bank-detail-value bank-detail-mono">023263300005457</span>
              </div>
              <div className="bank-detail-row">
                <span className="bank-detail-label">IFSC Code</span>
                <span className="bank-detail-value bank-detail-mono">YESB0000232</span>
              </div>
            </div>
            <p className="bank-transfer-note">
              After transferring, please email us at{" "}
              <a href="mailto:Sahyogvikasfoundation@gmail.com">Sahyogvikasfoundation@gmail.com</a>{" "}
              with your name and transaction reference.
            </p>
          </div>
        </div>
      </div>
      <div className="page-shell donate-bottom">
        <UsersRound size={18} /><span>Interested in volunteering or a partnership instead?</span><Link href="/get-involved">Get involved <ArrowRight size={15} /></Link>
      </div>
    </section>
  );
}
