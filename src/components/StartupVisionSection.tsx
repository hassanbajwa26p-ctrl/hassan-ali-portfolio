import React from 'react';
import { Rocket, Lightbulb, Users, RefreshCw, ShieldCheck } from 'lucide-react';

export const StartupVisionSection: React.FC = () => {
  const founderPrinciples = [
    {
      icon: Lightbulb,
      title: "Problem First, Technology Second",
      description: "Startups stumble when they build a complex AI solution and search aimlessly for a use case. I focus on uncovering real, painful bottlenecks faced by real people before writing a single line of model code."
    },
    {
      icon: Users,
      title: "Deep User Empathy & Listening",
      description: "Sitting down with users, asking open-ended questions, observing where workflows break down, and resisting the urge to pitch premature features."
    },
    {
      icon: RefreshCw,
      title: "Rapid Feedback & Iterative Refinement",
      description: "Deploying lean prototypes, collecting qualitative and quantitative feedback, and iterating software based on evidence rather than assumptions."
    },
    {
      icon: ShieldCheck,
      title: "Ethical & Defensible AI Impact",
      description: "Building products with data integrity, safety, and transparency at their core. AI ventures should elevate human capability rather than exploit attention."
    }
  ];

  return (
    <section id="vision" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0E172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>07 · Long-Term Ambition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
            Startup Vision & Entrepreneurship
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
            My ultimate professional destination is to become a technology founder. Rather than chasing short-lived hype, I am preparing for this responsibility by building technical rigor, product empathy, and a founder's perspective.
          </p>
        </div>

        {/* Vision Narrative Card */}
        <div className="p-8 rounded-2xl bg-[#121E36] border border-[#22334F] shadow-md mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-[#0B1220] border border-amber-500/30 text-amber-400 shrink-0 shadow-sm">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Building Real Value: The Founder Philosophy
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                Great companies are forged by founders who genuinely care about the problems they solve. As an AI student, my current focus on computer science, machine learning mathematics, and software design is deliberate: it provides the technical foundation needed to build defensible, robust products when the time comes to launch.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0B1220] border border-[#22334F] text-xs text-slate-400 font-mono">
            <span>Notice: No fictional startup names or unvalidated product claims are presented here. When the right problem is identified through user research and proven capability, it will be shared openly.</span>
          </div>
        </div>

        {/* 4 Founder Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founderPrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="p-6 rounded-2xl bg-[#121E36] border border-[#22334F] hover:border-amber-500/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#0B1220] text-amber-400 border border-[#22334F]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-white">
                    {principle.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-1">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
