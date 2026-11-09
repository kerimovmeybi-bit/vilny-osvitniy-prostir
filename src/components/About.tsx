import React from 'react';
import { vopInfo } from '../data/vopData';
import { BookOpen, MessageSquare, Compass, ShieldCheck } from 'lucide-react';

const icons = [BookOpen, MessageSquare, Compass, ShieldCheck];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Про нас</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {vopInfo.aboutShort}
          </p>
        </div>

        {/* История / Как все начиналось */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 mb-16 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Як усе починалося</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            ВОП сформувався поступово — з зустрічі двох людей, які, попри відмінності, мали спільні прагнення: пізнавати й ділитися знаннями та досвідом, об’єднувати людей для спільного пошуку й обговорення важливого, втілювати ідеї та смисли в життя через творчу діяльність.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Реєстрація ВОП як громадської організації надала цій діяльності офіційного статусу й відкрила нові можливості для розвитку, партнерства та реалізації масштабніших дослідницьких, освітніх і соціальних ініціатив.
          </p>
        </div>

        {/* Ценности (карточки) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vopInfo.values.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};