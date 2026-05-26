# todo-app

A classic todo list: add items and toggle their done state.

## The task

- An input + "Add" button appends a new todo (empty input is ignored).
- Each todo renders with a checkbox; toggling it flips the `done` flag.
- Completed items get a `done` class for styling (e.g. strike-through).

## How it works

- `todos` and the input `text` are held in state.
- Adding builds a new todo `{ id, text, done: false }` immutably with the spread
  operator; toggling maps over the list and flips `done` for the matching `id`.
- A `useEffect` logs the list on every change (debugging aid).

Demonstrates: controlled inputs, immutable array updates (add / map-to-update),
and conditional `className`.

## Run

```bash
npm install
npm run dev
```
