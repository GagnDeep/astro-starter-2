import React, { useState } from 'react';

export default function TransitTimeTracker() {
  const [ingestDate, setIngestDate] = useState<string>('');
  const [ingestTime, setIngestTime] = useState<string>('');
  const [passDate, setPassDate] = useState<string>('');
  const [passTime, setPassTime] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!ingestDate || !ingestTime || !passDate || !passTime) {
      setResult('Please fill out all fields.');
      return;
    }

    const ingest = new Date(`${ingestDate}T${ingestTime}`);
    const pass = new Date(`${passDate}T${passTime}`);

    const diffMs = pass.getTime() - ingest.getTime();
    if (diffMs <= 0) {
      setResult('Pass time must be after ingest time.');
      return;
    }

    const hours = (diffMs / (1000 * 60 * 60)).toFixed(1);

    let interpretation = "";
    if (Number(hours) < 24) interpretation = "This is on the faster side (possible rapid transit/diarrhea).";
    else if (Number(hours) <= 72) interpretation = "This is within the normal healthy range.";
    else interpretation = "This is on the slower side (possible constipation).";

    setResult(`Your transit time is ${hours} hours. ${interpretation}`);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg my-8 max-w-lg">
      <h2 className="text-2xl font-semibold mb-4 text-[#1A4331]">Transit Time Tracker</h2>
      <p className="text-sm mb-4">Tip: Eat something distinctive (like corn or beets) to track the time.</p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ingest Date</label>
            <input type="date" value={ingestDate} onChange={e => setIngestDate(e.target.value)} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Ingest Time</label>
            <input type="time" value={ingestTime} onChange={e => setIngestTime(e.target.value)} className="w-full border rounded p-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Pass Date</label>
            <input type="date" value={passDate} onChange={e => setPassDate(e.target.value)} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pass Time</label>
            <input type="time" value={passTime} onChange={e => setPassTime(e.target.value)} className="w-full border rounded p-2" />
          </div>
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
          <p className="text-xs mt-2 text-gray-500">(Source: Mayo Clinic guidelines. Normal transit time is 24 to 72 hours.)</p>
        </div>
      )}
    </div>
  );
}
