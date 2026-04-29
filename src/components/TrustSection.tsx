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
    <section className="relative py-20 sm:py-24 lg:py-40 bg-ice-white overflow-hidden">
      {/* Subtle Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-deep-navy/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Intro Text Block */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-refined-gray/20" />
            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.4em] text-refined-gray font-light">
              ATENDIMENTO
            </span>
          </motion.div>
          
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-petroleum text-[clamp(32px,5vw,56px)] leading-[1.1] font-light tracking-tight mb-8"
              >
                Segurança jurídica <br className="hidden sm:block" />
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 lg:gap-16 pt-8 sm:pt-12"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-start"
            >
              <div className="mb-6 sm:mb-8 relative">
                {/* Minimalist Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center border border-petroleum/10 rounded-full transition-all duration-500 group-hover:border-petroleum group-hover:shadow-[0_0_20px_rgba(14,33,53,0.05)] bg-white/50 backdrop-blur-sm">
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

              <p className="text-refined-gray text-sm sm:text-base leading-relaxed font-light opacity-90">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
