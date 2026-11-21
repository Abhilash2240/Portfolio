# Hybrid AI Engineering Master Blueprint

**Version:** 1.0  
**Prepared:** 21 November 2026  
**Status:** Strategy and design baseline — projects are proposed, not yet implemented  
**Primary career target:** Software Engineering + Applied AI/ML  
**Target market:** India — product companies, Indian technology companies and startups, service/consulting firms, GCCs/enterprise teams, and AI-first companies

---

## 0. Executive decision

Build a coherent portfolio around four research-informed engineering systems:

1. **RepoContinuum** — Long-Horizon Software Engineering Agent
2. **ModelGuard** — Production ML Reliability Control Plane
3. **EvidenceOS** — Trustworthy Knowledge Intelligence Platform
4. **TemporalRisk** — Uncertainty-Aware Temporal Graph Intelligence

The portfolio thesis is:

> I build reliable software systems and apply AI/ML where it creates measurable value. I can engineer backend services, operate ML systems, build evidence-grounded GenAI applications, and develop intelligent automation with testing, security and observability.

These projects are deliberately not generic e-commerce systems, basic fraud classifiers, PDF chatbots or code-review chatbots. Their differentiation must come from the implementation, research-informed experiments, evaluation data, reproducible results and engineering decisions—not from the project names.

### Recommended build order

1. RepoContinuum — establishes software engineering, backend and agent reliability.
2. ModelGuard — demonstrates production ML lifecycle and backend reliability.
3. EvidenceOS — demonstrates advanced GenAI, retrieval, provenance and access control.
4. TemporalRisk — demonstrates advanced ML, graph learning and rigorous experimentation.

Build one project at a time. Start applying with the strongest existing work; do not wait until all four new projects are complete.

### Portfolio quality strategy

- Four deeply engineered flagship projects are more valuable than ten shallow projects.
- Each flagship must have a real end-to-end workflow, tests, deployment instructions, documented limitations and measurable evaluation.
- Avoid gratuitous microservices. Start with a modular monolith or a small number of services; split only for clear deployment, scaling, reliability or ownership reasons.
- Antigravity is an implementation assistant, not an authority. Review generated code, approve architecture, inspect diffs and run tests.
- Never invent performance numbers, users, business outcomes, model accuracy, deployment status or features.

---

## 1. Candidate and career context

### Education and profile

- B.Tech Computer Science and Engineering (AI & ML), SR University, Warangal.
- Expected graduation: 2027.
- Latest stated CGPA: 9.1/10.
- Early-career candidate / fresher profile.
- Existing experience is primarily project-based; do not present academic programs or projects as employment unless the facts support it.

### Career objective

Primary positioning: **Computer Science Undergraduate | Backend Engineering | Applied AI & ML**.

Target role families:

- Software Engineer / Software Developer
- Backend Engineer / Python Developer
- Full Stack Engineer
- Applied AI / Generative AI Engineer
- Machine Learning Engineer
- Data Engineer (where the role matches practical skills)
- Agentic AI / Developer Tools Engineer (selectively)

Target geography: India, including Hyderabad, Bengaluru, Pune, Chennai, Noida, Gurugram and suitable remote opportunities. Relocation has been considered acceptable.

Previously stated compensation filters for job searches: full-time roles above ₹7 LPA and internships above ₹25,000/month. These are personal search filters, not assumptions about market rates or guarantees.

### Existing projects — preserve and improve, do not rebuild

These are already part of the portfolio and should complement the four new systems:

1. **AI Job Search Agent** — Python/FastAPI backend, job discovery and analysis workflows, Gemini integration, Greenhouse/Lever discovery, SQLite/SQLAlchemy and related automation. Repository: https://github.com/Abhilash2240/AI_Job_Search_Agent
2. **Adaptive Stock Trading** — React/TypeScript frontend, FastAPI backend, PostgreSQL, market-data integration and paper-trading workflows. Repository: https://github.com/Abhilash2240/Adaptive-Stock-Trading
3. **ReceiptFlow** — Expo/React Native application, Node/Express backend, Gemini, Supabase and authentication/notification integrations. Repository: https://github.com/Abhilash2240/ReceiptFlow
4. **AI Agent Automation Framework** — browser automation with Playwright, FastAPI and LangGraph-based research workflows. Repository: https://github.com/Abhilash2240/ai-agent
5. **Portfolio website** — Next.js, TypeScript and Framer Motion. Repository: https://github.com/Abhilash2240/Portfolio

Do not repeat these projects under new names. Improve the existing implementations through tests, reproducible setup, accurate documentation, verified demos and measurable engineering outcomes.

---

## 2. Research basis and technology signals

**Research window used for the project selection:** 21 June–21 October 2026. Priority was given to official ACL Anthology proceedings, the official ACM SIGKDD 2026 program and papers with identifiable publication metadata. Findings papers are explicitly labelled as Findings, not presented as main-conference papers.

### 2.1 Repository-level and long-horizon coding agents

**ABC-Bench: Benchmarking Agentic Backend Coding in Real-World Development** — Findings of ACL 2026, July 2026. It evaluates 224 practical tasks across eight languages and 19 frameworks, requiring repository exploration, containerized service setup and external end-to-end API tests. The central lesson is that code generation is not equivalent to completing a real backend engineering task.

