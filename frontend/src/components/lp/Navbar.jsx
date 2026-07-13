import { Zap } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { BRAND, WHATSAPP_CHECKOUT } from "@/lib/lp-data";

export const Navbar = () => (
  <header
    data-testid={LP.navBar}
    className="fixed top-0 inset-x-0 z-40 bg-brand-black/80 backdrop-blur-md border-b border-white/5"
  >
    <div className="container-lp flex items-center justify-between h-16">
      <a href="#hero" data-testid={LP.navLogo} className="flex items-center gap-2 group">
        <span className="w-8 h-8 rounded bg-brand-red flex items-center justify-center shadow-red-glow">
          <Zap className="w-4 h-4 text-white" fill="currentColor" />
        </span>
        <span className="font-heading uppercase tracking-widest text-lg md:text-xl text-white leading-none pt-0.5">
          Restauração <span className="text-brand-red">de Faróis</span>
        </span>
      </a>
      <a
        href={WHATSAPP_CHECKOUT}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={LP.navCta}
        className="hidden sm:inline-flex items-center gap-2 rounded-md bg-brand-red hover:bg-brand-red-dark text-white font-heading uppercase tracking-widest text-base px-5 py-2 transition-colors duration-300"
      >
        Garantir por {BRAND.price}
      </a>
    </div>
  </header>
);
