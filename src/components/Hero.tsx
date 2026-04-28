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
    <section id="inicio" className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col bg-deep-navy">
      {/* Background with uniform overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="https://i.postimg.cc/rFMYpp7Y/photorealistic-lawyer-environment.webp"
          alt="Dra. Pâmela Regina Carvalho em seu escritório de advocacia"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 overlay-premium z-10" />
      </div>

      {/* Persistent Minimalist Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-deep-navy/95 backdrop-blur-sm py-4 border-b border-white/5' : 'bg-transparent py-10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 lg:px-20 w-full">
          <div className="flex flex-col group cursor-pointer">
            <span className="font-serif text-white text-lg lg:text-xl tracking-[0.12em] font-light transition-colors hover:text-metallic">
              PÂMELA REGINA CARVALHO
            </span>
            <span className="text-metallic text-[10px] tracking-[0.25em] uppercase mt-1 font-light opacity-80">
              Advocacia Familiar
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-10">
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
            className="lg:hidden text-white opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full Content Grid */}
      <div className="relative z-20 flex-grow flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-8 lg:px-20 grid grid-cols-12 pt-16">
          <div className="col-span-12 lg:col-span-12 flex flex-col items-start">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[10px] lg:text-[11px] uppercase tracking-[0.4em] text-metallic mb-6 font-light"
            >
              Direito de Família e Sucessões
            </motion.span>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-serif text-white text-[clamp(40px,5vw,72px)] leading-[1.05] font-light max-w-4xl tracking-tight mb-8"
            >
              Seu problema familiar <br />
              não precisa se tornar <br />
              <span className="italic font-extralight text-white/90">um desgaste maior.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white/60 text-base lg:text-[18px] max-w-xl font-light leading-relaxed mb-10"
            >
              Divórcios, inventários e conflitos conduzidos com estratégia, clareza e sensibilidade jurídica.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-deep-navy px-12 py-5 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-metallic text-center block w-full sm:w-auto"
              >
                Agendar Consulta
              </a>
              <button className="group flex items-center space-x-3 text-white/80 hover:text-white transition-colors py-2">
                <span className="text-[11px] uppercase tracking-[0.2em] border-b border-white/20 group-hover:border-white transition-all">
                  Conhecer atuação
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Indicators - Restored for better transition */}
      <div className="relative z-20 w-full mt-auto py-10 px-8 lg:px-20 border-t border-white/5 bg-black/10 backdrop-blur-[2px]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {[
            'Atendimento direto',
            'Online em todo Brasil',
            'Foco em solução inteligente',
          ].map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-white/40 font-light group-hover:text-white/60 transition-colors">
                {text}
              </span>
              {i < 2 && <div className="hidden md:block h-[1px] w-12 bg-white/10" />}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
        className="fixed inset-0 z-[60] bg-deep-navy/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-12 lg:hidden"
      >
        <button
          className="absolute top-8 right-8 text-white/80"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleNavClick(e, item.href);
            }}
            className="text-2xl font-serif text-white tracking-widest uppercase hover:text-metallic transition-colors text-center"
          >
            {item.name}
          </a>
        ))}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/30 px-10 py-4 text-xs uppercase tracking-widest text-white mt-8 text-center"
        >
          Agendar Consulta
        </a>
      </motion.div>
    </section>
  );
}
