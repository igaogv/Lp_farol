import { ArrowRight } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { MODULES, WHATSAPP_CHECKOUT, BRAND } from "@/lib/lp-data";
import { Reveal, SectionHeading } from "@/components/lp/Reveal";
import { WhatsAppIcon } from "@/components/lp/WhatsAppIcon";

export const Modules = () => (
  <section data-testid={LP.modulesSection} className="section-pad bg-brand-graphite/40 relative">
    <div className="container-lp">
      <SectionHeading
        center
        eyebrow="Estrutura do curso"
        title={
          <>
            6 módulos, <span className="text-brand-red">um caminho completo</span>
          </>
        }
        subtitle="Da teoria mínima necessária até a precificação do seu serviço — organizado na ordem exata em que você vai precisar."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {MODULES.map((mod, i) => (
          <Reveal key={mod.n} delay={i * 0.08}>
            <div
              data-testid={LP.moduleCard(i)}
              className="card-graphite p-7 h-full group transition-all duration-300 hover:-translate-y-1 hover:shadow-red-glow"
            >
              <span className="font-heading text-5xl text-brand-red/30 group-hover:text-brand-red/70 transition-colors duration-300 leading-none">
                {mod.n}
              </span>
              <h3 className="font-heading uppercase tracking-wide text-2xl text-white mt-4 leading-tight">
                {mod.title}
              </h3>
              <p className="text-brand-gray-mute text-sm mt-3 leading-relaxed">{mod.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12 text-center">
        <a
          href={WHATSAPP_CHECKOUT}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={LP.modulesCta}
          className="btn-cta"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Quero acessar os 6 módulos — {BRAND.price}
          <ArrowRight className="w-5 h-5" />
        </a>
      </Reveal>
    </div>
  </section>
);
