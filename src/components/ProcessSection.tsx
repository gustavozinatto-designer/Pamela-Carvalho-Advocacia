import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Primeiro contato',
    description: 'Você entra em contato e descreve brevemente sua situação.'
  },
  {
    number: '02',
    title: 'Reunião de briefing',
    description: 'Conversa detalhada para entender todos os aspectos do caso.'
  },
  {
    number: '03',
    title: 'Análise jurídica',
    description: 'Avaliação técnica aprofundada do caso e dos caminhos possíveis.'
  },
  {
    number: '04',
    title: 'Definição da estratégia',
    description: 'Acordo ou ação — apresentação clara do melhor caminho.'
  },
  {
    number: '05',
    title: 'Formalização',
    description: 'Contrato firmado com transparência sobre honorários e escopo.'
  },
  {
    number: '06',
    title: 'Acompanhamento',
    description: 'Presença próxima em todas as etapas até a conclusão.'
  }
];

export default function ProcessSection() {
  return (
    <section 
      className="relative py-20 sm:py-24 lg:py-40 bg-white overflow-hidden"
    >
      {/* Structural Hairlines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-petroleum/10" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="mb-12 lg:mb-20 min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-petroleum/20 shrink-0" />
            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-petroleum/70 font-bold font-sans">
              Como funciona
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="font-serif text-petroleum text-[clamp(24px,7vw,64px)] leading-[1.1] font-normal tracking-tight max-w-full break-words"
          >
            O caminho do <br className="hidden xs:block" />
            <span className="italic text-petroleum/40">primeiro contato</span> até a resolução
          </motion.h2>
        </div>

        {/* Timeline Desktop */}
        <div className="relative hidden lg:block pt-0 pb-20 w-full">
          <div className="absolute top-[28px] left-0 w-full h-[1px] bg-petroleum/10" />
          
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-[28px] left-0 h-[1px] bg-petroleum z-20" 
          />

          <div className="grid grid-cols-6 gap-8 relative z-30 min-w-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative min-w-0"
              >
                <div className="mb-12 flex justify-center">
                  <div className="w-14 h-14 border border-petroleum/20 flex items-center justify-center bg-white group-hover:border-petroleum group-hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] transition-all duration-700 rounded-full shrink-0">
                    <span className="text-[14px] font-sans font-bold tracking-widest text-petroleum">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="text-center px-1">
                  <h3 className="font-serif italic text-petroleum text-lg lg:text-[20px] mb-4 opacity-90 group-hover:opacity-100 transition-opacity break-words">
                    {step.title}
                  </h3>
                  <p className="text-refined-gray text-[14px] leading-relaxed font-normal group-hover:text-petroleum transition-colors duration-500 opacity-90 break-words">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Tablet/Mobile */}
        <div className="lg:hidden space-y-12 sm:space-y-16 relative w-full">
          <div className="absolute left-[27px] sm:left-[31px] top-4 bottom-4 w-[1px] bg-petroleum/10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex gap-4 sm:gap-8 group min-w-0"
            >
              <div className="shrink-0 relative z-10">
                <div className="w-14 h-14 sm:w-[62px] sm:h-[62px] border border-petroleum/10 flex items-center justify-center bg-white group-hover:border-petroleum transition-all duration-500 rounded-full shrink-0 shadow-sm">
                  <span className="text-xs sm:text-sm font-bold text-petroleum">{step.number}</span>
                </div>
              </div>
              <div className="pt-2 sm:pt-3 min-w-0 flex-1">
                <h3 className="font-serif italic text-petroleum text-xl sm:text-2xl mb-2 sm:mb-3 break-words">{step.title}</h3>
                <p className="text-refined-gray text-sm sm:text-base leading-relaxed font-normal opacity-90 break-words">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
