
import React from 'react';
import { QualityCardProps } from '../types';

const QualityCard: React.FC<QualityCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-primary hover:shadow-xl transition-all duration-300 group">
    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-8">
      <span className="material-symbols-outlined text-4xl font-black">{icon}</span>
    </div>
    <h3 className="font-black text-slate-900 text-2xl mb-4 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
  </div>
);

const Quality: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-20" id="diferenciais">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Nosso Compromisso</h2>
          <h3 className="text-slate-900 text-4xl font-black">O Padrão Efran de Qualidade</h3>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">Diferenciais técnicos e operacionais que garantem o sucesso e a segurança da sua fundação.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <QualityCard 
            icon="speed" 
            title="Agilidade" 
            description="Cumprimento rigoroso de cronogramas. Sabemos que a fundação é o coração do prazo da obra." 
          />
          <QualityCard 
            icon="monitor_heart" 
            title="Monitoramento" 
            description="Sensores de alta precisão que garantem a integridade e profundidade exata de cada estaca executada." 
          />
          <QualityCard 
            icon="engineering" 
            title="Corpo Técnico" 
            description="Engenheiros experientes acompanham 100% da execução para resolver imprevistos em tempo real." 
          />
          <QualityCard 
            icon="verified" 
            title="Garantia" 
            description="Total segurança jurídica e técnica com emissão de ART e relatórios detalhados de execução." 
          />
        </div>
      </div>
    </section>
  );
};

export default Quality;
