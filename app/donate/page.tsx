import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleCheck, HandHeart, HeartPulse, PawPrint, TreePine, UsersRound, Building2 } from "lucide-react";
import SubmissionForm from "@/components/SubmissionForm";

export const metadata: Metadata = {
  title: "Support our work",
  description: "Make a contribution to support the community work of Sahyog Vikas Foundation.",
};

const causes = [
  { icon: <BookOpen size={20} />, label: "Education", desc: "A brighter future for every child", img: "/images/Education — A brighter future for a child.png" },
  { icon: <HeartPulse size={20} />, label: "Healthcare", desc: "Hope and support for those in need", img: "/images/Healthcare — Hope and support.png" },
  { icon: <CircleCheck size={20} />, label: "Child Welfare", desc: "Protecting and empowering children", img: "/images/Child Welfare — Protecting.png" },
  { icon: <UsersRound size={20} />, label: "Community", desc: "Supporting families and communities", img: "/images/Community Welfare — Supporting families.png" },
  { icon: <PawPrint size={20} />, label: "Animal Welfare", desc: "Compassion for all living beings", img: "/images/Animal Welfare — Compassion.png" },
  { icon: <TreePine size={20} />, label: "Environment", desc: "Preserving our planet for tomorrow", img: "/images/Environmental Protection — Preserving.png" },
];

export default function DonatePage() {
  return (
    <div className="donate-page">

      {/* ── Hero ── */}
      <section className="donate-hero">
        <div className="donate-hero-bg" />
        <div className="page-shell donate-hero-inner">
          <span className="eyebrow eyebrow-light"><span className="label-line" /> MAKE A DIFFERENCE TODAY</span>
          <h1>Your kindness can<br /><em>change a life.</em></h1>
          <p>Every rupee you give goes directly to communities that need it most — education, healthcare, welfare and a sustainable future.</p>
          <div className="donate-hero-stats">
            <div><strong>6</strong><span>Causes supported</span></div>
            <div><strong>100%</strong><span>Goes to programs</span></div>
            <div><strong>₹1</strong><span>Can start a change</span></div>
          </div>
        </div>
      </section>

      {/* ── Causes strip ── */}
      <section className="donate-causes-section">
        <div className="page-shell">
          <p className="donate-causes-label">YOUR CONTRIBUTION SUPPORTS</p>
          <div className="donate-causes-grid">
            {causes.map((c) => (
              <div className="donate-cause-card" key={c.label}>
                <div className="donate-cause-img-wrap">
                  <img src={c.img} alt={c.label} />
                </div>
                <div className="donate-cause-body">
                  <span className="donate-cause-icon">{c.icon}</span>
                  <strong>{c.label}</strong>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Bank ── */}
      <section className="donate-form-section section-pad">
        <div className="page-shell donate-form-grid">

          {/* Left — trust copy */}
          <div className="donate-trust">
            <span className="eyebrow"><span className="label-line" /> WHY GIVE WITH US</span>
            <h2>Every act of<br />kindness <em>matters.</em></h2>
            <p>At Sahyog Vikas Foundation, we believe lasting change grows when communities have the support, opportunity and space to shape their own future.</p>
            <div className="donate-trust-points">
              <div><span className="donate-trust-dot" /><span>Registered non-profit — CIN U85500DL2022NPL404054</span></div>
              <div><span className="donate-trust-dot" /><span>100% of contributions go to programs</span></div>
              <div><span className="donate-trust-dot" /><span>Transparent reporting when verified</span></div>
              <div><span className="donate-trust-dot" /><span>No payment taken — pledge only</span></div>
            </div>
            <div className="donate-note">
              <HandHeart size={20} />
              <p>A small contribution from you can become a life-changing opportunity for someone in need.</p>
            </div>
          </div>

          {/* Right — form card */}
          <div className="donate-card-wrap">
            <div className="donate-form-card">
              <div className="donate-form-card-header">
                <span className="donate-form-card-icon"><HandHeart size={22} /></span>
                <div>
                  <h3>Make a contribution</h3>
                  <p>Fill in your details and we'll be in touch.</p>
                </div>
              </div>
              <SubmissionForm kind="donation" />
            </div>

            {/* Bank transfer */}
            <div className="donate-bank-card">
              <div className="donate-bank-header">
                <Building2 size={18} />
                <span>Or donate via bank transfer</span>
              </div>
              <div className="donate-bank-rows">
                <div><span>Bank</span><span>Yes Bank</span></div>
                <div><span>Account Name</span><span>Sahyog Vikas Foundation</span></div>
                <div><span>Account Type</span><span>Current Account</span></div>
                <div><span>Account No.</span><strong>023263300005457</strong></div>
                <div><span>IFSC Code</span><strong>YESB0000232</strong></div>
              </div>
              <p className="donate-bank-note">
                After transferring, email <a href="mailto:Sahyogvikasfoundation@gmail.com">Sahyogvikasfoundation@gmail.com</a> with your name and transaction reference.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Bottom bar ── */}
      <div className="donate-bottom-bar">
        <div className="page-shell donate-bottom-bar-inner">
          <UsersRound size={16} />
          <span>Want to volunteer or partner with us instead?</span>
          <Link href="/get-involved">Get involved <ArrowRight size={14} /></Link>
        </div>
      </div>

    </div>
  );
}
