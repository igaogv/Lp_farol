import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LP } from "@/constants/testIds/lp";
import { FAQ } from "@/lib/lp-data";
import { Reveal, SectionHeading } from "@/components/lp/Reveal";

export const Faq = () => (
  <section data-testid={LP.faqSection} className="section-pad bg-brand-black">
    <div className="container-lp max-w-3xl">
      <SectionHeading
        center
        eyebrow="Perguntas frequentes"
        title={
          <>
            Ficou alguma <span className="text-brand-red">dúvida?</span>
          </>
        }
      />

      <Reveal className="mt-12">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              data-testid={LP.faqItem(i)}
              className="card-graphite border border-white/5 rounded-lg px-5 data-[state=open]:border-brand-red/40"
            >
              <AccordionTrigger
                data-testid={LP.faqTrigger(i)}
                className="text-left text-white font-semibold text-sm md:text-base hover:no-underline py-5"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-brand-gray-mute text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