Official publication: https://aclanthology.org/2026.findings-acl.1142/  
DOI: https://doi.org/10.18653/v1/2026.findings-acl.1142

**ChainSWE: Benchmarking Coding Agents on Multi-Bug Software Maintenance** — Proceedings of EMNLP 2026, October 2026. It studies 304 chronological, dependent issue chains across 54 Python projects and reports substantial degradation as chains become longer. This motivates persistent task state, dependency awareness and regression prevention.

Official publication: https://aclanthology.org/2026.emnlp-main.371/  
DOI: https://doi.org/10.18653/2026.emnlp-main.371

### 2.2 Production ML engineering

**MLOps-Bench: Benchmarking AI Agents on Production ML Engineering in Real Repositories** — Findings of EMNLP 2026, October 2026. It evaluates 212 tasks from 31 public ML repositories across data pipelines, features, training, serving, monitoring, CI/CD, governance and integration. The paper shows that production ML tasks remain difficult for current agents.

Official publication: https://aclanthology.org/2026.findings-emnlp.1402/  
DOI: https://doi.org/10.18653/2026.findings-emnlp.1402  
Preprint: https://arxiv.org/abs/2610.23506

### 2.3 Secure code generation

**RealSec-bench: A Benchmark for Evaluating Secure Code Generation in Real-World Repositories** — Findings of ACL 2026, July 2026. It uses real repository contexts across 19 CWE categories and evaluates functional correctness together with security. Its results caution against treating better functional correctness or RAG as evidence of secure code.

Official publication: https://aclanthology.org/2026.findings-acl.1786/  
DOI: https://doi.org/10.18653/v1/2026.findings-acl.1786  
Benchmark code: https://github.com/DeepSoftwareAnalytics/Realsec-code-Bench

### 2.4 Temporal graph fraud detection and uncertainty

**Temporal Graph Prototype-conditioned Conformal Prediction for Fraud Detection** — Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD 2026), August 2026. It studies conformal prediction for edge-level fraud detection on temporal interaction graphs under class imbalance and temporal drift. Its direction motivates calibrated uncertainty and risk-aware investigation queues rather than only binary predictions.

Official KDD 2026 papers program: https://kdd2026.kdd.org/papers/  
ACM DOI: https://doi.org/10.1145/3770855.3818061  
Preprint: https://arxiv.org/abs/2608.15768  
Authors' implementation: https://github.com/Picard1701ent/ProtoCP

### 2.5 Evidence-grounded multi-hop retrieval

**GroundRAG: Evidence-Verified Multi-Hop Reasoning on Lightweight Graphs** — Findings of EMNLP 2026, October 2026. It uses a Retrieve–Verify–Generate approach in which intermediate reasoning steps must be grounded in retrieved evidence before they can contribute to the final response. This motivates explicit evidence chains, citation verification and rejection of unsupported reasoning.

Official publication: https://aclanthology.org/2026.findings-emnlp.336/  
DOI: https://doi.org/10.18653/2026.findings-emnlp.336

### 2.6 Technology implications

The research suggests a set of skills worth prioritizing:

- Repository-native agents: repository indexing, ASTs, dependency graphs, patch verification, issue chains and persistent task state.
- Production ML: data contracts, reproducible pipelines, model registries, serving, monitoring, drift, rollback and governance.
- Secure AI engineering: static analysis, dependency scanning, sandboxing, tool permissions, secrets handling and separate functional/security evaluation.
- Temporal/graph ML: heterogeneous and temporal graphs, graph neural networks, class imbalance, calibration, conformal prediction and temporal validation.
- Trustworthy GenAI: hybrid retrieval, graph-based multi-hop evidence, reranking, provenance, citation validation, document versioning and access control.
- Production observability: structured logs, metrics, distributed traces, latency/cost measurement and failure analysis.

Do not adopt a tool only because it is fashionable. Learn MCP where a real interoperability boundary is useful; learn Kubernetes after Docker and service operations are understood; use Kafka only when event volume, replay or stream-processing requirements justify it.

---

## 3. Project 1 — RepoContinuum

**Full name:** Long-Horizon Software Engineering Agent  
**Primary roles supported:** Software Engineer, Backend Engineer, Developer Tools Engineer, Agentic AI Engineer  
**Priority:** Flagship 1

### Problem statement

Coding assistants often perform isolated edits. Real maintenance involves a sequence of dependent issues in a shared repository, where earlier changes affect later changes and existing behaviour must remain intact. RepoContinuum helps plan and verify repository maintenance over a sequence of related tasks.

### Product workflow

1. A user connects a GitHub repository and submits or imports a sequence of related issues.
2. The system inspects the repository, language/framework structure, tests and relevant dependencies.
3. It builds a repository index and dependency representation.
4. A planner orders tasks and records dependencies and acceptance criteria.
5. The patch engine proposes a small, reviewable change.
6. Relevant tests and security checks run in an isolated environment.
7. Results, failures and task state are persisted for subsequent tasks.
8. The user reviews the diff and explicitly approves any PR or merge action.

### Scope and modules

