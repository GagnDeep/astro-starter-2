export default {
  endpoint: 'https://api.markremover.com/v1/collect',
  publicKey: 'wcs_pk_dummy_cayman_journal', // [NEEDS CONFIRMATION] Replace with actual key for production
  thanksUrl: '/thanks',
  forms: {
    newsletter: 'The Cayman Expat Briefing',
    waitlist: 'Waitlist',
    contact: 'Contact Us',
    quote: 'Get a Quote',
    enquiry: 'General Enquiry',
  },
  honeypotField: 'x_website_id'
};
