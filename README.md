# Interview Tasks

A personal practice workspace for technical-interview prep. Tasks are grouped by
stack, each one small and self-contained so it can be opened, run, and reasoned
about in isolation. Some task prompts are written in Russian (kept verbatim from
the original exercises); the solutions are language-agnostic.

## Layout

| Area | Stack | What's inside | How to run |
| --- | --- | --- | --- |
| [`algorithms/`](algorithms/) | Python 3.14 + pytest (via `uv`) | Algorithm problems, one solution + its tests per file | `uv run pytest` |
| [`js/`](js/) | Vanilla JavaScript (Node) | Core-JS exercises and polyfills | `node js/<task>/index.js` |
| [`react/`](react/) | React + Vite (JS & TS) | Standalone mini-apps, one Vite project each | `npm install && npm run dev` |

Each area is independent — there is no root build, no shared tooling, and no
cross-imports. Pick a folder and work inside it.

## algorithms/

Python solutions organized by topic. Each task is a single file holding both the
`solve`-style function and its `pytest` cases, so it's a movable, self-contained
unit. See [`algorithms/README.md`](algorithms/README.md) for the full setup,
running, and "add a task" guide.

```bash
cd algorithms
uv sync          # once: installs pytest into an isolated env
uv run pytest    # run every task
```

| Topic | Task | Problem |
| --- | --- | --- |
| `two-pointers` | `sorted-modules/task.py` | Absolute values of a sorted array, returned sorted, via two pointers |

## js/

Plain JavaScript exercises — no build step. Each file is runnable with Node and
typically ends with a few `console.log` smoke checks.

```bash
node js/debounce/index.js
```

**Exercises**

| Task | Topic |
| --- | --- |
| [`array-flat`](js/array-flat/index.js) | Flatten a deeply nested array (with depth) without `Array.flat` |
| [`csv-parse`](js/csv-parse/index.js) | Parse a CSV string into objects keyed by header |
| [`debounce`](js/debounce/index.js) | `debounce(fn, delay)` higher-order function |
| [`event-emitter`](js/event-emitter/index.js) | `PubSub` class: `subscribe` / `unsubscribe` / `emit` |
| [`get-tree-values`](js/get-tree-values/index.js) | Collect all `value`s from a nested tree |
| [`queue-2stacks`](js/queue-2stacks/index.js) | Implement a queue using two stacks |
| [`string-multiply`](js/string-multiply/index.js) | `String.prototype.multiply(n)` polyfill |
| [`common-js`](js/common-js/index.js) | Output-prediction quiz: types, coercion, event loop |

**Polyfills** ([`js/polyfills/`](js/polyfills/))

| Task | Reimplements |
| --- | --- |
| [`promise`](js/polyfills/promise/index.js) | A minimal `Promise` |
| [`promise-all`](js/polyfills/promise-all/index.js) | `Promise.all` |
| [`promise-allsettled`](js/polyfills/promise-allsettled/index.js) | `Promise.allSettled` |
| [`reduce`](js/polyfills/reduce/index.js) | `Array.prototype.reduce` (`myReduce`) |
| [`flat`](js/polyfills/flat/index.js) | `Array.prototype.flat` (`myFlat`) |

## react/

Each subfolder is a standalone Vite project with its own dependencies. Install
and run them individually:

```bash
cd react/<app>
npm install
npm run dev      # dev server with HMR
npm run build    # production build
```

| App | Lang | What it demonstrates |
| --- | --- | --- |
| [`counter-hover`](react/counter-hover/) | JS | A counter that ticks every second, pausing/forking its value on hover (`useRef` vs state) |
| [`messages-likes`](react/messages-likes/) | JS | Message list with per-message likes and a derived total |
| [`todo-app`](react/todo-app/) | JS | Classic add/toggle/remove todo list |
| [`refactor-1`](react/refactor-1/) | TS | Refactoring task: fix a buggy list (values + squares, add/delete, sort), then improve HTML semantics and rendering |
| [`virtualized-list`](react/virtualized-list/) | TS | Windowed list rendering only the visible rows |

Each app's own `README.md` describes its task, the bugs/requirements, and how the
solution works.

## Conventions

- **One task, one place.** A task lives in a single file or a single Vite
  project; nothing is shared across tasks, so each can be deleted or moved freely.
- **Tests-with-solution** in `algorithms/` — pytest is configured to collect from
  any `*.py` file (see `algorithms/pyproject.toml`), so the solution and its
  tests sit together.
- **Smoke checks** in `js/` — exercises print results rather than asserting; run
  the file to see output.
