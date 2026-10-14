import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';
import { aiVoice, INTRO_SCRIPT } from '../utils/aiVoiceService';

export const VoiceIntroductionPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const attemptedAutoPlay = useRef(false);

  const startVoice = () => {
    setIsPlaying(true);
    setHasStarted(true);
    aiVoice.playIntroduction(
      () => setIsPlaying(true),
      () => setIsPlaying(false),
      (err) => {
        console.warn('AI voice playback notice:', err);
        setIsPlaying(false);
      }
    );
  };

  const togglePlay = () => {
    if (isPlaying) {
      aiVoice.pause();
      setIsPlaying(false);
    } else {
      if (hasStarted) {
        aiVoice.resume();
        setIsPlaying(true);
      } else {
        startVoice();
      }
    }
  };

  const restartVoice = () => {
    startVoice();
  };

  // TRUE AUTOMATIC PLAYBACK:
  // 1. Fire immediately on page load / mount
  // 2. Also listen for any natural visitor movement (mouse move, touch, scroll) to guarantee sound plays even on strict browsers
  useEffect(() => {
    if (attemptedAutoPlay.current) return;
    attemptedAutoPlay.current = true;

    // Direct invocation on mount
    const timer = setTimeout(() => {
      startVoice();
    }, 400);

    // Backup gesture listener that triggers on any natural movement if the browser blocked audio without interaction
    const handleVisitorPresence = () => {
      if (!hasStarted) {
        startVoice();
      }
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('pointerdown', handleVisitorPresence);
      window.removeEventListener('mousemove', handleVisitorPresence);
      window.removeEventListener('touchstart', handleVisitorPresence);
      window.removeEventListener('scroll', handleVisitorPresence);
      window.removeEventListener('keydown', handleVisitorPresence);
    };

    window.addEventListener('pointerdown', handleVisitorPresence, { once: true });
    window.addEventListener('mousemove', handleVisitorPresence, { once: true });
    window.addEventListener('touchstart', handleVisitorPresence, { once: true });
    window.addEventListener('scroll', handleVisitorPresence, { once: true });
    window.addEventListener('keydown', handleVisitorPresence, { once: true });

    return () => {
      clearTimeout(timer);
      removeListeners();
    };
  }, [hasStarted]);

  return (
    <div className="w-full">
      {/* Embedded Player Widget with Rich Executive Navy & Amber Gold Styling */}
      <div className={`p-4 rounded-xl border transition-all ${
        isPlaying 
          ? 'bg-[#121E36] border-amber-500/40 shadow-lg shadow-black/40 ring-1 ring-amber-500/20' 
          : 'bg-[#101A2E] border-[#22334F] text-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Controls & Status */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className={`p-2.5 rounded-full transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-sm ${
                isPlaying 
                  ? 'bg-amber-400 text-slate-950 hover:bg-amber-300' 
                  : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40'
              }`}
              aria-label={isPlaying ? 'Pause AI Voice' : 'Play AI Voice'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-tight text-white">
                  {isPlaying ? 'AI Voice: Reading Introduction Aloud' : 'AI Voice Spoken Introduction'}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-500/30 font-medium">
                  {isPlaying ? 'Speaking Now' : 'Auto-Playing'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Automated narration of Hassan Ali's background, goals, and ambition in technology.
              </p>
            </div>
          </div>

          {/* Equalizer Waveform & Restart Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Visualizer bars */}
            <div className="flex items-end gap-1 h-5 px-2 bg-slate-950/40 py-1 rounded border border-[#22334F]" aria-hidden="true">
              <span className={`w-1 rounded-full transition-all duration-300 ${
                isPlaying ? 'h-4 bg-amber-400 animate-pulse' : 'h-1.5 bg-slate-600'
              }`}></span>
              <span className={`w-1 rounded-full transition-all duration-300 delay-75 ${
                isPlaying ? 'h-3 bg-amber-300 animate-pulse' : 'h-2 bg-slate-600'
              }`}></span>
              <span className={`w-1 rounded-full transition-all duration-300 delay-150 ${
                isPlaying ? 'h-4.5 bg-amber-400 animate-pulse' : 'h-1.5 bg-slate-600'
              }`}></span>
              <span className={`w-1 rounded-full transition-all duration-300 delay-100 ${
                isPlaying ? 'h-2.5 bg-amber-300 animate-pulse' : 'h-2 bg-slate-600'
              }`}></span>
            </div>

            <button
              onClick={restartVoice}
              title="Restart voice reading from beginning"
              className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-slate-800 border border-[#22334F] text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Read-Along Transcript box */}
        <div className="mt-3 pt-3 border-t border-[#22334F] text-xs leading-relaxed font-serif">
          <span className="text-amber-400/80 font-mono text-[10px] uppercase tracking-wider block mb-1">
            Narration Transcript:
          </span>
          <p className={`${isPlaying ? 'text-amber-200' : 'text-slate-300'} italic`}>
            "{INTRO_SCRIPT}"
          </p>
        </div>
      </div>
    </div>
  );
};
