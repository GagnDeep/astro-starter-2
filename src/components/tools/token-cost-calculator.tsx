import React, { useState } from "react";

const MODELS = [
  { name: "GPT-4o", inputCost: 5.0, outputCost: 15.0 },
  { name: "GPT-4 Turbo", inputCost: 10.0, outputCost: 30.0 },
  { name: "GPT-3.5 Turbo", inputCost: 0.5, outputCost: 1.5 },
  { name: "Claude 3.5 Sonnet", inputCost: 3.0, outputCost: 15.0 },
  { name: "Claude 3 Opus", inputCost: 15.0, outputCost: 75.0 },
  { name: "Claude 3 Haiku", inputCost: 0.25, outputCost: 1.25 },
];

export default function TokenCostCalculator() {
  const [modelIndex, setModelIndex] = useState(0);
  const [dailyInputTokens, setDailyInputTokens] = useState(10000);
  const [dailyOutputTokens, setDailyOutputTokens] = useState(2000);
  const [users, setUsers] = useState(100);

  const model = MODELS[modelIndex];

  // Costs are per 1M tokens
  const dailyInputCostPerUser = (dailyInputTokens / 1000000) * model.inputCost;
  const dailyOutputCostPerUser = (dailyOutputTokens / 1000000) * model.outputCost;
  const dailyCostPerUser = dailyInputCostPerUser + dailyOutputCostPerUser;

  const monthlyTotalCost = dailyCostPerUser * users * 30; // 30 days per month

  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      <h3 className="text-xl font-bold mb-4">API Token Cost Estimator</h3>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-1">Select Model</label>
        <select
          value={modelIndex}
          onChange={(e) => setModelIndex(Number(e.target.value))}
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-brand-500 focus:border-brand-500"
        >
          {MODELS.map((m, idx) => (
            <option key={m.name} value={idx}>{m.name} (Input: ${m.inputCost}/1M, Output: ${m.outputCost}/1M)</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input Tokens / User / Day</label>
          <input
            type="number"
            min="0"
            value={dailyInputTokens}
            onChange={e => setDailyInputTokens(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Output Tokens / User / Day</label>
          <input
            type="number"
            min="0"
            value={dailyOutputTokens}
            onChange={e => setDailyOutputTokens(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Number of Active Users</label>
          <input
            type="number"
            min="1"
            value={users}
            onChange={e => setUsers(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h4 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">Estimated Costs</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-500">Daily Cost per User</p>
            <p className="text-xl font-medium text-slate-800">${dailyCostPerUser.toFixed(4)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Daily Total Cost</p>
            <p className="text-xl font-medium text-slate-800">${(dailyCostPerUser * users).toFixed(2)}</p>
          </div>
          <div className="col-span-2 pt-2 border-t mt-2">
            <p className="text-sm font-semibold text-slate-700">Estimated Monthly API Cost (30 days)</p>
            <p className="text-3xl font-bold text-brand-600">${monthlyTotalCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-slate-500 italic">
        <p><strong>Note:</strong> 1 token is roughly 4 characters or 0.75 words for English text. Pricing used is cited from provider documentation as of mid-2024. Costs do not account for token caching discounts available on some models.</p>
      </div>
    </div>
  );
}
