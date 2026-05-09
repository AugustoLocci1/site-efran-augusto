
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Logo } from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-slate-300 hover:text-white font-medium transition-colors" href="#sobre">Sobre</a>
          <a className="text-slate-300 hover:text-white font-medium transition-colors" href="#servicos">Serviços</a>
          <a className="text-slate-300 hover:text-white font-medium transition-colors" href="#beneficios">Tecnologia</a>
          <a className="text-slate-300 hover:text-white font-medium transition-colors" href="#diferenciais">Diferenciais</a>
          <a className="text-slate-300 hover:text-white font-medium transition-colors" href="#trabalhe-conosco">Trabalhe Conosco</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="hidden sm:flex h-10 px-6 bg-white/10 hover:bg-white/20 border border-white/20 transition-all items-center justify-center rounded-lg text-white text-sm font-bold shadow-md"
            href={CONTACT_INFO.WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2 material-symbols-outlined text-[18px]">chat</span>
            Solicitar Orçamento
          </a>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-4">
            <a onClick={() => setIsMenuOpen(false)} className="text-slate-300 font-bold border-b border-white/10 pb-2 hover:text-white" href="#sobre">Sobre</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-slate-300 font-bold border-b border-white/10 pb-2 hover:text-white" href="#servicos">Serviços</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-slate-300 font-bold border-b border-white/10 pb-2 hover:text-white" href="#beneficios">Tecnologia</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-slate-300 font-bold border-b border-white/10 pb-2 hover:text-white" href="#diferenciais">Diferenciais</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-slate-300 font-bold border-b border-white/10 pb-2 hover:text-white" href="#trabalhe-conosco">Trabalhe Conosco</a>
            <a
              className="flex h-12 bg-white/10 hover:bg-white/20 border border-white/30 transition-colors items-center justify-center rounded-lg text-white font-bold"
              href={CONTACT_INFO.WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
