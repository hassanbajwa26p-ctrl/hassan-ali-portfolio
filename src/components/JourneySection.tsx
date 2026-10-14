import React, { useState } from 'react';
import { JOURNEY_STAGES, JourneyStage } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>(JOURNEY_STAGES[0].id);

  const selectedStage = JOURNEY_STAGES.find(s => s.id === selectedStageId) || JOURNEY_STAGES[0];

  const getStatusBadge = (status: JourneyStage['status']) => {
    switch (status) {
      case 'Current Focus':
        return 'text-amber-300 bg-amber-950/70 border-amber-700/80 font-semibold';
      case 'In Progress':
        return 'text-sky-300 bg-sky-950/70 border-sky-800';
      case 'Next Step':
        return 'text-slate-300 bg-[#0B1220] border-[#22334F]';
      case 'Future Ambition':
        return 'text-slate-400 bg-[#0B1220] border-[#22334F]';
    }
  };

  return (
    <section id="journey" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>08 · Multi-Year Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
            Learning Journey Timeline
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
            From foundational coursework to production systems and eventual startup creation. An interactive view of each milestone phase as I advance.
          </p>
        </div>

        {/* 4-Stage Horizontal Timeline Navigator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isSelected = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#121E36] border-amber-500/60 shadow-md ring-1 ring-amber-500/20'
                    : 'bg-[#101A2E] border-[#22334F] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-amber-400/80 font-semibold">
                    0{idx + 1}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getStatusBadge(stage.status)}`}>
                    {stage.status}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">{stage.phase}</div>
                <div className="text-sm font-serif font-bold text-white truncate">{stage.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage In-Depth Inspector Card */}
        <div className="p-8 rounded-2xl bg-[#121E36] border border-[#22334F] shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#22334F] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">{selectedStage.phase}</span>
                <span className="text-slate-500" aria-hidden="true">·</span>
                <span className="text-xs font-mono text-slate-400">{selectedStage.period}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">{selectedStage.title}</h3>
            </div>

            <div className="flex items-center gap-2">
              <span className={`text-xs font-mono px-3 py-1.5 rounded-lg border ${getStatusBadge(selectedStage.status)}`}>
                Status: {selectedStage.status}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-medium">
                Phase Objective & Focus
              </h4>
              <p className="text-base text-slate-200 leading-relaxed font-serif">
                {selectedStage.summary}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-medium">
                Key Learning Targets & Milestones
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedStage.achievements.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-[#0B1220] border border-[#22334F] flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