| Module | Required responsibility |
|---|---|
| GitHub integration | GitHub App, webhook signature verification, repo/PR/issue permissions |
| Repository indexer | File tree, language detection, AST/tree-sitter parsing, symbol extraction |
| Dependency engine | File/module/API/test dependency edges; explainable impact paths |
| Task planner | Issue decomposition, prerequisites, acceptance criteria and task ordering |
| State ledger | Persistent issue-chain state, attempts, patches, test results and checkpoints |
| Patch engine | Generate bounded changes; prefer small diffs and explicit file scopes |
| Test intelligence | Select tests based on changed symbols/dependencies; retain full-suite option |
| Verification | Unit/integration/e2e tests, lint/type checks and security scans |
| Sandbox | Ephemeral container, resource limits, no host secrets, restricted network |
| Review/reporting | Diff, evidence, test outcomes, risks and human approval |

### Suggested architecture

```text
GitHub App / Web UI
        |
FastAPI webhook + user API
        |
Signature verification + authorization
        |
Task queue (RabbitMQ only if asynchronous work requires it)
        |
Repository indexer --> AST / symbol / dependency graph
        |                           |
Persistent task ledger          Impact analysis
        |                           |
Issue planner --> bounded patch generation
                            |
                    Isolated Docker sandbox
                            |
              Tests + SAST + dependency scan
                            |
            Evidence report + human approval
                            |
                  GitHub PR / check status
```

### Recommended stack

- Backend: Python, FastAPI, Pydantic, SQLAlchemy.
- Repository parsing: Tree-sitter; Python AST where appropriate.
- Graph: NetworkX initially; introduce a graph database only if scale/query needs justify it.
- State/data: PostgreSQL; Redis for short-lived cache/locks only where required.
- Async execution: RabbitMQ or a simpler background worker for the MVP.
- Integration: GitHub Apps, Webhooks and Checks API.
- Security: Semgrep/CodeQL/Bandit as applicable, dependency scanning and isolated execution.
- Frontend: React + TypeScript.
- Delivery: Docker, GitHub Actions, Pytest, HTTPX and Playwright.
- Observability: OpenTelemetry traces plus structured logs and task-level metrics.

### Research-informed contribution

Create a reproducible sequential-maintenance benchmark of approximately 20–30 curated task chains from selected open-source repositories (subject to licence and dataset feasibility). Compare:

A. A one-issue-at-a-time baseline.  
B. A repository-aware agent with dependency analysis.  
C. A stateful agent with dependency analysis and regression verification.

Do not claim to outperform ChainSWE or ABC-Bench unless you reproduce their protocols and compare on their datasets. A smaller clearly documented benchmark is appropriate for a portfolio project.

### Evaluation criteria

- Task-chain completion rate.
- Pass-to-pass test preservation and regression rate.
- Fail-to-pass test success.
- Test-selection recall: relevant failing tests included in selected tests.
- Patch acceptance rate after human review.
- Security findings and secure-patch rate.
- Median/p95 task latency and model/tool cost.
- Failure recovery and checkpoint correctness.

### Minimum release gate

A user can connect a test repository, submit a dependent issue sequence, inspect a dependency-aware plan, receive a patch, run tests in an isolated environment, inspect evidence and approve a PR. No unattended merge by default.

---

## 4. Project 2 — ModelGuard

**Full name:** Production ML Reliability Control Plane  
**Primary roles supported:** Backend Engineer, ML Engineer, MLOps Engineer, Data/Platform Engineer  
**Priority:** Flagship 2

### Problem statement

ML projects often demonstrate model training but not the lifecycle required to operate models reliably. ModelGuard manages data validation, reproducible training, model versions, serving, monitoring and safe promotion/rollback.

### Product workflow

1. Register a dataset and its schema/data contract.
2. Validate quality and capture dataset version/lineage.
3. Run a reproducible training pipeline and record parameters, metrics and artifacts.
4. Register a model candidate with a version and evaluation report.
5. Deploy to a test endpoint, then shadow/canary where appropriate.
6. Monitor prediction latency, input drift and model quality when labels arrive.
7. Promote or roll back according to explicit, testable gates.
8. Explain pipeline and monitoring failures with evidence; automation must not bypass deterministic approval gates.

### Modules

| Module | Required responsibility |
|---|---|
| Dataset registry | Dataset versions, schemas, lineage and ownership |
| Data validation | Nulls, ranges, category drift, duplicates and schema changes |
| Training orchestrator | Reproducible jobs, configuration and artifact capture |
| Experiment tracker | Parameters, metrics, environment and model lineage |
| Model registry | Versioning, stage transitions and metadata |
| Inference service | Versioned prediction endpoint and input validation |
| Monitoring | Latency, error rate, data drift and delayed performance metrics |
| Deployment controller | Shadow/canary promotion and rollback |
| Audit | Who changed what, which model/dataset and why |

### Suggested architecture

```text
UI / CLI
   |
FastAPI control plane ------ PostgreSQL metadata/audit
   |
Pipeline orchestrator
   |              \
Data validation   Training worker ---- MLflow + object storage
   |                                  |
Dataset/version store                Model registry
                                      |
                              Staging inference service
                                      |
                           Shadow/canary evaluation
                                      |
                           Promotion / rollback gate
                                      |
                           Monitoring + alerting
```

### Recommended stack

- Python, FastAPI, Pydantic, SQLAlchemy.
- pandas/Polars, NumPy, Scikit-learn; PyTorch only for a justified model.
- MLflow for experiments and model registry.
- PostgreSQL for metadata, audit and control-plane state.
- MinIO or local S3-compatible storage for artifacts.
- Prefect or a lightweight worker for orchestration; do not introduce multiple orchestrators.
- Docker and Docker Compose.
- Prometheus, Grafana and OpenTelemetry.
- React + TypeScript dashboard.

