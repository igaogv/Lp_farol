import { ArrowRight } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { BRAND, IMAGES, WHATSAPP_CHECKOUT } from "@/lib/lp-data";
import { Reveal } from "@/components/lp/Reveal";
import { WhatsAppIcon } from "@/components/lp/WhatsAppIcon";

export const FinalCta = () => (
  <section data-testid={LP.finalCtaSection} className="relative section-pad overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={IMAGES.materials}
        alt="Ferramentas de oficina automotiva"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-black/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
    </div>

    <div className="container-lp relative z-10 text-center max-w-3xl mx-auto">
      <Reveal>
        <span className="badge-red">Última chamada</span>
        <h2 className="h-display text-5xl sm:text-6xl lg:text-7xl text-white mt-5">
          O próximo farol restaurado pode ser o{" "}
          <span className="text-brand-red">seu primeiro serviço</span>
        </h2>
        <p className="text-brand-gray-mute mt-6 leading-relaxed text-sm md:text-base">
          Por {BRAND.price} você leva o curso completo, 6 bônus, certificado, suporte 24h e
          uma garantia de 7 dias que tira todo o risco da sua decisão. A técnica está pronta —
          só falta você.
        </p>
        <div className="mt-9 flex justify-center">
          <a
            href={WHATSAPP_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={LP.finalCta}
            className="btn-cta animate-pulse-glow"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Quero começar por {BRAND.price}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <p className="text-brand-gray-mute text-xs mt-5">
          Você será direcionado ao nosso WhatsApp oficial para concluir a compra com atendimento humano.
        </p>
      </Reveal>
    </div>
  </section>
);
