# RepoContinuum — Project Dossier and Build Specification

**Version:** 1.0  
**Prepared:** 21 November 2026  
**Status:** Project discovery and technical design; implementation has not started  
**Parent strategy:** Hybrid AI Engineering Master Blueprint  
**Project type:** Repository-level software engineering agent  
**Primary positioning:** Software Engineering + Backend Engineering + Applied Agentic AI

---

## 0. Executive decision

**RepoContinuum is a long-horizon software engineering agent that helps a developer maintain a codebase across multiple dependent issues.** It explores a repository, indexes its structure, helps sequence related tasks, proposes bounded code changes, executes verification in an isolated environment, preserves task state and produces evidence for human review.

The project must demonstrate more than an LLM that writes code. Its core engineering contribution is the combination of:

1. **Repository understanding** — file, symbol, import and test relationships.
2. **Dependency-aware task planning** — issues are represented as a sequence or graph, not independent prompts.
3. **Persistent maintenance state** — completed work, decisions, changed files, test outcomes and unresolved obligations survive between tasks.
4. **Regression-aware verification** — relevant tests are selected with explanations and earlier obligations are rechecked.
5. **Safe execution and human control** — generated patches are reviewed; repository code is never executed on the host with ambient secrets; PR creation and merging require explicit approval.

### The first release

Build a local-first, Python-only vertical slice against controlled test repositories. It must import a repository, index it, accept a short chain of dependent tasks, produce a plan, propose a patch, run checks in a sandbox, persist the result and display a reviewable report. Integrate GitHub Issues and GitHub App pull-request publishing after that core workflow is reliable.

### What it is not

- Not a generic chat-with-your-repository application.
- Not just an automated code-review bot.
- Not an IDE replacement.
- Not an unrestricted autonomous coding agent.
- Not a system that merges code without human review.
- Not initially a multi-language universal code intelligence platform.
- Not a microservices demonstration built for technology-counting purposes.

---

## 1. Product problem and intended user

### 1.1 Problem statement

Software maintenance is cumulative. A change made for one issue can alter assumptions, APIs, dependencies, test behaviour and future implementation choices. A tool that solves one issue in a clean context may not maintain correctness when the repository already contains changes from previous tasks.

Example sequence:

- Task 1: Repair refresh-token validation.
- Task 2: Update session renewal to use the corrected token validation.
- Task 3: Add expiry and refresh regression tests.
- Task 4: Update the API response contract without breaking existing clients.

A weak agent may patch Task 1 and forget the invariants it established when addressing Task 2. It may pass the new task's test while regressing an earlier requirement. RepoContinuum treats the sequence as a continuing maintenance job with a shared repository state and explicit obligations.

### 1.2 Primary user

A software engineer or technical lead maintaining a Python codebase who wants help with a bounded set of connected bugs or small enhancements, but needs to inspect and approve every material code change.

### 1.3 Core user promise

> RepoContinuum keeps track of what changed, why it changed, what depends on it, which checks were run, what remains unverified and whether the next task is safe to attempt.

### 1.4 Main user journey

1. Developer imports a public or locally owned repository and selects a commit/branch.
2. RepoContinuum scans the project and reports supported languages, important files, symbols, imports, tests and index warnings.
3. Developer creates a maintenance chain and enters each issue with acceptance criteria. Dependencies can be set manually; the planner may suggest additional dependencies with explanations.
4. Developer reviews and approves the task order and test plan.
5. Agent retrieves relevant repository context and proposes a small patch.
6. Patch is applied only in a disposable working copy.
7. Static checks, selected tests and regression checks execute in a restricted sandbox.
8. RepoContinuum stores the patch, changed files, tests, logs, model/tool metadata and a checkpoint.
9. Developer reviews the diff and evidence, then chooses to accept, reject or request another bounded attempt.
10. The next task receives the approved prior state and the remaining obligations.
11. After the local workflow is proven, the developer may authorize publication of a branch and pull request through a GitHub App.

---

## 2. Research basis and design implications

The project was selected because recent research identifies a gap between isolated code generation and full repository-level engineering.

### 2.1 ABC-Bench — executable backend engineering

**ABC-Bench: Benchmarking Agentic Backend Coding in Real-World Development**, Findings of ACL 2026, July 2026. The paper describes 224 practical tasks across 8 languages and 19 frameworks. It evaluates more than local code logic: tasks can require repository exploration, containerized service setup and external end-to-end API tests. The paper motivates measuring an entire engineering workflow rather than only whether generated code looks plausible.

- Official paper: https://aclanthology.org/2026.findings-acl.1142/
- DOI: https://doi.org/10.18653/v1/2026.findings-acl.1142

**RepoContinuum implication:** its evaluation must include repository setup, patch application, service/test execution and externally observable outcomes. A generated diff is not a successful task until the expected checks pass.

### 2.2 ChainSWE — dependent maintenance sequences

**ChainSWE: Benchmarking Coding Agents on Multi-Bug Software Maintenance**, Proceedings of EMNLP 2026, October 2026. The paper describes chronological, dependent issue chains across Python repositories and reports that performance can fall sharply as chain length increases. Its central premise is directly aligned with RepoContinuum: real maintenance is sequential, and prior fixes become part of the environment for later fixes.

- Official paper: https://aclanthology.org/2026.emnlp-main.371/
- DOI: https://doi.org/10.18653/2026.emnlp-main.371
- Dataset: https://huggingface.co/datasets/C-lister/ChainSWE
- Dataset description: https://huggingface.co/datasets/C-lister/ChainSWE/blob/main/README.md

**RepoContinuum implication:** keep task state and code state across the chain. Re-run earlier tests and record whether later work broke previous obligations. Dataset revisions/splits can differ, so record the exact ChainSWE dataset revision and split if it is used.

### 2.3 SWE-bench Verified — useful but not a chain benchmark

SWE-bench Verified is a human-validated subset of 500 SWE-bench instances. It is useful for contextualizing issue-resolution performance, but it primarily evaluates individual GitHub issues rather than the long-horizon chain behaviour RepoContinuum is designed to study.

- Benchmark overview: https://www.swebench.com/verified
- Original paper: https://openreview.net/forum?id=VTF8yNQM66