### Research-informed contribution

Create reproducible production-ML failure scenarios inspired by MLOps-Bench task categories: schema changes, missing features, broken pipelines, model-version mismatch, inference regression and drift. Compare manual/basic monitoring against your validation and recovery workflows.

### Evaluation criteria

- Detection precision/recall for injected data-quality failures.
- Drift detection delay and false-alarm rate.
- Pipeline reproducibility across clean runs.
- Correctness of model promotion and rollback.
- Model and dataset lineage completeness.
- Inference p50/p95 latency and error rate.
- Recovery time after controlled failures.
- Audit completeness and access-control correctness.

### Minimum release gate

A user can register a dataset, validate it, train and register a model, deploy an inference endpoint, inject a known failure/drift scenario, see monitoring evidence and roll back safely.

---

## 5. Project 3 — EvidenceOS

**Full name:** Trustworthy Knowledge Intelligence Platform  
**Primary roles supported:** GenAI Engineer, Applied AI Engineer, Backend Engineer, Enterprise AI Engineer  
**Priority:** Flagship 3

### Problem statement

Basic RAG can retrieve relevant passages and still produce unsupported multi-hop conclusions. EvidenceOS creates a permission-aware knowledge layer with provenance and verified evidence chains across documents and structured information.

### Product workflow

1. Ingest PDF, DOCX, Markdown, HTML and selected structured records.
2. Parse text and preserve source, page, section, version and access metadata.
3. Extract entities/relations and create a lightweight knowledge graph.
4. Index chunks for dense and lexical retrieval.
5. Enforce tenant/document permissions before evidence reaches the model.
6. Retrieve using hybrid search and graph expansion.
7. Rerank evidence and create explicit intermediate claims.
8. Verify each claim against retrieved source passages.
9. Generate the final answer with precise citations and uncertainty when evidence is insufficient.
10. Track document updates, stale evidence and conflicting sources.

### Modules

| Module | Required responsibility |
|---|---|
| Ingestion | File upload, parsing, validation and asynchronous processing |
| Provenance | Source URI/name, document ID, page/section, version, timestamp and licence metadata |
| Chunking/indexing | Reproducible chunk strategy and embedding versions |
| Knowledge graph | Entities, relationships, source references and version/time validity |
| Retrieval | Dense + BM25/lexical search; graph expansion where relevant |
| Reranker | Reorder candidates by query/evidence relevance |
| Evidence verifier | Verify intermediate claims and citations; reject unsupported chains |
| Access control | Tenant, user, role and document-level retrieval permissions |
| Answer service | Grounded generation, citations and abstention |
| Evaluation | Retrieval, faithfulness, citation, access and injection tests |

### Suggested architecture

```text
Document sources --> ingestion worker --> parser/chunker
                                     |          |
                                     |          +--> embeddings --> pgvector
                                     +------------> metadata --> PostgreSQL
                                     +------------> entity/relations --> graph

Question --> authentication/ACL --> hybrid retrieval
                                  --> graph evidence expansion
                                  --> reranker
                                  --> Retrieve–Verify–Generate workflow
                                  --> citation/source validation
                                  --> answer or abstention
```

### Recommended stack

- Backend: Python, FastAPI, Pydantic.
- Data: PostgreSQL + pgvector + PostgreSQL full-text search.
- Graph: NetworkX first; Neo4j only if multi-hop graph queries justify another database.
- Embeddings: Sentence Transformers or a versioned embedding API.
- Retrieval: dense + BM25/lexical; cross-encoder reranker.
- LLM: Gemini or another provider through a model adapter; keep providers swappable.
- Workflow: LangGraph only where stateful branching/checkpointing is needed; deterministic pipeline stages should remain ordinary code.
- Queue: RabbitMQ or a simple worker for document ingestion.
- Frontend: React + TypeScript.
- Tests: Pytest, retrieval evaluation scripts, access-control and adversarial-document tests.

### Research-informed contribution

Implement and compare:

A. Basic dense vector RAG.  
B. Hybrid retrieval.  
C. Graph-enhanced hybrid retrieval.  
D. Graph-enhanced Retrieve–Verify–Generate with permission filtering.

Use a curated benchmark of 100–200 questions with source-grounded expected answers. Separate single-hop and multi-hop questions. Include a contradiction set, stale-document set and adversarial prompt-injection set.

### Evaluation criteria

- Recall@K, MRR and nDCG for retrieval.
- Answer correctness and relevance.
- Citation precision/correctness.
- Unsupported claim rate / faithfulness.
- Multi-hop reasoning accuracy.
- Contradiction detection accuracy.
- Permission leakage rate (target zero in tests).
- Prompt-injection success rate (lower is better).
- p50/p95 latency and cost per query.

### Minimum release gate

A user can upload/version documents, ask multi-hop questions, receive citations that open the correct source/page, see when evidence is insufficient, and demonstrate that unauthorized documents never enter retrieval results.

---

## 6. Project 4 — TemporalRisk

**Full name:** Uncertainty-Aware Temporal Graph Intelligence  
**Primary roles supported:** ML Engineer, Applied AI Engineer, Data Scientist/ML Engineer, FinTech ML Engineer  
**Priority:** Flagship 4

