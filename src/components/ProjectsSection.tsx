import React, { useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { Github, ExternalLink, Lightbulb, Edit3, Plus, Check, Copy } from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onEditProject: (project: ProjectItem) => void;
  onAddNewProject: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onEditProject,
  onAddNewProject
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0E172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Project Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
              <span>05 · Practical Implementations & Prototypes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
              Projects Showcase
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
              In keeping with total honesty, these projects represent <strong className="text-white font-semibold">Ideas to Build</strong> and active starter prototypes rather than exaggerated commercial products. Each card is ready to be linked to real repositories as development unfolds.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onAddNewProject}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Real Project</span>
            </button>
          </div>
        </div>

        {/* Informative Guidance Banner on How to Update */}
        <div className="mb-10 p-4 rounded-xl bg-[#121E36] border border-[#22334F] text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Student Notice:</strong> Click the <span className="font-semibold text-amber-300">"Customize Card"</span> button on any card below to replace placeholder links with your real GitHub repo or live demo!
            </span>
          </div>
          <span className="font-mono text-slate-400 shrink-0">Editable Cards Enabled</span>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            return (
              <div
                key={proj.id}
                className="group rounded-2xl bg-[#121E36] border border-[#22334F] hover:border-amber-500/40 transition-all overflow-hidden flex flex-col justify-between shadow-md"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-[#22334F]">
                    <img
                      src={proj.imagePath}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedFallback) {
                          target.dataset.triedFallback = 'true';
                          target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
                        }
                      }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-[#0B1220]/90 text-amber-300 border border-amber-500/30 backdrop-blur-xs">
                        {proj.status}
                      </span>
                    </div>

                    {/* Edit Trigger */}
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() => onEditProject(proj)}
                        title="Edit project details & links"
                        className="p-1.5 rounded-lg bg-[#0B1220]/90 text-slate-300 hover:text-white hover:bg-slate-900 border border-[#22334F] transition-colors cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Category Label at Bottom Left */}
                    <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-slate-300 bg-[#0B1220]/90 px-2 py-0.5 rounded border border-[#22334F]">
                      {proj.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-white mb-2">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {proj.summary}
                    </p>

                    {/* Problem & Approach */}
                    <div className="space-y-3 mb-5 text-xs">
                      <div className="p-3.5 rounded-xl bg-[#0B1220] border border-[#22334F]">
                        <span className="font-mono text-[10px] text-amber-400 block uppercase font-bold mb-1">
                          The Problem:
                        </span>
                        <p className="text-slate-300">
                          {proj.problem}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#0B1220] border border-[#22334F]">
                        <span className="font-mono text-[10px] text-sky-400 block uppercase font-bold mb-1">
                          Proposed Architecture:
                        </span>
                        <p className="text-slate-300">
                          {proj.approach}
                        </p>
                      </div>
                    </div>

                    {/* Stack Badges */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-medium">
                        Intended Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono text-slate-300 bg-[#0B1220] border border-[#22334F] px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="p-6 pt-0 border-t border-[#22334F] mt-auto bg-[#101A2E]/70">
                  <div className="pt-4 flex items-center justify-between gap-3 text-xs">
                    
                    {/* Future GitHub Placeholder */}
                    <div className="flex items-center gap-2">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                        title={proj.githubUrl}
                      >
                        <Github className="w-4 h-4 text-slate-400" />
                        <span className="underline decoration-slate-600 underline-offset-4">GitHub Repo</span>
                      </a>
                      <button
                        onClick={() => copyToClipboard(proj.githubUrl, `git-${proj.id}`)}
                        title="Copy GitHub URL placeholder"
                        className="text-slate-400 hover:text-amber-300 p-1 cursor-pointer"
                      >
                        {copiedId === `git-${proj.id}` ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>

                    {/* Future Demo Placeholder */}
                    <div className="flex items-center gap-2">
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors"
                        title={proj.demoUrl}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                  <div className="mt-3 text-center">
                    <button
                      onClick={() => onEditProject(proj)}
                      className="w-full text-center py-1.5 text-[11px] font-mono text-slate-400 hover:text-amber-300 border border-[#22334F] rounded hover:border-slate-600 transition-colors bg-[#0B1220] cursor-pointer"
                    >
                      Customize Card Details
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
