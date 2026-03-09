import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import transform1 from "@/assets/transform1.jpg";
import transform2 from "@/assets/transform2.jpg";
import transform3 from "@/assets/transform3.jpg";

const transformations = [
  { image: transform1, name: "Pedro", result: "10kg eliminados em 3 meses" },
  { image: transform2, name: "Ana", result: "8kg eliminados em 4 meses" },
  { image: transform3, name: "Lucas", result: "12kg de massa muscular em 6 meses" },
];

const TransformationsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % transformations.length);
  const prev = () => setCurrent((c) => (c - 1 + transformations.length) % transformations.length);

  return (
    <section className="section-block">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-section text-center mb-12">RESULTADOS REAIS</h2>

        <div className="container-inset relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <img
                src={transformations[current].image}
                alt={`Transformação de ${transformations[current].name}`}
                className="w-full rounded-lg mb-6 object-cover max-h-[500px]"
              />
              <p className="heading-section text-lg md:text-xl">
                {transformations[current].name}{" "}
                <span className="text-primary">— {transformations[current].result}</span>
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full border border-border hover:border-primary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full border border-border hover:border-primary transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {transformations.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
