import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Copy, Check, ExternalLink, Send, SlidersHorizontal } from 'lucide-react';

interface ContactSectionProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  kaggleUrl: string;
  onOpenEditModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  githubUrl,
  linkedinUrl,
  twitterUrl,
  kaggleUrl,
  onOpenEditModal
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !senderEmail.trim() || !message.trim()) return;
    setFormSubmitted(true);
  };

  const getMailtoUrl = () => {
    const encodedSubject = encodeURIComponent(subject || `Inquiry from ${name} via Portfolio`);
    const encodedBody = encodeURIComponent(
      `Hello Hassan,\n\nName: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}\n\nSent from your personal portfolio website.`
    );
    return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleCopyMessageDraft = () => {
    const draft = `To: ${email}\nSubject: ${subject || `Message from ${name}`}\nFrom: ${name} (${senderEmail})\n\n${message}`;
    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative border-b border-[#1E2E4A] bg-[#0E172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>09 · Direct Connect & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
            Contact & Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif">
            I am eager to connect with engineering mentors, researchers, peers, and tech teams. Whether discussing machine learning, collaborating on open-source software, or exploring internship opportunities, feel free to get in touch.
          </p>
        </div>

        {/* 2-Column Contact Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Email & Social Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#121E36] border border-[#22334F] shadow-md">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1 font-medium">
                Primary Direct Email
              </span>
              <div className="flex items-center justify-between gap-3 mb-3">
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-mono font-bold text-white hover:text-amber-300 transition-colors break-all"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#0B1220] border border-[#22334F] text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shrink-0 shadow-xs cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <div className="text-xs text-emerald-400 font-mono mb-2">
                  ✓ Email copied to clipboard!
                </div>
              )}

              <p className="text-xs text-slate-400 leading-relaxed">
                Typically responds within 24–48 hours for academic or technical inquiries.
              </p>
            </div>

            {/* Editable Social Links Card */}
            <div className="p-6 rounded-2xl bg-[#121E36] border border-[#22334F] shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-medium">
                  Professional & Code Links
                </span>
                <button
                  onClick={onOpenEditModal}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Customize Placeholders</span>
                </button>
              </div>

              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#0B1220] border border-[#22334F] hover:border-amber-500/40 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[280px]">
                        {linkedinUrl}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#0B1220] border border-[#22334F] hover:border-amber-500/40 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-300" />
                    <div>
                      <div className="font-semibold text-white">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[280px]">
                        {githubUrl}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </a>

                {/* Twitter / X */}
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#0B1220] border border-[#22334F] hover:border-amber-500/40 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Twitter className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="font-semibold text-white">Twitter / X</div>
                      <div className="text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[280px]">
                        {twitterUrl}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Note on integrity */}
            <div className="p-4 rounded-xl bg-[#0B1220] border border-[#22334F] text-xs text-slate-400 font-mono">
              <span>Verified Contact Details · {email}</span>
            </div>

          </div>

          {/* Right Column: Contact Message Composer UI */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl bg-[#121E36] border border-[#22334F] shadow-md">
              
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400">
                  Compose your note below. Submitting prepares an email draft or formatted text ready to send directly to Hasan Ali.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-[#0B1220] border border-amber-500/40 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Message Draft Prepared!</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. Your message draft is prepared below. You can open it in your email application or copy it directly:
                  </p>

                  <div className="p-3.5 bg-[#121E36] rounded-lg border border-[#22334F] text-xs font-mono text-slate-300 space-y-1">
                    <div><span className="text-slate-500">To:</span> {email}</div>
                    <div><span className="text-slate-500">From:</span> {name} ({senderEmail})</div>
                    <div><span className="text-slate-500">Subject:</span> {subject || 'Portfolio Inquiry'}</div>
                    <div className="text-slate-300 pt-2 line-clamp-3 italic">"{message}"</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={getMailtoUrl()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessageDraft}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-[#121E36] border border-[#22334F] rounded-lg hover:bg-[#182848] transition-colors cursor-pointer"
                    >
                      {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDraft ? 'Copied to Clipboard!' : 'Copy Formatted Draft'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline pl-2 cursor-pointer"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1220] border border-[#22334F] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Your Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1220] border border-[#22334F] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. AI Internship / Collaborative Project"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1220] border border-[#22334F] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hello Hasan, I reviewed your portfolio and would like to connect regarding..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1220] border border-[#22334F] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none shadow-xs"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">
                      Direct recipient: {email}
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-xs cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Prepare Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
