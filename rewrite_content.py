import os

blog_posts = {
    "buy-to-let-vs-index-funds.mdx": {
        "title": "Buy-to-Let vs Index Funds: A Mathematical Breakdown",
        "date": "2024-02-01",
        "content": """
## The Core Question: Property or Stocks?

For decades, the great debate among UK investors has been whether to deploy capital into Buy-to-Let (BTL) property or broad market Index Funds (like the S&P 500 or FTSE Global All Cap).

The answer is entirely mathematical, yet most investors rely on emotion. Property investors argue "you can't live in an index fund," while stock investors argue "I don't have to fix my index fund's boiler at 2 AM."

### The Math: A 10-Year Worked Example (2014-2024)

Let's assume an initial capital deployment of **£50,000**.

#### Scenario A: The Buy-to-Let Property
You use the £50,000 as a 25% deposit on a £200,000 property in the North West of England.
*   **Leverage:** 4x (You control a £200k asset with £50k).
*   **Buying Costs:** £6,000 (Stamp duty surcharge at 3%, plus legal fees). Total cash required: £56,000.
*   **Gross Yield:** 6% (£1,000/month rent).
*   **Net Yield after Costs & Voids:** 4% (£8,000/year).
*   **Mortgage Interest (Interest Only at 5.5%):** £8,250/year.
*   **Net Cashflow:** -£250/year. (Yes, negative cashflow is common in a 5.5% rate environment).
*   **Capital Growth:** Historically 4% annualized.

**After 10 Years:**
*   Property Value: £296,048
*   Debt: £150,000
*   Gross Equity: £146,048
*   Less Selling Costs/CGT (approx 20% of gain): ~£15,000.
*   **Net Return: ~£131,048** (from a £56k start).

#### Scenario B: The Index Fund (S&P 500)
You invest the full £56,000 into a low-cost S&P 500 tracker within an ISA (tax-free).
*   **Leverage:** None.
*   **Annualized Return:** Historically 10% (though let's use 8% adjusting for inflation and fees).
*   **Tax:** £0 (if kept within the £20k/year ISA allowance across multiple years, or using capital gains allowances).

**After 10 Years:**
*   Compounding £56,000 at 8% annually.
*   **Net Return: £120,900.**

### Tradeoffs and Exceptions

1.  **Leverage is a Double-Edged Sword:** Property wins in the example above entirely because of leverage. You are getting 4% growth on £200k, not £50k. However, if property values drop by 10%, your £50k equity drops by 40%.
2.  **Tax Complexity:** Section 24 means individual landlords are taxed on gross revenue, not profit. This severely degrades the property return unless structured in a Limited Company. Index funds in an ISA are completely tax-free.
3.  **Liquidity:** You can sell £10,000 of index funds from your phone while on the toilet. Selling a house takes 4-6 months and costs thousands in fees.

### Common Mistakes

*   **Ignoring Voids and Maintenance:** Assuming 12 months of rent every year is a rookie mistake. Always model a 10% gross deduction for maintenance and a 1-month void period per year.
*   **Comparing Gross Property Returns to Net Stock Returns:** You must compare the cash-in-hand after all taxes and fees for both.

### FAQ

**Is property still worth it with 5% interest rates?**
Only if the gross yield exceeds 8%, or if you are employing a [BRRRR Strategy](/reference/brrrr-method/) to recycle capital. Standard single-lets at 5% gross yield lose money when rates are 5%.

**Should I sell my property to buy stocks?**
Capital Gains Tax (CGT) makes this inefficient. It is usually better to stop buying property, divert new savings to an ISA, and let the property leverage slowly erode through inflation.

### What to do next
Use our [ROI Calculator](/tools/roi-calculator/) to stress test your exact numbers before making a decision. Read our guide on [Limited Companies](/reference/limited-company/) to understand how tax impacts these returns.
"""
    },
    "hidden-costs-of-being-a-landlord.mdx": {
        "title": "The Hidden Costs of Being a Landlord in 2024",
        "date": "2024-02-05",
        "content": """
## The Reality of Gross Yield vs Net Cashflow

Every property seminar sells the dream of passive income: "Buy a house for £100k, rent it for £750 a month, and you're making £9,000 a year! That's a 9% yield!"

This is dangerous mathematical negligence. Gross yield is a vanity metric. What matters is Net Operating Income (NOI) and cash-on-cash return. The gap between gross rent and actual profit is filled with hidden costs that wipe out unprepared landlords.

### The Breakdown of Hidden Costs

Let's look at the actual costs associated with a standard £200,000 Buy-to-Let property generating £1,000/month (£12,000/year) in gross rent.

| Expense Category | Estimated Annual Cost | Percentage of Gross Rent |
| :--- | :--- | :--- |
| **Letting Agent Fees** (10-12% + VAT) | £1,440 | 12% |
| **Maintenance & Repairs** (Rule of thumb: 1% of value or 10% of rent) | £1,200 | 10% |
| **Void Periods** (Assume 1 month empty per year) | £1,000 | 8.3% |
| **Landlord Insurance** | £250 | 2.1% |
| **Compliance** (Gas safety, EICR, EPC annualized) | £150 | 1.25% |
| **Ground Rent / Service Charge** (If leasehold) | £0 - £1,500+ | 0 - 12.5% |
| **Total Operating Costs (Before Mortgage)** | **~£4,040** | **~33.6%** |

In this scenario, your £12,000 gross rent is actually **£7,960 Net Operating Income (NOI)**.

### The Mortgage Shock

Now apply the mortgage. If you have a £150,000 interest-only mortgage at a 5.5% rate, your annual interest cost is **£8,250**.

*   Net Operating Income: £7,960
*   Mortgage Cost: £8,250
*   **True Annual Cashflow: -£290**

You are losing money every month on a property that advertised a "healthy 6% gross yield."

### Common Mistakes

*   **Underestimating CapEx (Capital Expenditures):** A boiler costs £2,000. A new roof costs £5,000. These don't happen every year, but when they do, they wipe out years of cash flow.
*   **Forgetting Tenant Sourcing Fees:** Agents charge a percentage monthly, but they also charge a "setup fee" (often £300-£500) every time a new tenant moves in.
*   **Section 24 Ignorance:** If you own this in your personal name and are a higher-rate taxpayer, you will be taxed on the profit *before* the mortgage interest is deducted, meaning your loss of £290 will actually incur a massive tax bill on top. Read our [Section 24 guide](/reference/section-24/) immediately.

### Tradeoffs: Self-Management vs Agent

You can save the £1,440 agent fee by managing the property yourself.
*   **Pros:** Better cashflow.
*   **Cons:** You take on massive legal liability. If you fail to protect the deposit correctly, serve the How to Rent guide, or miss a Gas Safety check, you cannot evict the tenant under [Section 21](/glossary/section-21/) and can be fined thousands.

### FAQ

**How much should I keep in a contingency fund?**
A minimum of 3-6 months of gross rent per property should be kept in liquid cash to cover boiler replacements and void periods.

**Does a limited company solve these hidden costs?**
No. A limited company solves the *tax* issue of Section 24, but it does not change the physical operating costs (maintenance, voids, agent fees). In fact, limited company mortgages often have higher interest rates.

### What to do next
Before buying any property, run the numbers through our [Yield Calculator](/tools/yield-calculator/) and our [ROI Calculator](/tools/roi-calculator/). Never accept the estate agent's gross yield figure.
"""
    }
}

for filename, data in blog_posts.items():
    path = f"src/content/blog/{filename}"
    if os.path.exists(path):
        with open(path, "r") as f:
            content = f.read()

        # Replace the body content (everything after the second ---)
        parts = content.split("---", 2)
        if len(parts) == 3:
            new_content = f"---{parts[1]}---\n{data['content']}"
            with open(path, "w") as f:
                f.write(new_content)

print("Updated blog posts.")
