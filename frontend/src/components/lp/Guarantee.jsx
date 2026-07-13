import { ShieldCheck, Headset, ArrowRight } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { BRAND, WHATSAPP_CHECKOUT, WHATSAPP_SUPPORT } from "@/lib/lp-data";
import { Reveal } from "@/components/lp/Reveal";
import { WhatsAppIcon } from "@/components/lp/WhatsAppIcon";

export const Guarantee = () => (
  <section data-testid={LP.guaranteeSection} className="section-pad bg-brand-graphite/40">
    <div className="container-lp">
      <Reveal>
        <div className="card-graphite p-8 md:p-12 grid lg:grid-cols-[auto_1fr_auto] items-center gap-8">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-brand-yellow/10 border-2 border-brand-yellow/40 flex items-center justify-center shadow-yellow-glow mx-auto lg:mx-0">
            <ShieldCheck className="w-12 h-12 text-brand-yellow" />
          </div>
          <div className="text-center lg:text-left">
            <span className="badge-yellow mb-3">Risco zero</span>
            <h2 className="h-display text-4xl sm:text-5xl text-white">
              Garantia incondicional de <span className="text-brand-yellow">7 dias</span>
            </h2>
            <p className="text-brand-gray-mute mt-4 max-w-2xl leading-relaxed text-sm md:text-base">
              Entre no curso, assista às aulas e coloque em prática. Se em até 7 dias você
              entender que não é para você, devolvemos 100% do valor pago — sem perguntas,
              sem burocracia. O risco é todo nosso.
            </p>
          </div>
          <a
            href={WHATSAPP_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={LP.guaranteeCta}
            className="btn-cta whitespace-nowrap justify-self-center"
          >
            Testar sem risco
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-6">
        <div
          data-testid={LP.supportSection}
          className="card-graphite p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="w-12 h-12 rounded-lg bg-brand-red/15 border border-brand-red/30 hidden md:flex items-center justify-center shrink-0">
              <Headset className="w-6 h-6 text-brand-red" />
            </span>
            <div>
              <h3 className="font-heading uppercase tracking-wide text-2xl text-white">
                Suporte 24 horas via WhatsApp
              </h3>
              <p className="text-brand-gray-mute text-sm mt-1">
                Dúvida técnica no meio do serviço? Nossa equipe responde a qualquer hora no{" "}
                {BRAND.phoneDisplay}.
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_SUPPORT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={LP.supportCta}
            className="btn-ghost-red whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Falar com o suporte
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
