
import React from 'react';
import { IMAGES, CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex min-h-[700px] flex-col justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `linear-gradient(rgba(15, 26, 35, 0.75), rgba(15, 26, 35, 0.85)), url("${IMAGES.HERO_BG}")` }}
    >
      <div className="max-w-4xl px-6 text-center flex flex-col items-center gap-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-white text-xs font-bold uppercase tracking-widest">Especialistas em Fundações</span>
        </div>
        
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
          Soluções em Fundações com <br />
          <span className="text-primary italic">Hélice Contínua</span>
        </h1>
        
        <p className="text-slate-200 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
          Tecnologia, segurança e precisão para sua obra. Executamos fundações profundas monitoradas com agilidade e qualidade técnica superior.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-4">
          <a 
            href={CONTACT_INFO.WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 bg-primary hover:bg-primary-dark transition-all rounded-lg text-white text-lg font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 duration-300"
          >
            <span className="material-symbols-outlined">chat</span>
            Falar com Engenheiro
          </a>
          <a 
            href="#servicos"
            className="h-14 px-10 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm rounded-lg text-white text-lg font-medium flex items-center justify-center transition-all hover:border-white/50"
          >
            Ver Nossos Serviços
          </a>
        </div>
      </div>
      
      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <span className="material-symbols-outlined text-white/50 text-4xl">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