### Problem statement

A transaction may be suspicious because of its relationships to other accounts, devices, merchants and prior events. A pointwise tabular classifier may miss evolving coordinated patterns and may be overconfident when the data distribution changes.

TemporalRisk models interactions as a time-aware graph and produces risk predictions with calibrated uncertainty to help prioritize investigation.

### Product workflow

1. Ingest transactions and relevant entities.
2. Normalize identifiers and construct time-stamped nodes/edges.
3. Create temporal and graph features without future-information leakage.
4. Train a tabular baseline.
5. Train graph/temporal models on sampled subgraphs or temporal snapshots.
6. Calibrate prediction confidence or prediction sets.
7. Prioritize uncertain/high-risk events for analyst review.
8. Visualize suspicious subgraphs and supporting features.
9. Evaluate temporal drift and later-period generalization.

### Modules

| Module | Required responsibility |
|---|---|
| Data ingestion | Transaction records and entity attributes |
| Graph builder | Accounts, devices, merchants, IPs and time-stamped interactions |
| Feature engine | Velocity, recency, neighbourhood and aggregate features |
| Baseline models | Logistic regression and XGBoost/LightGBM |
| Graph model | GNN/temporal graph model with resource-aware training |
| Uncertainty | Calibration and conformal prediction experiment |
| Risk triage | Rank events by risk and uncertainty/investigation value |
| Explanation | Neighbourhood context and interpretable feature evidence |
| Dashboard | Transaction, graph neighbourhood and alert exploration |

### Suggested stack

- Python, FastAPI.
- pandas/Polars, NumPy, Scikit-learn, XGBoost/LightGBM.
- PyTorch and PyTorch Geometric.
- NetworkX for exploration and small graphs.
- PostgreSQL for transactional/metadata storage.
- MLflow for experiment tracking.
- React + TypeScript for investigation UI.
- Docker; use a streaming broker only if the live event workflow warrants it.

### Dataset candidates

- Elliptic Bitcoin transaction dataset.
- DGraph-Fin.
- BankSim or other suitable financial simulation datasets for controlled experiments.

Before using a dataset, inspect its schema, licence, label definition, feature availability and temporal structure. Do not assume datasets can be combined or that a label has the same meaning across datasets. Do not claim real-world bank fraud performance from public or synthetic data.

### Research-informed contribution

Compare:

A. Tabular baseline (Logistic Regression and XGBoost).  
B. Static graph model.  
C. Temporal graph model.  
D. Temporal graph model with calibration/conformal risk sets.

Use strictly time-aware splits. Prevent target leakage from future transactions and future graph edges. Report limitations caused by labels, synthetic data, sampling and domain shift.

### Evaluation criteria

- PR-AUC and F1 (with threshold-selection procedure disclosed).
- Precision@K and recall at fixed investigation budget.
- False-positive rate.
- Calibration error / coverage and prediction-set size where applicable.
- Temporal out-of-time generalization.
- Performance under controlled drift.
- Inference latency and memory/VRAM requirements.

### Hardware constraint

The candidate's stated GPU is an NVIDIA RTX 2050 with 4 GB VRAM. Start with tabular baselines, sampled subgraphs, compact GNNs and CPU-capable pipelines. Do not design the MVP around training large graph transformers or foundation models from scratch.

### Minimum release gate

A user can load a documented dataset, reproduce the baseline and graph experiments, inspect temporal splits, view calibrated risk outputs and explore the graph context behind selected predictions.

---

## 7. Shared engineering standards

### Common foundation

- Python 3.11+ or a currently supported version selected and pinned per repository.
- FastAPI, Pydantic and SQLAlchemy where appropriate.
- PostgreSQL for durable relational state.
- React + TypeScript for substantial user-facing dashboards.
- Docker/Docker Compose for reproducible local environments.
- GitHub Actions for CI.
- Pytest and HTTPX for backend tests; Playwright for important UI workflows.
- Ruff and type checking for code quality.
- OpenTelemetry, structured logs and basic metrics for production-style observability.
- `.env.example`; never commit real credentials or production data.

### Architecture rules

- Modular monolith first unless independent scaling/deployment has a real justification.
- Separate synchronous user APIs from long-running background work.
- Add a queue only when asynchronous processing, retries or backpressure require it.
- Use idempotency for retried business operations.
- Apply database migrations and document indexes/constraints.
- Validate at API and data boundaries.
- Make error states explicit; do not silently swallow failures.
- Use least-privilege authorization and short-lived credentials.
- Never run untrusted repository code on the host application server.
- Make model, prompt, embedding and dataset versions discoverable in experiment records.
- Separate model output from deterministic enforcement decisions.

### Required repository contents

```text
project/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── repositories/
│   │   ├── services/
│   │   └── workers/
│   └── tests/
├── frontend/
├── infrastructure/
├── docs/
│   ├── HLD.md
│   ├── LLD.md
│   ├── ER_DIAGRAM.md
│   ├── API_CONTRACTS.md
│   ├── ARCHITECTURE_DECISIONS.md
│   └── EVALUATION.md
├── scripts/
├── .env.example
├── docker-compose.yml
└── README.md
```

Adapt the structure to the project. Do not create empty folders or abstractions merely for appearance.

### Definition of done for every flagship

