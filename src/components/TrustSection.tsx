import { motion } from 'motion/react';
import { Award, UserCheck, Scale, Globe } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    title: 'Especialização comprovada',
    description: 'Formação e atuação focadas em Direito de Família e Sucessões. Não é generalista.',
  },
  {
    icon: UserCheck,
    title: 'Sem intermediários',
    description: 'Você conversa diretamente com quem cuida do seu caso. Do primeiro contato à conclusão.',
  },
  {
    icon: Scale,
    title: 'Foco em resolução, não em conflito',
    description: 'A estratégia prioriza acordos quando possível — economia de tempo, dinheiro e desgaste emocional.',
  },
  {
    icon: Globe,
    title: 'Online e presencial',
    description: 'Atendimento adaptado à sua realidade, com a mesma qualidade em qualquer modalidade.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.45, 0.32, 0.9],
    },
  },
};

export default function TrustSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-ice-white overflow-hidden">
      {/* Subtle Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-deep-navy/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Intro Text Block */}
        <div className="mb-8 lg:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block text-[10px] lg:text-[11px] uppercase tracking-[0.4em] text-refined-gray mb-6 font-light"
          >
            ATENDIMENTO
          </motion.span>
          
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-petroleum text-[clamp(32px,4vw,56px)] leading-[1.1] font-light tracking-tight mb-8"
              >
                Segurança jurídica <br />
                com atendimento próximo.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-refined-gray text-base lg:text-[18px] max-w-2xl font-light leading-relaxed opacity-80"
              >
                Uma advocacia especializada para conduzir momentos delicados com clareza, estratégia e atenção real ao seu caso.
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pt-12"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-start"
            >
              <div className="mb-8 relative">
                {/* Minimalist Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center border border-petroleum/10 rounded-full transition-all duration-500 group-hover:border-petroleum group-hover:shadow-[0_0_20px_rgba(14,33,53,0.05)]">
                  <item.icon 
                    size={20} 
                    strokeWidth={1.2} 
                    className="text-petroleum/80 transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                {/* Corner detail - subtle boutique touch */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-petroleum/5 rounded-full scale-0 transition-transform duration-500 group-hover:scale-100" />
              </div>

              <h3 className="font-serif text-petroleum text-xl lg:text-2xl mb-4 leading-tight tracking-tight font-light">
                {item.title}
              </h3>

              <div className="h-[1px] w-8 bg-petroleum/10 mb-5 transition-all duration-500 group-hover:w-16 group-hover:bg-petroleum/20" />

              <p className="text-refined-gray text-sm lg:text-base leading-relaxed font-light opacity-90">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