**RepoContinuum implication:** do not describe a small custom benchmark as equivalent to SWE-bench or ChainSWE. Use those benchmarks for context and, only after the local evaluation harness is stable, consider a carefully scoped subset.

### 2.4 Long-horizon software engineering survey

**Long-Horizon Software Engineering Agents: From Tasks to Projects** is a 2026 survey/manuscript discussing the shift from isolated tasks toward agents that must maintain software over time. It distinguishes two important measurements: retained functionality (whether earlier accepted behaviour still works) and conformance to active requirements (whether all currently active requirements are satisfied). It also highlights predecessor state, external changes, handoff and consistent reporting as open problems.

- Survey and reference library: https://longhorizonswe.github.io/

**RepoContinuum implication:** retain an explicit obligation ledger and record the baseline commit, every agent-produced commit/patch and any external repository changes. The agent should not silently assume its workspace is unchanged.

### 2.5 Research positioning

RepoContinuum is a portfolio-scale engineering and experimental project, not a claim to reproduce or surpass the papers above. The defensible contribution is a transparent, reproducible smaller benchmark comparing:

- an issue-by-issue baseline with no retained chain state;
- a repository-aware planner with dependency information;
- a stateful, regression-aware workflow with checkpoints and test-selection evidence.

Use the same repositories, tasks, model configuration, attempt limits and verification rules for all comparisons. Report sample size, failures, model/tool costs and limitations. Do not claim statistically significant improvements without an appropriate design and analysis.

---

## 3. Product requirements

### 3.1 Functional requirements

| ID | Requirement | Acceptance evidence |
|---|---|---|
| FR-01 | Import repository from a local path or public Git URL | Import metadata, selected ref and resolved commit SHA are stored |
| FR-02 | Inspect repository contents | File inventory, language detection and ignored-file report are available |
| FR-03 | Index Python symbols and imports | Functions/classes/modules are linked to file paths and source ranges |
| FR-04 | Discover test files and test functions | Test inventory is visible and linked to candidate source modules |
| FR-05 | Create a maintenance chain | Chain contains ordered tasks and explicit acceptance criteria |
| FR-06 | Represent task dependencies | Directed dependency edges can be added, removed and reviewed |
| FR-07 | Generate a task plan | Plan includes likely files, affected symbols, test strategy, risks and assumptions |
| FR-08 | Produce bounded patches | Patch is stored separately, has a base commit and a visible diff |
| FR-09 | Execute verification in sandbox | Each command, exit status, duration and captured output is stored |
| FR-10 | Preserve chain state | Completed tasks, decisions, patches and test obligations remain available to successor tasks |
| FR-11 | Detect regressions | Earlier passing obligations are rechecked after later changes |
| FR-12 | Produce an evidence report | Report distinguishes passed, failed, skipped and not-run checks |
| FR-13 | Require human approval | No remote write/PR/merge action occurs without explicit approval |
| FR-14 | Publish a GitHub PR (later release) | A new branch and PR are created only after the user approves the exact patch |

### 3.2 Non-functional requirements

- **Reproducibility:** record repository URL, ref, exact base commit SHA, dependency lock state, container image digest, test commands, model/provider identifier and prompt/tool version.
- **Traceability:** every patch must link to a task, agent run, base commit, plan and verification run.
- **Bounded execution:** set hard limits for task count, model calls, repair attempts, wall-clock time, process count, CPU and memory.
- **Security:** no repository code runs on the API host; no host credentials are mounted into the sandbox; no agent action can merge automatically.
- **Resilience:** a worker restart must not lose a chain's last committed checkpoint.
- **Observability:** structured logs, task-level timings, execution outcomes, model/tool usage and failure categories are recorded.
- **Usability:** the user can inspect the plan, diff and verification evidence before accepting a change.
- **Extensibility:** language parsers, model providers and verification tools are adapters behind explicit interfaces.

---

## 4. Scope by release

### Release 0 — deterministic engineering foundation

- A small set of controlled Python fixture repositories.
- Local repository import.
- Python AST-based file/symbol/import/test indexing.
- Explicit task chains with manually supplied dependencies.
- Deterministic planner and fake LLM/provider for tests.
- Diff/patch storage and test execution in a disposable environment.
- Persistent chain/task/run/checkpoint records.
- CLI and API reports.

**Exit gate:** demonstrate a full issue chain end to end without depending on a live LLM. The same fixture run should be reproducible.

### Release 1 — LLM-assisted patching

- Provider abstraction; use the model API available to the developer, with Gemini as a possible adapter.
- Structured JSON outputs for plan, patch intent and completion summary.
- Repository context retrieval based on symbol index, imports, tests and targeted text search.
- Bounded repair cycle (for example, no more than two repair attempts per task in the initial configuration).
- Token/cost/time budgets and complete run logs.

**Exit gate:** live model can propose and revise a patch while the deterministic verification layer remains authoritative.

### Release 2 — web dashboard and GitHub read integration

- React + TypeScript dashboard.
- GitHub App or narrowly scoped development credential for reading repository metadata, contents and issues.
- Webhook signature verification and idempotent delivery handling.
- Queue-based asynchronous execution.
- Repository, issue and chain views.

**Exit gate:** install/connect on a test repository, import issues and run a chain without making remote writes.

### Release 3 — safe PR publication

- User-approved branch creation and patch push.
- Pull request creation and test/evidence summary.
- GitHub Checks integration if useful.
- Minimal GitHub App permissions and token handling.
- Audit trail for user approvals and publication actions.

**Exit gate:** the app can publish an approved patch to a test repository, but still does not merge automatically.

### Explicitly deferred

- Broad multi-language call-graph analysis.
- Autonomous issue selection from an entire backlog.
- Automatic merge and deployment.
- Multi-agent debate/orchestration for its own sake.
- Kubernetes, Kafka, Neo4j or a graph database before justified by measured needs.
- Running arbitrary private or untrusted repositories on a shared public worker.

---

## 5. Architecture recommendation

### 5.1 Design principle

Start as a **modular monolith with a separate worker process**. Separate the code into domain modules, but deploy only the API, worker, PostgreSQL and Redis initially. This is enough separation to keep long-running execution out of HTTP request handlers without introducing distributed-system overhead.

### 5.2 Logical architecture

