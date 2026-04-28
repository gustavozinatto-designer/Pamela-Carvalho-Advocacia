import { motion } from 'motion/react';

const differentials = [
  {
    number: '01',
    title: 'Atendimento sem intermediários',
    description: 'Você fala com a advogada responsável pelo seu caso — não com assistentes ou estagiários.'
  },
  {
    number: '02',
    title: 'Análise estratégica profunda',
    description: 'Cada caso recebe análise jurídica individualizada antes da definição de qualquer movimento.'
  },
  {
    number: '03',
    title: 'Especialização — não generalismo',
    description: 'Foco exclusivo em Família e Sucessões para garantir a máxima perícia técnica.'
  },
  {
    number: '04',
    title: 'Prioridade para acordos consensuais',
    description: 'Construímos soluções que preservam o patrimônio e minimizam o desgaste emocional.'
  },
  {
    number: '05',
    title: 'Transparência total do processo',
    description: 'Clareza absoluta sobre prazos, próximos passos e as possibilidades reais do seu caso.'
  }
];

export default function SocialProofSection() {
  const WHATSAPP_PHONE = "5517988045527";

  const handleConsult = () => {
    const message = encodeURIComponent("Olá Dra. Pâmela, li sobre seus diferenciais no site e gostaria de solicitar uma consulta.");
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10 font-sans">
        
        {/* Layout following the reference: Left Header, Right List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: The "Complexity and Scale" style header */}
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-[11px] tracking-[0.2em] font-bold text-[#1C1C1C]/40 uppercase mb-6"
            >
              DIFERENCIAL
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-[#1C1C1C] text-[clamp(48px,6vw,86px)] leading-[0.95] tracking-tight mb-10"
            >
              Por que trabalhar <br />
              <span className="text-[#1C1C1C]/40">comigo</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#6B6B6B] text-[18px] leading-relaxed mb-12 max-w-sm font-light"
            >
              Minhas advocacia não é construída sobre volume de processos. É construída sobre qualidade de atendimento e profundidade de dedicação a cada caso. É direto comigo.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={handleConsult}
              className="bg-black text-white px-12 py-5 rounded-[4px] text-[14px] font-bold tracking-tight hover:bg-black/90 transition-all duration-300"
            >
              Solicitar atendimento
            </motion.button>
          </div>

          {/* Right Column: List items separated by lines with numbers on the right */}
          <div className="">
            <div className="space-y-0 relative border-b border-[#EDEDED] max-w-xl">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group py-10 border-t border-[#EDEDED] flex justify-between items-start gap-12"
                >
                  <div className="max-w-[400px]">
                    <h3 className="text-[#1C1C1C] text-lg lg:text-[20px] font-medium tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-[15px] leading-relaxed font-light opacity-80">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[14px] font-bold text-[#1C1C1C] pt-1">
                    {item.number}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Secondary footer text following reference style */}
            <div className="mt-20">
              <span className="text-[11px] tracking-[0.2em] font-bold text-[#1C1C1C]/40 uppercase">
                Atuação em Família e Sucessões • Online e Presencial
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

