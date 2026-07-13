import { Wrench, Timer, TrendingUp, PiggyBank } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { Reveal, SectionHeading } from "@/components/lp/Reveal";

const points = [
  {
    icon: PiggyBank,
    title: "Investimento inicial baixo",
    text: "Você não precisa de maquinário caro para começar. O curso mostra o kit essencial do iniciante.",
  },
  {
    icon: Timer,
    title: "Serviço rápido de executar",
    text: "Com a técnica certa, uma restauração completa é feita em poucas horas — ideal para encaixar na rotina.",
  },
  {
    icon: TrendingUp,
    title: "Alta procura no mercado",
    text: "Frota brasileira envelhecida significa muitos faróis amarelados esperando por quem sabe restaurar.",
  },
  {
    icon: Wrench,
    title: "Prova visual instantânea",
    text: "O antes e depois vende por você: o cliente enxerga o valor do serviço na hora, sem precisar convencer ninguém.",
  },
];

export const Opportunity = () => (
  <section data-testid={LP.opportunitySection} className="section-pad bg-brand-graphite/40 relative subtle-grid">
    <div className="container-lp">
      <SectionHeading
        eyebrow="A oportunidade"
        title={
          <>
            Uma habilidade prática que pode virar <span className="text-brand-red">fonte de renda</span>
          </>
        }
        subtitle="A restauração de faróis é uma das portas de entrada mais acessíveis da estética automotiva. Você aprende uma técnica, entrega um resultado visível e constrói seu portfólio serviço após serviço."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {points.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="card-graphite p-6 h-full transition-all duration-300 hover:-translate-y-1">
              <span className="w-11 h-11 rounded-lg bg-brand-red/15 border border-brand-red/30 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-red" />
              </span>
              <h3 className="font-heading uppercase tracking-wide text-xl text-white">{title}</h3>
              <p className="text-brand-gray-mute text-sm mt-2 leading-relaxed">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10">
        <p
          data-testid={LP.opportunityDisclaimer}
          className="text-brand-gray-mute text-xs md:text-sm max-w-3xl leading-relaxed border-l-2 border-brand-yellow/50 pl-4"
        >
          Transparência em primeiro lugar: não prometemos ganhos garantidos. Seus resultados
          dependem da sua prática, dedicação, divulgação e da realidade da sua região. O que
          entregamos é a técnica completa e o caminho para você executar um serviço de qualidade.
        </p>
      </Reveal>
    </div>
  </section>
);
