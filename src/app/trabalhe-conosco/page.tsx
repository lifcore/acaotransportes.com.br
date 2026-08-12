'use client';

import { useState } from 'react';

export default function TrabalheConoscoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-16 bg-[#FAF9F6] min-h-[80vh]">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl font-bold text-[#071B2D] mb-2">Faça Parte da Ação Transportes</h1>
            <p className="text-sm text-gray-600 mb-8">
              Estamos construindo uma nova fase e buscamos profissionais qualificados que queiram evoluir conosco.
            </p>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/trabalhe-conosco.jpg"
                alt="Profissional utilizando equipamentos de proteção individual"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-[#071B2D] text-white p-8 rounded text-center">
                <h2 className="text-xl font-bold mb-2">Currículo cadastrado com sucesso!</h2>
                <p className="text-xs text-gray-300">Agradecemos o interesse. Entraremos em contato caso haja oportunidades compatíveis.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white p-8 rounded border border-gray-200 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071B2D] mb-1">Nome Completo *</label>
                    <input required type="text" className="w-full border border-gray-300 p-2.5 rounded text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#071B2D] mb-1">Telefone / Celular *</label>
                    <input required type="tel" className="w-full border border-gray-300 p-2.5 rounded text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071B2D] mb-1">E-mail *</label>
                    <input required type="email" className="w-full border border-gray-300 p-2.5 rounded text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#071B2D] mb-1">Cidade / Estado *</label>
                    <input required type="text" className="w-full border border-gray-300 p-2.5 rounded text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071B2D] mb-1">Cargo Desejado *</label>
                    <input required type="text" className="w-full border border-gray-300 p-2.5 rounded text-sm" placeholder="Ex: Motorista, Logística, Administrativo" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#071B2D] mb-1">Categoria CNH (se aplicável)</label>
                    <input type="text" className="w-full border border-gray-300 p-2.5 rounded text-sm" placeholder="Ex: CNH C, D, E" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B2D] mb-1">Resumo das Experiências</label>
                  <textarea rows={3} className="w-full border border-gray-300 p-2.5 rounded text-sm"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#123B57] text-white font-bold py-3.5 rounded transition-colors hover:bg-[#071B2D]">
                  Enviar Candidatura
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
