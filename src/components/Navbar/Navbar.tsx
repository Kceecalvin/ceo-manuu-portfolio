"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  { href: "/", label: "Home" },
  { href: "/ventures", label: "Ventures" },
  { href: "/about", label: "The founder" },
  { href: "/seroxide", label: "Seroxide" },
];
export default function Navbar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <div className="shell nav-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="CEO Manuu home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram" aria-hidden="true">
            m<span>.</span>
          </span>
          <span>
            CEO MANUU<small>FOUNDER & ENTREPRENEUR</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname === link.href ||
                (link.href === "/ventures" && pathname.startsWith("/ventures/"))
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-small nav-contact">
          Let’s talk <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          {[...links, { href: "/contact", label: "Let’s talk" }].map(
            (link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                <span className="micro">0{i + 1}</span>
                {link.label}
                <ArrowUpRight aria-hidden="true" size={20} />
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
