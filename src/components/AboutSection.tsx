import { motion } from 'motion/react';
import { Heart, Sparkles, Eye } from 'lucide-react';

const valueBlocks = [
  {
    title: 'Técnica e humanidade como complementos.',
    description: 'Casos de família envolvem emoção. Isso nunca é ignorado — faz parte da estratégia.',
    icon: Heart,
  },
  {
    title: 'Advocacia moderna com experiência real.',
    description: 'Agilidade e visão contemporânea, alicerçadas em prática sólida e responsabilidade técnica.',
    icon: Sparkles,
  },
  {
    title: 'Clareza sobre o processo.',
    description: 'Você sabe o que está acontecendo no seu caso em cada etapa.',
    icon: Eye,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.21, 0.45, 0.32, 0.9],
    },
  }),
};

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Image Column - Balanced height */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="col-span-12 lg:col-span-12 xl:col-span-5 order-2 lg:order-1 sticky top-32"
          >
            <div className="relative">
              {/* Main Image with Editorial Frame - Increased aspect ratio for balance */}
              <div className="relative z-10 overflow-hidden rounded-[2px] shadow-2xl aspect-[3/4.5] xl:aspect-[3/5.2]">
                <img 
                  src="https://i.postimg.cc/25gCpWcT/Whats-App-Image-2026-04-20-at-07-54-49.jpg" 
                  alt="Pâmela Regina Carvalho" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Caption - Bottom Left */}
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-[#08111f]/20 backdrop-blur-md px-5 py-3 rounded-[2px] border border-white/10">
                    <span className="block font-serif text-white text-lg leading-tight tracking-[0.02em]">Pâmela Regina S. Carvalho</span>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/70 mt-1 font-light">Advocacia Familiar</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge (Subtle Label) */}
              <div className="absolute top-10 -right-12 hidden xl:block z-20 bg-ice-white/90 backdrop-blur-md px-6 py-4 shadow-xl border border-petroleum/5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-petroleum font-medium block mb-1">Inscrita na OAB</span>
                <span className="text-xs font-serif italic text-petroleum opacity-70">Atuação Especializada</span>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="col-span-12 lg:col-span-12 xl:col-span-7 order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <motion.span
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="inline-block text-[10px] lg:text-[11px] uppercase tracking-[0.4em] text-refined-gray font-light"
              >
                SOBRE
              </motion.span>
              
              <motion.h2
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="font-serif text-petroleum text-[clamp(28px,3.5vw,48px)] leading-[1.2] font-light tracking-tight"
              >
                Uma advocacia feita para pessoas, não para processos
              </motion.h2>

              <div className="space-y-6 max-w-2xl">
                <motion.p
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-refined-gray text-base lg:text-lg leading-relaxed font-light"
                >
                  Atuo com Direito de Família e Sucessões porque acredito que questões jurídicas que envolvem família exigem mais do que técnica — exigem escuta real, estratégia clara e responsabilidade com cada detalhe.
                </motion.p>
                
                <motion.p
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-refined-gray text-base lg:text-lg leading-relaxed font-light italic border-l-2 border-metallic/30 pl-6 py-1"
                >
                  Meu modelo de trabalho é deliberadamente focado: poucos casos, atenção integral. Nenhum cliente é passado para assistentes ou terceiros. Quando você me contrata, é comigo que você fala — do início ao fim.
                </motion.p>
              </div>
            </div>

            {/* Value Blocks - Redesigned with Unique Icons */}
            <div className="space-y-8 pt-6">
              {valueBlocks.map((block, i) => (
                <motion.div
                  key={i}
                  custom={4 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group flex items-start gap-6"
                >
                  <div className="flex-shrink-0 mt-1">
                    {/* Consistent icon style with Section 02 but unique per block */}
                    <div className="w-12 h-12 flex items-center justify-center border border-petroleum/10 rounded-full transition-all duration-500 group-hover:border-petroleum group-hover:shadow-[0_0_20px_rgba(14,33,53,0.05)]">
                      <block.icon 
                        size={20} 
                        strokeWidth={1.2} 
                        className="text-petroleum/80 transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-serif text-petroleum text-xl lg:text-2xl font-light tracking-tight">
                      {block.title}
                    </h4>
                    <p className="text-refined-gray text-base lg:text-[16px] leading-relaxed font-light opacity-80 max-w-xl">
                      {block.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
