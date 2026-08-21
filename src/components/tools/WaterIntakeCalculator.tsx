import React, { useState } from 'react';

export default function WaterIntakeCalculator() {
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!gender) {
      setResult('Please provide gender.');
      return;
    }

    // Roughly 3.7 liters for men, 2.7 liters for women total water, minus ~20% from food
    const target = gender === 'male' ? 3.0 : 2.2;

    setResult(`Your recommended daily water intake (beverages only) is ~${target} Liters per day to support healthy digestion. (Source: U.S. National Academies of Sciences, Engineering, and Medicine)`);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg my-8 max-w-lg">
      <h2 className="text-2xl font-semibold mb-4 text-[#1A4331]">Water Intake for Digestion</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as any)}
            className="w-full rounded border border-gray-300 p-2"
          >
            <option value="">Select gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button
          onClick={calculate}
          className="w-full bg-[#1A4331] text-white p-2 rounded font-medium hover:bg-[#133022]"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-4 p-4 bg-[#F9F8F6] rounded-md text-[#2D3330]">
          <p className="font-medium">{result}</p>
        </div>
      )}
    </div>
  );
}
