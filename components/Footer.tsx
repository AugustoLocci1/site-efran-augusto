
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-300 py-20 border-t border-slate-800" id="contato">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8 lg:col-span-1">
            <a href="#" className="inline-block">
              <Logo />
            </a>
            <p className="text-lg text-slate-400 leading-relaxed">
              Excelência em fundações profundas e hélice contínua monitorada. Construindo as bases sólidas do progresso.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-2xl">share</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-2xl">photo_camera</span>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-white font-black text-xl tracking-tight uppercase">Contato</h3>
            <div className="flex flex-col gap-6">
              <a className="flex items-center gap-4 hover:text-primary transition-colors text-lg" href={`tel:${CONTACT_INFO.PHONE}`}>
                <span className="material-symbols-outlined text-primary">call</span>
                {CONTACT_INFO.PHONE}
              </a>
              <a className="flex items-center gap-4 hover:text-primary transition-colors text-lg" href={`mailto:${CONTACT_INFO.EMAIL}`}>
                <span className="material-symbols-outlined text-primary">mail</span>
                {CONTACT_INFO.EMAIL}
              </a>
              <div className="flex items-start gap-4 text-lg leading-relaxed">
                <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">location_on</span>
                <span>
                  {CONTACT_INFO.ADDRESS}<br />
                  CEP: {CONTACT_INFO.CEP}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-white font-black text-xl tracking-tight uppercase">Serviços</h3>
            <div className="flex flex-col gap-4 text-lg">
              <a className="hover:text-primary transition-colors" href="#servicos">Hélice Contínua</a>
              <a className="hover:text-primary transition-colors" href="#servicos">Projetos de Fundação</a>
              <a className="hover:text-primary transition-colors" href="#servicos">Sondagem SPT</a>
              <a className="hover:text-primary transition-colors" href="#servicos">Consultoria Técnica</a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-white font-black text-xl tracking-tight uppercase">Links Rápidos</h3>
            <div className="flex flex-col gap-4 text-lg">
              <a className="hover:text-primary transition-colors" href="#sobre">Sobre a Empresa</a>
              <a className="hover:text-primary transition-colors" href="#beneficios">Tecnologia</a>
              <a className="hover:text-primary transition-colors" href="#diferenciais">Diferenciais</a>
              <a className="hover:text-primary transition-colors" href="#trabalhe-conosco">Trabalhe Conosco</a>
              <a className="hover:text-primary transition-colors" href={CONTACT_INFO.WHATSAPP_LINK}>Solicitar Orçamento</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-base text-slate-500">
          <p>© {new Date().getFullYear()} Efran Engenharia. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
            <a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