```text
                   Local CLI / React dashboard
                              |
                         FastAPI API
                              |
                Authentication / authorization
                              |
                 PostgreSQL control-plane DB
                    |                  |
              Chain/task state     Audit/events
                    |
               Redis + RQ queue
                    |
                Worker process
                    |
          Agent workflow state machine
          /          |             \
 Repository      Planner        Patch engine
 indexer            |                |
          \\        |          bounded patch
           \\       |                /
              Context + obligation ledger
                              |
                     Disposable workspace
                              |
                 Test/lint/security execution
                              |
                    Verification evidence
                              |
                     Human review gate
                              |
                  GitHub branch/PR (later)
```

### 5.3 Recommended technology choices

| Layer | Recommended choice | Why / when |
|---|---|---|
| Language | Python 3.13.x (pin exact patch/runtime in tooling) | Matches the current working environment and backend/AI focus |
| API | FastAPI + Pydantic v2 | Typed request/response contracts and async-friendly API |
| ORM/migrations | SQLAlchemy 2.x + Alembic | Explicit data model and reproducible migrations |
| Primary DB | PostgreSQL | Durable chain state, relationships, JSON metadata and audit events |
| Queue | Redis + RQ for the first worker implementation | Simple asynchronous task execution; replace only if requirements justify it |
| CLI | Typer | Fast local workflow before a dashboard exists |
| Parsing | Python `ast` first; Tree-sitter in the language-expansion phase | Native, simple Python parsing first; incremental multi-language parsing later |
| Graph | NetworkX in the first release | Small in-process dependency graph; no separate graph DB required |
| Context retrieval | Symbol/import/test index + ripgrep/BM25-style text retrieval | Transparent and easy to evaluate; embeddings are optional later |
| LLM | Provider adapter; Gemini is one possible provider | Avoid provider lock-in and support deterministic test doubles |
| Test framework | Pytest + HTTPX; Playwright for UI E2E | API, domain and browser-level verification |
| Quality | Ruff, Pyright or mypy, Semgrep | Formatting/linting, type checks and static security analysis |
| Sandbox | Disposable Linux container/worker environment | Keeps untrusted test execution away from the API process |
| Frontend (later) | React + TypeScript + Vite | Focused dashboard without reusing the portfolio site's runtime |
| Observability | Structured JSON logs; OpenTelemetry when the vertical slice is stable | Trace task stages and correlate API, queue and worker runs |
| CI | GitHub Actions | Reproducible lint/test/build workflow |

**Avoid premature complexity:** no Kubernetes, Kafka, Neo4j, multiple LLM agents or vector database in the first release. The graph is initially a small in-memory projection of indexed relationships, persisted as nodes/edges or regenerated from the repository snapshot.

### 5.4 Repository indexing strategy

**First language: Python.**

1. Walk tracked repository files; exclude `.git`, `.venv`, `venv`, `__pycache__`, `node_modules`, build outputs, caches, binaries and files above a configurable size limit.
2. Detect language and file type.
3. Parse Python modules with the standard library `ast` module.
4. Extract imports, functions, classes, methods, decorators, docstrings and source ranges.
5. Resolve relative imports where possible; mark unresolved/dynamic imports as unknown instead of inventing edges.
6. Discover tests using common pytest conventions (`test_*.py`, `*_test.py`, `tests/`) and inspect function/class names.
7. Build relationships: module imports module; module defines symbol; symbol appears in test; file references config/entry point.
8. Save the snapshot against the exact Git commit SHA.

**Second language milestone:** Tree-sitter for JavaScript/TypeScript and Java. Tree-sitter builds concrete syntax trees, supports incremental parsing and is designed to remain useful with syntax errors. Add languages only when the Python workflow is demonstrated and the grammar/binding versions are pinned.

**Important limitation:** static import/call graphs are incomplete in dynamic languages. Record edge provenance and confidence; do not present inferred call relationships as ground truth.

### 5.5 Repository graph model

Node types:

- `Repository`
- `Snapshot`
- `File`
- `Module`
- `Symbol` (function/class/method)
- `Test`
- `Task`
- `Patch`

Edge types:

- `CONTAINS`
- `IMPORTS`
- `DEFINES`
- `REFERENCES` (only where safely inferred)
- `TESTS`
- `AFFECTS` (change/task impact)
- `DEPENDS_ON` (task-to-task)
- `MODIFIES` (patch-to-file)

Every inferred edge should include provenance (parser, explicit user input, naming heuristic, LLM suggestion) and confidence or certainty class. Human-entered dependencies are authoritative; model-suggested dependency edges require review.

---

## 6. Agent workflow and state machine

### 6.1 Workflow

```text
CREATED
  -> REPOSITORY_VALIDATED
  -> INDEX_READY
  -> CHAIN_VALIDATED
  -> PLAN_READY
  -> AWAITING_PLAN_APPROVAL
  -> TASK_CONTEXT_READY
  -> PATCH_PROPOSED
  -> PATCH_VALIDATED
  -> SANDBOX_RUNNING
  -> VERIFICATION_COMPLETE
  -> AWAITING_PATCH_APPROVAL
  -> TASK_CHECKPOINTED
  -> NEXT_TASK or CHAIN_COMPLETE
```

Terminal/exception states include `BLOCKED`, `FAILED`, `CANCELLED`, `REJECTED` and `NEEDS_HUMAN_INPUT`. Do not collapse a tool failure, test failure and model refusal into the same generic failed state.

### 6.2 Agent steps

**Step 1 — Understand.** Parse issue text, requested behaviour, reproduction information and acceptance criteria. Extract ambiguity and missing facts.

**Step 2 — Retrieve.** Use indexed files/symbols/imports/tests and scoped search to fetch the smallest useful repository context. Return paths and source ranges with the context.

**Step 3 — Plan.** Produce a structured plan: root-cause hypothesis, files/symbols likely affected, proposed changes, risks, prerequisite tasks and tests. Mark uncertain inferences.

**Step 4 — Validate plan.** Check task dependencies, scope restrictions, acceptance criteria and whether required files are ignored, generated or high risk. Human approval is required before execution if the task is ambiguous or exceeds configured scope.

