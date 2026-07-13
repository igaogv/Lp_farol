import { Check, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { BRAND, OFFER_INCLUDES, WHATSAPP_CHECKOUT } from "@/lib/lp-data";
import { Reveal } from "@/components/lp/Reveal";
import { WhatsAppIcon } from "@/components/lp/WhatsAppIcon";

export const Offer = () => (
  <section id="oferta" data-testid={LP.offerSection} className="section-pad bg-brand-graphite/40 relative subtle-grid">
    <div className="container-lp">
      <Reveal className="max-w-2xl mx-auto">
        <div
          data-testid={LP.offerCard}
          className="relative bg-brand-graphite border-2 border-brand-red rounded-xl p-8 md:p-12 shadow-red-glow overflow-hidden grain"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center">
            <span className="badge-red">Oferta de lançamento</span>
            <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl text-white mt-4">
              Acesso completo, <span className="text-brand-red">hoje</span>
            </h2>
          </div>

          <ul className="mt-8 space-y-3.5">
            {OFFER_INCLUDES.map((inc) => (
              <li key={inc} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-red" />
                </span>
                <span className="text-brand-gray text-sm md:text-base">{inc}</span>
              </li>
            ))}
          </ul>

          <div data-testid={LP.offerPrice} className="mt-10 text-center">
            <p className="text-brand-gray-mute text-sm">
              De <span className="line-through">{BRAND.priceFrom}</span> por apenas
            </p>
            <p className="font-heading text-7xl md:text-8xl text-brand-yellow tracking-wide leading-none mt-1">
              {BRAND.price}
            </p>
            <p className="text-brand-gray-mute text-xs mt-2">
              Pagamento único • Sem mensalidade • Acesso vitalício
            </p>
          </div>

          <div className="mt-8">
            <a
              href={WHATSAPP_CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={LP.offerCta}
              className="btn-cta w-full animate-pulse-glow"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Garantir minha vaga agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-4 mt-4 text-brand-gray-mute text-xs">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Compra segura
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" /> Garantia de 7 dias
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
