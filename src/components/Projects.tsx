import React from 'react';
import { vopInfo } from '../data/vopData';
import { Compass, BookOpen, Users, Lightbulb, MapPin, Clock, ExternalLink } from 'lucide-react';

const projectIcons = [BookOpen, Compass, Users, Lightbulb];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Наші проєкти та ініціативи</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ми поєднуємо філософські, освітні, дослідницькі та соціальні напрями, створюючи простір для спільного розвитку.
          </p>
        </div>

        {/* Сетка карточек проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vopInfo.projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            return (
              <div 
                key={project.id}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <IconComponent size={28} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100/70 text-blue-800">
                      Напрям ВОП
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-3">
                  {project.schedule && (
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <Clock size={16} className="text-blue-600 shrink-0" />
                      <span>{project.schedule}</span>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin size={16} className="text-slate-400 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  )}
                  {project.telegramUrl && (
                    <div className="pt-2">
                      <a 
                        href={project.telegramUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Перейти в Telegram-канал
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};