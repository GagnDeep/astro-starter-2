import React, { useState } from 'react';

export default function GoalProjectionCalculator() {
  const [currentValue, setCurrentValue] = useState(180);
  const [goalValue, setGoalValue] = useState(160);
  const [dailyRate, setDailyRate] = useState(0.2);

  let daysRequired = 0;
  let isPossible = true;

  const diff = currentValue - goalValue;
  const isLosing = diff > 0;

  if (isLosing && dailyRate > 0) {
    daysRequired = diff / dailyRate;
  } else if (!isLosing && dailyRate < 0) {
    daysRequired = Math.abs(diff) / Math.abs(dailyRate);
  } else if (diff === 0) {
    daysRequired = 0;
  } else {
    isPossible = false;
  }

  const projectedDate = new Date();
  projectedDate.setDate(projectedDate.getDate() + Math.ceil(daysRequired));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[var(--color-secondary)] my-8">
      <h3 className="text-xl font-bold mb-4">Goal Projection Calculator</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Current Value</label>
            <input
              type="number"
              value={currentValue}
              onChange={e => setCurrentValue(parseFloat(e.target.value))}
              className="w-full border p-2 rounded tabular-data min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Goal Value</label>
            <input
              type="number"
              value={goalValue}
              onChange={e => setGoalValue(parseFloat(e.target.value))}
              className="w-full border p-2 rounded tabular-data min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Daily Change Rate (+/-)</label>
            <input
              type="number"
              step="0.01"
              value={dailyRate}
              onChange={e => setDailyRate(parseFloat(e.target.value))}
              className="w-full border p-2 rounded tabular-data min-h-[44px]"
            />
          </div>
        </div>

        <div className="bg-[var(--color-bg-base)] p-4 rounded mt-4">
          <h4 className="font-medium mb-2">Projection Result</h4>
          {!isPossible ? (
            <p className="text-[var(--color-error)]">Your daily change rate is moving away from your goal. Adjust the sign (positive/negative).</p>
          ) : daysRequired === 0 ? (
            <p className="text-[var(--color-primary)] font-bold">You have already reached your goal!</p>
          ) : (
            <div>
              <p className="text-xl font-bold tabular-data">{Math.ceil(daysRequired)} Days</p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Plain English Result:</strong> If you maintain a daily change of {dailyRate}, you will reach your goal of {goalValue} in approximately {Math.ceil(daysRequired)} days, hitting the target around <strong>{projectedDate.toLocaleDateString()}</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
