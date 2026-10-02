import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./businesses.css";
import PortfolioChrome from "@/components/PortfolioChrome";
import { MotionProvider } from "@/components/Reveal";
import { siteUrl } from "@/lib/portfolio";
const sans = localFont({
  src: [
    { path: "./fonts/lato-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/lato-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});
const editorial = localFont({
  src: "./fonts/editorial-italic.woff2",
  variable: "--font-editorial",
  weight: "400",
  style: "italic",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CEO Manuu — Founder, Manuu Spaces & Seroxide",
    template: "%s | CEO Manuu",
  },
  description:
    "Meet CEO Manuu, founder of Manuu Spaces and Seroxide. Explore a connected vision across business, technology and African culture, including SeroTix.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "CEO Manuu",
    title: "CEO Manuu — Building what comes next.",
    description:
      "Business. Technology. Culture. Explore the world of Manuu Spaces.",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top" className={`${sans.variable} ${editorial.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <PortfolioChrome>{children}</PortfolioChrome>
        </MotionProvider>
      </body>
    </html>
  );
}
