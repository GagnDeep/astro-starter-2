import React, { useState } from 'react';

export default function InsuranceChecker() {
  const [selectedPayer, setSelectedPayer] = useState<string>('');
  const [result, setResult] = useState<{ status: 'accepted' | 'conditional' | 'selfpay'; details: string } | null>(null);

  const payers = [
    { id: 'bcbs', name: 'Blue Cross Blue Shield of Texas (PPO / POS)' },
    { id: 'aetna', name: 'Aetna Health Care (PPO / Choice POS II)' },
    { id: 'uhc', name: 'UnitedHealthcare (Choice Plus / PPO)' },
    { id: 'humana', name: 'Humana Commercial Plans' },
    { id: 'medicare', name: 'Traditional Medicare Part B' },
    { id: 'medicare-advantage', name: 'Medicare Advantage (Select Networks)' },
    { id: 'medicaid', name: 'Texas Medicaid / STAR Plans' },
    { id: 'selfpay', name: 'Self-Pay / Out-of-Network / High Deductible' },
  ];

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPayer) return;

    if (['bcbs', 'aetna', 'uhc', 'medicare'].includes(selectedPayer)) {
      setResult({
        status: 'accepted',
        details: 'In-Network: We directly bill this insurance carrier. Standard copays, deductible, and coinsurance apply.'
      });
    } else if (['humana', 'medicare-advantage'].includes(selectedPayer)) {
      setResult({
        status: 'conditional',
        details: 'Conditional Coverage: In-network for select sub-plans. Please verify tier status with our clinic coordinator or call your member services number.'
      });
    } else if (selectedPayer === 'medicaid') {
      setResult({
        status: 'conditional',
        details: 'Note: Dr. Ameena is currently at maximum capacity for Medicaid panels, but provides discounted self-pay consultation options with detailed billing super-bills.'
      });
    } else {
      setResult({
        status: 'selfpay',
        details: 'Self-Pay Transparency: Initial Comprehensive Consult ($275), Follow-up ($150). Itemized super-bills provided for out-of-network reimbursement claims.'
      });
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
      <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
        Insurance & Coverage Quick-Checker
      </h3>
      <p className="text-xs text-charcoal-muted mb-4">
        Select your primary health insurance carrier to verify in-network status and direct-billing compatibility:
      </p>

      <form onSubmit={handleCheck} className="space-y-4">
        <div>
          <label htmlFor="payer-select" className="block text-xs font-semibold text-charcoal mb-1">
            Primary Insurance Plan:
          </label>
          <select
            id="payer-select"
            value={selectedPayer}
            onChange={(e) => setSelectedPayer(e.target.value)}
            className="w-full bg-cream border border-border rounded-lg p-2.5 text-sm text-charcoal focus:ring-2 focus:ring-terracotta focus:outline-none"
          >
            <option value="">-- Select Insurance Provider --</option>
            {payers.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-terracotta text-cream text-xs font-semibold py-2.5 px-4 rounded-lg hover:bg-terracotta-hover transition-colors shadow-sm"
        >
          Check Network Status
        </button>
      </form>

      {result && (
        <div className={`mt-4 p-4 rounded-lg text-xs font-medium border ${
          result.status === 'accepted' ? 'bg-sage-light/80 border-sage/40 text-sage-dark' :
          result.status === 'conditional' ? 'bg-amber-50 border-amber-300 text-amber-900' :
          'bg-cream border-border text-charcoal'
        }`}>
          <div className="font-bold text-sm mb-1">
            {result.status === 'accepted' && '✓ In-Network Carrier'}
            {result.status === 'conditional' && '⚠ Verification Recommended'}
            {result.status === 'selfpay' && '★ Transparent Self-Pay Plan'}
          </div>
          <p className="leading-relaxed">{result.details}</p>
        </div>
      )}
    </div>
  );
}
