import { motion } from "framer-motion";
import trainerImg from "@/assets/trainer.jpg";

const stats = [
  { number: "+200", label: "Alunos transformados" },
  { number: "8+", label: "Anos de experiência" },
  { number: "98%", label: "Satisfação dos alunos" },
];

const TrainerSection = () => {
  return (
    <section className="section-block">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-section text-center mb-12">QUEM VAI GUIAR SUA TRANSFORMAÇÃO</h2>

        <div className="container-inset">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.img
              src={trainerImg}
              alt="Personal Trainer"
              className="w-48 h-48 md:w-64 md:h-64 rounded-lg object-cover flex-shrink-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <p className="text-body mb-6">
                Meu objetivo é ajudar pessoas comuns a conquistarem resultados extraordinários
                através de treinos inteligentes e acompanhamento personalizado. Com mais de 8 anos
                de experiência no mercado fitness, já ajudei centenas de alunos a transformarem seus
                corpos e suas vidas.
              </p>
              <p className="text-body">
                Especialista em emagrecimento, hipertrofia e definição muscular, com formação em
                Educação Física e certificações internacionais.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="stat-number">{s.number}</div>
                <div className="text-body text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
