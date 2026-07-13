import { Zap } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { BRAND } from "@/lib/lp-data";

export const Footer = () => (
  <footer data-testid={LP.footer} className="bg-brand-black border-t border-white/5 py-12 pb-28 md:pb-12">
    <div className="container-lp">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded bg-brand-red flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
          </span>
          <span className="font-heading uppercase tracking-widest text-lg text-white leading-none pt-0.5">
            Restauração <span className="text-brand-red">de Faróis</span>
          </span>
        </div>
        <p className="text-brand-gray-mute text-xs text-center md:text-right">
          Atendimento e suporte: {BRAND.phoneDisplay}
        </p>
      </div>
      <div className="divider-red my-8" />
      <p className="text-brand-gray-mute/70 text-[11px] leading-relaxed max-w-4xl mx-auto text-center">
        Este é um curso educacional de técnica de restauração de faróis. Os resultados
        financeiros mencionados nesta página são possibilidades, não promessas: dependem da
        dedicação, prática, divulgação e contexto de cada aluno. Faróis com trincas, infiltração
        ou danos internos podem não ser recuperáveis por polimento e exigem avaliação
        individual. © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);
