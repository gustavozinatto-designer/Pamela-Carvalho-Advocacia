import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Quanto vai me custar?",
    answer: "Os honorários variam conforme a complexidade do caso, modalidade (judicial ou extrajudicial) e extensão do acompanhamento. Na reunião inicial, você recebe clareza sobre os valores antes de qualquer comprometimento. Não trabalhamos com surpresas financeiras."
  },
  {
    question: "Quanto tempo vai levar?",
    answer: "Depende do tipo e da via escolhida. Inventários extrajudiciais e divórcios consensuais costumam ser resolvidos em semanas a poucos meses. Processos judiciais litigiosos têm prazo mais variável. O que posso garantir é que a estratégia sempre busca a via mais célere viável."
  },
  {
    question: "Você pode garantir o resultado?",
    answer: "Nenhum advogado ético faz essa promessa. O que posso garantir é análise honesta das possibilidades reais do seu caso, estratégia bem construída e dedicação integral à melhor condução possível."
  },
  {
    question: "Dá pra resolver sem ir à Justiça?",
    answer: "Em muitas situações, sim. Inventários sem conflito e divórcios consensuais podem ser feitos em cartório, de forma mais rápida e menos custosa. Sempre avaliamos essa possibilidade antes de acionar o judiciário."
  },
  {
    question: "Como funciona o atendimento online?",
    answer: "O atendimento remoto funciona com a mesma qualidade do presencial — reuniões por videochamada, documentação enviada digitalmente e comunicação direta. Atendo clientes em todo o Brasil por essa modalidade."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-40 bg-[#F9FBFC] overflow-hidden">
      {/* Structural Hairlines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-petroleum/5" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-32 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-petroleum/10" />
            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.6em] text-petroleum/40 font-medium font-sans">
              Dúvidas Frequentes
            </span>
            <div className="w-8 h-[1px] bg-petroleum/10" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-petroleum text-[clamp(28px,4vw,48px)] leading-tight font-light tracking-tight"
          >
            Perguntas que merecem <br className="hidden lg:block" /> respostas diretas
          </motion.h2>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`border-b last:border-b-0 transition-colors duration-500 ${
                openIndex === index ? 'border-petroleum/20' : 'border-petroleum/10'
              }`}
            >
              <button
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-7 sm:py-8 lg:py-10 flex items-center justify-between text-left group gap-6"
              >
                <span className={`text-lg sm:text-xl lg:text-[22px] font-serif transition-all duration-500 pr-2 leading-tight break-words ${
                  openIndex === index ? 'text-petroleum shadow-text-subtle' : 'text-petroleum/80 group-hover:text-petroleum'
                }`}>
                  {faq.question}
                </span>
                
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border border-petroleum/10 rounded-full transition-all duration-500 shrink-0 ${
                  openIndex === index ? 'bg-petroleum border-petroleum rotate-180' : 'rotate-0 sm:group-hover:border-petroleum'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-white" strokeWidth={1.5} />
                  ) : (
                    <Plus className="w-4 h-4 text-petroleum/40" strokeWidth={1.5} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 sm:pb-10 lg:pb-12 pr-4 sm:pr-12">
                      <p className="text-refined-gray text-base leading-relaxed font-light max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA or note */}
        <div className="mt-12 lg:mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-[1px] bg-petroleum/10 mb-6" />
            <p className="text-petroleum/40 font-sans text-[10px] tracking-widest uppercase">
              Ainda tem alguma dúvida?
            </p>
            <a 
              href="https://wa.me/5517988045527?text=Olá Dra. Pâmela, li as dúvidas frequentes e gostaria de agendar uma consulta para tratar do meu caso."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-petroleum font-sans font-bold text-[11px] tracking-[0.2em] uppercase hover:tracking-[0.3em] transition-all duration-500 border-b border-petroleum/20 hover:border-petroleum pb-1 block"
            >
              Falar com a Especialista
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
