import { CheckCircle2 } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { LEARN_ITEMS, IMAGES } from "@/lib/lp-data";
import { Reveal, SectionHeading } from "@/components/lp/Reveal";

export const Learn = () => (
  <section data-testid={LP.learnSection} className="section-pad bg-brand-black">
    <div className="container-lp grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionHeading
          eyebrow="Conteúdo direto ao ponto"
          title={
            <>
              O que você vai <span className="text-brand-red">dominar</span> no curso
            </>
          }
          subtitle="Sem enrolação: cada aula foi pensada para você sair executando, do diagnóstico à entrega do serviço."
        />
        <ul className="mt-10 space-y-4">
          {LEARN_ITEMS.map((itemText, i) => (
            <Reveal key={itemText} delay={i * 0.06}>
              <li data-testid={LP.learnItem(i)} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <span className="text-brand-gray text-sm md:text-base">{itemText}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={0.15} className="relative">
        <div className="relative rounded-xl overflow-hidden border border-white/5 shadow-card">
          <img
            src={IMAGES.polishing}
            alt="Profissional realizando polimento em veículo"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="badge-yellow mb-2">Técnica profissional</span>
            <p className="font-heading uppercase tracking-wide text-2xl md:text-3xl text-white">
              Passo a passo real, sem pular etapas
            </p>
          </div>
        </div>
        <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-brand-red/60 rounded-tr-xl pointer-events-none" />
        <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-brand-red/60 rounded-bl-xl pointer-events-none" />
      </Reveal>
    </div>
  </section>
);
