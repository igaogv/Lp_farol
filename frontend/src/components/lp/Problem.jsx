import { EyeOff, CloudSun, Sparkles } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { PROBLEM_CARDS, IMAGES } from "@/lib/lp-data";
import { Reveal, SectionHeading } from "@/components/lp/Reveal";

const icons = [EyeOff, CloudSun, Sparkles];

export const Problem = () => (
  <section data-testid={LP.problemSection} className="section-pad bg-brand-black relative">
    <div className="container-lp">
      <SectionHeading
        eyebrow="O problema que todo carro tem"
        title={
          <>
            O farol opaco <span className="text-brand-red">envelhece</span> qualquer carro
          </>
        }
        subtitle="Milhões de carros rodando no Brasil têm faróis amarelados — e a maioria dos donos nem sabe que existe solução rápida e acessível."
      />

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {PROBLEM_CARDS.map((card, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={card.title} delay={i * 0.12}>
              <div
                data-testid={LP.problemCard(i)}
                className="card-graphite p-7 h-full border-l-4 border-l-brand-red/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-glow"
              >
                <Icon className="w-8 h-8 text-brand-red mb-4" />
                <h3 className="font-heading uppercase tracking-wide text-2xl text-white">
                  {card.title}
                </h3>
                <p className="text-brand-gray-mute mt-3 leading-relaxed text-sm md:text-base">
                  {card.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-12">
        <div className="relative rounded-xl overflow-hidden border border-white/5">
          <img
            src={IMAGES.sportsCar}
            alt="Detalhe de farol de carro esportivo restaurado"
            className="w-full h-56 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 font-heading uppercase tracking-wide text-2xl md:text-4xl text-white">
            Um farol restaurado muda a <span className="text-brand-yellow">primeira impressão</span> do carro inteiro
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
