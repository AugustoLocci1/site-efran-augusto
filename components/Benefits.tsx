
import React from 'react';
import { IMAGES } from '../constants';
import { BenefitItemProps } from '../types';

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
      <span className="material-symbols-outlined text-4xl">{icon}</span>
    </div>
    <div className="space-y-2">
      <h4 className="font-black text-slate-900 text-xl">{title}</h4>
      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
    </div>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden scroll-mt-20" id="beneficios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[550px] md:h-[650px]">
              <img 
                className="w-full h-full object-cover" 
                src={IMAGES.BENEFITS_DRILL} 
                alt="Detalhe técnico hélice contínua" 
              />
              <div className="absolute bottom-8 right-8 z-20 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 max-w-xs animate-in slide-in-from-right duration-1000">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600">
                    <span className="material-symbols-outlined font-black">trending_up</span>
                  </div>
                  <span className="font-black text-slate-900 text-xl">Alta Produtividade</span>
                </div>
                <p className="text-slate-600">Perfuração de múltiplas estacas por dia, garantindo o cronograma da sua obra.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Tecnologia Construtiva</h2>
              <h3 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight">
                Por que escolher <br />Hélice Contínua?
              </h3>
              <p className="text-slate-600 text-xl leading-relaxed">
                O método de hélice contínua monitorada revolucionou a engenharia de fundações, superando métodos tradicionais em rapidez e segurança.
              </p>
            </div>
            
            <div className="space-y-10">
              <BenefitItem 
                icon="vibration" 
                title="Ausência de Vibração" 
                description="Perfeito para áreas urbanas densas e próximas a construções vizinhas sensíveis, eliminando riscos de danos a terceiros." 
              />
              <BenefitItem 
                icon="water_drop" 
                title="Execução Abaixo do Nível D'água" 
                description="Capacidade de perfuração mesmo em solos saturados (presença de lençol freático), sem necessidade de revestimento metálico." 
              />
              <BenefitItem 
                icon="cleaning_services" 
                title="Canteiro Limpo e Organizado" 
                description="Processo executivo mais limpo que reduz drasticamente a geração de lama e facilita a logística da obra." 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
