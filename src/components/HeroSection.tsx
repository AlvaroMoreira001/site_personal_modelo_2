import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5512982642197?text=Olá! Quero começar minha transformação!";
const HEADLINE = "TRANSFORME SEU CORPO.";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < HEADLINE.length) {
        setDisplayText(HEADLINE.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 800);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-block min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-display mb-6 min-h-[1.2em]">
          {displayText}
          <span className="border-r-[3px] border-primary ml-1 animate-typing-cursor" />
        </h1>

        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-body max-w-2xl mx-auto mb-10">
              Acompanhamento profissional, treinos personalizados e estratégia
              alimentar para resultados reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="cta-button inline-block">
                Começar minha transformação
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-block bg-secondary text-foreground border border-border hover:border-primary"
              >
                Falar com o Personal
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