**Step 5 — Patch.** Generate a bounded unified diff. Validate that it applies cleanly to the declared base commit, touches only allowed paths and does not change forbidden files.

**Step 6 — Verify.** Run formatter/linter/type checks, selected tests, security scans and regression obligations inside the disposable environment. Use fixed command templates or allowlisted tools rather than arbitrary host shell access.

**Step 7 — Repair (bounded).** When checks fail, provide the model only the relevant failure output and allow a small configured number of repair attempts. Every new patch is a new attempt, not an in-place undocumented overwrite.

**Step 8 — Checkpoint.** Save patch, changed-file list, test results, unresolved obligations, task status, model/tool metadata, logs and resulting workspace commit/tree hash.

**Step 9 — Review.** Display diff, tests, warnings, limitations and the exact remote action requested. Require user approval before branch/PR write operations.

### 6.3 Tool interface allowlist

Initial agent tools should be narrow and typed:

- `list_repository_files(path_prefix, glob)`
- `read_file(path, start_line, end_line)`
- `search_text(query, path_scope)`
- `find_symbol(symbol_name, kind)`
- `get_import_dependents(module_path)`
- `list_candidate_tests(changed_paths, symbols)`
- `read_test(path, test_name)`
- `get_git_status()`
- `get_diff(base_ref, working_ref)`
- `apply_patch(unified_diff)`
- `run_check(check_id)` — check IDs map to server-defined commands
- `get_check_result(check_run_id)`

Do not expose unrestricted filesystem access, arbitrary network calls, the host shell, Docker socket or environment secrets to the model.

### 6.4 Persistent memory design

Do not rely on a long prompt transcript as the only memory. Persist structured facts:

- chain objective and task list;
- dependency edges and their provenance;
- approved plan and acceptance criteria;
- repository snapshot and commit SHA;
- decisions and rejected approaches with short reasons;
- files/symbols changed by each patch;
- tests that established earlier obligations;
- test outcomes and known flaky tests;
- unresolved questions, warnings and external changes;
- current task/checkpoint and remaining budgets.

Generate a compact successor-task context from these records. Include references to exact evidence rather than copying the entire prior transcript.

---

## 7. Data model

Use PostgreSQL with SQLAlchemy models and Alembic migrations. Start with these entities; keep fields minimal and add only when a workflow needs them.

| Table | Important fields | Purpose |
|---|---|---|
| `repositories` | `id`, `provider`, `owner`, `name`, `clone_url`, `default_branch`, `created_at` | A repository connected to RepoContinuum |
| `repo_snapshots` | `id`, `repository_id`, `commit_sha`, `ref_name`, `indexed_at`, `index_version`, `status` | Immutable view of a repository at a commit |
| `repo_files` | `id`, `snapshot_id`, `path`, `language`, `size_bytes`, `content_hash`, `is_test`, `is_generated` | Indexed files |
| `repo_symbols` | `id`, `file_id`, `qualified_name`, `kind`, `start_line`, `end_line`, `docstring` | Parsed classes/functions/methods |
| `dependency_edges` | `id`, `snapshot_id`, `source_type`, `source_id`, `target_type`, `target_id`, `edge_type`, `provenance`, `confidence` | Repository and task graph edges |
| `issue_chains` | `id`, `repository_id`, `base_snapshot_id`, `title`, `status`, `created_at`, `created_by` | A sequence/graph of related work |
| `tasks` | `id`, `chain_id`, `external_issue_id`, `title`, `description`, `acceptance_json`, `status`, `sequence_index` | One maintenance task |
| `task_dependencies` | `task_id`, `depends_on_task_id`, `provenance`, `approved_by_user` | Directed task prerequisites |
| `agent_runs` | `id`, `task_id`, `attempt_no`, `provider`, `model_id`, `prompt_version`, `status`, `started_at`, `ended_at`, `cost_metadata` | A reproducible agent execution |
| `patches` | `id`, `agent_run_id`, `base_commit_sha`, `patch_text`, `patch_hash`, `changed_paths`, `status` | Generated code change |
| `verification_runs` | `id`, `patch_id`, `environment_digest`, `status`, `started_at`, `ended_at` | A grouped verification execution |
| `check_results` | `id`, `verification_run_id`, `check_name`, `command_id`, `exit_code`, `duration_ms`, `stdout_ref`, `stderr_ref`, `status` | Individual lint/test/security result |
| `obligations` | `id`, `chain_id`, `origin_task_id`, `description`, `test_refs`, `status`, `last_verified_at` | Acceptance criteria and regression obligations retained over a chain |
| `approvals` | `id`, `patch_id`, `actor`, `decision`, `decision_reason`, `created_at` | User decisions on patch/PR actions |
| `audit_events` | `id`, `chain_id`, `actor_type`, `actor_id`, `event_type`, `payload_json`, `created_at` | Chronological audit history |

Implementation notes:

- Use UUID primary keys for internal objects; keep external GitHub IDs as separate fields.
- Add unique constraints for repository snapshot `(repository_id, commit_sha)`, task sequence where applicable, and webhook delivery identifiers.
- Use foreign keys and indexes on chain/task/run relationships.
- Store large logs and artifacts outside the relational DB when size warrants it; store an object reference and content hash in PostgreSQL.
- Never store plaintext GitHub private keys, webhook secrets or long-lived API tokens in these tables.

---

## 8. API and CLI contract

### 8.1 Initial API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/v1/repositories/import` | Import a local path or public Git URL |
| `GET` | `/api/v1/repositories` | List imported repositories |
| `GET` | `/api/v1/repositories/{repo_id}` | Repository metadata and indexed commit |
| `POST` | `/api/v1/repositories/{repo_id}/index` | Start/rebuild repository index |
| `GET` | `/api/v1/repositories/{repo_id}/index` | Inspect index summary/warnings |
| `POST` | `/api/v1/chains` | Create a task chain |
| `GET` | `/api/v1/chains/{chain_id}` | Get chain and task state |
| `POST` | `/api/v1/chains/{chain_id}/plan` | Generate dependency-aware plan |
| `POST` | `/api/v1/chains/{chain_id}/approve-plan` | Approve plan and start execution |
| `POST` | `/api/v1/tasks/{task_id}/run` | Execute one task attempt |
| `GET` | `/api/v1/runs/{run_id}` | Inspect agent run and stage state |
| `GET` | `/api/v1/patches/{patch_id}` | Get patch metadata and diff |
| `GET` | `/api/v1/verification/{verification_id}` | Get tests/checks and logs |
| `POST` | `/api/v1/patches/{patch_id}/approve` | Approve an exact patch for next action |
| `POST` | `/api/v1/patches/{patch_id}/reject` | Reject patch and record reason |
| `GET` | `/api/v1/chains/{chain_id}/report` | Export chain report |

