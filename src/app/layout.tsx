import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageTransition from "@/components/PageTransition/PageTransition";
import GlobalBackground from "@/components/ui/GlobalBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CEO MANUU | Founder of Manuu Spaces Empire & Seroxide",
  description: "Discover CEO MANUU, founder of Manuu Spaces Empire and Seroxide - building scalable ventures across automotive, healthcare, lifestyle, trade, and creative industries.",
  keywords: ["CEO MANUU", "Manael Okoth", "Kenyan entrepreneur", "Manuu Spaces Empire", "Seroxide", "African business founder", "business in Kenya", "global partnerships"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GlobalBackground />
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 100px)' }}>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
