import Link from "next/link";
import { ArrowUpRight, MapPin, MoveUpRight } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">
              SAHYOG <b>VIKAS</b>
              <small>FOUNDATION</small>
            </span>
          </Link>
          <p>Building a future where every community has the support to thrive.</p>
          <div className="footer-reg">
            <span>CIN: U85500DL2022NPL404054</span>
          </div>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/about">Our story</Link>
          <Link href="/programs">What we do</Link>
          <Link href="/education">Education & learning</Link>
          <Link href="/wellbeing">Community wellbeing</Link>
          <Link href="/livelihoods">Skills & livelihoods</Link>
          <Link href="/get-involved">Get involved</Link>
          <Link href="/donate">Make a contribution</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div className="footer-column">
          <h3>Say hello</h3>
          <p>Questions, ideas or a partnership in mind? We would love to hear from you.</p>
          <a className="footer-email" href="mailto:Sahyogvikasfoundation@gmail.com">
            Sahyogvikasfoundation@gmail.com <ArrowUpRight size={13} />
          </a>
          <div className="footer-address">
            <MapPin size={12} />
            <span>J-2-B-31/6, G/F Sangam Vihar,<br />South Delhi – 110062, Delhi, India</span>
          </div>
        </div>
        <div className="footer-cta">
          <span className="eyebrow eyebrow-light">A better tomorrow starts together</span>
          <h3>Be part of<br />something good.</h3>
          <Link className="footer-cta-link" href="/donate">
            Find your way to help <MoveUpRight size={17} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sahyog Vikas Foundation · CIN: U85500DL2022NPL404054</span>
        <div className="footer-legal-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <span>Made with care, for people and place.</span>
      </div>
    </footer>
  );
}
