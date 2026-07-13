import { Gift } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { BONUSES } from "@/lib/lp-data";
import { Reveal, SectionHeading } from "@/components/lp/Reveal";

export const Bonuses = () => (
  <section data-testid={LP.bonusesSection} className="section-pad bg-brand-black">
    <div className="container-lp">
      <SectionHeading
        eyebrow="Bônus exclusivos"
        title={
          <>
            Você não leva só o curso.
            <br />
            Leva o <span className="text-brand-yellow">kit completo</span> para começar
          </>
        }
        subtitle="Materiais de apoio criados para acelerar sua execução e o fechamento do seu primeiro serviço."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {BONUSES.map((bonus, i) => (
          <Reveal key={bonus.title} delay={i * 0.08}>
            <div
              data-testid={LP.bonusItem(i)}
              className="relative card-graphite p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/40"
            >
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/25 rounded px-2 py-0.5">
                Bônus {String(i + 1).padStart(2, "0")}
              </span>
              <Gift className="w-6 h-6 text-brand-yellow mb-4" />
              <h3 className="font-heading uppercase tracking-wide text-xl text-white pr-16">
                {bonus.title}
              </h3>
              <p className="text-brand-gray-mute text-sm mt-2 leading-relaxed">{bonus.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
