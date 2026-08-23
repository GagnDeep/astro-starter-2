export const capture = {
  endpoint: "https://api.markremover.com",

  // REPLACE BEFORE LAUNCH with this domain's actual wcs_pk_... key
  publicKey: "wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE",

  forms: {
    contact: "contact",
    newsletter: "newsletter",
    vendor_referral: "vendor_referral",
  },

  thanksUrl: "/thanks/",

  honeypotField: null as string | null,
} as const;

export type FormLabel = keyof typeof capture.forms;
