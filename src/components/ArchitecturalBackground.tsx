import React from 'react';

export const ArchitecturalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Fine architectural drafting grid */}
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.25) 0.75px, transparent 0.75px)`,
          backgroundSize: '28px 28px'
        }}
      />
      {/* Soft warm gold ambient radiance in top right */}
      <div className="absolute -top-32 right-1/4 w-[600px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-700/5 to-transparent blur-3xl pointer-events-none"></div>
      
      {/* Royal sapphire depth in top left */}
      <div className="absolute top-10 -left-20 w-[550px] h-[450px] bg-gradient-to-br from-blue-600/10 via-indigo-900/10 to-transparent blur-3xl pointer-events-none"></div>
      
      {/* Subtle bottom ambient warmth */}
      <div className="absolute -bottom-40 left-1/3 w-[700px] h-[400px] bg-gradient-to-t from-slate-900/50 to-transparent blur-3xl pointer-events-none"></div>
    </div>
  );
};
