---
title: "State of Health (SoH)"
description: "A metric indicating the current condition of a battery compared to its ideal conditions."
seo:
  page_description: "What is Battery State of Health (SoH)? Learn its definition and legal context."
---

# State of Health (SoH)

Under the EU Battery Regulation, the **State of Health (SoH)** is a crucial metric that indicates the general condition of a rechargeable battery and its ability to deliver the specified performance compared with its initial condition. It is typically expressed as a percentage.

## Legal Context

Unlike static data points (like manufacturing date), SoH is highly dynamic. The regulation explicitly requires that the Battery Digital Passport reflects the current state of the battery throughout its life.

### The Role of the BMS

The Battery Management System (BMS) is legally required to calculate and store the SoH. Furthermore, the BMS must provide a software interface to allow the SoH data to be read.

For the Battery Passport, this means the IT infrastructure must be capable of establishing a secure, authenticated connection to the vehicle or the battery to pull the latest SoH metrics, or the vehicle must periodically "push" this data to the passport database.

## Why is SoH required?

The primary driver behind the SoH requirement is to facilitate the **circular economy**, specifically:

1.  **Second-Life Applications:** Before an EV battery can be repurposed for stationary energy storage (e.g., a home battery wall), repurposers must know its exact health. The passport provides a trusted, standardized reading, eliminating the need for expensive manual testing.
2.  **Used Market Transparency:** It protects consumers in the used EV market by providing an immutable record of battery degradation.

## Access Rights and Privacy

SoH data reveals exactly how a battery has been used, charged, and depleted. Because an EV is tied to an individual, SoH data is generally considered personal data under the GDPR.

Therefore, the regulation places SoH in the **Restricted Access** tier.
*   It is **not** public.
*   It can only be accessed by the legal owner of the battery, or by third parties (like used car dealers or independent repair shops) who have received **explicit, revocable consent** from the owner.

## What to do next

If you are a manufacturer, you must ensure your BMS firmware is capable of accurately estimating SoH according to recognized standards (which will be defined in forthcoming Delegated Acts) and that your passport IT vendor supports dynamic data integration via secure APIs.
