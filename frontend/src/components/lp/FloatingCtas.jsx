import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LP } from "@/constants/testIds/lp";
import { BRAND, WHATSAPP_CHECKOUT, WHATSAPP_SUPPORT } from "@/lib/lp-data";
import { WhatsAppIcon } from "@/components/lp/WhatsAppIcon";

export const FloatingCtas = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(max > 0 && window.scrollY / max > 0.3);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.a
            key="sticky-cta"
            href={WHATSAPP_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={LP.stickyMobileCta}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-brand-red text-white text-center font-heading uppercase tracking-widest text-lg py-3.5 rounded-md shadow-red-glow-lg border border-white/10 flex justify-center items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Garantir por {BRAND.price}
          </motion.a>
        )}
      </AnimatePresence>

      <a
        href={WHATSAPP_SUPPORT}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={LP.whatsappFloat}
        aria-label="Falar com o suporte no WhatsApp"
        className="fixed bottom-[84px] right-4 md:bottom-[74px] md:right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </>
  );
};
