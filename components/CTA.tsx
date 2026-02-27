
import React from 'react';
import { CONTACT_INFO } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Abstract Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-10">
        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
          Pronto para iniciar sua fundação com segurança?
        </h2>
        <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
          Não arrisque a base da sua obra. Fale agora com nossos especialistas e receba um orçamento personalizado para o seu projeto.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a 
            href={CONTACT_INFO.WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary hover:bg-slate-100 text-xl font-black py-5 px-12 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 group"
          >
            <span className="material-symbols-outlined text-3xl">chat</span>
            Solicitar Orçamento via WhatsApp
          </a>
          <p className="text-blue-200 text-base font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Engenheiros online para resposta rápida agora
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
