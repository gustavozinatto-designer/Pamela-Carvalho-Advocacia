import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Atuação', href: '#atuacao' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Próximo Passo', href: '#contato' },
  ];

  const whatsappLink = "https://wa.me/5517988045527?text=Olá Dra. Pâmela, gostaria de agendar uma consulta para tratar de um assunto familiar.";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
      },
    }),
  };

  return (
    <section id="inicio" className="relative w-full min-h-[100dvh] flex flex-col bg-deep-navy overflow-hidden">
      {/* Background with uniform overlay */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source 
            media="(min-width: 1921px)" 
            srcSet="https://i.postimg.cc/HxMJDjnY/photorealistic-lawyer-environment-(2).webp" 
          />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src="https://i.postimg.cc/rFMYpp7Y/photorealistic-lawyer-environment.webp"
            alt="Dra. Pâmela Regina Carvalho"
            className="w-full h-full object-cover object-center block"
            referrerPolicy="no-referrer"
          />
        </picture>
        <div className="absolute inset-0 overlay-premium z-10" />
      </div>

      {/* Persistent Minimalist Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-deep-navy/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6 lg:py-10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-20 w-full relative">
          <div 
            className="flex items-center cursor-pointer min-w-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="https://i.postimg.cc/26wdcvFh/Ativo-1Logo.png" 
              alt="Logo Pâmela Regina Carvalho" 
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled ? 'h-6 sm:h-8 lg:h-9' : 'h-8 sm:h-12 lg:h-[52px] xl:h-[56px] max-w-[200px] sm:max-w-[260px] lg:max-w-[300px]'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-10 xl:space-x-12">
            <div className="flex space-x-8 xl:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[11px] lg:text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 px-6 py-2.5 text-[11px] lg:text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-deep-navy transition-all duration-500 font-medium"
            >
              Agendar Conversa
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            className="lg:hidden text-white flex items-center gap-2 group p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full bg-white/5 backdrop-blur-sm transition-all">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </header>

      {/* Full Content Grid - Aligned to Bottom on Mobile, Centered on Desktop */}
      <div className="relative z-20 flex-grow flex flex-col justify-end lg:justify-center pb-0 lg:pb-0">
        <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-20 grid grid-cols-12 min-w-0">
          <div className="col-span-12 flex flex-col items-start text-left min-w-0">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8"
            >
              <div className="w-8 h-[1px] bg-metallic/40" />
              <span className="text-[9px] sm:text-[11px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-metallic font-medium">
                Direito de Família e Sucessões
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-serif text-white text-[clamp(28px,8vw,72px)] leading-[1.1] sm:leading-[1.05] font-light max-w-full tracking-tight mb-4 sm:mb-10 break-words"
            >
              Seu problema familiar <br className="hidden sm:block" />
              não precisa se tornar <br className="hidden sm:block" />
              <span className="italic font-extralight text-white/90">um desgaste maior.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white/80 text-base sm:text-lg lg:text-[20px] max-w-full sm:max-w-xl font-normal leading-relaxed mb-4 sm:mb-12 break-words"
            >
              Divórcios, inventários e conflitos conduzidos com estratégia, clareza e sensibilidade jurídica.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto mb-4 sm:mb-12 lg:mb-0"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-deep-navy px-6 sm:px-12 py-4 text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold transition-all duration-300 hover:bg-metallic text-center shadow-xl flex items-center justify-center gap-3"
              >
                Agendar Conversa
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Indicators - Horizontal Carousel for Mobile/Tablet, Static for Desktop */}
      <div className="relative z-20 w-full mt-auto py-8 lg:py-10 border-t border-white/5 bg-black/10 backdrop-blur-[2px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity 
              }}
              className="flex whitespace-nowrap gap-12 items-center w-max px-6"
            >
              {[
                'Atendimento direto',
                'Online em todo Brasil',
                'Solução inteligente',
                'Atendimento direto',
                'Online em todo Brasil',
                'Solução inteligente',
              ].map((text, i) => (
                <div key={`${text}-${i}`} className="flex items-center gap-12">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/60 font-medium whitespace-nowrap">
                    {text}
                  </span>
                  <div className="h-[1px] w-8 bg-white/10" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Static View */}
          <div className="hidden lg:flex items-center justify-between px-20">
            {[
              'Atendimento direto',
              'Online em todo Brasil',
              'Solução inteligente',
            ].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-8 group"
              >
                <span className="text-sm uppercase tracking-[0.3em] text-white/60 font-medium group-hover:text-white transition-colors text-shadow-sm">
                  {text}
                </span>
                {i < 2 && <div className="h-[1px] w-12 bg-white/10" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - More Premium Drawer Style */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, x: 0, pointerEvents: 'auto' } : { opacity: 0, x: '100%', pointerEvents: 'none' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[60] bg-deep-navy/98 backdrop-blur-2xl flex flex-col lg:hidden"
      >
        <div className="flex items-center justify-between p-6 sm:p-10 border-b border-white/5">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/26wdcvFh/Ativo-1Logo.png" 
              alt="Logo Pâmela Regina Carvalho" 
              className="h-7 sm:h-9 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <button
            className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} className="text-white/80" />
          </button>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center p-6 space-y-6 sm:space-y-8 overflow-y-auto">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: 10 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleNavClick(e, item.href);
              }}
              className="text-lg sm:text-2xl font-serif text-white tracking-[0.2em] uppercase hover:text-metallic transition-colors text-center w-full py-2 break-words"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="p-10 flex flex-col gap-6 items-center border-t border-white/5 mt-auto">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-deep-navy px-10 py-5 text-[11px] uppercase tracking-[0.3em] font-semibold text-center"
          >
            Agendar Consulta
          </a>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-light text-center">
            Atendimento Especializado
          </p>
        </div>
      </motion.div>
    </section>
  );
}
