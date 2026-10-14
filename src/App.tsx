import React, { useState } from 'react';
import {
  INITIAL_PROFILE,
  INITIAL_PROJECTS,
  ProjectItem
} from './data/portfolioData';
import { ArchitecturalBackground } from './components/ArchitecturalBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { GoalsSection } from './components/GoalsSection';
import { SkillsSection } from './components/SkillsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DigitalMarketingSection } from './components/DigitalMarketingSection';
import { StartupVisionSection } from './components/StartupVisionSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EditProfileModal } from './components/EditProfileModal';
import { EditProjectModal } from './components/EditProjectModal';
import { SlidersHorizontal, Volume2 } from 'lucide-react';

export default function App() {
  // Load persisted profile or default
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('hassan_portfolio_profile') || localStorage.getItem('hasan_portfolio_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Hasan Ali') {
          parsed.name = 'Hassan Ali';
        }
        return parsed;
      } catch (e) {
        console.error('Failed to parse saved profile', e);
      }
    }
    return INITIAL_PROFILE;
  });

  // Load persisted projects or default
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem('hassan_portfolio_projects') || localStorage.getItem('hasan_portfolio_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved projects', e);
      }
    }
    return INITIAL_PROJECTS;
  });

  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editProjectOpen, setEditProjectOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [showGuideBanner, setShowGuideBanner] = useState(true);

  // Sync to local storage
  const handleSaveProfile = (updatedProfile: typeof INITIAL_PROFILE) => {
    setProfile(updatedProfile);
    localStorage.setItem('hassan_portfolio_profile', JSON.stringify(updatedProfile));
  };

  const handleResetProfile = () => {
    setProfile(INITIAL_PROFILE);
    localStorage.removeItem('hassan_portfolio_profile');
    localStorage.removeItem('hasan_portfolio_profile');
  };

  const handleSaveProject = (updatedProject: ProjectItem) => {
    const index = projects.findIndex(p => p.id === updatedProject.id);
    let newProjects: ProjectItem[];
    if (index >= 0) {
      newProjects = [...projects];
      newProjects[index] = updatedProject;
    } else {
      newProjects = [updatedProject, ...projects];
    }
    setProjects(newProjects);
    localStorage.setItem('hassan_portfolio_projects', JSON.stringify(newProjects));
  };

  const handleDeleteProject = (id: string) => {
    const newProjects = projects.filter(p => p.id !== id);
    setProjects(newProjects);
    localStorage.setItem('hassan_portfolio_projects', JSON.stringify(newProjects));
  };

  const handleOpenEditProject = (project: ProjectItem) => {
    setEditingProject(project);
    setEditProjectOpen(true);
  };

  const handleOpenAddNewProject = () => {
    setEditingProject(null);
    setEditProjectOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-slate-100 relative selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Classic Fine Print-Grade Drafting Grid & Ambient Radiance */}
      <ArchitecturalBackground />

      {/* Fixed Navigation Bar */}
      <Navbar onOpenEditModal={() => setEditProfileOpen(true)} />

      {/* Floating Portfolio Customizer & Voice Guide Badge */}
      {showGuideBanner && (
        <aside
          aria-label="Portfolio Guide"
          className="fixed bottom-4 right-4 z-40 max-w-sm p-4 rounded-2xl bg-[#121E36] border border-[#22334F] shadow-2xl hidden sm:block animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-white font-serif">
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>AI Voice Spoken Introduction</span>
            </div>
            <button
              onClick={() => setShowGuideBanner(false)}
              className="text-slate-400 hover:text-white text-xs px-1 cursor-pointer"
              aria-label="Dismiss guide banner"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            The AI voice starts narrating Hassan Ali's introduction automatically. Click <span className="text-amber-300 font-semibold">"Customize Info"</span> in the navbar anytime to add your real links or projects.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setEditProfileOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-[#0B1220] hover:bg-[#182848] border border-[#22334F] rounded-lg transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3 text-amber-400" />
              <span>Customize Info</span>
            </button>
            <button
              onClick={() => setShowGuideBanner(false)}
              className="px-2.5 py-1.5 text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </aside>
      )}

      {/* Main Page Content */}
      <main className="relative z-10">
        
        {/* Section 1: Hero with Auto-Playing Voice Player */}
        <HeroSection
          name={profile.name}
          headline={profile.headline}
          email={profile.email}
          bioShort={profile.bioShort}
        />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: My Goals */}
        <GoalsSection />

        {/* Section 4: Skills I'm Building */}
        <SkillsSection />

        {/* Section 5: AI Engineer Roadmap */}
        <RoadmapSection />

        {/* Section 6: Projects (Ideas to Build & Real Projects) */}
        <ProjectsSection
          projects={projects}
          onEditProject={handleOpenEditProject}
          onAddNewProject={handleOpenAddNewProject}
        />

        {/* Section 7: Digital Marketing & AI */}
        <DigitalMarketingSection />

        {/* Section 8: Startup Vision */}
        <StartupVisionSection />

        {/* Section 9: Learning Journey Timeline */}
        <JourneySection />

        {/* Section 10: Contact & Message Composer */}
        <ContactSection
          email={profile.email}
          githubUrl={profile.githubUrl}
          linkedinUrl={profile.linkedinUrl}
          twitterUrl={profile.twitterUrl}
          kaggleUrl={profile.kaggleUrl}
          onOpenEditModal={() => setEditProfileOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer
        email={profile.email}
        githubUrl={profile.githubUrl}
        linkedinUrl={profile.linkedinUrl}
      />

      {/* Modals for Editing Placeholders & Real Projects */}
      <EditProfileModal
        isOpen={editProfileOpen}
        onClose={() => setEditProfileOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetProfile={handleResetProfile}
      />

      <EditProjectModal
        isOpen={editProjectOpen}
        onClose={() => {
          setEditProjectOpen(false);
          setEditingProject(null);
        }}
        project={editingProject}
        onSave={handleSaveProject}
        onDelete={handleDeleteProject}
      />

    </div>
  );
}
