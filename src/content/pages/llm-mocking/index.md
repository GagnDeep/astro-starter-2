---
title: LLM Mocking Patterns | Deterministic Testing for AI Agents
seo:
  page_description: Learn how to mock LLM responses deterministically for AI agents. Understand patterns and strategies for testing LLM wrappers without burning API credits.
  canonical_url: /llm-mocking/
  featured_image: /images/og/og-default.png
  featured_image_alt: LLM Mocking Patterns and Strategies
  author_twitter_handle: null
  open_graph_type: article
  no_index: false
hero_block:
  _name: Hero
  heading: LLM Mocking Patterns and Strategies
  subheading: The definitive guide to mocking LLM responses deterministically for reliable AI agent testing in CI pipelines.
content_blocks:
  - _name: Byline
    author: Engineering Team
    role: Core Maintainers
    date: 2024-05-24
  - _name: TextBlock
    heading: Why standard mocking fails for LLMs
    text_content: |
      Standard API mocking is a solved problem for deterministic endpoints. When you test a REST API, a user profile endpoint always returns a predictable JSON structure for a given ID. You write a static fixture, load it in your test suite, and assert against it.

      Testing LLMs and AI agents flips this paradigm upside down. Language models are inherently non-deterministic. Their payloads are massive, frequently including streaming tokens (Server-Sent Events), nested JSON schema definitions, and base64-encoded tool calls. If you hit live APIs, your tests flake due to network latency and model updates, and you burn expensive API credits on every pull request. If you try to hand-roll JSON fixtures, they drift from the real API contract within weeks.

      To mock non-deterministic LLM responses reliably, you must record a known-good interaction once, and replay it exactly. This ensures that you capture the precise latency profile, headers, and token stream boundaries required by your orchestration layer.

  - _name: TextBlock
    heading: Record and Replay Architecture
    text_content: |
      The industry standard for complex API mocking is the Record and Replay architecture (often called VCR, after the Ruby library). Instead of writing fixtures manually, a proxy server sits between your application code and the external LLM provider during a local test run.

      When a request is made to `api.openai.com/v1/chat/completions`, the proxy forwards the request, records the real HTTP response verbatim (including headers and body), and saves it to a fixture file on disk. During subsequent CI runs, the proxy intercepts the identical request and serves the saved response, bypassing the network entirely.

      This guarantees determinism. Your tests will always receive the exact same sequence of tokens, allowing you to reliably assert against your application's parsing and orchestration logic without paying for inference.

  - _name: TextBlock
    heading: Handling Streaming and Server-Sent Events (SSE)
    text_content: |
      Modern AI applications rely heavily on streaming responses to reduce perceived latency. Mocking Server-Sent Events requires a specialized server that can simulate the precise timing and chunking of a real stream.

      Standard HTTP mocking tools often buffer the entire response and return it synchronously, completely breaking your frontend's streaming logic. A dedicated LLM mocking proxy must record the exact byte boundaries and delays of the original stream, replaying them accurately so your UI can be tested for partial-rendering bugs and race conditions.

  - _name: TextBlock
    heading: State Machine and Tool Calling Complexity
    text_content: |
      AI agents don't make single requests; they engage in multi-turn conversations and invoke external tools. An agent might ask a model for a plan, receive a tool call to search the web, execute the search, and feed the results back into a second model request.

      Mocking this requires a state-machine aware proxy. The proxy must match not just the URL and headers, but the deep structure of the request payload, mapping sequential requests to the correct sequential responses. Standard JSON matching fails here due to slight variations in timestamps or dynamically generated IDs within the agent's prompt.

  - _name: TextBlock
    heading: Secret Redaction and Security
    text_content: |
      When recording real API interactions, there is a significant risk of leaking sensitive API keys (like `Authorization: Bearer sk-...`) or PII within the prompts into your version control system.

      An enterprise-grade mocking solution must automatically scrub authorization headers and redact sensitive data before writing any fixtures to disk. This ensures your CI pipelines remain secure and compliant, even when testing complex, real-world data flows.

  - _name: TextBlock
    heading: Integrating with CI/CD Pipelines
    text_content: |
      The ultimate goal of LLM mocking is to integrate seamlessly into your Continuous Integration (CI) and Continuous Deployment (CD) pipelines. Whether you use GitHub Actions, GitLab CI, or CircleCI, the mocking proxy must run natively as a sidecar or background process.

      It should require no external dependencies or complex database setups, allowing your test suite to run in isolated, ephemeral environments without external network access to the AI providers. This isolation is critical for security and reliability at scale.

  - _name: TextBlock
    heading: The Financial Cost of CI/CD Testing
    text_content: |
      Beyond determinism, the financial cost of testing LLMs in CI cannot be ignored. Every time a developer opens a pull request, or merges to main, or pushes a hotfix, the CI suite runs. If your tests make live calls to models like GPT-4 or Claude 3 Opus, the costs scale linearly with your engineering activity. A team of ten engineers can easily rack up hundreds of dollars a month purely on unit tests.

      Furthermore, running live tests means your CI pipelines are vulnerable to upstream rate limits. If you launch a large concurrent test matrix across multiple operating systems or browsers, you will quickly encounter `429 Too Many Requests` errors from the AI provider, causing cascading build failures.

      Record-and-replay completely eliminates these financial and operational risks. By serving the exact same HTTP responses from a local file, your tests run instantly without touching the network. You bypass rate limits, eliminate latency, and reduce your API bill to zero for all CI runs. The only time you consume credits is during the initial developer session when the fixture is first recorded.

  - _name: TextBlock
    heading: Navigating Local Models vs Hosted APIs
    text_content: |
      A common misconception is that using local open-weight models (like Llama 3 running via Ollama) solves the CI problem. While running local models in CI eliminates API costs and data privacy concerns, it does not guarantee determinism.

      Local models are still probabilistic. Even with the `temperature` set to 0.0, variations in floating-point operations across different CPU or GPU architectures can lead to divergent outputs. A test that passes on an ARM-based MacBook might fail on an x86 Linux CI runner due to slightly different token selections in a long generation string.

      Additionally, spinning up a local inference server during a CI run is extremely resource-intensive, dramatically increasing the time it takes for your tests to execute. The record-and-replay pattern remains the most robust architecture for LLM testing, regardless of whether the target model is hosted in the cloud or running locally on the developer's machine.

      We also need to consider test frameworks integration. A good mocking library should act natively, or at least seamlessly wrap test executors across Node, Python and Go.

      You must record the tests properly in isolated states so parallel testing does not cross paths. Each test needs its own fixture file or an isolated directory context to resolve. Without it, you get flaky results from race conditions inside the test runner itself instead of the network calls.

  - _name: TextBlock
    heading: Setting up a Mocking Proxy
    text_content: |
      To implement this architecture in your own systems, you need a proxy that can intercept HTTP requests natively without requiring heavy modification to your application code. General-purpose proxies exist, but you often have to write custom middleware to handle things like Server-Sent Events (SSE) accurately, or to strip out dynamic boundary markers from multipart form uploads commonly used when passing image inputs to vision models.

      When selecting or building a proxy for this purpose, ensure it supports automatic fixture expiration. AI models are updated frequently. A fixture recorded against `gpt-4-0613` might become invalid if the model behaves differently in a newer iteration. A robust system will allow you to tag fixtures with an expiration date, enforcing a regular re-recording cycle to ensure your mock responses do not silently drift from reality over extended periods.

      Deterministic testing is the bedrock of reliable software engineering. By embracing record-and-replay for your LLM and AI-agent interactions, you restore sanity, speed, and cost-efficiency to your development lifecycle.

      Setting up JsonMock specifically is straightforward. You start by downloading our binary. It acts as a transparent proxy. You then modify your API calls to point to the proxy address instead of the provider's direct endpoint, making sure the real credentials are sent for recording.

      Once the recording is done, a `fixtures.json` file is produced. This file can be safely version controlled and executed inside GitHub Actions or GitLab without providing real credentials to the runners. This approach requires zero application-code changes outside of URL swaps.

  - _name: TextBlock
    heading: Start Mocking Today
    text_content: |
      Ready to implement deterministic testing for your AI agents? Use our capture forms or reach out to our team via the [contact page](/contact/).

  - _name: SourcesList
    sources:
      - title: "OpenAI API Documentation: Chat Completions"
        url: "https://platform.openai.com/docs/api-reference/chat"
        date_accessed: "2024-05-24"
      - title: "Anthropic API Reference: Messages"
        url: "https://docs.anthropic.com/en/api/messages"
        date_accessed: "2024-05-24"
---