Use Pydantic request/response models; return `202 Accepted` for queued work and include a run/job identifier. API handlers should enqueue long-running work and return quickly.

### 8.2 Example task-chain request

```json
{
  "repository_id": "repo_uuid",
  "title": "Authentication and session maintenance",
  "base_commit_sha": "<exact_commit_sha>",
  "tasks": [
    {
      "external_issue_id": null,
      "title": "Fix refresh-token validation",
      "description": "Reject expired refresh tokens before issuing a new access token.",
      "acceptance_criteria": [
        "Expired refresh tokens are rejected",
        "Valid refresh tokens continue to work",
        "No access token is issued for an expired refresh token"
      ],
      "depends_on": []
    },
    {
      "external_issue_id": null,
      "title": "Update session renewal flow",
      "description": "Use the corrected validation result when renewing a session.",
      "acceptance_criteria": [
        "Session renewal uses the validated token state",
        "Existing successful renewal behaviour is preserved"
      ],
      "depends_on": ["task_1"]
    },
    {
      "external_issue_id": null,
      "title": "Add refresh and expiry regression coverage",
      "description": "Add tests covering valid, expired and malformed refresh tokens.",
      "acceptance_criteria": [
        "Valid, expired and malformed token cases are covered",
        "Earlier authentication tests remain passing"
      ],
      "depends_on": ["task_1", "task_2"]
    }
  ]
}
```

This is an illustrative payload; task IDs and commit hashes must be supplied/resolved by the actual application.

### 8.3 CLI first

Suggested commands:

```bash
repocontinuum repo add ../sample-python-service
repocontinuum repo index <repository-id>
repocontinuum chain create --file examples/auth-maintenance-chain.yaml
repocontinuum chain plan <chain-id>
repocontinuum chain run <chain-id> --task task-1
repocontinuum chain report <chain-id> --format markdown
```

The CLI is useful before the UI exists and gives benchmark scripts a stable interface.

---

## 9. Verification and test-selection design

### 9.1 Verification stages

1. Patch parses and applies to the declared base.
2. Changed paths are within configured scope.
3. Formatting/lint checks run.
4. Type checks run where configured.
5. Unit tests related to changed files/symbols run.
6. Regression obligations from prior tasks run.
7. Full test suite runs before final PR publication when runtime is practical; otherwise the report must explicitly disclose that it was not run and why.
8. Security checks run (for example Semgrep rules and dependency checks).
9. Test environment and command outcomes are saved.

### 9.2 Test-selection algorithm — first version

- Identify changed files from the patch.
- Map changed files to parsed modules and changed symbols.
- Follow reverse-import relationships to candidate dependents.
- Associate test modules with source modules using imports, references, test naming and explicit fixture metadata.
- Include existing regression-obligation tests from previous tasks.
- Use a conservative fallback: include all tests under affected packages when graph confidence is low.
- Record each test's selection reason and whether it was included by graph, naming convention, obligation or fallback.
- Run the full suite as a final gate for small controlled repositories.

Do not claim test-selection recall until the benchmark includes a labelled expected-impact set. The test selection is an optimisation; correctness takes priority over reducing test count.

### 9.3 Evidence report format

Every task report should contain:

- task statement and acceptance criteria;
- repository/ref/base commit;
- plan and assumptions;
- changed files and symbol summary;
- unified diff;
- commands/checks executed;
- pass/fail/skip/not-run status;
- test selection rationale;
- earlier obligations rechecked;
- static/security findings;
- execution duration and model/tool usage;
- known limitations and unresolved questions;
- human approval decision and timestamp.

A passing test suite is not proof that code is secure or that all acceptance criteria are met. The report must keep functional, static-analysis and security results separate.

---

## 10. Benchmark and experimental protocol

### 10.1 Benchmark objective

Measure whether dependency-aware repository context and persistent state help an agent complete sequential maintenance tasks while avoiding regressions.

### 10.2 Benchmark corpus

Start with 3–5 controlled Python fixture repositories and 10 manually authored chains, each 2–4 tasks. Each chain should include:

- a baseline commit;
- the issue/task sequence;
- explicit prerequisites;
- acceptance criteria;
- expected changed areas;
- known regression tests;
- reproducible setup instructions;
- a reference solution or test oracle where feasible;
- a licence/source record for any imported code.

Expand to 20–30 chains after the harness works. Include linear and branched dependency shapes, task ambiguity, a task that changes an API contract, a task that adds tests, and a later task that could accidentally regress an earlier fix.

For external tasks, evaluate dataset licensing and setup requirements. The ChainSWE dataset is an appropriate later research reference; record its exact dataset revision, split, repository base commits, container image and evaluation harness version.

### 10.3 Baselines / ablations

| Variant | Repository index | Dependency-aware plan | Persistent chain state | Regression obligations |
|---|---:|---:|---:|---:|
| A — isolated issue baseline | No (basic file search only) | No | No | No |
| B — repository-aware | Yes | Yes | Limited | Targeted tests only |
| C — RepoContinuum | Yes | Yes | Yes | Yes |

Use the same underlying model/provider, model settings, attempt limit, tool availability (except the intended ablation), task order and verification harness for each variant. Repeat runs where model stochasticity materially affects results. Record unsuccessful runs rather than silently rerunning until a success appears.

### 10.4 Metrics and definitions

In addition to task-level outcomes, measure whether accepted earlier behaviour survives later changes. The 2026 long-horizon SWE survey proposes separating **retained functionality** from **conformance to active requirements**. RepoContinuum should adopt that distinction in its chain report:

- **Retained functionality at checkpoint t:** share of earlier obligations that are still active under the current specification, have an eligible check, and whose checks all pass at checkpoint t.
- **Conformance to active requirements at checkpoint t:** share of all requirements marked active at t (including requirements the agent previously failed) whose checks pass at t.

