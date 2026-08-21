import React, { useState, useEffect, useRef } from 'react';

export default function CO2Tolerance() {
  const [phase, setPhase] = useState<'intro' | 'prep' | 'test' | 'result'>('intro');
  const [prepTime, setPrepTime] = useState(30);
  const [testTime, setTestTime] = useState(0);
  const [resultScore, setResultScore] = useState(0);
  const [prepInterval, setPrepInterval] = useState<'inhale' | 'exhale'>('inhale');

  const timerRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  const tickPrep = (timestamp: number) => {
    if (!lastTickRef.current) lastTickRef.current = timestamp;
    const delta = (timestamp - lastTickRef.current) / 1000;

    setPrepTime((prev) => {
      const next = prev - delta;
      if (next <= 0) {
        startTest();
        return 0;
      }
      if (Math.floor(next) % 4 === 0) setPrepInterval('inhale');
      else if (Math.floor(next) % 2 === 0) setPrepInterval('exhale');
      return next;
    });

    lastTickRef.current = timestamp;
    if (phase === 'prep') {
      timerRef.current = requestAnimationFrame(tickPrep);
    }
  };

  const tickTest = (timestamp: number) => {
    if (!lastTickRef.current) lastTickRef.current = timestamp;
    const delta = (timestamp - lastTickRef.current) / 1000;

    setTestTime((prev) => prev + delta);

    lastTickRef.current = timestamp;
    if (phase === 'test') {
      timerRef.current = requestAnimationFrame(tickTest);
    }
  };

  useEffect(() => {
    if (phase === 'prep') {
      lastTickRef.current = performance.now();
      timerRef.current = requestAnimationFrame(tickPrep);
    } else if (phase === 'test') {
      lastTickRef.current = performance.now();
      timerRef.current = requestAnimationFrame(tickTest);
    }

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [phase]);

  const startPrep = () => {
    setPhase('prep');
    setPrepTime(30);
  };

  const startTest = () => {
    if (timerRef.current) cancelAnimationFrame(timerRef.current);
    setPhase('test');
    setTestTime(0);
  };

  const endTest = () => {
    if (timerRef.current) cancelAnimationFrame(timerRef.current);
    setResultScore(testTime);
    setPhase('result');
  };

  const reset = () => {
    setPhase('intro');
    setTestTime(0);
  };

  const getAssessment = (score: number) => {
    if (score < 20) return "Low tolerance (High anxiety/stress baseline)";
    if (score < 40) return "Average tolerance (Normal baseline)";
    if (score < 60) return "Good tolerance (Healthy baseline)";
    if (score < 80) return "Advanced tolerance (Athlete baseline)";
    return "Elite tolerance";
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-surface rounded-2xl p-6 sm:p-10 text-text-base border border-surface/50 shadow-xl font-sans">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold m-0 text-center">CO2 Tolerance Test</h2>
      </div>

      <div className="flex flex-col items-center justify-center my-12 min-h-[280px]">
        {phase === 'intro' && (
          <div className="text-center">
            <p className="text-text-muted mb-6">
              Measure your body's tolerance to carbon dioxide. This is a primary indicator of your stress baseline and breathlessness point.
            </p>
            <ul className="text-left text-sm text-text-muted space-y-2 mb-8 bg-bg-base p-4 rounded-xl border border-surface/50">
              <li>1. 30s of normal preparation breathing.</li>
              <li>2. Take one final, deep inhale.</li>
              <li>3. Exhale as slowly as possible (hissing or through nose).</li>
              <li>4. Stop the timer the moment you run out of air or swallow.</li>
            </ul>
            <button onClick={startPrep} className="bg-primary hover:bg-primary-hover text-bg-base font-semibold py-4 px-8 rounded-xl transition-colors min-w-[140px]">
              Start Prep Phase
            </button>
          </div>
        )}

        {phase === 'prep' && (
          <div className="text-center">
            <h3 className="text-xl mb-4 font-semibold text-text-base">Preparation Phase</h3>
            <div className="text-6xl font-mono tabular-nums font-bold mb-4">{Math.ceil(prepTime)}s</div>
            <p className="text-primary uppercase tracking-widest font-medium mb-8">Breathe Normally ({prepInterval})</p>
            <button onClick={startTest} className="text-text-muted underline hover:text-text-base text-sm cursor-pointer">
              Skip prep and start test
            </button>
          </div>
        )}

        {phase === 'test' && (
          <div className="text-center">
            <h3 className="text-xl mb-4 font-semibold text-text-base">Testing Phase</h3>
            <p className="text-text-muted mb-8 text-sm max-w-[250px] mx-auto">
              Exhale as slowly as possible. Do not force it or hold your breath.
            </p>
            <div className="text-7xl font-mono tabular-nums font-bold mb-12 text-primary">{testTime.toFixed(1)}s</div>
            <button onClick={endTest} className="bg-surface hover:bg-surface/80 text-text-base border border-primary/50 font-semibold py-6 px-12 rounded-xl transition-colors text-xl w-full">
              STOP (Out of air)
            </button>
          </div>
        )}

        {phase === 'result' && (
          <div className="text-center w-full">
            <h3 className="text-xl mb-2 font-semibold text-text-base">Your Result</h3>
            <div className="text-6xl font-mono tabular-nums font-bold mb-2 text-primary">{resultScore.toFixed(1)}s</div>
            <div className="bg-bg-base p-4 rounded-xl border border-surface/50 mb-8 inline-block w-full">
              <span className="font-semibold">{getAssessment(resultScore)}</span>
            </div>
            <button onClick={reset} className="bg-surface hover:bg-surface/80 text-text-base border border-surface/50 font-medium py-3 px-6 rounded-xl transition-colors text-sm">
              Take test again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
