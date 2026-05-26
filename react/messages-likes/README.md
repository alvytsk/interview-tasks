# messages-likes

A message list where each message can be liked. A header shows the running
**total** of likes across all messages.

## The task

- Type text and add it to a list of messages.
- Each message has its own "Like" button and like count.
- Display the sum of all likes at the top, kept in sync as likes change.
- Avoid re-rendering messages that didn't change when one message is liked.

## How it works

- `messages` is state; the total is derived inline with `reduce` on each render.
- `handleLike` is wrapped in `useCallback` so its identity is stable across
  renders.
- `MsgItem` is wrapped in `React.memo` with a **custom comparator** that re-renders
  an item only when its own `likes` value changes (`console.log('render', id)`
  makes the skipped renders visible in the console).

Demonstrates: derived state, `useCallback` for referential stability, and
`React.memo` with a custom `areEqual` function to control re-renders.

## Run

```bash
npm install
npm run dev
```
