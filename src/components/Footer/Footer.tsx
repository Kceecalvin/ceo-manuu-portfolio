import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { founder } from "@/lib/portfolio";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link className="footer-wordmark" href="/">
              CEO MANUU<span>✳</span>
            </Link>
            <p>Many possibilities. One connected vision.</p>
            <span className="location">
              <span className="status-dot" /> {founder.location} · Thinking
              beyond borders
            </span>
          </div>
          <div className="footer-links">
            <span className="eyebrow">Explore</span>
            <Link href="/ventures">
              The ventures <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
            <Link href="/about">
              The founder <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
            <Link href="/seroxide">
              Seroxide & SeroTix <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>
          <div className="footer-links">
            <span className="eyebrow">Start something</span>
            <Link href="/contact">
              Work together <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
            <a href={`mailto:${founder.email}`}>
              {founder.email} <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a
              href="https://serotix.co.ke"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore SeroTix <ArrowUpRight aria-hidden="true" size={14} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CEO Manuu · Manuu Spaces</span>
          <span>Built with purpose. Made to connect.</span>
          <a href="#top">
            Back to top <ArrowUp aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
