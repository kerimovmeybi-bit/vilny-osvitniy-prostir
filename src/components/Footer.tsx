import React from 'react';
import { vopInfo } from '../data/vopData';
import { Mail, Globe, Send } from 'lucide-react'; // Заменили Facebook на Globe

export const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
            {/* Описание */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="ВОП" className="w-10 h-10 rounded-full object-cover border border-slate-700" />
                <span className="font-bold text-white text-lg">{vopInfo.name}</span>
              </div>
              <p className="text-sm text-slate-400 italic">
                «{vopInfo.slogan}»
              </p>
            </div>

            {/* Навигация */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Навігація</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">Про нас</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Проєкти</a></li>
                <li><a href="#join" className="hover:text-white transition-colors">Долучитися</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакти</a></li>
              </ul>
            </div>

            {/* Контакты и ссылки */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Контакти та соцмережі</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href={`mailto:${vopInfo.email}`} className="hover:text-white transition-colors">
                    {vopInfo.email}
                  </a>
                </p>
                <p className="flex items-center gap-2 pt-2">
                  <Globe size={16} className="text-blue-400" />
                  <a href={vopInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Facebook сторінка ВОП
                  </a>
                </p>
              </div>
            </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {vopInfo.name} ({vopInfo.shortName}). Усі права захищено.
        </div>

      </div>
    </footer>
  );
};