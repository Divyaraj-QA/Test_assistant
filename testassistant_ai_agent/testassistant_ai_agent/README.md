# TestPilot AI Agent

**TestPilot AI** is an end‑to‑end QA copilot that drafts test plans from requirements,
converts them into automated Playwright (JavaScript) and Rest‑Assured (Java) tests,
executes those tests in CI, and analyses the results.

## Requirements

* **Node.js 20+**
* **Java 17+** and **Maven 3.9+**
* **Git**
* An **OpenAI API key** (GPT‑4o recommended)

## Quick start

```bash
git clone <repo‑url> testpilot_ai_agent
cd testpilot_ai_agent

# 1. Orchestrator (LangChainJS)
cp orchestrator/.env.example orchestrator/.env
echo "OPENAI_API_KEY=<your‑key>" >> orchestrator/.env
cd orchestrator && npm install && node index.js ../samples/REG‑1234.md
# Follow the prompts…

# 2. JS action layer (Playwright)
cd ../action-js && npm install && npx playwright test

# 3. Java action layer (Rest‑Assured)
cd ../action-java && mvn clean test
```

## Folder layout

```
testpilot_ai_agent/
├── orchestrator/        # LangChainJS agent brain
├── action-js/           # Playwright helper tests
├── action-java/         # Maven project for API tests
├── .github/workflows/   # CI pipeline
└── samples/             # Example requirement
```
