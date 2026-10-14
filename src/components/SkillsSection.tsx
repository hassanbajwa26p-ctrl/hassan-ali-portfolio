import React, { useState } from 'react';
import { INITIAL_SKILLS, SkillItem } from '../data/portfolioData';
import { Code2, BrainCircuit, Sparkles, TrendingUp, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Software & Core CS',
    'Machine Learning & AI',
    'AI Applications & Tools',
    'Product, Growth & Soft Skills'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? INITIAL_SKILLS
    : INITIAL_SKILLS.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Software & Core CS':
        return Code2;
      case 'Machine Learning & AI':
        return BrainCircuit;
      case 'AI Applications & Tools':
        return Sparkles;
      default:
        return TrendingUp;
    }
  };

  const getStatusBadge = (status: SkillItem['status']) => {
    switch (status) {
      case 'Active Daily Study':
        return 'text-emerald-300 bg-emerald-950/60 border-emerald-700/60';
      case 'Developing Hands-On':
        return 'text-amber-300 bg-amber-950/60 border-amber-700/60';
      case 'Fundamental Focus':
        return 'text-sky-300 bg-sky-950/60 border-sky-700/60';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0E172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>03 · Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
            Skills I’m Building
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
            An honest inventory of tools and methodologies I am actively studying and applying. No fabricated percentages or claims of overnight mastery—only steady, disciplined progression.
          </p>
        </div>

        {/* Clean Segmented Filter Controls in Rich Amber/Navy */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-[#1E2E4A]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white bg-[#121E36] hover:bg-[#182848] border border-[#22334F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = getCategoryIcon(skill.category);
            const statusBadgeClass = getStatusBadge(skill.status);

            return (
              <div
                key={skill.name}
                className="p-6 rounded-2xl bg-[#121E36] border border-[#22334F] hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#0B1220] text-amber-400 border border-[#22334F]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-serif font-bold text-white">
                          {skill.name}
                        </h3>
                        <span className="text-xs text-slate-400 font-mono">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded border ${statusBadgeClass} shrink-0`}>
                      {skill.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Key Study Topics */}
                <div className="pt-4 border-t border-[#22334F]">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider mb-2 font-medium">
                    Active Study Topics:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-200">
                    {skill.keyTopics.map((topic) => (
                      <span
                        key={topic}
                        className="text-slate-300 font-mono text-[11px] bg-[#0B1220] border border-[#22334F] px-2 py-0.5 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pedagogical Note */}
        <div className="mt-10 p-4 rounded-xl bg-[#121E36] border border-[#22334F] text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Structured learning philosophy: Depth before breadth. Code verification before claims.</span>
          </div>
          <span className="font-mono text-amber-300/80">8 Curated Competencies in Progress</span>
        </div>

      </div>
    </section>
  );
};
