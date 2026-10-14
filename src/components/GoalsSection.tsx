import React from 'react';
import { INITIAL_GOALS, GoalStep } from '../data/portfolioData';
import { Target, CircleDot } from 'lucide-react';

export const GoalsSection: React.FC = () => {
  return (
    <section id="goals" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>02 · Strategic Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
            My Goals
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
            A deliberate progression from foundational academic study to production AI engineering and long-term technology entrepreneurship.
          </p>
        </div>

        {/* 5-Step Progression Flow */}
        <div className="space-y-4">
          {INITIAL_GOALS.map((goal: GoalStep) => {
            const isFirstOrSecond = goal.status === 'In Active Progress';
            return (
              <div
                key={goal.step}
                className={`p-6 sm:p-7 rounded-2xl transition-all border ${
                  isFirstOrSecond
                    ? 'bg-[#121E36] border-amber-500/30 shadow-md ring-1 ring-amber-500/10'
                    : 'bg-[#101A2E] border-[#22334F]'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Step indicator & timeframe */}
                  <div className="md:col-span-3 flex md:flex-col justify-between items-start">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-500/30">
                        STEP 0{goal.step}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {goal.timeframe}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs">
                      <CircleDot className={`w-3.5 h-3.5 ${isFirstOrSecond ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span className={isFirstOrSecond ? 'text-emerald-300 font-medium' : 'text-slate-400'}>
                        {goal.status}
                      </span>
                    </div>
                  </div>

                  {/* Goal Content */}
                  <div className="md:col-span-9">
                    <h3 className="text-lg font-serif font-bold text-white mb-1">
                      {goal.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-300/80 mb-2">
                      Focus: {goal.focus}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Summary Footer */}
        <div className="mt-10 p-5 rounded-xl bg-[#121E36] border border-[#22334F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 shadow-sm">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-amber-400" />
            <span>Guiding Mantra: Build rigorous foundations first; build scalable systems next.</span>
          </div>
          <span className="text-slate-400 font-mono">5 Progression Phases Defined</span>
        </div>

      </div>
    </section>
  );
};
