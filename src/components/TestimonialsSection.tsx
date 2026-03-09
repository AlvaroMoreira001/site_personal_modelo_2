import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Com o acompanhamento consegui perder 8kg e voltar a ter confiança no meu corpo. Melhor investimento que já fiz.",
    name: "Carla M.",
  },
  {
    text: "Nunca imaginei que conseguiria ganhar tanta massa muscular em tão pouco tempo. O suporte faz toda a diferença.",
    name: "Rafael S.",
  },
  {
    text: "Treinos personalizados que realmente funcionam. Em 3 meses minha vida mudou completamente.",
    name: "Juliana P.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-block">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-section text-center mb-12">O QUE DIZEM NOSSOS ALUNOS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="container-inset border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-body text-sm mb-6 italic">"{t.text}"</p>
              <p className="font-heading text-sm uppercase text-primary">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
