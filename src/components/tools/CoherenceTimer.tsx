import React, { useState, useEffect, useRef } from 'react';

export default function CoherenceTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'exhale'>('inhale');
  const [timeLeft, setTimeLeft] = useState(5.5);
  const [cycleCount, setCycleCount] = useState(0);

  const timerRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  const duration = 5.5;

  const tick = (timestamp: number) => {
    if (!lastTickRef.current) lastTickRef.current = timestamp;
    const delta = (timestamp - lastTickRef.current) / 1000;

    setTimeLeft((prev) => {
      const next = prev - delta;
      if (next <= 0) {
        setPhase((p) => {
          const nextPhase = p === 'inhale' ? 'exhale' : 'inhale';
          if (nextPhase === 'inhale') {
            setCycleCount((c) => c + 1);
          }
          setTimeLeft(duration);
          return nextPhase;
        });
        return 0;
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
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setPhase('inhale');
    setTimeLeft(duration);
    setCycleCount(0);
    lastTickRef.current = 0;
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-surface rounded-2xl p-6 sm:p-10 text-text-base border border-surface/50 shadow-xl font-sans">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold m-0 text-center">Coherence Breathing</h2>
        <p className="text-center text-text-muted mt-2 text-sm">Resonant Frequency (5.5s Inhale, 5.5s Exhale)</p>
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
              strokeDashoffset={301.59 * (1 - (timeLeft / duration))}
              className="transition-all duration-100 ease-linear"
            />
          </svg>
          <div className="text-center z-10 flex flex-col items-center">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
              {phase}
            </span>
            <span className="text-6xl font-mono tabular-nums font-bold">
              {timeLeft.toFixed(1)}
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
          {isRunning ? 'Pause' : (timeLeft === duration && cycleCount === 0 ? 'Start' : 'Resume')}
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
