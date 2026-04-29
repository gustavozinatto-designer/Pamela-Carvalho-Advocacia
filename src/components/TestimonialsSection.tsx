import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Em um momento difícil, encontrei clareza e segurança. Todo o processo foi conduzido com muita atenção e profissionalismo.",
    author: "Mariana S.",
    location: "São Paulo, SP"
  },
  {
    quote: "Fui atendido diretamente pela advogada do início ao fim. Isso fez toda diferença na confiança que senti.",
    author: "Ricardo F.",
    location: "Rio de Janeiro, RJ"
  },
  {
    quote: "Meu inventário parecia impossível de resolver. Com organização e estratégia, tudo avançou de forma tranquila.",
    author: "Cláudia A.",
    location: "Curitiba, PR"
  },
  {
    quote: "Gostei muito da forma humana e objetiva como fui orientada. Sem complicações desnecessárias.",
    author: "Fernanda M.",
    location: "Belo Horizonte, MG"
  },
  {
    quote: "Profissional séria, acessível e extremamente preparada. Recomendo para quem busca segurança jurídica real.",
    author: "Carlos T.",
    location: "Brasília, DF"
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="relative py-20 sm:py-24 lg:py-32 bg-[#050B13] overflow-hidden flex items-center justify-center min-h-[550px] sm:min-h-[500px] border-t border-white/5">
      {/* Background Image - Subtle Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.22] grayscale">
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000" 
          alt="Boutique law office interior" 
          className="w-full h-full object-cover contrast-[1.1] brightness-[0.8]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Signature Petroleum Glow */}
      <div className="absolute bottom-0 right-1/4 w-[min(600px,100vw)] h-[min(600px,100vw)] bg-petroleum/10 blur-[150px] rounded-full translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10 text-center flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-[1px] bg-white/20 shrink-0" />
          <span className="text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/60 font-bold">
            Depoimentos
          </span>
          <div className="w-8 h-[1px] bg-white/20 shrink-0" />
        </motion.div>

        <div className="relative w-full min-h-[400px] sm:min-h-[300px] lg:min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="w-full flex flex-col items-center justify-center min-w-0"
            >
              <div className="max-w-5xl w-full">
                <p className="text-white text-[clamp(20px,5vw,36px)] leading-[1.4] sm:leading-[1.5] font-serif italic tracking-tight mb-10 text-center px-4 sm:px-8 break-words">
                  “{testimonials[index].quote}”
                </p>
              </div>
              
              <div className="flex flex-col items-center min-w-0">
                <div className="w-12 h-[1px] bg-white/30 mb-5 shrink-0" />
                <span className="text-[12px] sm:text-[13px] lg:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-white mb-2 break-words">
                  {testimonials[index].author}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-medium text-white/60 break-words">
                  {testimonials[index].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="mt-12 sm:mt-16 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              id={`testimonial-dot-${i}`}
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[2px] transition-all duration-700 ease-out cursor-pointer ${
                index === i ? 'w-12 bg-white' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Side "Double Quote" decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] sm:text-[300px] font-serif italic text-white/[0.02] pointer-events-none select-none z-0">
        “ ”
      </div>
    </section>
  );
}
