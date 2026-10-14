import React from 'react';
import { ArrowRight, Mail, BookOpen, CheckCircle2 } from 'lucide-react';
import { VoiceIntroductionPlayer } from './VoiceIntroductionPlayer';

interface HeroSectionProps {
  name: string;
  headline: string;
  email: string;
  bioShort: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  headline,
  email,
  bioShort
}) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#1E2E4A] bg-gradient-to-b from-[#0B1220] via-[#0E172B] to-[#0B1220]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Classic Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Academic & Professional Status Line */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-3 font-mono">
              <span>Personal Portfolio</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Computer Science & Machine Learning</span>
            </div>

            {/* Name in Dignified Classic Serif */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-3">
              {name}
            </h1>

            {/* Headline */}
            <div className="text-lg sm:text-xl font-medium text-slate-200 tracking-tight mb-5">
              Aspiring AI Engineer <span className="text-amber-400 font-light">|</span> AI Student <span className="text-amber-400 font-light">|</span> Future Tech Founder
            </div>

            {/* Concise Introduction Paragraph (Spoken by AI Voice) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-serif">
              Welcome to my portfolio website. I am an AI student building real-world software foundations, exploring machine learning algorithms, and engineering practical prototypes to contribute to the technology industry.
            </p>

            {/* Embedded AI Voice Audio Feature (Auto-playing as requested) */}
            <div className="mb-8">
              <VoiceIntroductionPlayer />
            </div>

            {/* Clear Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollTo('#journey')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-all shadow-md shadow-amber-950/30 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#121E36] border border-[#22334F] rounded-lg hover:bg-[#182848] hover:border-slate-600 transition-all active:scale-[0.98] shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Clean Editorial Notes */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-5 border-t border-[#1E2E4A]">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Current Focus: Python DSA & Machine Learning Math</span>
              </div>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Honest academic progression</span>
              </div>
            </div>

          </div>

          {/* Right Column: Classic Photograph Frame (Matte Studio Editorial in Deep Navy Matting) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-none">
              
              {/* Photo Frame Container (rich navy matting with subtle amber border) */}
              <div className="bg-[#121E36] p-3.5 rounded-2xl border border-amber-500/20 shadow-2xl">
                
                {/* Photo Header */}
                <div className="px-2 py-1.5 flex items-center justify-between text-xs text-slate-400 font-mono border-b border-[#22334F] mb-2.5">
                  <span className="font-semibold text-amber-300">Hassan Ali</span>
                  <span className="text-[11px] text-slate-400">Undergraduate Student</span>
                </div>

                {/* Portrait */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-[#22334F] flex items-center justify-center">
                  <img
                    src="./images/hasan_ali_portrait_1791976165816.jpg"
                    alt="Hassan Ali, AI Student and Aspiring AI Engineer"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image path differs
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                  />
                </div>

                {/* Caption / Contact note */}
                <div className="mt-3 px-3 py-2.5 flex items-center justify-between text-xs text-slate-300 bg-[#0B1220] rounded-lg border border-[#22334F]">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-mono">Email Inquiries</span>
                    <a
                      href={`mailto:${email}`}
                      className="font-mono text-amber-300 hover:text-amber-200 font-medium transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block text-[10px] uppercase font-mono">Availability</span>
                    <span className="font-medium text-slate-200">Learning & Internships</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Overview Strip in Rich Sapphire Navy Cards */}
        <div className="mt-14 pt-8 border-t border-[#1E2E4A] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-[#121E36]/80 border border-[#22334F] space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">Identity</span>
            <p className="text-sm font-semibold text-white">AI Student & Engineer</p>
            <p className="text-xs text-slate-400">Undergraduate coursework & practical projects</p>
          </div>

          <div className="p-4 rounded-xl bg-[#121E36]/80 border border-[#22334F] space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">Current Focus</span>
            <p className="text-sm font-semibold text-white">Algorithms & ML Foundations</p>
            <p className="text-xs text-slate-400">Linear algebra, calculus, PyTorch fundamentals</p>
          </div>

          <div className="p-4 rounded-xl bg-[#121E36]/80 border border-[#22334F] space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">Target Horizon</span>
            <p className="text-sm font-semibold text-white">Industry Readiness</p>
            <p className="text-xs text-slate-400">Engineering internships & team collaboration</p>
          </div>

          <div className="p-4 rounded-xl bg-[#121E36]/80 border border-[#22334F] space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">Long-Term Vision</span>
            <p className="text-sm font-semibold text-white">Future Tech Founder</p>
            <p className="text-xs text-slate-400">Solving authentic human problems through intelligent systems</p>
          </div>
        </div>

      </div>
    </section>
  );
};
