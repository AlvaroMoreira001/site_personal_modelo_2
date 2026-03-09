import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Quero começar minha transformação!";

const FinalCTASection = () => {
  return (
    <section className="section-block">
      <motion.div
        className="container-inset max-w-3xl mx-auto text-center border border-border"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-section mb-4">SEU RESULTADO COMEÇA COM UMA DECISÃO.</h2>
        <p className="text-body mb-8">Comece hoje seu acompanhamento personalizado.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block text-center"
        >
          Quero falar com o Personal
        </a>
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
