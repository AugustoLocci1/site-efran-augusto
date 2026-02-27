
import React from 'react';
import { IMAGES, CONTACT_INFO } from '../constants';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, imageUrl, tag, buttonLabel }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group h-full">
    <div className="h-72 bg-cover bg-center relative overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      {tag && (
        <div className="absolute top-4 left-4">
          <span className="bg-primary px-3 py-1.5 rounded-lg text-xs font-black uppercase text-white shadow-lg">
            {tag}
          </span>
        </div>
      )}
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-3xl font-black text-slate-900 mb-5">{title}</h3>
      <p className="text-slate-600 text-lg mb-8 flex-grow leading-relaxed">
        {description}
      </p>
      <ul className="space-y-4 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
            <span className="material-symbols-outlined text-primary font-black">check_circle</span>
            {f}
          </li>
        ))}
      </ul>
      <a 
        href={CONTACT_INFO.WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-black text-lg transition-all text-center flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white"
      >
        {buttonLabel}
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 scroll-mt-20" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">O Que Fazemos</h2>
          <h3 className="text-slate-900 text-4xl md:text-5xl font-black">Nossos Serviços Especializados</h3>
          <p className="text-slate-600 text-lg">
            Soluções completas em geotecnia e fundações para obras de diversos portes, com tecnologia de ponta e equipe técnica dedicada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ServiceCard 
            tag="Carro Chefe"
            title="Hélice Contínua Monitorada"
            description="A solução ideal para fundações profundas em diversos tipos de solo. Processo executivo sem vibrações, com alta produtividade e monitoramento eletrônico em tempo real."
            imageUrl={IMAGES.SERVICE_HELICE}
            features={[
              "Execução rápida e limpa",
              "Monitoramento computadorizado em tempo real",
              "Ideal para áreas urbanas e vizinhança sensível"
            ]}
            buttonLabel="Solicitar Cotação Agora"
          />
          
          <ServiceCard 
            title="Estudos e Projetos de Fundação"
            description="Não executamos apenas a obra, oferecemos o suporte técnico completo. Projetos otimizados para garantir segurança com a melhor relação custo-benefício."
            imageUrl={IMAGES.SERVICE_ESTUDOS}
            features={[
              "Análise de sondagem SPT completa",
              "Dimensionamento técnico de estacas",
              "Consultoria especializada em geotecnia"
            ]}
            buttonLabel="Falar com Especialista"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
