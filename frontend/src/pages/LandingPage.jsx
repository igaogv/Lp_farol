import { Navbar } from "@/components/lp/Navbar";
import { Hero } from "@/components/lp/Hero";
import { Problem } from "@/components/lp/Problem";
import { Opportunity } from "@/components/lp/Opportunity";
import { Learn } from "@/components/lp/Learn";
import { Modules } from "@/components/lp/Modules";
import { Bonuses } from "@/components/lp/Bonuses";
import { Offer } from "@/components/lp/Offer";
import { ForWhom } from "@/components/lp/ForWhom";
import { Guarantee } from "@/components/lp/Guarantee";
import { Faq } from "@/components/lp/Faq";
import { FinalCta } from "@/components/lp/FinalCta";
import { Footer } from "@/components/lp/Footer";
import { FloatingCtas } from "@/components/lp/FloatingCtas";

export default function LandingPage() {
  return (
    <main className="bg-brand-black text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Opportunity />
      <Learn />
      <Modules />
      <Bonuses />
      <Offer />
      <ForWhom />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingCtas />
    </main>
  );
}
