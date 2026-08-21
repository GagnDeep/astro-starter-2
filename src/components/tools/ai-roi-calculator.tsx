import React, { useState } from "react";

export default function AiRoiCalculator() {
  const [employees, setEmployees] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(40);
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState<number>(5);
  const [aiCostPerUserMonth, setAiCostPerUserMonth] = useState<number>(20);

  const totalCostPerMonth = employees * aiCostPerUserMonth;
  const hoursSavedPerMonthPerEmployee = hoursSavedPerWeek * 4.33;
  const grossSavingsPerMonth = employees * hoursSavedPerMonthPerEmployee * hourlyRate;
  const netSavingsPerMonth = grossSavingsPerMonth - totalCostPerMonth;
  const roi = totalCostPerMonth > 0 ? (netSavingsPerMonth / totalCostPerMonth) * 100 : 0;

  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      <h3 className="text-xl font-bold mb-4">AI ROI Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Number of Employees</label>
          <input
            type="number"
            min="1"
            value={employees}
            onChange={e => setEmployees(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Average Hourly Rate ($)</label>
          <input
            type="number"
            min="1"
            value={hourlyRate}
            onChange={e => setHourlyRate(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Hours Saved / Week / Employee</label>
          <input
            type="number"
            min="0"
            value={hoursSavedPerWeek}
            onChange={e => setHoursSavedPerWeek(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">AI Tool Cost / User / Month ($)</label>
          <input
            type="number"
            min="0"
            value={aiCostPerUserMonth}
            onChange={e => setAiCostPerUserMonth(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h4 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">Your Estimated Monthly ROI</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-500">Monthly AI Cost</p>
            <p className="text-xl font-medium text-slate-800">${totalCostPerMonth.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Gross Value of Time Saved</p>
            <p className="text-xl font-medium text-green-700">${grossSavingsPerMonth.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
          </div>
          <div className="col-span-2 pt-2 border-t mt-2">
            <p className="text-sm font-semibold text-slate-700">Net Monthly Savings</p>
            <p className="text-3xl font-bold text-brand-600">${netSavingsPerMonth.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-slate-500 mt-1">ROI: {roi.toLocaleString(undefined, {maximumFractionDigits: 0})}%</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-slate-500 italic">
        <p><strong>Note:</strong> We calculate monthly savings assuming 4.33 weeks per month. This assumes employees reinvest saved time into productive, billable, or otherwise valuable work equal to their hourly rate.</p>
      </div>
    </div>
  );
}