- End-to-end user workflow works from a clean setup.
- HLD, LLD and database design are documented.
- API contracts, validation and error handling are documented.
- Authentication and authorization are tested where relevant.
- Unit and integration tests pass.
- Important failure/recovery paths are tested.
- Real evaluation data, baselines and measured results are available for AI/ML functionality.
- Docker setup works from a clean environment.
- CI runs lint, type checks, tests and build.
- A demo has been verified; do not list a placeholder URL as a live demo.
- README explains architecture, setup, trade-offs, limitations and reproduction steps.
- The candidate can explain the implementation without relying on generated answers.

---

## 8. Role-specific hiring strategy

There is no universal recruiter rubric. The following is a practical targeting framework, not a claim about every employer's screening process.

### Product-based software companies

**Common screening emphasis:** DSA, CS fundamentals, coding quality, system design potential, debugging, API/database knowledge and project ownership.

**Best project ordering:** RepoContinuum → ModelGuard → one existing full-stack/backend project.

**Resume keywords (only if demonstrable):** Python/Java, DSA, OOP, SOLID, REST APIs, SQL, PostgreSQL, transactions, indexing, concurrency, Docker, CI/CD, testing, system design.

### Indian technology startups

**Common screening emphasis:** ability to build a usable feature quickly, take ownership, debug production-like failures, integrate APIs, deploy and communicate trade-offs.

**Best project ordering:** RepoContinuum → EvidenceOS → ModelGuard.

**Evidence to show:** live demo, clean setup, issue history, tests, deployment, screenshots, short architecture explanation and measurable workflow outcome.

### Service-based / IT consulting companies

**Common screening emphasis:** programming fundamentals, DSA basics, OOP, SQL, Java/Python, SDLC, Git, communication, adaptability and ability to work across client technology stacks. Some roles are Java/Spring-heavy; Python/AI openings have different expectations.

**Best project ordering:** ModelGuard or RepoContinuum plus the most relevant existing project.

**Resume strategy:** Maintain a Java/Spring-oriented variant only if the candidate can pass Java and Spring interviews; otherwise prioritize Python backend openings rather than keyword stuffing.

### AI-first companies

**Common screening emphasis:** Python, data engineering, model/LLM understanding, evaluation methodology, production APIs, retrieval, tool calling, dataset quality, latency/cost and safety.

**Best project ordering:** EvidenceOS → RepoContinuum → TemporalRisk or ModelGuard depending on the job.

**Evidence to show:** benchmark dataset, baseline comparisons, evaluation report, cost/latency measurements, failure cases and reproducible deployment.

### Enterprise / GCC / fintech teams

**Common screening emphasis:** reliability, security, SQL, test coverage, auditability, access control, operational processes, performance and integration with existing systems.

**Best project ordering:** ModelGuard → RepoContinuum → TemporalRisk or EvidenceOS for the relevant team.

**Evidence to show:** access-control tests, migrations, logs/traces, failure recovery, audit history, deterministic validation and documentation.

---

## 9. Role-specific resume versions

Maintain one verified master resume and tailor the summary, skills ordering and selected project bullets to each opening. Do not fabricate experience or change the underlying facts between versions.

### Version A — Software Engineer / Backend Engineer

**Headline:** Computer Science Undergraduate | Backend Engineering | Software Development

**Project order:** RepoContinuum; ModelGuard; AI Job Search Agent or Adaptive Stock Trading.

**Emphasize:** Python/Java, DSA, OOP, SQL, REST APIs, FastAPI/Spring only where used, PostgreSQL, transactions, indexes, concurrency, testing, Docker, CI/CD and system design.

### Version B — Applied AI / ML Engineer

**Headline:** Computer Science Undergraduate | Machine Learning | Applied AI Engineering

**Project order:** TemporalRisk; ModelGuard; EvidenceOS.

**Emphasize:** Python, NumPy/pandas, Scikit-learn, PyTorch, XGBoost, feature engineering, graph ML, evaluation, data leakage prevention, MLflow, model deployment and drift monitoring.

### Version C — GenAI / Agentic AI Engineer

**Headline:** Computer Science Undergraduate | Generative AI | Agentic Systems | Backend Engineering

**Project order:** EvidenceOS; RepoContinuum; AI Job Search Agent or AI Agent Automation Framework.

**Emphasize:** Python, FastAPI, LLM APIs, embeddings, vector search, hybrid retrieval, reranking, LangGraph, tool calling, structured outputs, RAG evaluation, agent state, permissions, Docker and PostgreSQL.

### Version D — Data Engineer

Use only for roles focused on data pipelines and platform work.

**Project order:** ModelGuard; TemporalRisk; AI Job Search Agent.

**Emphasize:** Python, advanced SQL, ETL/ELT, data modelling, data quality, schema evolution, lineage, batch/stream processing, PostgreSQL and orchestration. Add Spark, Airflow or cloud object storage only after hands-on implementation.

### Resume structure for a one-page fresher resume

1. Name and verified contact/profile links.
2. Targeted professional headline.
3. Two-line summary.
4. Education (SR University; B.Tech CSE AI & ML; expected 2027; CGPA 9.1/10).
5. Technical skills grouped by category and limited to explainable skills.
6. Two or three role-relevant projects with measurable evidence.
7. Verified certifications.

Do not include all four new projects on every resume version. Select the two or three most relevant projects for the role.

### Resume bullet formula

