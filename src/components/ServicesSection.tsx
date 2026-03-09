import { motion } from "framer-motion";

const services = [
  {
    title: "ACOMPANHAMENTO PERSONALIZADO",
    desc: "Treino adaptado ao seu objetivo e realidade, com ajustes constantes para garantir evolução.",
  },
  {
    title: "PLANILHAS DE TREINO",
    desc: "Estrutura progressiva do básico ao avançado para evolução constante e segura.",
  },
  {
    title: "PLANEJAMENTO ALIMENTAR",
    desc: "Dietas ajustadas para emagrecimento, hipertrofia ou definição — sem dietas genéricas.",
  },
  {
    title: "SUPORTE DIRETO",
    desc: "Acompanhamento e ajustes constantes. Você nunca estará sozinho na sua jornada.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-block">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-section text-center mb-12">SERVIÇOS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="container-inset border border-border hover:border-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="font-heading text-lg md:text-xl uppercase tracking-tight text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-body text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
