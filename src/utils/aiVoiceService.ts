// AI Voice Service supporting Gemini TTS with seamless Web Speech API fallback

export const INTRO_SCRIPT = 
  "Welcome to my portfolio website. My name is Hassan Ali. I am an aspiring AI Engineer, AI student, and future tech founder. I am building real-world software foundations, exploring machine learning algorithms, and engineering practical prototypes to contribute to the technology industry.";

class AIVoiceService {
  private audioEl: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isUsingGeminiAudio = false;

  public async playIntroduction(
    onStart: () => void,
    onEnd: () => void,
    onError: (err: any) => void
  ): Promise<boolean> {
    this.stop();

    // Attempt 1: Try Gemini TTS backend endpoint first
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: INTRO_SCRIPT }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.audioBase64) {
          const audioSrc = `data:${data.mimeType || 'audio/wav'};base64,${data.audioBase64}`;
          this.audioEl = new Audio(audioSrc);
          this.isUsingGeminiAudio = true;

          this.audioEl.onplay = () => onStart();
          this.audioEl.onended = () => {
            this.isUsingGeminiAudio = false;
            onEnd();
          };
          this.audioEl.onerror = () => {
            // Fall back to Web Speech synthesis
            this.fallbackWebSpeech(onStart, onEnd, onError);
          };

          try {
            await this.audioEl.play();
            return true;
          } catch (playErr) {
            console.log('Audio autoplay blocked, falling back to Web Speech', playErr);
            return this.fallbackWebSpeech(onStart, onEnd, onError);
          }
        }
      }
    } catch (e) {
      console.warn('Gemini TTS server not responding, using Web Speech API', e);
    }

    // Attempt 2: Web Speech API synthesis
    return this.fallbackWebSpeech(onStart, onEnd, onError);
  }

  public fallbackWebSpeech(
    onStart: () => void,
    onEnd: () => void,
    onError: (err: any) => void
  ): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onError('Speech synthesis is not supported in this browser.');
      return false;
    }

    try {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(INTRO_SCRIPT);
      utterance.rate = 0.95; // deliberate, clear professional cadence
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';

      // Pick best available natural voice
      const pickVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const naturalVoice = voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.includes('Natural') ||
              v.name.includes('Google US English') ||
              v.name.includes('Samantha') ||
              v.name.includes('Daniel') ||
              v.name.includes('Arthur'))
        ) || voices.find((v) => v.lang.startsWith('en'));

        if (naturalVoice) {
          utterance.voice = naturalVoice;
        }
      };

      pickVoice();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = pickVoice;
      }

      utterance.onstart = () => onStart();
      utterance.onend = () => onEnd();
      utterance.onerror = (e) => {
        console.warn('Speech synthesis event:', e);
        onEnd();
      };

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
      return true;
    } catch (err) {
      console.warn('SpeechSynthesis error:', err);
      onError(err);
      return false;
    }
  }

  public pause(): void {
    if (this.isUsingGeminiAudio && this.audioEl) {
      this.audioEl.pause();
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
  }

  public resume(): void {
    if (this.isUsingGeminiAudio && this.audioEl) {
      this.audioEl.play();
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  }

  public stop(): void {
    if (this.audioEl) {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
      this.audioEl = null;
    }
    this.isUsingGeminiAudio = false;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }
}

export const aiVoice = new AIVoiceService();
