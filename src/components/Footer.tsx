import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ email }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1E2E4A] bg-[#070C16] py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1E2E4A]">
          
          <div className="flex flex-col items-center md:items-start space-y-1">
            <a href="#" className="text-lg font-serif font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Hassan Ali</span>
            </a>
            <p className="text-xs text-slate-400 font-serif">
              Aspiring AI Engineer · AI Student · Future Tech Founder
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
            <a href="#goals" className="hover:text-amber-300 transition-colors">Goals</a>
            <a href="#skills" className="hover:text-amber-300 transition-colors">Skills</a>
            <a href="#roadmap" className="hover:text-amber-300 transition-colors">Roadmap</a>
            <a href="#projects" className="hover:text-amber-300 transition-colors">Projects</a>
            <a href="#journey" className="hover:text-amber-300 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121E36] text-slate-300 hover:text-white border border-[#22334F] text-xs transition-colors shadow-xs cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Hassan Ali. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>Verified Portfolio Profile</span>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${email}`} className="text-amber-300/80 hover:text-amber-200 transition-colors">
              {email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
