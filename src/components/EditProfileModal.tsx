import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Check, UserCircle } from 'lucide-react';
import { INITIAL_PROFILE } from '../data/portfolioData';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: typeof INITIAL_PROFILE;
  onSaveProfile: (updated: typeof INITIAL_PROFILE) => void;
  onResetProfile: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetProfile
}) => {
  const [formData, setFormData] = useState(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setFormData(profile);
  }, [profile, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-[#22334F] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#121E36] border-b border-[#22334F] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCircle className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-serif font-bold text-white">Customize Portfolio Details & Links</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          
          <div className="p-3.5 rounded-xl bg-[#121E36] border border-[#22334F] text-slate-300 leading-relaxed">
            <strong className="text-amber-300">Customization Notice:</strong> Update your real LinkedIn, GitHub, or X/Twitter links below. All changes persist automatically to your browser's local storage.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
              />
            </div>

            <div>
              <label className="block font-mono text-slate-300 mb-1 font-medium">Primary Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-slate-300 mb-1 font-medium">Headline</label>
            <input
              type="text"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
            />
          </div>

          <div>
            <label className="block font-mono text-slate-300 mb-1 font-medium">LinkedIn Profile URL</label>
            <input
              type="url"
              value={formData.linkedinUrl}
              onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
              placeholder="https://linkedin.com/in/hasanali-placeholder"
              className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
            />
          </div>

          <div>
            <label className="block font-mono text-slate-300 mb-1 font-medium">GitHub Profile URL</label>
            <input
              type="url"
              value={formData.githubUrl}
              onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
              placeholder="https://github.com/hasanali-placeholder"
              className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
            />
          </div>

          <div>
            <label className="block font-mono text-slate-300 mb-1 font-medium">Twitter / X URL</label>
            <input
              type="url"
              value={formData.twitterUrl}
              onChange={(e) => setFormData({ ...formData, twitterUrl: e.target.value })}
              placeholder="https://x.com/hasanali_placeholder"
              className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none shadow-xs"
            />
          </div>

          <div>
            <label className="block font-mono text-slate-300 mb-1 font-medium">Short Bio Statement</label>
            <textarea
              rows={3}
              value={formData.bioShort}
              onChange={(e) => setFormData({ ...formData, bioShort: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-white focus:border-amber-400 focus:outline-none resize-none shadow-xs"
            ></textarea>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#22334F] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onResetProfile}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
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
                    <span>Save Changes</span>
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
