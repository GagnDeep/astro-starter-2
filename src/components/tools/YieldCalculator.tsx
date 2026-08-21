import React, { useState } from 'react';

export default function YieldCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<number>(400000);
  const [monthlyRent, setMonthlyRent] = useState<number>(3500);
  const [annualExpenses, setAnnualExpenses] = useState<number>(12000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(6.5);

  const downPayment = purchasePrice * (downPaymentPercent / 100);
  const loanAmount = purchasePrice - downPayment;

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = 30 * 12;
  const monthlyMortgage = loanAmount > 0 && interestRate > 0 ? (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) : 0;
  const annualMortgage = monthlyMortgage * 12;

  const grossAnnualIncome = monthlyRent * 12;
  const netOperatingIncome = grossAnnualIncome - annualExpenses;
  const annualCashFlow = netOperatingIncome - annualMortgage;

  const capRate = purchasePrice > 0 ? (netOperatingIncome / purchasePrice) * 100 : 0;
  const cashOnCashReturn = downPayment > 0 ? (annualCashFlow / downPayment) * 100 : 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 my-8">
      <h3 className="text-xl font-bold mb-4 mt-0">US Real Estate Yield Calculator</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Price (USD)</label>
            <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Rent (USD)</label>
            <input type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Annual Expenses (Taxes, Ins, Mgmt)</label>
            <input type="number" value={annualExpenses} onChange={(e) => setAnnualExpenses(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Down Payment (%)</label>
            <input type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
            <input type="number" value={interestRate} step="0.1" onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
          <div className="text-sm text-slate-500 uppercase font-semibold">Cap Rate</div>
          <div className="text-2xl font-bold text-slate-900">{capRate.toFixed(2)}%</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
          <div className="text-sm text-slate-500 uppercase font-semibold">Cash-on-Cash Return</div>
          <div className="text-2xl font-bold text-slate-900">{cashOnCashReturn.toFixed(2)}%</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-md border border-blue-100 col-span-2">
          <div className="text-sm text-blue-800 uppercase font-semibold">Annual Net Cash Flow</div>
          <div className="text-2xl font-bold text-blue-900">${annualCashFlow.toFixed(0)}</div>
        </div>
      </div>
    </div>
  );
}
