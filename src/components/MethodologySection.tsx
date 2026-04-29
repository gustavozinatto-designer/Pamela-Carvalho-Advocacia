import { motion } from 'motion/react';
import { ArrowUpRight, UserCheck, BarChart3, MessageSquare, Heart } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'Atendimento direto',
    description: 'Você fala diretamente com quem irá conduzir seu caso, sem repasses ou intermediários.',
    icon: UserCheck
  },
  {
    number: '02',
    title: 'Estratégia personalizada',
    description: 'Cada situação é analisada de forma única, considerando riscos, oportunidades e melhor caminho jurídico.',
    icon: BarChart3
  },
  {
    number: '03',
    title: 'Clareza em cada etapa',
    description: 'Orientações objetivas, linguagem acessível e acompanhamento constante durante todo o processo.',
    icon: MessageSquare
  },
  {
    number: '04',
    title: 'Firmeza com sensibilidade',
    description: 'Atuação técnica e segura, sem perder o cuidado necessário em questões familiares delicadas.',
    icon: Heart
  }
];

export default function MethodologySection() {
  const WHATSAPP_PHONE = "5517988045527";

  const handleConsult = () => {
    const message = encodeURIComponent("Olá Dra. Pâmela, estudei sua metodologia de trabalho e gostaria de iniciar um atendimento.");
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#050B13] overflow-hidden border-t border-white/5">
      {/* Background Image - Subtle Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] grayscale">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Refined workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-[min(800px,100vw)] h-[min(800px,100vw)] bg-petroleum/10 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-7 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4 sm:mb-6"
            >
              <div className="w-8 h-[1px] bg-white/20 shrink-0" />
              <span className="text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60 font-medium font-sans">
                METODOLOGIA
              </span>
            </motion.div>
 
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-white text-[clamp(24px,8vw,64px)] leading-[1.1] sm:leading-[1.05] font-normal tracking-tight break-words max-w-full"
            >
              Atendimento próximo, <br className="hidden xs:block" />
              <span className="italic text-white/40">estratégia definida</span> e <br className="hidden xs:block" />
              condução segura.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 lg:pt-16 min-w-0"
          >
            <p className="text-white/70 text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed max-w-full sm:max-w-xl mb-6 sm:mb-8 break-words">
              Cada caso exige atenção real, leitura técnica e decisões bem direcionadas. Por isso, o atendimento é individual, direto e estruturado para oferecer clareza desde o primeiro contato.
            </p>

            <button
              onClick={handleConsult}
              className="group relative flex items-center gap-3 py-2 w-auto"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/70 group-hover:text-white transition-colors duration-500 font-bold font-sans">
                Agendar consulta
              </span>
              <ArrowUpRight size={14} className="text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700 ease-out" />
            </button>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="relative border-t border-white/5 lg:border-none">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative p-6 xs:p-8 sm:p-10 lg:p-12 border-b border-white/5 min-w-0
                  ${index % 2 === 0 ? 'sm:border-r' : ''}
                  ${index >= pillars.length - 2 && index % 2 === 0 ? 'lg:border-b-0' : ''}
                  ${index >= pillars.length - 1 ? 'sm:border-b-0' : ''}
                `}
              >
                {/* Background Number */}
                <span className="absolute top-6 right-6 sm:top-8 sm:right-8 text-6xl sm:text-7xl lg:text-8xl font-serif text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-700 font-bold select-none pointer-events-none">
                  {pillar.number}
                </span>

                <div className="relative z-10 w-full min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8 group-hover:border-white/30 transition-all duration-500">
                    <pillar.icon size={16} sm:size={18} strokeWidth={1.2} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-serif text-white text-lg sm:text-xl lg:text-[24px] font-normal leading-tight tracking-tight mb-3 sm:mb-4 break-words">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-white/60 text-xs sm:text-sm lg:text-[16px] leading-relaxed font-normal max-w-full sm:max-w-[280px] md:max-w-xs break-words">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
