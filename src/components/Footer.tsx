import { motion } from 'motion/react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050B13] text-white overflow-hidden pt-24 pb-8 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Column 1 - Brand & Philosophy */}
          <div className="lg:col-span-5 pr-0 lg:pr-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-[28px] lg:text-[32px] tracking-tight italic mb-2">
                Pâmela Regina Carvalho
              </h2>
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8">
                Advocacia Familiar
              </p>
              <p className="text-white/50 font-light text-[15px] lg:text-[16px] leading-relaxed max-w-sm">
                Atendimento jurídico estratégico em Direito de Família e Sucessões, com atuação humana, técnica e personalizada.
              </p>
            </motion.div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-white/80 mb-8">
                Navegação
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Início', id: 'inicio' },
                  { name: 'Sobre', id: 'sobre' },
                  { name: 'Atuação', id: 'atuacao' },
                  { name: 'Depoimentos', id: 'depoimentos' },
                  { name: 'FAQ', id: 'faq' },
                  { name: 'Próximo Passo', id: 'contato' }
                ].map((item) => (
                  <li key={item.name}>
                    <button 
                      onClick={() => handleScroll(item.id)}
                      className="text-white/40 hover:text-white transition-colors duration-300 font-sans text-sm tracking-wide"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-white/80 mb-8">
                Contato
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://wa.me/5517988045527?text=Olá Dra. Pâmela, encontrei seu contato pelo rodapé e gostaria de agendar uma consulta." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 font-sans text-[15px]"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/dra.pamelareginas.carvalho/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 font-sans text-[15px]"
                  >
                    <Instagram size={18} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/pamelarcarvalho-juridico-adm-direito/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 font-sans text-[15px]"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/20 font-sans text-[10px] lg:text-[11px] tracking-wide text-center md:text-left"
          >
            © {currentYear} Pâmela Regina Carvalho. Todos os direitos reservados.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-[1px] bg-white/10" />
            <a 
              href="https://www.instagram.com/gustavozinatto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 font-sans text-[10px] lg:text-[11px] tracking-[0.2em] uppercase italic hover:text-white/40 transition-colors"
            >
              DESENVOLVIDO POR GUSTAVO ZINATTO
            </a>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