This prevents a chain from looking successful merely because its last issue passed while earlier accepted behaviour has regressed. Each benchmark chain therefore needs an explicit obligation ledger with status (`active`, `superseded`, `withdrawn`) and a test/oracle for each measurable obligation. An obligation must not disappear simply because the agent failed it; only a documented change to the specification may supersede or withdraw it.

| Metric | Definition |
|---|---|
| Chain completion rate | Number of chains in which every task reaches its declared acceptance/test gate divided by total attempted chains |
| Per-task success rate | Tasks that satisfy the declared oracle/acceptance gate divided by attempted tasks |
| Regression rate | Previously passing obligations that fail after a later task divided by previously passing obligations rechecked |
| Regression-free chain rate | Completed chains with no earlier obligation broken by a later task |
| Test-selection recall | Known impacted tests selected by the algorithm divided by all labelled impacted tests |
| Test-selection precision | Selected tests that are labelled impacted divided by all selected tests |
| Patch acceptance rate | Patches accepted by a reviewer divided by patches submitted for review |
| Repair attempts | Number of patch revisions required before success/final failure |
| Median and p95 latency | Wall-clock time from task start to verified result |
| Cost per successful task | Model/API/tool cost attributed to successful tasks; report provider pricing assumptions and date |
| Failure recovery | Whether a worker restart can resume from the last complete checkpoint without corrupting state |

Do not combine these into one opaque score. Report counts and denominators alongside percentages.

### 10.5 Evaluation integrity

- Maintain an obligation ledger with stable IDs, source task, acceptance text, test/oracle, status and status-change rationale. Report retained functionality and conformance to active requirements at every checkpoint where they can be computed.
- Freeze task definitions and test oracles before comparing variants.
- Keep evaluation tasks separate from prompts/examples used to develop the agent when feasible.
- Do not expose hidden expected patches or tests to the model.
- Record model name/version, temperature/settings if available, prompt version and all repair attempts.
- Report missing data and failed setup runs.
- Include at least a few negative cases where the correct behaviour is to ask for clarification or refuse an unsafe patch.
- Do not claim an improvement is statistically meaningful from a very small sample.

---

## 11. Security and threat model

Security is a first-class requirement because RepoContinuum reads untrusted repository content and executes code produced by either an agent or a developer.

### 11.1 Assets to protect

- GitHub installation tokens and private keys.
- Webhook secrets.
- LLM provider API keys.
- User source code and repository metadata.
- Cross-repository/tenant isolation.
- Main branch and protected branches.
- Audit history and task/approval decisions.
- Host filesystem, network and container runtime.

### 11.2 Main threats and controls

| Threat | Required controls |
|---|---|
| Prompt injection in issue/README/source/test output | Treat repository and issue text as untrusted data, not system instructions; delimit source content; tools remain allowlisted; no privilege escalation through text |
| Malicious build/test scripts | Execute only in a disposable isolated environment; no host credentials, no privileged container, no Docker socket; enforce CPU/memory/PID/time limits |
| Secret exfiltration | Never place API/GitHub secrets in model context or test environment; redact logs; avoid ambient environment inheritance |
| Unsafe path patching | Reject traversal paths and writes outside repository workspace; protect `.git`, credential/config files and sensitive workflow paths by policy |
| Malicious or replayed webhook | HMAC-SHA256 validation over raw request bytes; constant-time comparison; deduplicate `X-GitHub-Delivery` values |
| Overprivileged GitHub App | Request minimum repository permissions; begin read-only; add contents/PR/checks write only when publishing/checks are implemented |
| Unauthorized PR/merge | Human confirmation bound to exact patch hash and target branch; no auto-merge in project scope |
| Dependency supply-chain attack | Pin dependencies and container images; use lockfiles; scan dependencies; avoid installing arbitrary packages from task-generated commands |
| Cross-tenant data exposure | Scope all repository/task queries to the authenticated user/installation; test authorization at API and worker layers |
| Denial of service / runaway agent | Per-task timeouts, bounded attempts, task quotas, memory/CPU/PID controls and cancellation |

### 11.3 Sandbox posture

For the learning MVP, run controlled repositories in disposable Linux containers through Docker Desktop/WSL2. Harden each container with a non-root user, read-only base filesystem where practical, dropped capabilities, `no-new-privileges`, seccomp, CPU/memory/PID limits, a temporary workspace and no Docker socket. Avoid host-home mounts. Disable network access during test execution unless a specific test requires a documented allowlist.

**Critical caveat:** a Docker container is not a perfect security boundary for arbitrary hostile code. Do not market a student MVP as safe for arbitrary public/private repositories. For a multi-tenant or public service that executes untrusted code, use a stronger isolated worker boundary such as disposable VMs/microVMs or a dedicated hardened execution service, and obtain a security review.

### 11.4 GitHub App security

When GitHub integration is introduced:

- Verify `X-Hub-Signature-256` over the original raw body using HMAC-SHA256 and constant-time comparison.
- Use HTTPS and subscribe only to required events.
- Return a 2xx response quickly and enqueue long-running processing.
- Deduplicate deliveries using `X-GitHub-Delivery` (preserve identifiers for legitimate redelivery).
- Check the event type and action before processing.
- Generate installation access tokens on demand; they expire after one hour.
- Begin with metadata, contents and issue read permissions as necessary. Add pull request/contents write for PR publication and checks write only if Checks API reporting is implemented.
- Store private keys in a secrets manager/environment protected from the worker; never check them into Git.

---

## 12. Suggested project directory structure

