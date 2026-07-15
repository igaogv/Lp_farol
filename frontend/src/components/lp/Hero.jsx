import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, ShieldCheck, Headset } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { BRAND, IMAGES, WHATSAPP_CHECKOUT } from "@/lib/lp-data";
import { WhatsAppIcon } from "@/components/lp/WhatsAppIcon";

const badges = [
  { id: LP.heroBadgeAcesso, icon: Clock, label: "Acesso imediato" },
  { id: LP.heroBadgeCert, icon: Award, label: "Certificado incluso" },
  { id: LP.heroBadgeGarantia, icon: ShieldCheck, label: "Garantia de 7 dias" },
  { id: LP.heroBadgeSuporte, icon: Headset, label: "Suporte 24h" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero = () => (
  <section
    id="hero"
    data-testid={LP.hero}
    className="relative min-h-screen flex items-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src={IMAGES.heroGlow}
        alt="Farol de carro brilhando no escuro"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/60" />
    </div>

    <div className="absolute inset-0 subtle-grid opacity-40" />

    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container-lp relative z-10 pt-28 pb-24 md:pt-36 md:pb-28"
    >
      <div className="max-w-3xl">
        <motion.span variants={item} className="badge-red mb-6">
          Curso 100% online • Do zero ao serviço
        </motion.span>

        <motion.h1
          variants={item}
          data-testid={LP.heroHeadline}
          className="h-display text-5xl sm:text-6xl lg:text-8xl text-white"
        >
          Farol amarelado?
          <br />
          Aprenda a deixá-lo com{" "}
          <span className="text-brand-red">cara de novo</span>
        </motion.h1>

        <motion.p
          variants={item}
          data-testid={LP.heroSubheadline}
          className="text-brand-gray text-base md:text-lg mt-6 max-w-xl leading-relaxed"
        >
          Domine a técnica de restauração de faróis do zero — lixamento,
          polimento e proteção — e ofereça um serviço com resultado visível na
          hora, mesmo sem experiência em estética automotiva.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <a
            href={WHATSAPP_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={LP.heroCta}
            className="btn-cta animate-pulse-glow"
            onClick={() => {
              if (window.fbq) {
                window.fbq("track", "Lead");
              }
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Quero começar agora
            <ArrowRight className="w-5 h-5" />
          </a>

          <div data-testid={LP.heroPrice} className="flex flex-col">
            <span className="text-brand-gray-mute text-sm line-through">
              de {BRAND.priceFrom}
            </span>

            <span className="font-heading text-3xl text-brand-yellow tracking-wide leading-none">
              por {BRAND.price}
            </span>

            <span className="text-brand-gray-mute text-xs">
              pagamento único
            </span>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-2.5">
          {badges.map(({ id, icon: Icon, label }) => (
            <span key={id} data-testid={id} className="badge-metal">
              <Icon className="w-3.5 h-3.5 text-brand-yellow" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>

    <div className="absolute bottom-0 inset-x-0 divider-red" />
  </section>
);