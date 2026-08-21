import React, { useState } from 'react';

export default function FIRPTACalculator() {
  const [salePrice, setSalePrice] = useState<number>(500000);
  const [isPrimaryResidence, setIsPrimaryResidence] = useState<boolean>(false);

  let rate = 15;
  if (isPrimaryResidence) {
    if (salePrice <= 300000) rate = 0;
    else if (salePrice <= 1000000) rate = 10;
  }

  const withholdingAmount = (salePrice * rate) / 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 my-8">
      <h3 className="text-xl font-bold mb-4 mt-0">FIRPTA Withholding Calculator</h3>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Sale Price (USD)</label>
          <input
            type="number"
            value={salePrice}
            onChange={(e) => setSalePrice(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="primaryResidence"
            checked={isPrimaryResidence}
            onChange={(e) => setIsPrimaryResidence(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
          />
          <label htmlFor="primaryResidence" className="ml-2 block text-sm text-slate-700">
            Will the buyer use this as a primary residence? (Often hard to guarantee for foreign sellers)
          </label>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
        <div className="text-sm text-slate-500 uppercase font-semibold">Estimated Withholding</div>
        <div className="text-3xl font-bold text-slate-900">${withholdingAmount.toLocaleString()} <span className="text-lg font-normal text-slate-500">({rate}%)</span></div>
        <p className="text-sm text-slate-600 mt-2">
          Note: This is the amount held at closing by the IRS. It is not necessarily your final tax bill. You must file a US tax return to claim a refund if your actual capital gains tax is lower.
        </p>
      </div>
    </div>
  );
}
