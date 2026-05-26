# counter-hover

A counter (`Счетчик`) that increments once per second. On hover it **freezes**
the displayed value, keeps counting silently in the background, and resumes from
the caught-up value when the pointer leaves.

## The task

- Tick a counter every second via `setInterval`.
- While the heading is hovered, the on-screen number must stop updating.
- The count must not actually pause — when hover ends, the value jumps to where
  it would have been had it never stopped.

## How it works

- `counter` is the rendered value (React state); `counterRef` accumulates ticks
  during hover without triggering re-renders.
- On `mouseover`, the current value is copied into `counterRef` and `hovered` is
  set; the interval then mutates the ref instead of state.
- On `mouseout`, `counterRef` is flushed back into state and ticking resumes.
- Hover is wired with native `addEventListener` on a `ref` (not React's
  `onMouseEnter`) to practice imperative listener attach/cleanup in `useEffect`.

Demonstrates: `useRef` for mutable values that shouldn't cause renders, interval
lifecycle in `useEffect`, and manual DOM event listener cleanup.

## Run

```bash
npm install
npm run dev
```
