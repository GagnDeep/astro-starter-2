export const capture = {
  endpoint: "https://api.markremover.com",
  // MUST REPLACE BEFORE LAUNCH with domain-specific wcs_pk_...
  publicKey: "wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE",
  forms: {
    contact: "contact",
    newsletter: "newsletter",
    waitlist: "waitlist",
    quote: "quote",
    guide_purchase: "guide-purchase",
    hardware_waitlist: "hardware-waitlist"
  },
  thanksUrl: "/thanks/",
  honeypotField: null as string | null,
} as const;

export type FormLabel = keyof typeof capture.forms;
