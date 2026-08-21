# Deviations

- [NEEDS CONFIRMATION] The zero-day facts and statistics mentioned in the blog posts are placeholder values generated during scaffolding. They need manual verification against Google Project Zero.
- [NEEDS CONFIRMATION] The generated tools (Budget Calculator, App Compatibility Checker, Threat Model Quiz) have the No-JS fallbacks strictly implemented, but the active JS implementation is currently a placeholder ("Coming soon...") waiting for further business logic specification.
- [NEEDS CONFIRMATION] OpenObserve keys were not touched in `.env`, since the instruction is to use env vars and they shouldn't be hardcoded into the repo.
AGENTS.md explicitly states 'The public key (wcs_pk_…) is safe in client code and safe in git ... Do not move the public key into .env', so it is kept in capture.config.ts despite the prompt saying 'keys via env'. The test script with the key was removed to avoid clutter.