```text
repocontinuum/
├── apps/
│   ├── api/
│   │   └── main.py
│   ├── worker/
│   │   └── main.py
│   └── cli/
│       └── main.py
├── packages/
│   └── core/
│       ├── domain/
│       │   ├── repositories.py
│       │   ├── chains.py
│       │   ├── tasks.py
│       │   ├── patches.py
│       │   └── obligations.py
│       ├── indexing/
│       │   ├── walker.py
│       │   ├── python_ast.py
│       │   ├── imports.py
│       │   ├── tests.py
│       │   └── graph.py
│       ├── planning/
│       │   ├── dependencies.py
│       │   ├── planner.py
│       │   └── schemas.py
│       ├── agent/
│       │   ├── workflow.py
│       │   ├── context_builder.py
│       │   ├── tools.py
│       │   ├── prompts.py
│       │   └── providers/
│       ├── patching/
│       │   ├── parser.py
│       │   ├── validator.py
│       │   └── applier.py
│       ├── execution/
│       │   ├── sandbox.py
│       │   ├── commands.py
│       │   └── resources.py
│       ├── verification/
│       │   ├── test_selector.py
│       │   ├── runner.py
│       │   ├── regression.py
│       │   └── reports.py
│       ├── persistence/
│       │   ├── models.py
│       │   ├── repositories.py
│       │   └── migrations/
│       ├── integrations/
│       │   └── github/
│       └── observability/
├── frontend/                 # Release 2
├── benchmarks/
│   ├── fixtures/
│   ├── chains/
│   ├── baselines/
│   ├── run_experiment.py
│   └── results/
├── examples/
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── security/
│   └── e2e/
├── infra/
│   ├── docker/
│   └── compose.yaml
├── docs/
│   ├── architecture.md
│   ├── security.md
│   ├── benchmark-protocol.md
│   └── adr/
├── pyproject.toml
├── uv.lock
├── .env.example
├── .gitignore
└── README.md
```

Keep this as a proposed structure, not a requirement to create empty modules up front. Add each module when its workflow is being implemented.

---

## 13. Implementation sequence and milestones

A practical plan for a focused first version is approximately 3–5 weeks of part-time work, depending on debugging and model-provider access. The research benchmark, dashboard and GitHub App are later milestones. Do not try to complete every release in a 3–4 day sprint.

### Milestone 1 — repository intelligence foundation

**Build:** project scaffold, settings, logging, database connection, repository import, ignore rules, Python AST indexer, import graph and test discovery.

**Tests:** parser fixtures for functions/classes/imports; malformed Python files; symlinks/path traversal; ignored folders; large files; deterministic index snapshot.

**Deliverable:** CLI command that indexes a repository and exports a readable index report.

### Milestone 2 — task chains and obligation ledger

**Build:** chain/task schemas, explicit dependencies, DAG validation, topological ordering, acceptance criteria, task status state machine and prior-task obligation storage.

**Tests:** cycles rejected; missing dependencies rejected; stable ordering; task completion cannot bypass required approval; persisted state reloads after process restart.

**Deliverable:** a chain can be created, planned and resumed without an LLM.

### Milestone 3 — patch and verification loop

**Build:** patch schema/unified-diff parser, patch application in a copy/worktree, allowed-path checks, disposable test runner, fixed check catalogue and verification report.

**Tests:** patch applies to declared commit only; invalid paths rejected; test timeout enforced; process crash captured; logs redacted; sandbox cannot see host secrets.

**Deliverable:** a deterministic sample chain can propose a stored patch and run checks in an isolated environment.

### Milestone 4 — LLM provider and bounded agent

**Build:** provider interface, structured planner/patch output, context builder, typed tools, max attempt/time/token/cost budgets, bounded repair and checkpointing.

**Tests:** fake provider for deterministic tests; invalid JSON/schema; refusal/ambiguity; timeout/rate-limit; malformed patch; prompt-injection fixture; no tool-call escalation.

**Deliverable:** model-assisted patching with deterministic checks as the authority.

### Milestone 5 — dashboard and GitHub integration

**Build:** repository/chain/task views, dependency graph, run timeline, diff view, verification cards, GitHub App read flow and webhook processing.

**Tests:** webhook signature, replay/idempotency, permission denial, installation token expiry/refresh, repository scoping, async queue retry.

**Deliverable:** a test GitHub repository can be read and issues imported safely.

### Milestone 6 — PR publication and benchmark

**Build:** explicit patch approval, branch/PR publication, evidence summary, benchmark fixtures/chains, baseline runner and result report.

**Tests:** approval binds to patch hash/base ref; stale patch rejected; no write on reject; PR body matches executed checks; benchmark result reproducibility.

**Deliverable:** end-to-end public demo and measured experiment.

---

## 14. Definition of done / release gates

### Release 0 — core engineering gate

- A new user can follow README setup on a clean machine.
- A sample Python repository can be indexed reproducibly.
- A two- or three-task chain can be created and validated.
- The planner presents dependencies and assumptions.
- A patch is attached to an exact base commit and is reviewable.
- Test execution is isolated from the API process and bounded by resource/time limits.
- Earlier test obligations are stored and can be re-run after a later task.
- Every task has a report with pass/fail/skip/not-run status.
- Worker restart does not erase the last completed checkpoint.
- Unit and integration tests pass in CI.

### Release 1 — agent gate

- A provider can be swapped without changing domain logic.
- LLM outputs are schema-validated and untrusted tool data is handled as data.
- Repair attempts are bounded and logged.
- There is a deterministic fake provider for tests.
- Model/task costs and latency are recorded when provider data supports it.

### Release 2/3 — integration and publication gate

- Webhook HMAC signature is verified before any payload processing.
- Delivery IDs are deduplicated.
- GitHub App requests only required permissions.
- Tokens and private keys do not enter prompts, logs or sandbox environments.
- PR creation requires explicit approval for an exact patch hash and base branch.
- No auto-merge is enabled.

### Portfolio presentation gate

- README includes architecture diagram, install/setup, environment example, screenshots/GIF, test instructions, limitations and security model.
- Include benchmark protocol and raw/aggregated results with a clear dataset/task manifest.
- Provide one short demo showing issue chain, dependency plan, patch, checks and reviewer gate.
- Document major choices with concise ADRs.
- Avoid unsupported claims such as “fully autonomous”, “production-grade security” or “beats state-of-the-art agents”.

---

## 15. Risks and mitigations

