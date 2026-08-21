import React, { useState } from 'react';

export default function VarianceCalculator() {
  const [data, setData] = useState("10, 12, 23, 23, 16, 23, 21, 16");

  const points = data.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

  let mean = 0;
  let variance = 0;
  let stdDev = 0;

  if (points.length > 0) {
    mean = points.reduce((a, b) => a + b, 0) / points.length;
    const squaredDiffs = points.map(n => Math.pow(n - mean, 2));
    variance = squaredDiffs.reduce((a, b) => a + b, 0) / points.length;
    stdDev = Math.sqrt(variance);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[var(--color-secondary)] my-8">
      <h3 className="text-xl font-bold mb-4">Variance & Standard Deviation Calculator</h3>
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

        <div className="bg-[var(--color-bg-base)] p-4 rounded mt-4">
          <h4 className="font-medium mb-2">Statistical Breakdown</h4>
          {points.length > 0 ? (
            <ul className="space-y-2">
              <li><strong>Count:</strong> <span className="tabular-data">{points.length}</span> items</li>
              <li><strong>Mean (Average):</strong> <span className="tabular-data">{mean.toFixed(2)}</span></li>
              <li><strong>Variance:</strong> <span className="tabular-data">{variance.toFixed(2)}</span></li>
              <li><strong>Standard Deviation:</strong> <span className="tabular-data">{stdDev.toFixed(2)}</span></li>
            </ul>
          ) : (
            <p className="text-sm text-gray-500">Please enter valid numbers.</p>
          )}

          <div className="mt-4 pt-4 border-t border-[var(--color-secondary)] text-sm text-gray-700">
            <strong>Plain English Result:</strong> On average, your data points deviate from the mean by {stdDev.toFixed(2)} units. A high standard deviation means your metrics are highly volatile (e.g. erratic sleep schedule). A low number means you are highly consistent.
          </div>
        </div>
      </div>
    </div>
  );
}
