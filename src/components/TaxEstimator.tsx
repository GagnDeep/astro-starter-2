import { useState, useId } from 'react';

export default function TaxEstimator() {
  const [grossIncome, setGrossIncome] = useState<number>(85000);
  const [deductions, setDeductions] = useState<number>(12000);
  const [w2Income, setW2Income] = useState<number>(0);
  const [filingStatus, setFilingStatus] = useState<'single' | 'married_joint'>('single');
  const [taxYear, setTaxYear] = useState<'2025' | '2024'>('2025');

  const grossId = useId();
  const deductionsId = useId();
  const w2Id = useId();
  const statusId = useId();
  const yearId = useId();

  // Calculation Logic (Cited in /PLAN.md)
  const is2025 = taxYear === '2025';
  const ssCap = is2025 ? 176100 : 168600;
  const stdDeduction = filingStatus === 'single'
    ? (is2025 ? 15000 : 14600)
    : (is2025 ? 30000 : 29200);

  const netProfit = Math.max(0, grossIncome - deductions);
  const seEarnings = netProfit * 0.9235;

  // SE Tax Parts
  const ssTax = Math.min(seEarnings, ssCap) * 0.124;
  const medTax = seEarnings * 0.029;
  const thresholdAddMed = filingStatus === 'single' ? 200000 : 250000;
  const addMedTax = Math.max(0, (seEarnings + w2Income) - thresholdAddMed) * 0.009;
  const totalSeTax = ssTax + medTax + addMedTax;

  // Deductions to Income
  const halfSeDeduction = totalSeTax * 0.5;
  const agi = w2Income + netProfit - halfSeDeduction;

  // QBI Deduction (IRC Sec 199A)
  const qbiBase = Math.max(0, netProfit - halfSeDeduction);
  const qbiDeduction = Math.min(0.20 * qbiBase, 0.20 * Math.max(0, agi - stdDeduction));

  // Taxable Income
  const taxableIncome = Math.max(0, agi - stdDeduction - qbiDeduction);

  // Progressive Income Tax (2025 Single)
  const calculateIncomeTax = (taxable: number, status: string) => {
    if (taxable <= 0) return 0;
    if (status === 'single') {
      if (taxable <= 11925) return taxable * 0.10;
      if (taxable <= 48475) return 1192.5 + (taxable - 11925) * 0.12;
      if (taxable <= 103350) return 5578.5 + (taxable - 48475) * 0.22;
      if (taxable <= 197300) return 17651 + (taxable - 103350) * 0.24;
      if (taxable <= 250525) return 40199 + (taxable - 197300) * 0.32;
      if (taxable <= 626350) return 57231 + (taxable - 250525) * 0.35;
      return 188769.75 + (taxable - 626350) * 0.37;
    } else {
      if (taxable <= 23850) return taxable * 0.10;
      if (taxable <= 96950) return 2385 + (taxable - 23850) * 0.12;
      if (taxable <= 206700) return 11157 + (taxable - 96950) * 0.22;
      if (taxable <= 394600) return 35302 + (taxable - 206700) * 0.24;
      return 80398 + (taxable - 394600) * 0.32;
    }
  };

  const incomeTax = calculateIncomeTax(taxableIncome, filingStatus);
  const totalTaxBurden = totalSeTax + incomeTax;
  const quarterlyPayment = totalTaxBurden / 4;
  const effectiveTaxRate = grossIncome > 0 ? (totalTaxBurden / grossIncome) * 100 : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-[var(--color-bg-secondary)] border-2 border-[var(--color-border-default)] rounded-xl p-6 md:p-8 shadow-[6px_6px_0px_0px_var(--color-border-default)] max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--color-border-default)] pb-4 mb-6 gap-4">
        <div>
          <span className="font-mono text-xs font-bold bg-[var(--color-bg-accent)] text-[var(--color-text-inverse)] px-2.5 py-1 rounded uppercase">
            Interactive Island
          </span>
          <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mt-1">
            Instant 1099 Tax Estimator
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs font-bold">
          <label htmlFor={yearId} className="sr-only">Tax Year</label>
          <select
            id={yearId}
            value={taxYear}
            onChange={(e) => setTaxYear(e.target.value as '2025' | '2024')}
            className="bg-[var(--color-bg-primary)] border border-[var(--color-border-default)] px-3 py-1.5 rounded text-[var(--color-text-primary)]"
          >
            <option value="2025">Tax Year 2025</option>
            <option value="2024">Tax Year 2024</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Form Column */}
        <div className="space-y-5">
          <div>
            <label htmlFor={grossId} className="block font-mono text-xs font-bold text-[var(--color-text-primary)] uppercase mb-1">
              Gross 1099 Freelance Income ($)
            </label>
            <input
              id={grossId}
              type="number"
              value={grossIncome}
              onChange={(e) => setGrossIncome(Number(e.target.value))}
              className="w-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-border-default)] p-3 rounded font-mono font-bold text-lg text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-border-accent)] tabular-nums"
              min="0"
              step="1000"
            />
          </div>

          <div>
            <label htmlFor={deductionsId} className="block font-mono text-xs font-bold text-[var(--color-text-primary)] uppercase mb-1">
              Business Expenses & Write-Offs ($)
            </label>
            <input
              id={deductionsId}
              type="number"
              value={deductions}
              onChange={(e) => setDeductions(Number(e.target.value))}
              className="w-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-border-default)] p-3 rounded font-mono font-bold text-lg text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-border-accent)] tabular-nums"
              min="0"
              step="500"
            />
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-sans">
              Software, laptops, home office, client meals, mileage.
            </p>
          </div>

          <div>
            <label htmlFor={w2Id} className="block font-mono text-xs font-bold text-[var(--color-text-primary)] uppercase mb-1">
              W-2 Salary Income ($) <span className="text-[var(--color-text-secondary)]">(Optional Side Hustle)</span>
            </label>
            <input
              id={w2Id}
              type="number"
              value={w2Income}
              onChange={(e) => setW2Income(Number(e.target.value))}
              className="w-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-border-default)] p-3 rounded font-mono font-bold text-lg text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-border-accent)] tabular-nums"
              min="0"
              step="1000"
            />
          </div>

          <div>
            <label htmlFor={statusId} className="block font-mono text-xs font-bold text-[var(--color-text-primary)] uppercase mb-1">
              Filing Status
            </label>
            <select
              id={statusId}
              value={filingStatus}
              onChange={(e) => setFilingStatus(e.target.value as 'single' | 'married_joint')}
              className="w-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-border-default)] p-3 rounded font-mono font-bold text-base text-[var(--color-text-primary)] focus:outline-none"
            >
              <option value="single">Single Filer ($15,000 Standard Deduction)</option>
              <option value="married_joint">Married Filing Jointly ($30,000 Standard Deduction)</option>
            </select>
          </div>
        </div>

        {/* Results Column */}
        <div className="bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)] p-6 rounded-lg border-2 border-[var(--color-border-default)] flex flex-col justify-between space-y-6">
          <div>
            <span className="font-mono text-xs font-bold text-[var(--color-text-emerald)] uppercase tracking-wider block mb-1">
              Estimated Total Tax Burden
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[var(--color-text-inverse)] tracking-tight tabular-nums">
              {formatCurrency(totalTaxBurden)}
            </div>
            <p className="font-mono text-xs text-[var(--color-text-emerald)] mt-1 font-bold">
              Effective Tax Rate: {effectiveTaxRate.toFixed(1)}% of Gross
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-[var(--color-border-dark)] pt-4 font-mono text-xs">
            <div>
              <span className="text-[var(--color-border-subtle)] block">Quarterly Payment</span>
              <span className="text-lg font-bold text-[var(--color-bg-amber)] tabular-nums block mt-0.5">
                {formatCurrency(quarterlyPayment)}
              </span>
              <span className="text-[10px] text-[var(--color-border-subtle)]">Due Q1, Q2, Q3, Q4</span>
            </div>
            <div>
              <span className="text-[var(--color-border-subtle)] block">Net Profit</span>
              <span className="text-lg font-bold text-[var(--color-text-inverse)] tabular-nums block mt-0.5">
                {formatCurrency(netProfit)}
              </span>
              <span className="text-[10px] text-[var(--color-border-subtle)]">Schedule C Line 31</span>
            </div>
          </div>

          <div className="border-t border-[var(--color-border-dark)] pt-4 font-mono text-xs space-y-2">
            <div className="flex justify-between text-[var(--color-border-subtle)]">
              <span>15.3% Self-Employment Tax:</span>
              <span className="text-[var(--color-text-inverse)] font-bold tabular-nums">{formatCurrency(totalSeTax)}</span>
            </div>
            <div className="flex justify-between text-[var(--color-border-subtle)]">
              <span>Federal Income Tax:</span>
              <span className="text-[var(--color-text-inverse)] font-bold tabular-nums">{formatCurrency(incomeTax)}</span>
            </div>
            <div className="flex justify-between text-[var(--color-border-subtle)]">
              <span>50% Above-Line SE Deduction:</span>
              <span className="text-[var(--color-text-emerald)] font-bold tabular-nums">-{formatCurrency(halfSeDeduction)}</span>
            </div>
            <div className="flex justify-between text-[var(--color-border-subtle)]">
              <span>20% QBI Deduction (Sec 199A):</span>
              <span className="text-[var(--color-text-emerald)] font-bold tabular-nums">-{formatCurrency(qbiDeduction)}</span>
            </div>
          </div>

          <div className="bg-[var(--color-bg-dark-card)] p-3 rounded border border-[var(--color-border-accent)] text-[11px] font-sans text-[var(--color-border-subtle)] leading-tight">
            <strong>CPA Fact Check:</strong> SE tax rate is 15.3% on 92.35% of profit. Calculated under IRS Rev. Proc. 2024-40 rules.
          </div>
        </div>
      </div>
    </div>
  );
}