| Risk | Why it matters | Mitigation |
|---|---|---|
| Scope grows into an IDE/agent platform | Delays a complete vertical slice | Keep Release 0 CLI-first and Python-only |
| Dependency graph is inaccurate | Can mislead patch/test selection | Record provenance/confidence; conservative fallback; human override |
| LLM is nondeterministic | Hard to debug and compare | Fake provider tests; store prompts/model settings; fixed benchmark protocol |
| Full test suites are expensive | Could slow each task | Targeted checks for feedback, full suite before publication where feasible |
| Test mapping is weak | Test recall claims become meaningless | Label expected impacted tests in benchmark fixtures |
| Arbitrary code execution is dangerous | Repositories can contain hostile scripts | Isolated ephemeral environment, no secrets, strict resource/network controls; stronger VM isolation for public service |
| GitHub integration consumes time | OAuth/webhooks distract from core product | Build local-first core before App integration |
| Many agents add little value | Multi-agent orchestration adds cost and failure modes | Use one planner/executor workflow and deterministic tools first |
| Benchmark too small | Results may be noisy and overfit | Publish sample size and limits; expand chains and repeats gradually |
| Generated code touches sensitive files | Could compromise CI or credentials | Protected path policy, diff review and explicit human approval |

---

## 16. Interview and resume positioning

### 16.1 One-line project description

**RepoContinuum — a repository-aware software maintenance agent that plans dependent issues, preserves task state, generates reviewable patches and verifies changes with isolated tests and regression tracking.**

### 16.2 30-second explanation

“I built RepoContinuum to address a limitation in isolated AI coding workflows: real software maintenance happens across dependent issues, and later changes can break earlier fixes. RepoContinuum indexes repository structure, models issue dependencies, stores task checkpoints and acceptance obligations, then proposes bounded patches and validates them in an isolated environment. It produces a reviewable evidence report before a developer approves any GitHub write action. I’m evaluating it against simpler issue-by-issue and repository-aware baselines using sequential maintenance chains.”

### 16.3 Resume bullets — use only after implementation and measurement

- Designed and implemented a Python/FastAPI repository-maintenance agent with AST-based symbol indexing, dependency-aware task planning and persistent task-chain state.
- Built an isolated patch-verification workflow that executes targeted tests and regression obligations, storing diffs, execution logs and reproducibility metadata for human review.
- Evaluated **[N]** sequential maintenance chains across **[M]** repositories, measuring chain completion, regression rate, test-selection recall, latency and cost against **[baseline descriptions]**.

Replace all bracketed values with measured results; do not include these bullets as completed achievements before the relevant milestone is finished.

### 16.4 Role relevance

- **SWE / Backend:** API design, SQL data modelling, state machines, queues, Git integration, filesystem safety, testing, concurrency and observability.
- **Agentic AI:** structured planning, tool-use boundaries, checkpointed execution, provider adapters, bounded repair and evaluation.
- **Developer tools / Platform:** repository parsing, CI checks, sandbox execution, GitHub App integration and evidence reports.
- **Security-aware engineering:** least privilege, webhook validation, prompt-injection defence, secret isolation and safe execution constraints.

Do not present the project as a substitute for DSA, DBMS, OS, networking or system-design interview preparation.

---

## 17. Decisions to lock before implementation

These are the default decisions unless an actual technical constraint appears:

1. **Language scope:** Python first; JavaScript/TypeScript and Java after the first release.
2. **Execution mode:** local-first controlled repositories; no arbitrary public multi-tenant execution in the MVP.
3. **Architecture:** modular monolith + separate worker; FastAPI, PostgreSQL, Redis/RQ.
4. **Indexing:** Python `ast` first; Tree-sitter expansion later.
5. **Graph:** NetworkX first; no graph database in the MVP.
6. **Agent design:** one bounded workflow/state machine; deterministic tools and a provider adapter.
7. **Verification:** targeted tests for feedback plus full suite before publication when feasible; earlier obligations always retained.
8. **GitHub integration:** read-only before remote writes; user approval before branch/PR creation; no automatic merge.
9. **Benchmark:** 10 handcrafted chains first, expanding to 20–30 after harness validation; later consider a fixed ChainSWE subset.
10. **Project order:** make Release 0 work before building the dashboard or GitHub App.

---

## 18. Official technical references

### Research

- ABC-Bench, Findings of ACL 2026: https://aclanthology.org/2026.findings-acl.1142/
- ChainSWE, EMNLP 2026: https://aclanthology.org/2026.emnlp-main.371/
- ChainSWE dataset: https://huggingface.co/datasets/C-lister/ChainSWE
- SWE-bench Verified: https://www.swebench.com/verified
- Long-Horizon Software Engineering Agents survey: https://longhorizonswe.github.io/

### Repository parsing and API integration

- Tree-sitter documentation: https://tree-sitter.github.io/tree-sitter/
- Python Tree-sitter bindings: https://tree-sitter.github.io/py-tree-sitter/
- GitHub App authentication: https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app
- GitHub App installation authentication: https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation
- Choosing GitHub App permissions: https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app
- Validating webhook deliveries: https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries
- Webhook best practices: https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks
- GitHub Checks API: https://docs.github.com/en/rest/checks

### Execution security and quality

- Docker rootless mode: https://docs.docker.com/engine/security/rootless/
- Docker resource constraints: https://docs.docker.com/engine/containers/resource_constraints/
- Docker seccomp profiles: https://docs.docker.com/engine/security/seccomp/
- Semgrep CLI / repository: https://github.com/semgrep/semgrep
- OpenTelemetry Python instrumentation: https://opentelemetry.io/docs/languages/python/instrumentation/
- Pytest documentation: https://docs.pytest.org/

---

## 19. Research and implementation caveats

- Research citations above support the problem framing and design direction; they do not demonstrate that RepoContinuum has already solved the problem.
- Benchmark dataset counts may differ by paper version, release or split. Pin the exact artifact/revision used in any result.
- A task chain is only useful for measuring regressions when earlier obligations have a known test/oracle and are re-run after later tasks.
- A parser-derived dependency graph is an approximation, particularly in dynamic languages and reflection-heavy code.
- Docker restrictions improve containment but do not prove that arbitrary hostile code is safe to execute on a shared host.
- Any model/provider performance or cost figure must be dated and measured against the actual provider configuration.
- The project is proposed and not yet implemented. Only completed, tested features may be listed as accomplishments.

---

**Recommended next action:** create the Release 0 repository scaffold and the first deterministic Python fixture repository. Do not begin with a dashboard or GitHub App registration. The first success criterion is a reproducible local chain in which a later patch is checked against tests and obligations established by an earlier task.