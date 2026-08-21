import React, { useState, useEffect, useRef } from 'react';

type BreathingPhase = 'inhale' | 'hold-in' | 'exhale' | 'hold-out';

interface BreathingConfig {
  name: string;
  inhale: number;
  holdIn: number;
  exhale: number;
  holdOut: number;
}

const PRESETS: Record<string, BreathingConfig> = {
  box: { name: 'Box Breathing (4-4-4-4)', inhale: 4, holdIn: 4, exhale: 4, holdOut: 4 },
  '478': { name: 'Relaxing Breath (4-7-8)', inhale: 4, holdIn: 7, exhale: 8, holdOut: 0 },
  coherence: { name: 'Coherence (5.5-5.5)', inhale: 5.5, holdIn: 0, exhale: 5.5, holdOut: 0 },
  sigh: { name: 'Physiological Sigh', inhale: 4, holdIn: 0, exhale: 6, holdOut: 0 },
};

export default function BreathingTimer({ defaultPreset = 'box' }: { defaultPreset?: string }) {
  const [preset, setPreset] = useState<string>(defaultPreset);
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<BreathingPhase>('inhale');
  const [timeLeft, setTimeLeft] = useState(PRESETS[defaultPreset]?.inhale || 4);
  const [cycleCount, setCycleCount] = useState(0);

  const timerRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  const config = PRESETS[preset] || PRESETS['box'];

  const switchPhase = (currentPhase: BreathingPhase) => {
    switch (currentPhase) {
      case 'inhale':
        return config.holdIn > 0 ? 'hold-in' : 'exhale';
      case 'hold-in':
        return 'exhale';
      case 'exhale':
        return config.holdOut > 0 ? 'hold-out' : 'inhale';
      case 'hold-out':
        return 'inhale';
    }
  };

  const getPhaseDuration = (p: BreathingPhase) => {
    switch (p) {
      case 'inhale': return config.inhale;
      case 'hold-in': return config.holdIn;
      case 'exhale': return config.exhale;
      case 'hold-out': return config.holdOut;
    }
  };

  const tick = (timestamp: number) => {
    if (!lastTickRef.current) lastTickRef.current = timestamp;
    const delta = (timestamp - lastTickRef.current) / 1000;

    setTimeLeft((prev) => {
      const next = prev - delta;
      if (next <= 0) {
        setPhase((p) => {
          const nextPhase = switchPhase(p);
          if (nextPhase === 'inhale' && p !== 'inhale') {
            setCycleCount((c) => c + 1);
          }
          setTimeLeft(getPhaseDuration(nextPhase));
          return nextPhase;
        });
        return 0; // Handled by phase change
      }
      return next;
    });

    lastTickRef.current = timestamp;
    if (isRunning) {
      timerRef.current = requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    if (isRunning) {
      lastTickRef.current = performance.now();
      timerRef.current = requestAnimationFrame(tick);
    } else {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    }
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [isRunning, config]);

  const toggleTimer = () => {
    if (!isRunning) {
      if (timeLeft <= 0) {
        setPhase('inhale');
        setTimeLeft(config.inhale);
      }
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setPhase('inhale');
    setTimeLeft(config.inhale);
    setCycleCount(0);
    lastTickRef.current = 0;
  };

  const handlePresetChange = (p: string) => {
    setPreset(p);
    setIsRunning(false);
    setPhase('inhale');
    setTimeLeft(PRESETS[p].inhale);
    setCycleCount(0);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-surface rounded-2xl p-6 sm:p-10 text-text-base border border-surface/50 shadow-xl font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl font-semibold m-0">Breathing Timer</h2>
        <select
          value={preset}
          onChange={(e) => handlePresetChange(e.target.value)}
          className="bg-bg-base border border-surface/50 text-text-base text-sm rounded-lg px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full sm:w-auto"
          aria-label="Select breathing preset"
        >
          {Object.entries(PRESETS).map(([key, val]) => (
            <option key={key} value={key}>{val.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center justify-center my-12 min-h-[280px]">
        <div className="relative w-64 h-64 flex items-center justify-center mb-6">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="var(--color-bg-base)" strokeWidth="4" />
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="4"
              strokeDasharray="301.59"
              strokeDashoffset={301.59 * (1 - (timeLeft / getPhaseDuration(phase)))}
              className="transition-all duration-100 ease-linear"
            />
          </svg>
          <div className="text-center z-10 flex flex-col items-center">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
              {phase.replace('-', ' ')}
            </span>
            <span className="text-6xl font-mono tabular-nums font-bold">
              {Math.ceil(timeLeft)}
            </span>
            <span className="text-text-muted text-sm mt-2 font-mono">
              Cycles: {cycleCount}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={toggleTimer}
          className="bg-primary hover:bg-primary-hover text-bg-base font-semibold py-4 px-8 rounded-xl transition-colors min-w-[140px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-base text-lg cursor-pointer"
        >
          {isRunning ? 'Pause' : (timeLeft === config.inhale && cycleCount === 0 ? 'Start' : 'Resume')}
        </button>
        <button
          onClick={resetTimer}
          className="bg-surface hover:bg-surface/80 text-text-base border border-surface/50 font-medium py-4 px-8 rounded-xl transition-colors min-w-[140px] focus:outline-none focus:ring-2 focus:ring-surface focus:ring-offset-2 focus:ring-offset-bg-base text-lg cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
