import React, { useState } from 'react';
import { vopInfo } from '../data/vopData';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export const JoinSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь в будущем можно подключить отправку на почту или бэкенд
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка: Призыв к действию */}
          <div className="space-y-6">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 uppercase tracking-wider">
              Стати частиною спільноти
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Долучайтеся до Вільного Освітнього Простору
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              ВОП відкритий до людей, ідей та ініціатив. Ви можете долучитися до наших проєктів, запропонувати власну ініціативу, стати партнером чи другом[cite: 2].
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Електронна пошта для зв'язку</span>
                  <a href={`mailto:${vopInfo.email}`} className="font-semibold text-blue-600 hover:underline">
                    {vopInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка: Форма обратной связи */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Дякуємо за звернення!</h3>
                <p className="text-slate-600">
                  Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Надіслати ще одне повідомлення
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Напишіть нам</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Ваше ім'я</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Електронна пошта</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Тема звернення</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    placeholder="Наприклад: Пропозиція ініціативи / Участь"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Повідомлення</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white resize-none"
                    placeholder="Розкажіть трохи про себе або свою ідею..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <Send size={18} />
                  Надіслати повідомлення
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};