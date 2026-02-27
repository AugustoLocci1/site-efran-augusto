
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const WorkWithUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp message
        const message = `Olá, meu nome é ${formData.name}. Tenho interesse na vaga para área: ${formData.position}.\n\n` +
            `E-mail: ${formData.email}\n` +
            `Telefone: ${formData.phone}\n\n` +
            `Resumo/Experiência: ${formData.experience}`;

        const encodedMessage = encodeURIComponent(message);
        // Remove non-numeric characters from phone for the URL
        const phoneDigits = CONTACT_INFO.PHONE.replace(/\D/g, '');
        const whatsappUrl = `https://wa.me/55${phoneDigits}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        setSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', position: '', experience: '' });
        }, 5000);
    };

    return (
        <section id="trabalhe-conosco" className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Trabalhe <span className="text-primary">Conosco</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Faça parte da nossa equipe. Buscamos talentos apaixonados por engenharia e inovação para construir o futuro das fundações.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                    <div className="bg-primary p-12 text-white md:w-1/3 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6">Por que a Efran?</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/80">workspace_premium</span>
                                <span>Projetos de alta tecnologia</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/80">trending_up</span>
                                <span>Crescimento acelerado</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/80">groups</span>
                                <span>Ambiente colaborativo</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 md:p-12 md:w-2/3">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-green-600">check_circle</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Currículo Enviado!</h3>
                                <p className="text-slate-600">Agradecemos seu interesse. Nossa equipe de RH analisará seu perfil.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Seu nome"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="seu@email.com"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Telefone</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="(00) 00000-0000"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Área de Interesse</label>
                                        <select
                                            required
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none bg-white"
                                        >
                                            <option value="">Selecione...</option>
                                            <option value="engenharia">Engenharia</option>
                                            <option value="operacional">Operacional</option>
                                            <option value="administrativo">Administrativo</option>
                                            <option value="comercial">Comercial</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Experiência ou Link do LinkedIn/CV</label>
                                    <textarea
                                        required
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Conte um pouco sobre você ou cole o link do seu currículo/LinkedIn..."
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Enviar Candidatura
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkWithUs;
