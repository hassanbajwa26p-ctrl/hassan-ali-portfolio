import React from 'react';
import { ROADMAP_PILLARS, RoadmapPillar } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>04 · Curriculum & Engineering Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
            AI Engineer Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
            Becoming an AI Engineer requires rigorous theoretical foundations alongside robust software craftsmanship. These four areas define my deliberate curriculum for technical study.
          </p>
        </div>

        {/* 4 Roadmap Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROADMAP_PILLARS.map((pillar: RoadmapPillar) => {
            const isCurrentlyStudying = pillar.status === 'Under Active Study';
            return (
              <div
                key={pillar.title}
                className="p-7 rounded-2xl bg-[#121E36] border border-[#22334F] hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-md"
              >
                <div>
                  {/* Pillar Top */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="font-serif text-3xl font-bold text-amber-400/80">
                      {pillar.number}
                    </span>
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded border ${
                        isCurrentlyStudying
                          ? 'text-amber-300 bg-amber-950/70 border-amber-700/80 font-medium'
                          : 'text-slate-400 bg-[#0B1220] border-[#22334F]'
                      }`}
                    >
                      {pillar.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-300/80 mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Why it Matters */}
                  <div className="p-4 rounded-xl bg-[#0B1220] border border-[#22334F] mb-5">
                    <span className="text-[11px] font-mono text-amber-400 block uppercase tracking-wider mb-1 font-semibold">
                      Engineering Rationale:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pillar.importance}
                    </p>
                  </div>

                  {/* Planned Topics to Study */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider font-semibold">
                      Target Curriculum Topics:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {pillar.plannedTopics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2">
                          <span className="text-amber-400 shrink-0 font-mono mt-0.5">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Resources */}
                <div className="pt-4 border-t border-[#22334F]">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider mb-2 font-medium">
                    Study References & Reading:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.learningResources.map((res) => (
                      <span
                        key={res}
                        className="text-[11px] font-mono text-slate-300 bg-[#0B1220] px-2 py-0.5 rounded border border-[#22334F]"
                      >
                        {res}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Roadmap Commitment Card */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121E36] border border-[#22334F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-base font-serif font-bold text-white">
              Commitment to Mathematical Foundations & Production Reliability
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              I treat this roadmap as a personal engineering syllabus. As each milestone is reached, code repositories, algorithmic write-ups, and project benchmarks will be published openly.
            </p>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>View Starter Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
