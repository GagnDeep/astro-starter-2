import React, { useState } from "react";

export default function AutomationTimeCalculator() {
  const [taskVolumePerWeek, setTaskVolumePerWeek] = useState(100);
  const [timePerTaskMinutes, setTimePerTaskMinutes] = useState(15);
  const [automationSuccessRate, setAutomationSuccessRate] = useState(80);
  const [humanReviewTimeMinutes, setHumanReviewTimeMinutes] = useState(3);

  const manualTotalMinutes = taskVolumePerWeek * timePerTaskMinutes;
  const automatedTasks = taskVolumePerWeek * (automationSuccessRate / 100);
  const automatedMinutes = automatedTasks * humanReviewTimeMinutes;

  // The tasks that fail automation still take full manual time
  const manualFallbackTasks = taskVolumePerWeek - automatedTasks;
  const manualFallbackMinutes = manualFallbackTasks * timePerTaskMinutes;

  const newTotalMinutes = automatedMinutes + manualFallbackMinutes;
  const minutesSaved = Math.max(0, manualTotalMinutes - newTotalMinutes);
  const hoursSaved = minutesSaved / 60;

  const percentageSaved = manualTotalMinutes > 0 ? (minutesSaved / manualTotalMinutes) * 100 : 0;

  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      <h3 className="text-xl font-bold mb-4">Workflow Automation Time Calculator</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Task Volume per Week</label>
          <input
            type="number"
            min="0"
            value={taskVolumePerWeek}
            onChange={e => setTaskVolumePerWeek(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Time to Complete 1 Task (Minutes)</label>
          <input
            type="number"
            min="0"
            value={timePerTaskMinutes}
            onChange={e => setTimePerTaskMinutes(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Automation Success Rate (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={automationSuccessRate}
            onChange={e => setAutomationSuccessRate(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
          <p className="text-xs text-slate-500 mt-1">Percentage of tasks the AI handles successfully.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Human Review Time (Minutes)</label>
          <input
            type="number"
            min="0"
            value={humanReviewTimeMinutes}
            onChange={e => setHumanReviewTimeMinutes(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
          <p className="text-xs text-slate-500 mt-1">Time to verify/edit a successful AI output.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h4 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">Results</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-500">Current Time Spend</p>
            <p className="text-xl font-medium text-slate-800">{(manualTotalMinutes / 60).toFixed(1)} hours/week</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">New Time Spend</p>
            <p className="text-xl font-medium text-slate-800">{(newTotalMinutes / 60).toFixed(1)} hours/week</p>
          </div>
          <div className="col-span-2 pt-2 border-t mt-2">
            <p className="text-sm font-semibold text-slate-700">Time Saved per Week</p>
            <div className="flex items-end gap-4">
              <p className="text-3xl font-bold text-brand-600">{hoursSaved.toFixed(1)} hours</p>
              <p className="text-lg font-medium text-green-700 mb-1">({percentageSaved.toFixed(0)}% reduction)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-slate-500 italic">
        <p><strong>Note:</strong> We assume a human-in-the-loop workflow. Automated tasks still require review time. Failed automations revert to full manual processing time.</p>
      </div>
    </div>
  );
}
