import React, { useState } from 'react';

export default function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<number>(500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(35);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);

  const downPayment = purchasePrice * (downPaymentPercent / 100);
  const loanAmount = purchasePrice - downPayment;

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyMortgage = loanAmount > 0 && interestRate > 0 ? (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) : 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 my-8">
      <h3 className="text-xl font-bold mb-4 mt-0">Mortgage Calculator</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Price (USD)</label>
            <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Down Payment (%)</label>
            <input type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
            <input type="number" value={interestRate} step="0.1" onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term (Years)</label>
            <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-300 rounded-md" />
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
        <div className="text-sm text-slate-500 uppercase font-semibold">Monthly Principal & Interest</div>
        <div className="text-3xl font-bold text-slate-900">${monthlyMortgage.toFixed(2)}</div>
        <div className="mt-4 text-sm text-slate-600">
          Estimated Down Payment: ${downPayment.toLocaleString()} <br/>
          Estimated Loan Amount: ${loanAmount.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
