import React, { useState, useEffect } from 'react';
import { Menu, X, SlidersHorizontal, Volume2 } from 'lucide-react';

interface NavbarProps {
  onOpenEditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Goals", href: "#goals" },
    { label: "Skills", href: "#skills" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1220]/95 backdrop-blur-md border-b border-[#1E2E4A] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark in classic typography with warm amber dot */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-white font-serif whitespace-nowrap shrink-0 flex items-center gap-2 hover:text-amber-200 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Hassan Ali</span>
          </a>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-4 decoration-amber-400/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEditModal}
              title="Customize portfolio links & info"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-[#121E36] border border-[#22334F] rounded-lg hover:bg-[#182848] hover:text-white transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span>Customize Info</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenEditModal}
              title="Customize portfolio links & info"
              className="p-2 text-slate-300 hover:text-white"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1E2E4A] bg-[#0B1220]/98 px-4 pt-3 pb-6 space-y-3 shadow-xl backdrop-blur-md">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-[#121E36] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#1E2E4A] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-[#121E36] border border-[#22334F] rounded-lg"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span>Customize Info & Social Links</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-xs"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
