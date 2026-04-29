import { motion } from 'motion/react';
import { MessageCircle, Mail } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section id="contato" className="relative py-20 sm:py-24 lg:py-48 overflow-hidden bg-[#050B13]">
      {/* Background with sophisticated law office and petroleum overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000" 
          alt="Escritório jurídico luxuoso" 
          className="w-full h-full object-cover grayscale opacity-20 contrast-125 brightness-75 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B13] via-[#050B13]/90 to-[#050B13]" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[min(500px,100vw)] h-[min(500px,100vw)] bg-petroleum/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[min(600px,100vw)] h-[min(600px,100vw)] bg-petroleum/15 blur-[150px] rounded-full translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8 sm:mb-10"
          >
            <div className="w-8 h-[1px] bg-white/10 shrink-0" />
            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/40 font-bold">
              PRÓXIMO PASSO
            </span>
            <div className="w-8 h-[1px] bg-white/10 shrink-0" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-white text-[clamp(24px,7vw,64px)] leading-[1.1] font-light italic mb-10 tracking-tight break-words max-w-full"
          >
            Você não precisa <br className="hidden xs:block" /> resolver isso sozinho.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg lg:text-[19px] leading-relaxed font-light max-w-2xl mb-12 sm:mb-20 break-words"
          >
            Uma conversa inicial já é suficiente para entender o que está em jogo e quais são os caminhos possíveis. Sem compromisso, sem jargão jurídico desnecessário.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto"
          >
            <a 
              href="https://wa.me/5517988045527?text=Olá Dra. Pâmela, gostaria de agendar uma consulta para tratar do meu caso."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-1 sm:flex-none sm:min-w-[200px] bg-white text-black font-sans font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] py-4 px-4 sm:px-10 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] text-center flex items-center justify-center"
            >
              <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <span>WHATSAPP</span>
              </div>
            </a>

            <a 
              href="mailto:contato@pamelacarvalho.adv.br"
              className="flex-1 sm:flex-none sm:min-w-[200px] border border-white/20 text-white font-sans font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] py-4 px-4 sm:px-10 rounded-sm transition-all duration-500 hover:bg-white/5 hover:border-white/40 flex items-center justify-center gap-2 sm:gap-3 text-center"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" strokeWidth={1.5} />
              <span>E-MAIL</span>
            </a>
          </motion.div>

          {/* Footnote removed per user request */}

        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-[1px] bg-gradient-to-b from-white/10 to-transparent" />
    </section>
  );
}