**Engineering action + implementation detail + measured result.**

Use templates until real results exist:

- RepoContinuum: “Built a repository-aware maintenance agent using [technologies], completing [X] dependent maintenance tasks with [Y]% test pass rate across [N] benchmark scenarios.”
- ModelGuard: “Developed an ML lifecycle platform integrating [pipeline/registry/monitoring], detecting [X] injected data-quality or drift conditions with [measured result].”
- EvidenceOS: “Built a permission-aware graph retrieval pipeline, achieving [measured citation correctness] across [N] evaluation questions.”
- TemporalRisk: “Compared tabular and graph-based models on [dataset] using temporal validation, improving [metric] from [baseline] to [result].”

Replace every bracketed placeholder only after running and recording the experiment.

---

## 10. Interview preparation expectations

For every flagship, maintain `INTERVIEW_PREPARATION.md` with:

1. 30-second and 2-minute project explanations.
2. Problem, motivation and users.
3. HLD and LLD walkthrough.
4. Architecture and service/module boundaries.
5. Database schema, indexes and transaction choices.
6. API contracts and authentication/authorization.
7. OOP and SOLID examples visible in actual code.
8. Design patterns actually used and why.
9. Async processing, retries and idempotency where applicable.
10. Security threats and mitigations.
11. Testing approach, benchmark construction and results.
12. Deployment and observability.
13. Three difficult bugs/failures and how they were diagnosed.
14. Trade-offs and rejected alternatives.
15. Scaling bottlenecks and future improvements.
16. At least 25 project-specific interview questions with evidence-backed answers.

Core preparation areas across roles: DSA; OOP; DBMS; OS; computer networks; SQL; Python/Java; REST; system design; testing; cloud and Docker; ML fundamentals; statistics; model evaluation; RAG; LLM/agent safety and evaluation.

For OOP interview claims, point to real code. Example: abstraction may be a provider interface; polymorphism may be interchangeable implementations; encapsulation may protect state transitions. Do not force inheritance where composition is more appropriate.

---

## 11. Build roadmap and quality gates

The following is an illustrative 20–24 week plan. Actual duration depends on weekly availability, research depth and integration complexity.

| Stage | Indicative duration | Outcome / quality gate |
|---|---:|---|
| RepoContinuum | 5–6 weeks | Multi-issue workflow works, tests run in isolated sandbox, task chain metrics documented |
| ModelGuard | 4–5 weeks | Reproducible pipeline, registry, inference, drift scenario and rollback demonstrated |
| EvidenceOS | 4–5 weeks | Hybrid/graph retrieval benchmark, citation verification and ACL isolation tests pass |
| TemporalRisk | 5–6 weeks | Reproducible temporal graph experiment, baselines, calibration and evaluation report |
| Portfolio hardening | 1–2 weeks | Verified demos, accurate READMEs, diagrams, resume variants and interview notes |

### Milestone workflow for every project

1. **Inspect:** inspect repository/workspace and dependencies; do not overwrite working files.
2. **Specify:** write requirements, non-goals, user flows and acceptance criteria.
3. **Design:** create HLD, LLD, schema, API contracts and architecture decisions.
4. **Review:** identify risks, unnecessary infrastructure, security concerns and missing evaluation.
5. **Implement vertical slices:** one working end-to-end workflow at a time.
6. **Test:** unit, integration, API, UI and project-specific failure tests.
7. **Verify:** start the system from a clean environment; inspect logs and demonstrate real workflows.
8. **Evaluate:** run baselines and record metrics, limitations and experiment configuration.
9. **Document:** update README, diagrams, setup, demo and interview preparation.
10. **Report:** list completed items, test results, known limitations and unimplemented work. Never report unverified success.

---

## 12. Antigravity implementation prompt — reusable master instructions

Use this as the governing instruction when starting each project. Add that project's specific scope and milestone prompt separately.

```text
Act as a senior staff software engineer, applied AI/ML engineer, security reviewer,
and technical lead. Work in the existing workspace carefully.

NON-NEGOTIABLE RULES
1. Inspect the entire repository and existing environment before changing files.
2. Do not overwrite or delete working functionality without explaining why and
   receiving approval for destructive changes.
3. Do not build the whole product in one pass. Work milestone by milestone.
4. Produce HLD, LLD, database schema, API contracts, key sequence diagrams,
   acceptance criteria and an implementation plan before major coding.
5. Prefer a modular monolith. Add services, queues, databases or infrastructure
   only when a measurable requirement justifies them.
6. Use real data and real model inference. No fake metrics, placeholder predictions,
   fabricated integrations or simulated success presented as production behaviour.
7. Add unit and integration tests with every meaningful feature. Include failure,
   security and regression tests.
8. Validate inputs, use explicit error handling, migrations, structured logging,
   health endpoints and least-privilege permissions.
9. Protect secrets. Create .env.example, never commit real credentials.
10. Run untrusted code only in a strongly isolated, resource-limited environment.
11. Do not automatically merge code, promote models or execute risky remediation
    without explicit policy checks and human approval.
12. Read the installed framework/library documentation for the actual versions in
    this workspace before relying on APIs that may have changed.

IMPLEMENTATION PROCESS
A. Inspect and report current structure, dependencies, entrypoints and risks.
B. Write the project specification and architecture decisions.
C. Propose small, ordered milestones with acceptance tests.
D. Wait for review of architecture before substantial implementation.
E. Implement one vertical slice, run its tests, inspect the diff and fix failures.
F. Continue only when the current milestone passes its acceptance criteria.
G. At the end, run lint, type checks, tests, build and clean-environment startup.
H. Update README, HLD, LLD, API docs, evaluation results and INTERVIEW_PREPARATION.md.

FINAL REPORT
List files changed, implemented features, commands run, test results, actual
measurements, known limitations, security assumptions and remaining work. Clearly
separate verified functionality from planned or unverified functionality.
```

