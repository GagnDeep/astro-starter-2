import os

reference_pages = {
    "section-24.mdx": {
        "title": "Surviving Section 24",
        "description": "How mortgage interest relief changes affect your bottom line.",
        "content": """
## What is Section 24?

Section 24 (officially the Finance (No. 2) Act 2015) fundamentally changed how private landlords in the UK are taxed. Prior to its phased introduction (completed in 2020), landlords could deduct their mortgage interest costs from their rental income before calculating their tax bill.

Under Section 24, you can **no longer deduct mortgage interest from your rental income**. Instead, you are taxed on your gross rental income, and then given a basic-rate (20%) tax reduction on the finance costs.

### The Devastating Math of Section 24

Let's look at a higher-rate taxpayer (40%) who owns a property generating £15,000 a year in rent, with £10,000 a year in mortgage interest.

#### Before Section 24 (The Old Rules)
*   Rent: £15,000
*   Mortgage Interest: -£10,000
*   Taxable Profit: £5,000
*   Tax at 40%: **£2,000**
*   Net Profit (Cash in hand): **£3,000**

#### After Section 24 (The Current Reality)
*   Rent: £15,000
*   Taxable Profit (Interest no longer deducted): £15,000
*   Tax at 40%: £6,000
*   *Less 20% basic rate credit on the £10k interest:* -£2,000
*   Final Tax Bill: **£4,000**
*   Net Profit (Cash in hand): **£1,000**

In this scenario, the landlord's tax bill doubled, and their net profit dropped by 66%, despite the rent and mortgage rate staying exactly the same.

### The "Taxed on a Loss" Trap

Section 24 can actually result in landlords paying tax when they are making a real-world financial loss.

If interest rates rise and the mortgage in the above example goes from £10,000 to £16,000:
*   Real world: You are losing £1,000 a year (Rent £15k - Mortgage £16k).
*   HMRC view: Taxable profit is £15,000. Tax is £6,000. Credit is £3,200 (20% of £16k).
*   **Result: You pay £2,800 in tax on a property that is already losing you £1,000.**

### Tradeoffs and Solutions

1.  **Incorporate (Limited Company):** Section 24 only applies to individuals, not Limited Companies (SPVs). Companies pay Corporation Tax on net profit. See our [Limited Company Guide](/reference/limited-company/) for the pros and cons (higher mortgage rates, capital gains tax on transfer).
2.  **De-leverage:** Pay down the mortgage. If you have no mortgage, Section 24 doesn't affect you.
3.  **Increase Yield:** Move from standard single-lets to [HMOs](/taxonomy/houses-in-multiple-occupation/) or [Serviced Accommodation](/taxonomy/serviced-accommodation/) where the gross margins are high enough to absorb the tax hit.

### Common Mistakes

*   **Assuming it doesn't affect Basic Rate taxpayers:** The gross rental income is added to your salary. If your salary is £40,000 and your gross rent is £15,000, your total income is £55,000, pushing you into the higher-rate tax bracket. You are now a victim of Section 24.
*   **Transferring to a spouse without advice:** Moving the asset to a lower-earning spouse triggers Capital Gains Tax and Stamp Duty.

### FAQ

**Does Section 24 apply to Commercial Property?**
No. It only applies to residential property. [Commercial property](/taxonomy/commercial/) and Furnished Holiday Lets (FHLs - though rules are changing here too) are exempt.

**Can I just move the property into a Limited Company?**
Yes, but it is treated as a "sale." You will have to pay Capital Gains Tax on the equity gain, and the company will have to pay Stamp Duty to buy it from you.

### What to do next
Calculate your true exposure. Use our [Yield Calculator](/tools/yield-calculator/) to find your net position, and consult a qualified property tax accountant immediately.
"""
    },
    "limited-company.mdx": {
        "title": "Limited Company vs Personal Name",
        "description": "The definitive guide to property structures and tax implications.",
        "content": """
## Should you buy property in a Limited Company?

For new investors in 2024, buying residential property through a Special Purpose Vehicle (SPV) Limited Company is the default strategy. However, it is not a magic bullet, and for some, it is the wrong choice.

The decision hinges entirely on your current tax bracket, your long-term goals (income vs capital growth), and Section 24.

### The Case for the Limited Company (SPV)

1.  **Full Mortgage Interest Relief:** Unlike individuals trapped by [Section 24](/reference/section-24/), a limited company can deduct 100% of its mortgage interest as a business expense before paying tax.
2.  **Lower Tax Rate on Retained Profit:** Companies pay Corporation Tax (19% - 25% depending on profit). Individuals pay Income Tax (20%, 40%, or 45%). If you want to compound your wealth by buying more properties, leaving the profit in the company at 19% tax allows it to grow much faster.
3.  **Flexible Extraction:** You can control how you take money out—via dividends (which have a tax-free allowance and lower tax bands), salary, or directors' loans.

### The Case for Personal Ownership

1.  **Lower Mortgage Rates:** Personal buy-to-let mortgages are almost always cheaper than limited company mortgages. The fees are also significantly lower (a company mortgage often has a 2-3% arrangement fee).
2.  **Simpler Accounting:** You don't need to file statutory company accounts, which saves ~£1,000+ a year in accountant fees.
3.  **Capital Gains Allowance:** When you sell a property in your personal name, you get an annual Capital Gains Tax allowance. A company gets no allowance; it pays Corporation Tax on the whole gain.
4.  **Extracting the Cash:** If you need the rental income to live on *right now*, taking it out of a company means paying Corporation Tax, and then paying Dividend Tax on the extraction. This "double taxation" can sometimes be worse than just paying higher-rate income tax.

### The Mathematical Threshold

Generally, the math dictates:
*   **Basic Rate Taxpayer needing income now:** Personal name usually wins (due to cheaper mortgages and no double-taxation).
*   **Higher Rate Taxpayer (or pushing into it):** Limited Company almost always wins (due to Section 24).
*   **Portfolio Builder (retaining profits to buy more):** Limited Company wins heavily (compounding at 19-25% tax vs 40% tax).

### Common Mistakes

*   **Setting up a standard trading company:** Lenders want an "SPV" (Special Purpose Vehicle). This is a company set up solely to hold property, with specific SIC codes (usually 68100 or 68209). Don't buy property through your IT contracting company.
*   **Ignoring the transfer costs:** You cannot simply "move" a personal property into a company. The company must buy it from you at market value. This triggers Capital Gains Tax for you, and Stamp Duty (including the 3% surcharge) for the company.

### FAQ

**What is a Director's Loan Account (DLA)?**
When you fund the company with your own money (e.g., the £50k deposit), the company owes you that money. You can draw that £50k back out of the company completely tax-free over time.

**Can I get a mortgage in a brand new company?**
Yes. Lenders will base the mortgage on the property's rental yield and *your* personal credit score via a Personal Guarantee (PG). The company having no trading history is fine for an SPV.

### What to do next
Do not guess. Model the exact numbers using our [ROI Calculator](/tools/roi-calculator/) comparing a 5.5% personal mortgage against a 6.5% limited company mortgage, factoring in your tax bracket.
"""
    }
}

for filename, data in reference_pages.items():
    path = f"src/content/reference/{filename}"
    if os.path.exists(path):
        with open(path, "r") as f:
            content = f.read()

        parts = content.split("---", 2)
        if len(parts) == 3:
            new_content = f"---{parts[1]}---\n{data['content']}"
            with open(path, "w") as f:
                f.write(new_content)

print("Updated reference pages.")
