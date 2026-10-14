import React from 'react';
import { Compass, Repeat, Cpu, BookOpenCheck, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Intellectual Curiosity",
      description: "Driven to understand why machine learning algorithms work from first principles. I explore the mathematics, optimization dynamics, and limitations rather than simply treating models as black boxes."
    },
    {
      icon: Repeat,
      title: "Daily Consistency",
      description: "Committed to steady, incremental improvement through daily coding, algorithmic problem solving, and deliberate practice across computer science fundamentals."
    },
    {
      icon: Cpu,
      title: "Problem-Solving Mindset",
      description: "Approaching engineering challenges by decomposing complex problems into clean, testable sub-systems and writing robust, maintainable software."
    },
    {
      icon: BookOpenCheck,
      title: "Eagerness to Learn & Adapt",
      description: "Welcoming constructive code reviews, studying foundational textbooks, and staying adaptable in a rapidly advancing technological landscape."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0E172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>01 · Background & Character</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
            I am Hassan Ali, an AI student dedicated to building strong software engineering foundations and mastering machine learning. My objective is to grow into an expert programmer, work as an AI Engineer in the technology sector, and eventually create a high-impact startup.
          </p>
        </div>

        {/* Narrative & Core Character Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
            <div className="p-7 rounded-2xl bg-[#121E36] border border-[#22334F] shadow-md">
              <h3 className="text-lg font-serif font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>The Engineering Foundation</span>
              </h3>
              <p className="mb-4 text-sm sm:text-base text-slate-300">
                My interest in artificial intelligence is grounded in practical utility: <strong className="text-white font-semibold">how can we build reliable computational systems that augment human productivity and solve tangible problems?</strong>
              </p>
              <p className="mb-4 text-sm sm:text-base text-slate-300">
                As a student, I believe genuine engineering competence is built through discipline. It requires mastering data structures, understanding mathematical derivations in linear algebra and calculus, and writing hundreds of hours of functional code.
              </p>
              <p className="text-sm sm:text-base text-slate-300">
                My goal is to earn a place on an industry engineering team where I can contribute to production-grade AI systems, learn directly from seasoned mentors, and turn theoretical models into resilient software.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121E36]/70 border border-[#22334F]">
              <h3 className="text-base font-serif font-bold text-white mb-3">
                Guiding Principles
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Honesty Over Pretense:</strong> Representing current knowledge as learning, future ambitions as goals, and letting verifiable code speak for itself.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">End-to-End Systemic Thinking:</strong> AI is more than a model—it is data ingestion, API design, testing, reliability, and real user feedback.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Future Founder Ambition:</strong> Learning how technical products create real economic value and solve authentic human bottlenecks.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4 Pillars Card Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-[#121E36] border border-[#22334F] hover:border-amber-500/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#0B1220] text-amber-400 border border-[#22334F]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold">0{idx + 1}</span>
                    <h4 className="text-sm font-serif font-bold text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-1">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
