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
      className="relative py-24 lg:py-40 bg-white overflow-hidden"
    >
      {/* Structural Hairlines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-petroleum/10" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block text-[10px] lg:text-[11px] uppercase tracking-[0.6em] text-petroleum/50 font-medium font-sans mb-4"
          >
            Como funciona
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="font-serif text-petroleum text-[clamp(40px,5vw,64px)] leading-[1.1] font-light tracking-tight max-w-4xl"
          >
            O caminho do <br />
            <span className="italic text-petroleum/40">primeiro contato</span> até a resolução
          </motion.h2>
        </div>

        {/* Timeline Desktop */}
        <div className="relative hidden lg:block pt-0 pb-20">
          {/* Base Background Line */}
          <div className="absolute top-[28px] left-0 w-full h-[1px] bg-petroleum/10" />
          
          {/* Static petroleum Line */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-[28px] left-0 h-[1px] bg-petroleum z-20" 
          />

          <div className="grid grid-cols-6 gap-8 relative z-30">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Step Number Circle */}
                <div className="mb-12 flex justify-center">
                  <div className="w-14 h-14 border border-petroleum/20 flex items-center justify-center bg-white group-hover:border-petroleum group-hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] transition-all duration-700 rounded-full">
                    <span className="text-[14px] font-sans font-bold tracking-widest text-petroleum">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h3 className="font-serif italic text-petroleum text-lg lg:text-[20px] mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                    {step.title}
                  </h3>
                  <p className="text-refined-gray text-[14px] leading-relaxed font-light group-hover:text-petroleum transition-colors duration-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden space-y-16 relative">
          {/* Vertical Base Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-petroleum/5" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex gap-8 group"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 border border-petroleum/10 flex items-center justify-center bg-white group-hover:border-petroleum transition-all duration-500 rounded-full shrink-0">
                  <span className="text-xs font-bold text-petroleum">{step.number}</span>
                </div>
              </div>
              <div className="pt-2">
                <h3 className="font-serif italic text-petroleum text-xl mb-3">{step.title}</h3>
                <p className="text-refined-gray text-sm leading-relaxed font-light">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
