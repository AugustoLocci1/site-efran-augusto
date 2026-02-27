
import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white scroll-mt-20" id="sobre">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm border-l-4 border-primary pl-4">Sobre a Efran Engenharia</h2>
              <h3 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight">
                Segurança e eficiência na base da sua construção
              </h3>
            </div>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Somos especialistas em engenharia de fundações, focados em oferecer segurança através da tecnologia de hélice contínua monitorada. Nossa equipe técnica garante a precisão que sua obra necessita, desde a análise do solo até a execução final.
              </p>
              <p>
                Combinamos experiência prática com equipamentos de última geração para entregar fundações que sustentam grandes projetos industriais, comerciais e residenciais.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 transition-shadow hover:shadow-md">
                <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Certificação Técnica</h4>
                  <p className="text-sm text-slate-500">Equipe 100% registrada no CREA e normas de segurança.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 transition-shadow hover:shadow-md">
                <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Maquinário Próprio</h4>
                  <p className="text-sm text-slate-500">Alta disponibilidade e manutenção preventiva rigorosa.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                alt="Engineering team at site" 
                className="object-cover w-full h-[500px] md:h-[600px] transform group-hover:scale-110 transition-transform duration-1000" 
                src={IMAGES.ABOUT_TEAM} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="flex items-center gap-6 text-white bg-primary/20 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <span className="text-6xl font-black text-white">10+</span>
                  <span className="font-bold text-lg uppercase tracking-tight leading-none">Anos de<br/>Experiência</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
