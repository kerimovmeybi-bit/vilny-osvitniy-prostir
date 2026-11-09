import React from 'react';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { vopInfo } from '../data/vopData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
      {/* 
        Здесь в качестве фона можно подключить обложку из файлов:
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-cover.png')` }} />
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/90 to-slate-900 z-0" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-400/30 backdrop-blur-md">
            <Sparkles size={16} className="text-blue-400" />
            <span>Громадська організація • ВОП</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {vopInfo.name}
          </h1>

          {/* Slogan Highlight */}
          <p className="text-xl sm:text-2xl font-semibold text-blue-400 max-w-2xl mx-auto">
            «{vopInfo.slogan}»
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Об’єднуємо людей для навчання, дослідження, діалогу й спільної реалізації ідей. Створюємо середовище для розвитку людини та реалізації її творчого потенціалу.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30"
            >
              Наші проєкти
              <ArrowRight size={18} />
            </a>
            <a
              href="#join"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-7 py-3.5 rounded-xl border border-slate-700 transition-colors"
            >
              <Users size={18} />
              Запропонувати ідею
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};