---

## 13. Existing portfolio integration and hygiene

Keep the current projects as supporting evidence:

- AI Job Search Agent: demonstrate applied AI automation, backend APIs and job-data workflows. Reproducibility, deduplication quality, matching evaluation and test reliability should be documented.
- Adaptive Stock Trading: demonstrate full-stack and backend integration. Clearly label paper trading; document realistic backtesting assumptions, fees, slippage and benchmark comparisons before claiming trading performance.
- ReceiptFlow: demonstrate mobile/full-stack product engineering. Ensure the test command actually runs tests; add receipt-extraction evaluation, user-data isolation tests and confidence/correction workflows. Review tracked binaries and generated files.
- AI Agent Automation Framework: demonstrate browser automation and agent workflow orchestration. Document tool permissions, retries, checkpoints, failure handling and task success evaluation.
- Portfolio website: verify every link, project claim, certificate, resume path and demo. Remove placeholder `#` destinations and unverified metrics.

Show only skills that can be defended in an interview. Keep a small set of flagship projects prominent; secondary repositories can remain linked from GitHub.

---

## 14. Role-to-project selection matrix

| Role | First project | Second project | Supporting project |
|---|---|---|---|
| Software Engineer | RepoContinuum | ModelGuard | Adaptive Stock Trading / AI Job Search Agent |
| Backend Engineer | RepoContinuum | ModelGuard | AI Job Search Agent |
| Full Stack Engineer | ModelGuard or RepoContinuum | EvidenceOS | ReceiptFlow / Adaptive Stock Trading |
| ML Engineer | TemporalRisk | ModelGuard | EvidenceOS |
| Applied AI Engineer | EvidenceOS | RepoContinuum | ModelGuard |
| GenAI Engineer | EvidenceOS | RepoContinuum | AI Job Search Agent / AI Agent |
| Agentic AI Engineer | RepoContinuum | EvidenceOS | AI Agent |
| Data Engineer | ModelGuard | TemporalRisk | AI Job Search Agent |

The first two projects should receive the most space on the corresponding role-specific resume. Use job-description keywords only when the underlying experience is real.

---

## 15. Practical hiring evidence snapshot — November 2026

A small sample of current India postings was inspected to ground the skills discussion. This is not a comprehensive labour-market survey and job postings may change or close.

1. **Digitals AI Inc. — Generative AI Engineer, freshers 2026/27, Hyderabad.** Posted 14 October 2026. The listing explicitly accepts fresh graduates and 0–3 years, and asks for Python, DSA, LLMs, REST APIs, FastAPI/Flask/Django, RAG, vector databases, agent workflows, model-provider integrations, AWS, testing and optimization.  
   https://jobs.workable.com/view/4MkiYFtDGNoYBsx4e1veqG/hybrid-hiring-generative-ai-engineer---freshers-2026%2F27-(computer-science-or-ai-only)-in-hyderabad-at-digitals-ai-inc

2. **Blue Machines AI — AI Data Engineer (Speech & Language), Bengaluru.** Posted 19 November 2026. The listing asks for 1–2 years building data/ML/backend pipelines but says strong internships or open-source work count. It emphasizes Python, Linux, data processing, Hugging Face Datasets, pandas/Polars, distributed jobs, dataset provenance and model evaluation.  
   https://jobs.workable.com/view/vydouyD9TWFkApLwTbhnYc/ai-data-engineer-(speech-%26-language)-in-bengaluru-at-blue-machines-ai

3. **Smartstream Limited — Software Engineer, Mumbai.** Posted 16 November 2026. This is a mid-level role requiring 5+ years, so it is not a fresher target. It is useful as an example of enterprise expectations: Java/Spring Boot, Angular/TypeScript, microservices, REST/OpenAPI, SQL, automated tests, CI/CD, containers and some exposure to AI developer tools/MCP.  
   https://jobs.workable.com/view/59S7QVKgzdRjdZjsSwfGFB/vn3010---software-engineer-in-mumbai-at-smartstream-limited

Use these examples as signals for skills, not as promises of current availability or eligibility.

---

## 16. Final strategic principles

1. Build for demonstrated competence, not project count.
2. DSA and CS fundamentals remain essential for software engineering hiring.
3. Project relevance must match the job description; do not send the same project order to every employer.
4. Evidence beats adjectives: tests, benchmarks, diagrams, demos and reproducible commands.
5. Keep AI systems controlled, observable, secure and evaluated.
6. Do not claim research novelty unless you have a clearly defined contribution and reproducible comparison.
7. Do not wait for all four projects before applying.
8. Revisit the research and current job requirements before each major project milestone; technology and hiring expectations change.

**Final positioning:** A software engineer with strong backend fundamentals and a practical specialization in Applied AI/ML, capable of designing, implementing, evaluating and operating intelligent software systems.