import { motion } from 'motion/react';
import { Gavel, Users, HeartHandshake, ShieldAlert, FileText, UserCheck, ArrowUpRight } from 'lucide-react';

const WHATSAPP_PHONE = "5517988045527";

const areas = [
  {
    number: '01',
    title: 'Inventário Judicial e Extrajudicial',
    description: 'Regularização de heranças com segurança jurídica, celeridade e estratégia para evitar conflitos desnecessários entre os herdeiros. Atuação tanto em cartório quanto no judiciário, conforme o caso.',
    message: 'Olá, gostaria de agendar uma consulta sobre Inventário.',
    icon: FileText
  },
  {
    number: '02',
    title: 'Divórcio — Consensual e Litigioso',
    description: 'Encerramento do vínculo conjugal com foco na resolução definitiva de questões patrimoniais e de guarda. Quando há acordo, agilidade. Quando há conflito, estratégia técnica firme.',
    message: 'Olá, gostaria de falar sobre Divórcio.',
    icon: HeartHandshake
  },
  {
    number: '03',
    title: 'Pensão Alimentícia',
    description: 'Fixação, revisão e execução de alimentos com clareza sobre direitos e obrigações — para quem paga e para quem recebe.',
    message: 'Olá, gostaria de saber mais sobre Pensão Alimentícia.',
    icon: Gavel
  },
  {
    number: '04',
    title: 'Guarda e Regulamentação de Visitas',
    description: 'Definição de modelos de guarda e visitas com prioridade para o bem-estar das crianças e para acordos duradouros — sem transformar filhos em objeto de disputa.',
    message: 'Olá, gostaria de falar sobre Guarda e Visitas.',
    icon: Users
  },
  {
    number: '05',
    title: 'União Estável',
    description: 'Reconhecimento e dissolução de união estável com segurança jurídica sobre direitos patrimoniais e obrigações de cada parte.',
    message: 'Olá, gostaria de falar sobre União Estável.',
    icon: UserCheck
  },
  {
    number: '06',
    title: 'Direito do Consumidor',
    description: 'Atuação complementar em demandas consumeristas, garantindo seus direitos frente a empresas e prestadores de serviço.',
    message: 'Olá, gostaria de falar sobre Direito do Consumidor.',
    icon: ShieldAlert
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.45, 0.32, 0.9]
    }
  }
};

export default function AreasSection() {
  const handleConsult = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      id="atuacao"
      className="py-24 lg:py-32 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #0C1724 0%, #08111B 100%)' }}
    >
      {/* Subtle Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-petroleum/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2 select-none pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-petroleum/5 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2 select-none pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
        
        {/* Editorial Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.4em] text-white/40 font-light font-sans">
                ATUAÇÃO
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-white text-[clamp(40px,5.5vw,82px)] leading-[1.02] font-light tracking-tight"
            >
              O que posso resolver <br />
              <span className="italic text-white/30">para você</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:max-w-xs xl:max-w-sm"
          >
            <p className="text-white/50 text-base lg:text-[17px] font-light leading-relaxed border-l border-white/10 pl-6">
              Atuação especializada nas demandas que mais impactam famílias e patrimônio — com foco prioritário em inventários e divórcios.
            </p>
          </motion.div>
        </div>

        {/* Grid of Cards - Dark Editorial Theme */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-[#091018] border border-white/5 p-10 lg:p-12 rounded-[4px] transition-all duration-700 hover:bg-[#0E1721] hover:border-white/10 flex flex-col h-full"
            >
              {/* Card Top: Icon and Subtle Number */}
              <div className="flex justify-between items-center mb-12">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-[8px] transition-all duration-500 group-hover:scale-110 group-hover:border-white/20">
                  <area.icon size={22} strokeWidth={1} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <span className="text-4xl lg:text-5xl font-serif text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-700 font-bold select-none">
                  {area.number}
                </span>
              </div>
              
              <h3 className="font-serif text-white text-2xl lg:text-[28px] font-light leading-tight tracking-tight mb-6">
                {area.title}
              </h3>
              
              <p className="text-white/40 text-sm lg:text-[15px] leading-relaxed font-light mb-auto">
                {area.description}
              </p>
              
              <div className="mt-12 pt-8 border-t border-white/5">
                <button 
                  onClick={() => handleConsult(area.message)}
                  className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all duration-500 group/btn font-sans"
                >
                  Consultar Especialista
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 transition-all duration-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
