import React, { useState } from 'react';

export default function FiberCalculator() {
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!age || !gender) {
      setResult('Please provide both age and gender.');
      return;
    }

    let target = 0;
    if (gender === 'male') {
      target = age <= 50 ? 38 : 30;
    } else {
      target = age <= 50 ? 25 : 21;
    }

    setResult(`Your recommended daily fiber intake is ${target}g per day. (Source: Institute of Medicine, 2005)`);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg my-8 max-w-lg">
      <h2 className="text-2xl font-semibold mb-4 text-[#1A4331]">Interactive Fiber Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="e.g. 35"
          />
        </div>
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
