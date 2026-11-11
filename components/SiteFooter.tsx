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
          <div className="social-links">
            <a href="https://www.instagram.com/sahyogvikasfoundation/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579513604944" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://x.com/SahyogVikas" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/sahyog-vikas-foundation-3971b540a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.youtube.com/@SahyogVikasFoundation" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
            </a>
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
          <a className="footer-email" href="mailto:info@sahyogvikas.org">
            info@sahyogvikas.org <ArrowUpRight size={13} />
          </a>
          <a className="footer-email" href="mailto:Sahyogvikasfoundation@gmail.com" style={{marginTop:"6px"}}>
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
