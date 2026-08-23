export const capture = {
  endpoint: "https://api.markremover.com",

  // MUST BE REPLACED BEFORE LAUNCH with the site's real public key (wcs_pk_...)
  publicKey: "wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE",

  forms: {
    readiness: "readiness-toolkit",
    sponsorship: "vendor-sponsorship",
    newsletter: "newsletter",
  },

  thanksUrl: "/thanks/",

  honeypotField: null as string | null,
} as const;

export type FormLabel = keyof typeof capture.forms;
