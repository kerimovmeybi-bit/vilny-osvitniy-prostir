import { ArrowRight, Users } from 'lucide-react';
import { vopInfo } from '../data/vopData';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/90 to-slate-900 z-0" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Логотип замість бейджа */}
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt={vopInfo.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover bg-white p-1 shadow-xl shadow-blue-950/60 ring-2 ring-blue-400/40"
            />
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