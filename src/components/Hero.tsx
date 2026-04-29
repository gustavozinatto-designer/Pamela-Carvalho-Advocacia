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
    <section id="inicio" className="relative w-full min-h-[100dvh] lg:h-screen lg:min-h-[700px] overflow-hidden flex flex-col bg-deep-navy">
      {/* Background with uniform overlay */}
      <div className="absolute inset-0 z-0">
          <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="https://i.postimg.cc/rFMYpp7Y/photorealistic-lawyer-environment.webp"
          alt="Dra. Pâmela Regina Carvalho em seu escritório de advocacia"
          className="w-full h-full object-cover object-[75%_center] sm:object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 overlay-premium z-10" />
      </div>

      {/* Persistent Minimalist Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-deep-navy/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6 lg:py-10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 sm:px-10 lg:px-20 w-full">
          <div className="flex flex-col group cursor-pointer">
            <span className="font-serif text-white text-[13px] xs:text-sm sm:text-lg lg:text-xl tracking-[0.08em] sm:tracking-[0.12em] font-light transition-colors hover:text-metallic whitespace-nowrap">
              PÂMELA REGINA CARVALHO
            </span>
            <span className="text-metallic text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase mt-0.5 sm:mt-1 font-light opacity-80">
              Advocacia Familiar
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-10 xl:space-x-12">
            <div className="flex space-x-8 xl:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors font-light"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-deep-navy transition-all duration-500 font-light"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            className="lg:hidden text-white flex items-center gap-2 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-light opacity-60 group-hover:opacity-100 transition-opacity hidden sm:block">Menu</span>
            <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-all">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </header>

      {/* Full Content Grid */}
      <div className="relative z-20 flex-grow flex items-center pt-24 lg:pt-0">
        <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-20 grid grid-cols-12">
          <div className="col-span-12 flex flex-col items-start text-left">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-4 mb-6 sm:mb-8"
            >
              <div className="w-8 h-[1px] bg-metallic/40" />
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.4em] text-metallic font-light">
                Direito de Família e Sucessões
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-serif text-white text-[clamp(34px,8vw,72px)] leading-[1.1] sm:leading-[1.05] font-light max-w-4xl tracking-tight mb-8 sm:mb-10"
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
              className="text-white/60 text-sm sm:text-base lg:text-[18px] max-w-xl font-light leading-relaxed mb-10 sm:mb-12"
            >
              Divórcios, inventários e conflitos conduzidos com estratégia, clareza e sensibilidade jurídica.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center w-full sm:w-auto"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-deep-navy px-8 sm:px-12 py-5 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-metallic text-center"
              >
                Agendar Consulta
              </a>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('atuacao');
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                }}
                className="group flex items-center justify-center sm:justify-start space-x-3 text-white/80 hover:text-white transition-colors py-3"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] border-b border-white/20 group-hover:border-white transition-all">
                  Conhecer atuação
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Indicators - Refined for mobile/tablet */}
      <div className="relative z-20 w-full mt-auto py-8 lg:py-10 px-6 sm:px-10 lg:px-20 border-t border-white/5 bg-black/10 backdrop-blur-[2px]">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-y-4 gap-x-8 sm:gap-x-12">
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
              className="flex items-center gap-4 sm:gap-8 group"
            >
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-white/40 font-light group-hover:text-white/60 transition-colors">
                {text}
              </span>
              {i < 2 && <div className="hidden lg:block h-[1px] w-12 bg-white/10" />}
            </motion.div>
          ))}
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
          <div className="flex flex-col">
            <span className="font-serif text-white text-base tracking-widest font-light">
              PÂMELA REGINA
            </span>
            <span className="text-metallic text-[8px] tracking-[0.3em] uppercase font-light">
              Advocacia Familiar
            </span>
          </div>
          <button
            className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} className="text-white/80" />
          </button>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center p-6 space-y-8">
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
              className="text-xl sm:text-2xl font-serif text-white tracking-[0.2em] uppercase hover:text-metallic transition-colors text-center w-full py-2"
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
