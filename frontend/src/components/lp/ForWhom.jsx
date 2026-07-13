import { ThumbsUp, XCircle, CheckCircle2, Ban } from "lucide-react";
import { LP } from "@/constants/testIds/lp";
import { FOR_WHOM, NOT_FOR_WHOM } from "@/lib/lp-data";
import { Reveal, SectionHeading } from "@/components/lp/Reveal";

export const ForWhom = () => (
  <section data-testid={LP.forWhomSection} className="section-pad bg-brand-black">
    <div className="container-lp">
      <SectionHeading
        center
        eyebrow="Honestidade acima de tudo"
        title={
          <>
            Este curso é <span className="text-brand-red">para você?</span>
          </>
        }
      />

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        <Reveal>
          <div className="card-graphite p-8 h-full border-t-4 border-t-brand-yellow">
            <div className="flex items-center gap-3 mb-6">
              <ThumbsUp className="w-6 h-6 text-brand-yellow" />
              <h3 className="font-heading uppercase tracking-wide text-3xl text-white">É para você se…</h3>
            </div>
            <ul className="space-y-4">
              {FOR_WHOM.map((f, i) => (
                <li key={f} data-testid={LP.forWhomItem(i)} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <span className="text-brand-gray text-sm md:text-base">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card-graphite p-8 h-full border-t-4 border-t-brand-red/70 hover:border-brand-red/40">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-brand-red" />
              <h3 className="font-heading uppercase tracking-wide text-3xl text-white">Não é para você se…</h3>
            </div>
            <ul className="space-y-4">
              {NOT_FOR_WHOM.map((f, i) => (
                <li key={f} data-testid={LP.notForWhomItem(i)} className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-brand-gray text-sm md:text-base">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
