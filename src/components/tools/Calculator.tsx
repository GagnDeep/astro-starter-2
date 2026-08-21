import React, { useState } from 'react';

export default function Calculator() {
  const [sizeMB, setSizeMB] = useState('');
  const [speedMbps, setSpeedMbps] = useState('20');

  const size = parseFloat(sizeMB);
  const speed = parseFloat(speedMbps);

  let result = null;
  if (!isNaN(size) && !isNaN(speed) && speed > 0) {
    // size in MB * 8 = size in Megabits.
    const timeSeconds = (size * 8) / speed;
    result = timeSeconds.toFixed(2);
  }

  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 my-6">
      <h3 className="text-lg font-medium mb-4">Document Size & Upload Time Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">File Size (MB)</label>
          <input
            type="number"
            value={sizeMB}
            onChange={e => setSizeMB(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            placeholder="e.g. 5"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Speed (Mbps)</label>
          <input
            type="number"
            value={speedMbps}
            onChange={e => setSpeedMbps(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
          />
        </div>
        {result !== null && (
          <div className="mt-4 p-4 bg-blue-50 text-blue-900 rounded border border-blue-200">
            Estimated Upload Time: <span className="tabular-nums font-bold">{result}</span> seconds.
          </div>
        )}
        <noscript>
          <div className="mt-4 p-4 bg-yellow-50 text-yellow-900 rounded border border-yellow-200">
            Please enable JavaScript to use this calculator.
            <br/><br/>
            <strong>Manual Calculation Method:</strong><br/>
            Time (seconds) = (File Size in MB × 8) / Upload Speed in Mbps
          </div>
        </noscript>
      </div>
    </div>
  );
}
