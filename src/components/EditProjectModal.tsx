import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, Check, FolderGit2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface EditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  onSave: (project: ProjectItem) => void;
  onDelete?: (id: string) => void;
}

export const EditProjectModal: React.FC<EditProjectModalProps> = ({
  isOpen,
  onClose,
  project,
  onSave,
  onDelete
}) => {
  const [formData, setFormData] = useState<ProjectItem>({
    id: `proj-${Date.now()}`,
    title: '',
    category: 'Machine Learning',
    status: 'Ideas to Build',
    summary: '',
    problem: '',
    approach: '',
    stack: ['Python'],
    imagePath: '/src/assets/images/project_ml_public_dataset_1791976167509.jpg',
    githubUrl: '',
    demoUrl: '',
    isIdea: true
  });

  const [stackInput, setStackInput] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData(project);
      setStackInput(project.stack.join(', '));
    } else {
      setFormData({
        id: `proj-${Date.now()}`,
        title: '',
        category: 'Applied AI',
        status: 'Ideas to Build',
        summary: '',
        problem: '',
        approach: '',
        stack: ['Python', 'PyTorch'],
        imagePath: '/src/assets/images/project_ml_public_dataset_1791976167509.jpg',
        githubUrl: 'https://github.com/hasanali-placeholder/new-project',
        demoUrl: 'https://new-project-placeholder.app',
        isIdea: true
      });
      setStackInput('Python, PyTorch');
    }
  }, [project, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const parsedStack = stackInput
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const updated: ProjectItem = {
      ...formData,
      stack: parsedStack.length > 0 ? parsedStack : ['Python']
    };

    onSave(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-[#22334F] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#121E36] border-b border-[#22334F] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-serif font-bold text-white">
              {project ? 'Customize Project Card' : 'Add New Project'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">Project Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Student-Focused AI Study Assistant"
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
              />
            </div>

            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">Category / Domain</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Generative AI & EdTech"
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
              >
                <option value="Ideas to Build">Ideas to Build</option>
                <option value="In Prototyping">In Prototyping</option>
                <option value="Active Development">Active Development</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">Tech Stack (comma separated)</label>
              <input
                type="text"
                value={stackInput}
                onChange={(e) => setStackInput(e.target.value)}
                placeholder="Python, FastAPI, PyTorch, React"
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-slate-300 mb-1 font-medium">Summary Description</label>
            <textarea
              rows={2}
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="A brief overview of the project and what it does..."
              className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none resize-none shadow-xs"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">The Problem It Solves</label>
              <textarea
                rows={2}
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                placeholder="What specific issue does this solve?"
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none resize-none shadow-xs"
              ></textarea>
            </div>

            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">Proposed Architecture</label>
              <textarea
                rows={2}
                value={formData.approach}
                onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
                placeholder="What models, algorithms, or pipelines are used?"
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none resize-none shadow-xs"
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">GitHub Repo URL</label>
              <input
                type="text"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/..."
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
              />
            </div>

            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">Live Demo or Documentation URL</label>
              <input
                type="text"
                value={formData.demoUrl}
                onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                placeholder="https://..."
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#22334F] flex items-center justify-between gap-3">
            {onDelete && project && (
              <button
                type="button"
                onClick={() => {
                  onDelete(project.id);
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove Card</span>
              </button>
            )}

            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-xs cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Project</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
