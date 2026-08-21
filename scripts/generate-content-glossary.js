import fs from 'fs';

const glossary = [
  { id: 'agi', term: 'Adjusted Gross Income (AGI)', definition: 'Your total gross income minus specific deductions.' },
  { id: 'w2-wage', term: 'W-2 Wages', definition: 'The total amount of compensation your employer paid you for the year.' },
  { id: 'deduction', term: 'Tax Deduction', definition: 'An expense you can subtract from your AGI to lower your taxable income.' },
  { id: 'credit', term: 'Tax Credit', definition: 'A dollar-for-dollar reduction of the income tax you owe.' },
  { id: 'dependent', term: 'Dependent', definition: 'A person other than the taxpayer or their spouse who entitles them to claim a dependency exemption.' },
  { id: 'exemption', term: 'Exemption', definition: 'A deduction allowed by law to reduce the amount of income that would otherwise be taxed.' },
  { id: 'standard-deduction', term: 'Standard Deduction', definition: 'A specific dollar amount that reduces your taxable income, based on your filing status.' },
  { id: 'itemized-deduction', term: 'Itemized Deduction', definition: 'Eligible expenses that individual taxpayers can claim on federal income tax returns to decrease their taxable income.' },
  { id: 'filing-status', term: 'Filing Status', definition: 'Determines the rate at which income is taxed (Single, Married Filing Jointly, etc.).' },
  { id: 'withholding', term: 'Withholding', definition: 'Money an employer deducts from an employee\'s paycheck to pay part or all of the employee\'s taxes.' },
  { id: 'refund', term: 'Tax Refund', definition: 'A reimbursement to a taxpayer of any excess amount paid to the federal government or a state government.' },
  { id: 'audit', term: 'Audit', definition: 'An IRS examination of a taxpayer’s account or financial information.' },
  { id: 'capital-gain', term: 'Capital Gain', definition: 'The profit realized from the sale of a non-inventory asset.' },
  { id: 'dividend', term: 'Dividend', definition: 'A distribution of a portion of a company\'s earnings to its shareholders.' },
  { id: 'eitc', term: 'Earned Income Tax Credit (EITC)', definition: 'A refundable tax credit for low- to moderate-income working individuals and couples.' },
  { id: 'futa', term: 'FUTA Tax', definition: 'Federal Unemployment Tax Act tax paid by employers.' },
  { id: 'fica', term: 'FICA', definition: 'Federal Insurance Contributions Act tax used to fund Social Security and Medicare.' },
  { id: 'w4', term: 'Form W-4', definition: 'Form completed by an employee to indicate his or her tax situation to the employer.' },
  { id: '1099', term: 'Form 1099', definition: 'A series of documents referred to as information returns, used to report various types of income.' },
  { id: 'schedule-c', term: 'Schedule C', definition: 'Form used to report income or loss from a business you operated or a profession you practiced as a sole proprietor.' },
];

glossary.forEach(g => {
  fs.writeFileSync(`src/content/glossary/${g.id}.md`, `---
title: "What is ${g.term}?"
term: "${g.term}"
definition: "${g.definition}"
seo:
  page_description: "Learn what ${g.term} means in simple tax terms."
---
Understanding **${g.term}** is crucial when filing your taxes.

If you're unsure how this applies to your situation, consider using a tax software which will automatically calculate these for you based on simple questions.

See also related terms in our [Glossary](/glossary/) and check if you need a [1040 Form](/forms/1040/).
`);
});

console.log("Glossary generated.");
