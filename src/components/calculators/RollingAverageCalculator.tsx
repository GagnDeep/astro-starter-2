import React, { useState } from 'react';

export default function RollingAverageCalculator() {
  const [data, setData] = useState("10, 15, 20, 25, 30, 20, 15");
  const [window, setWindow] = useState(3);

  const points = data.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

  let averages = [];
  if (points.length >= window && window > 0) {
    for (let i = 0; i <= points.length - window; i++) {
      const slice = points.slice(i, i + window);
      const sum = slice.reduce((a, b) => a + b, 0);
      averages.push((sum / window).toFixed(2));
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[var(--color-secondary)] my-8">
      <h3 className="text-xl font-bold mb-4">Interactive Rolling Average</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Data Points (comma separated)</label>
          <input
            type="text"
            value={data}
            onChange={e => setData(e.target.value)}
            className="w-full border p-2 rounded tabular-data min-h-[44px]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Window Size (days)</label>
          <input
            type="number"
            value={window}
            onChange={e => setWindow(parseInt(e.target.value))}
            min={1}
            max={points.length || 1}
            className="w-full border p-2 rounded tabular-data min-h-[44px]"
          />
        </div>
        <div className="bg-[var(--color-bg-base)] p-4 rounded mt-4">
          <h4 className="font-medium mb-2">Results (Averages)</h4>
          {averages.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {averages.map((avg, i) => (
                <span key={i} className="bg-[var(--color-primary)] text-white px-2 py-1 rounded text-sm tabular-data">
                  {avg}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">Not enough data points for the given window.</p>
          )}
        </div>
      </div>
    </div>
  );
}
