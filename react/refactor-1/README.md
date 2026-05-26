# refactor-1

A **refactoring task**. The starting point is a buggy component (kept commented
out under `/// SOURCE` in `src/App.tsx`); the goal is to fix it and then improve
it. The original prompt (Russian) is preserved at the top of the file:

> Component renders list items and their squared value. The "Add" button should
> add a value to the array, the "Delete" button should remove it.
> **Task:** fix the functionality.
> **Bonus:** think about HTML semantics.
> **Bonus:** think about optimization.

## Bugs in the source

- `array` is a plain `let`, mutated with `push` / reassignment — React never
  re-renders, so changes don't show.
- Sort toggle has a typo (`"ask"`) that breaks the direction.
- `sum` is computed by a side effect inside `.map`.
- `<li>` elements are missing `key`s.

## The refactor (`/// REFACTOR-1`)

- The array lives in `useState` and is updated **immutably** for add/remove.
- `sum` is derived with `useMemo` over the numbers.
- Input is validated to accept numbers only.
- Sort direction is a typed `'asc' | 'desc'` union; list items get `key`s.

Demonstrates: turning mutable/non-reactive code into idiomatic React state,
derived values with `useMemo`, controlled+validated input, and typing with TS.

## Run

```bash
npm install
npm run dev
```
