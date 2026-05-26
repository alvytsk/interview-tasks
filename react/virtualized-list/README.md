# virtualized-list

A from-scratch **virtualized (windowed) list**: it renders a 10,000-item list
but only mounts the rows currently visible in the viewport.

## The task

Implement a `VirtualizedList` that scrolls smoothly through a very large list
without rendering every item. Props:

| Prop | Meaning |
| --- | --- |
| `items` | The full data array |
| `itemsHeight` | Fixed pixel height of each row |
| `height` | Visible viewport height (px) |
| `renderItem` | `(item, index) => ReactNode` |

## How it works

- A scrollable container of fixed `height` wraps a spacer `div` sized to the full
  list (`items.length * itemsHeight`) so the scrollbar reflects the real length.
- From `scrollTop`, it computes the first/last visible indices and slices out
  only those rows.
- The visible slice is pushed down with an `offsetY` (`startIndex * itemsHeight`)
  via absolute positioning, so the rows sit at their true scroll position.
- `scrollTop` is tracked in state, updated from a `scroll` listener attached in
  `useEffect` (memoised with `useCallback`).

`src/VirtualizedList.tsx` keeps an alternative, `buffer`-based approach commented
out for reference; the live implementation is in `src/App.tsx`.

Demonstrates: windowing math, scroll-driven rendering, and `ref` + event-listener
lifecycle.

## Run

```bash
npm install
npm run dev
```
