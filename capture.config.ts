export const capture = {
  endpoint: "https://api.markremover.com",
  publicKey: "wcs_pk_ibs_go_production_key_placeholder",
  forms: {
    contact: "contact",
    newsletter: "newsletter",
    waitlist: "waitlist",
    feedback: "feedback",
  },
  thanksUrl: "/thanks/",
  honeypotField: "website_hp" as string | null,
} as const;

export type FormLabel = keyof typeof capture.forms;
