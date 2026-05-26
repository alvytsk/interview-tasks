# Algorithms

Python solutions to algorithm tasks, organized by topic. Each task is a single
self-contained file holding both the solution and its tests.

## Setup (once)

```bash
uv sync          # installs pytest into an isolated project env
```

## Running

All commands run from this `algorithms/` directory:

```bash
uv run pytest                                       # every task in the repo
uv run pytest two-pointers                          # one topic folder
uv run pytest two-pointers/sorted-modules/task.py   # one task file
uv run pytest -k abs                                # tests matching a name
uv run pytest -q --tb=short                         # quiet + compact failures
```

Optional auto-rerun on save:

```bash
uv add --dev pytest-watcher
uv run ptw .
```

## Adding a task

Create a folder + `.py` file anywhere under `algorithms/`. No `__init__.py`,
no registration — pytest discovers it automatically. Follow this shape:

```python
"""Problem statement."""

import pytest


def solve(...):
    ...


# Single case:
def test_example():
    assert solve(...) == ...


# Many cases at once (preferred for algo tasks):
@pytest.mark.parametrize(
    "arg, expected",
    [
        (..., ...),
        (..., ...),
    ],
    ids=["case_a", "case_b"],  # readable names in output
)
def test_solve(arg, expected):
    assert solve(arg) == expected
```

See `two-pointers/sorted-modules/task.py` for a worked example.

## Why it's set up this way

Config lives in `pyproject.toml`:

- **`--import-mode=importlib`** — every task file can be named `task.py`
  without collisions, and no `__init__.py` files are needed in the folder tree.
- **`python_files = ["*.py"]`** — lets the solution and its tests live in the
  same file, so each task is one movable, self-contained unit.
- **`uv run`** — runs the project's pinned pytest in an isolated env; no global
  installs or venv activation.
