import React from 'react';
import { Megaphone, Users, Search, BarChart3 } from 'lucide-react';

export const DigitalMarketingSection: React.FC = () => {
  const marketingPillars = [
    {
      icon: Users,
      title: "Audience Understanding & Personas",
      description: "Using data analysis to identify target demographics, understand daily workflows, and pinpoint specific technological bottlenecks.",
      focus: "Empathy & Data Segmentation"
    },
    {
      icon: Megaphone,
      title: "High-Value Technical Content",
      description: "Writing clear, structured engineering articles, project breakdowns, and documentation that educate rather than pitch.",
      focus: "Authentic Educational Strategy"
    },
    {
      icon: Search,
      title: "SEO & Discoverability",
      description: "Applying search engine optimization principles, semantic metadata, and structured content so valuable technical tools get discovered organically.",
      focus: "Organic Reach & Search"
    },
    {
      icon: BarChart3,
      title: "Analytics & Iteration Loops",
      description: "Tracking behavioral engagement metrics, conversion funnels, and retention signals to make data-backed refinements.",
      focus: "Quantitative Feedback"
    }
  ];

  return (
    <section id="marketing" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>06 · Distribution & Product Adoption</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
            AI + Digital Marketing
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
            The most sophisticated algorithm provides zero utility if nobody knows it exists. I am actively studying digital marketing, SEO, and analytics to bridge the gap between technical engineering and real-world adoption.
          </p>
        </div>

        {/* Narrative Banner & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          <div className="lg:col-span-8 p-7 rounded-2xl bg-[#121E36] border border-[#22334F] shadow-sm">
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              Why an Aspiring AI Engineer Studies Marketing
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Engineers sometimes build in isolation without asking who will use the software, what problems they face daily, or how they discover solutions. By understanding digital marketing, content strategy, and SEO, I prepare myself to build products that solve acute user needs and reach the people who need them.
            </p>
            <div className="text-xs font-mono text-amber-300/80">
              Note: Framed as an active area of interest, ongoing learning, and personal development.
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-[#121E36] to-[#182848] border border-amber-500/30 text-white shadow-md text-center">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">Synergy</span>
            <p className="text-xl font-serif font-bold text-white mb-2">Engineer × Marketer</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Technical rigor to build intelligent models + Distribution mastery to deliver them into the hands of real users.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#121E36] border border-[#22334F] hover:border-amber-500/40 transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-[#0B1220] text-amber-400 border border-[#22334F]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold">0{idx + 1}</span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#22334F]">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-medium">
                    {item.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
