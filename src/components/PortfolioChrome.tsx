"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default function PortfolioChrome({ children }: { children: React.ReactNode }) {
  const businessSite = usePathname().startsWith("/businesses/");
  return <>{!businessSite && <Navbar />}<main id="main-content">{children}</main>{!businessSite && <Footer />}</>;
}
