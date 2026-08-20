import React, { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";

export interface TaxEstimatorProps {
  initialGrossRon?: number;
  initialExpensesRon?: number;
}

export function TaxEstimator({
  initialGrossRon = 120000,
  initialExpensesRon = 20000,
}: TaxEstimatorProps) {
  const [grossRon, setGrossRon] = useState<number>(initialGrossRon);
  const [expensesRon, setExpensesRon] = useState<number>(initialExpensesRon);
  const [hasEmployeeSRL, setHasEmployeeSRL] = useState<boolean>(true);

  // 2025 National Minimum Gross Wage
  const MIN_WAGE = 4050;
  const TIER_6 = 6 * MIN_WAGE;   // 24,300 RON
  const TIER_12 = 12 * MIN_WAGE; // 48,600 RON
  const TIER_24 = 24 * MIN_WAGE; // 97,200 RON

  const netBeforeTax = Math.max(0, grossRon - expensesRon);

  // --- PFA REGIM REAL CALCULATIONS ---
  // CASS (Health - 10%)
  let cassBase = 0;
  let cassTierText = "Sub pragul de 6 salarii (fără obligativitate CASS minimă)";

  if (netBeforeTax >= TIER_24) {
    cassBase = TIER_24;
    cassTierText = "Plafon maxim 24 salarii minime (97.200 lei)";
  } else if (netBeforeTax >= TIER_12) {
    cassBase = TIER_12;
    cassTierText = "Plafon 12 salarii minime (48.600 lei)";
  } else if (netBeforeTax >= TIER_6) {
    cassBase = TIER_6;
    cassTierText = "Plafon 6 salarii minime (24.300 lei)";
  } else if (netBeforeTax > 0) {
    cassBase = netBeforeTax;
    cassTierText = "10% din venitul net real (sub 6 salarii)";
  }

  const pfaCass = cassBase * 0.10;

  // CAS (Pension - 25%)
  let casBase = 0;
  let casTierText = "Sub pragul de 12 salarii (CAS opțional)";

  if (netBeforeTax >= TIER_12) {
    casBase = TIER_12;
    casTierText = "Mandatoriu: Plafon 12 salarii minime (48.600 lei)";
  }

  const pfaCas = casBase * 0.25;

  // Income Tax (10% on Net - CAS - CASS)
  const pfaTaxableBase = Math.max(0, netBeforeTax - pfaCas - pfaCass);
  const pfaIncomeTax = pfaTaxableBase * 0.10;

  const pfaTotalTax = pfaCass + pfaCas + pfaIncomeTax;
  const pfaTakeHome = Math.max(0, netBeforeTax - pfaTotalTax);
  const pfaEffectiveRate = netBeforeTax > 0 ? (pfaTotalTax / netBeforeTax) * 100 : 0;

  // --- SRL MICRO COMPARISON CALCULATIONS ---
  const srlRevenueTaxRate = hasEmployeeSRL ? 0.01 : 0.03;
  const srlRevenueTax = grossRon * srlRevenueTaxRate;
  const srlAccountingAnnual = 3600; // ~300 RON/mo
  const srlGrossProfit = Math.max(0, grossRon - expensesRon - srlRevenueTax - srlAccountingAnnual);
  const srlDividendTax = srlGrossProfit * 0.08;
  const srlNetDividend = srlGrossProfit - srlDividendTax;

  // CASS on Dividends for Owner
  let srlOwnerCassBase = 0;
  if (srlGrossProfit >= TIER_24) srlOwnerCassBase = TIER_24;
  else if (srlGrossProfit >= TIER_12) srlOwnerCassBase = TIER_12;
  else if (srlGrossProfit >= TIER_6) srlOwnerCassBase = TIER_6;

  const srlOwnerCass = srlOwnerCassBase * 0.10;
  const srlTotalTax = srlRevenueTax + srlDividendTax + srlOwnerCass + srlAccountingAnnual;
  const srlTakeHome = Math.max(0, grossRon - expensesRon - srlTotalTax);
  const srlEffectiveRate = netBeforeTax > 0 ? (srlTotalTax / netBeforeTax) * 100 : 0;

  const formatRon = (val: number) =>
    Math.round(val).toLocaleString("ro-RO") + " lei";

  return (
    <div className="w-full bg-bg-surface border border-border-subtle rounded-xl p-6 md:p-8 shadow-2xl">
      <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-accent-lime/10 border border-accent-lime/30 rounded-lg text-accent-lime">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-mono font-bold text-xl text-text-main">
              Calculator Fiscal Instant PFA & SRL 2025
            </h3>
            <p className="text-xs text-text-muted">
              Actualizat conform HG 1506/2024 (Salariu minim: 4.050 lei) & OUG 156/2024
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setGrossRon(120000);
            setExpensesRon(20000);
          }}
          className="text-xs text-text-muted hover:text-accent-lime transition-colors flex items-center gap-1 font-mono"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
            Venit Anual Brut Încasat (RON)
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              step={1000}
              value={grossRon}
              onChange={(e) => setGrossRon(Number(e.target.value))}
              className="w-full bg-bg-base border border-border-subtle focus:border-accent-lime rounded-lg py-3 px-4 text-text-main font-mono text-lg font-bold tabular-nums focus:outline-none transition-colors"
            />
            <span className="absolute right-4 top-3.5 text-xs text-text-muted font-mono font-bold">
              RON / an
            </span>
          </div>
          <span className="text-[11px] text-text-muted mt-1.5 block font-mono">
            ~{formatRon(grossRon / 12)} / lună
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
            Cheltuieli Deductibile Anuale (RON)
          </label>
          <div className="relative">
            <input
              type="number"
              min={0}
              step={500}
              value={expensesRon}
              onChange={(e) => setExpensesRon(Number(e.target.value))}
              className="w-full bg-bg-base border border-border-subtle focus:border-accent-lime rounded-lg py-3 px-4 text-text-main font-mono text-lg font-bold tabular-nums focus:outline-none transition-colors"
            />
            <span className="absolute right-4 top-3.5 text-xs text-text-muted font-mono font-bold">
              RON / an
            </span>
          </div>
          <span className="text-[11px] text-text-muted mt-1.5 block font-mono">
            Laptop, abonamente, birou, utilități
          </span>
        </div>
      </div>

      {/* Results Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PFA Real Regim Box */}
        <div className="bg-bg-base border border-border-subtle rounded-xl p-5 md:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-accent-lime/10 text-accent-lime border border-accent-lime/30 rounded">
                PFA Regim Real 2025
              </span>
              <span className="text-xs font-mono text-text-muted">
                Cota taxare:{" "}
                <strong className="text-accent-lime font-mono tabular-nums">
                  {pfaEffectiveRate.toFixed(1)}%
                </strong>
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm border-b border-border-subtle pb-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Venit Net Înainte de Taxe:</span>
                <span className="text-text-main font-bold tabular-nums">
                  {formatRon(netBeforeTax)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Sănătate (CASS 10%):</span>
                <span className="text-text-main font-bold tabular-nums">
                  -{formatRon(pfaCass)}
                </span>
              </div>
              <p className="text-[11px] text-text-muted italic -mt-1 font-sans">
                ↳ {cassTierText}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-text-muted">Pensie (CAS 25%):</span>
                <span className="text-text-main font-bold tabular-nums">
                  -{formatRon(pfaCas)}
                </span>
              </div>
              <p className="text-[11px] text-text-muted italic -mt-1 font-sans">
                ↳ {casTierText}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-text-muted">Impozit pe Venit (10%):</span>
                <span className="text-text-main font-bold tabular-nums">
                  -{formatRon(pfaIncomeTax)}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end bg-bg-surface p-4 rounded-lg border border-border-subtle">
              <div>
                <span className="text-xs text-text-muted uppercase font-mono block">
                  Bani Curați în Buzunar
                </span>
                <span className="text-2xl font-mono font-extrabold text-accent-lime tabular-nums">
                  {formatRon(pfaTakeHome)}
                </span>
              </div>
              <span className="text-xs text-text-muted font-mono tabular-nums">
                ~{formatRon(pfaTakeHome / 12)} / lună
              </span>
            </div>
          </div>
        </div>

        {/* SRL Micro Box */}
        <div className="bg-bg-base border border-border-subtle rounded-xl p-5 md:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-text-muted/10 text-text-main border border-border-subtle rounded">
                SRL Microîntreprindere
              </span>
              <span className="text-xs font-mono text-text-muted">
                Cota taxare:{" "}
                <strong className="text-text-main font-mono tabular-nums">
                  {srlEffectiveRate.toFixed(1)}%
                </strong>
              </span>
            </div>

            <div className="mb-3">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-text-muted">
                <input
                  type="checkbox"
                  checked={hasEmployeeSRL}
                  onChange={(e) => setHasEmployeeSRL(e.target.checked)}
                  className="rounded border-border-subtle bg-bg-surface text-accent-lime focus:ring-accent-lime"
                />
                1 Angajat cu normă întreagă (Impozit 1% venit)
              </label>
            </div>

            <div className="space-y-3 font-mono text-sm border-b border-border-subtle pb-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Impozit Micro ({hasEmployeeSRL ? "1%" : "3%"})</span>
                <span className="text-text-main font-bold tabular-nums">
                  -{formatRon(srlRevenueTax)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Contabilitate Anuală (~300lei/mo):</span>
                <span className="text-text-main font-bold tabular-nums">
                  -{formatRon(srlAccountingAnnual)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Impozit Dividende (8%):</span>
                <span className="text-text-main font-bold tabular-nums">
                  -{formatRon(srlDividendTax)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">CASS Dividende Asociat:</span>
                <span className="text-text-main font-bold tabular-nums">
                  -{formatRon(srlOwnerCass)}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end bg-bg-surface p-4 rounded-lg border border-border-subtle">
              <div>
                <span className="text-xs text-text-muted uppercase font-mono block">
                  Bani Curați în Buzunar
                </span>
                <span className="text-2xl font-mono font-extrabold text-text-main tabular-nums">
                  {formatRon(srlTakeHome)}
                </span>
              </div>
              <span className="text-xs text-text-muted font-mono tabular-nums">
                ~{formatRon(srlTakeHome / 12)} / lună
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Callout */}
      <div className="mt-6 p-4 bg-accent-lime/5 border border-accent-lime/20 rounded-lg flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
        <p className="text-xs text-text-main font-sans leading-relaxed">
          {pfaTakeHome >= srlTakeHome ? (
            <>
              <strong>PFA în Regim Real îți lasă cu {formatRon(pfaTakeHome - srlTakeHome)} mai mult în buzunar pe an.</strong> În plus, pe PFA ai acces direct la bani în orice zi, fără dividende trimestriale sau contracte de muncă obligatorii.
            </>
          ) : (
            <>
              <strong>Micro SRL îți lasă cu {formatRon(srlTakeHome - pfaTakeHome)} mai mult în buzunar pe an.</strong> Se recomandă SRL dacă ai o cota de cheltuieli deductibile scăzută și poți menține un angajat cu normă întreagă.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
