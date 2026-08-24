# JsonMock Sitemap

This outlines the architecture of JsonMock, designed to target the long-tail intent around LLM testing, API mocking for AI agents, and deterministic record-and-replay in CI environments.

## Hub 1: LLM Mocking Patterns (Core Use Cases)

- **URL:** `/`
  - **Query Target:** mock llm api responses, ai testing in ci
  - **Intent:** Evaluate top-level tool for deterministic testing of AI outputs.
  - **Page Type:** Homepage
  - **Unique Value:** The entrypoint. Differentiates record-and-replay for non-deterministic APIs from standard JSON fixture generation.
  - **Internal Links:**
    - Out: To all hubs (LLM Mocking Patterns, CI Integrations, Alternatives), specific spokes like OpenAI Mocking.
    - In: Logo link from all pages.

- **URL:** `/llm-mocking/`
  - **Query Target:** how to mock llm responses, testing ai agents
  - **Intent:** Understand the patterns and strategies for testing LLM wrappers.
  - **Page Type:** Hub / Pillar Page
  - **Unique Value:** Aggregates techniques (fixtures vs record/replay vs local models) into a definitive guide.
  - **Internal Links:**
    - Out: OpenAI, Anthropic, Gemini, Local Models.
    - In: Homepage, all spokes in this hub, CI integrations.

- **URL:** `/llm-mocking/openai/`
  - **Query Target:** mock openai api nodejs, pytest openai mock
  - **Intent:** Developer looking for code to stub `openai.chat.completions.create` in unit tests.
  - **Page Type:** Spoke (Reference / Tutorial)
  - **Unique Value:** Real, runnable code examples for mocking the official OpenAI SDK in JS/Python.
  - **Internal Links:** Out to CI Integrations, Hub. In from Hub, Homepage.

- **URL:** `/llm-mocking/anthropic/`
  - **Query Target:** mock anthropic claude api
  - **Intent:** Developer looking for code to stub Anthropic's message API.
  - **Page Type:** Spoke (Reference / Tutorial)
  - **Unique Value:** Focuses on the specifics of mocking Claude's structured outputs and streaming.
  - **Internal Links:** Out to CI Integrations, Hub. In from Hub.

- **URL:** `/llm-mocking/gemini/`
  - **Query Target:** mock google gemini api
  - **Intent:** Developer looking for code to stub Gemini API responses.
  - **Page Type:** Spoke (Reference / Tutorial)
  - **Unique Value:** Specific payload structures for Gemini.
  - **Internal Links:** Out to CI Integrations, Hub. In from Hub.

- **URL:** `/llm-mocking/local-models/`
  - **Query Target:** mock ollama api, test local llm
  - **Intent:** Developer testing integrations with local models like Ollama or vLLM.
  - **Page Type:** Spoke (Reference / Tutorial)
  - **Unique Value:** Highlights why you still need deterministic fixtures even if inference is free.
  - **Internal Links:** Out to CI Integrations, Hub. In from Hub.

## Hub 2: CI/CD Integrations (Environment specific)

- **URL:** `/ci-integrations/`
  - **Query Target:** llm testing in ci cd pipeline
  - **Intent:** Devops / QA looking for architectural patterns to add AI testing to their pipelines.
  - **Page Type:** Hub / Pillar Page
  - **Unique Value:** The playbook for configuring CI runners without leaking API keys or burning credits.
  - **Internal Links:** Out to specific CI providers. In from Homepage, LLM Mocking Hub.

- **URL:** `/ci-integrations/github-actions/`
  - **Query Target:** github actions test openai api
  - **Intent:** Setup instructions for running mocked AI tests in GitHub Actions.
  - **Page Type:** Spoke
  - **Unique Value:** Workflow YAML snippets and secret management advice for record/replay.
  - **Internal Links:** Out to Hub, LLM Mocking Hub. In from Hub.

- **URL:** `/ci-integrations/gitlab-ci/`
  - **Query Target:** gitlab ci mock llm api
  - **Intent:** Setup instructions for GitLab pipelines.
  - **Page Type:** Spoke
  - **Unique Value:** GitLab specific caching and service configurations for mocked tests.
  - **Internal Links:** Out to Hub, LLM Mocking Hub. In from Hub.

- **URL:** `/ci-integrations/circleci/`
  - **Query Target:** circleci test ai agent
  - **Intent:** Setup instructions for CircleCI.
  - **Page Type:** Spoke
  - **Unique Value:** Orb configuration and caching strategies for JSON fixtures.
  - **Internal Links:** Out to Hub, LLM Mocking Hub. In from Hub.

## Hub 3: Alternatives & Comparisons

- **URL:** `/alternatives/`
  - **Query Target:** json server alternative, mock api tools
  - **Intent:** Evaluating the landscape of API mocking tools specifically for complex, non-deterministic payloads.
  - **Page Type:** Hub
  - **Unique Value:** Re-frames the commodity API mocking space around the specific pain point of LLMs.
  - **Internal Links:** Out to specific comparisons. In from Homepage.

- **URL:** `/alternatives/wiremock/`
  - **Query Target:** wiremock vs jsonmock, wiremock llm testing
  - **Intent:** Comparing a heavyweight enterprise tool with a specialized AI mocking solution.
  - **Page Type:** Spoke (Comparison)
  - **Unique Value:** Details why Wiremock's manual stubbing fails for large, unstructured LLM payloads.
  - **Internal Links:** Out to Hub. In from Hub.

- **URL:** `/alternatives/vcrpy/`
  - **Query Target:** vcrpy openai, python vcr llm
  - **Intent:** Comparing python-specific record/replay with language-agnostic proxy solutions.
  - **Page Type:** Spoke (Comparison)
  - **Unique Value:** Highlights the limitations of language-specific tooling in polyglot AI teams.
  - **Internal Links:** Out to Hub. In from Hub.

- **URL:** `/alternatives/pollyjs/`
  - **Query Target:** pollyjs fetch ai, mock fetch node
  - **Intent:** Comparing JS-specific record/replay with network-level proxies.
  - **Page Type:** Spoke (Comparison)
  - **Unique Value:** Code-level comparison of mocking fetch vs mocking at the network layer.
  - **Internal Links:** Out to Hub. In from Hub.

- **URL:** `/alternatives/postman/`
  - **Query Target:** postman mock server alternative
  - **Intent:** Looking for something faster and more developer-centric than Postman mock servers.
  - **Page Type:** Spoke (Comparison)
  - **Unique Value:** Explains why UI-driven mock servers don't scale for complex AI agent state machines.
  - **Internal Links:** Out to Hub. In from Hub.

## Operational Pages

- **URL:** `/pricing/`
  - **Query Target:** jsonmock pricing
  - **Intent:** Understand costs.
  - **Page Type:** Conversion
  - **Unique Value:** Simple SaaS pricing model.
  - **Internal Links:** In from Header/Footer.

- **URL:** `/contact/`
  - **Query Target:** contact jsonmock
  - **Intent:** Support or sales inquiry.
  - **Page Type:** Operational
  - **Unique Value:** Uses the standard capture form.
  - **Internal Links:** In from Footer.
