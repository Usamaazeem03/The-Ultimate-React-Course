Workout Timer — useEffect Performance Challenge

**Overview**
This is a small workout timer app that calculates total workout duration based on workout type, sets, speed, and break length. It also shows a live clock and optionally plays a click sound when duration changes.

**Goal**
This README is a guided challenge to deepen understanding of `useEffect` rules, closures inside effects, and performance optimization. No code changes are included here.

**Key Files**
- `src/App.js`
- `src/Calculator.js`
- `src/ToggleSounds.js`
- `src/index.css`

**Challenge Tasks**
1. Map each `useEffect`: what external system does it sync with, and why does it need to be an effect?
2. Identify any derived state that can be computed during render and refactor to avoid effect-driven state updates.
3. Audit dependency arrays: add missing dependencies, remove unnecessary ones, and do not disable the lint rule.
4. Fix stale-closure risks for long-lived callbacks (intervals, timeouts, event handlers).
5. Stabilize props passed to memoized components to reduce needless re-renders.
6. Ensure sound playback runs only when truly needed and avoid recreating heavy objects.
7. Verify cleanup behavior on unmount and when toggling sound on and off.
8. Measure renders with temporary logs or counters, then remove them.
9. Write a short summary of tradeoffs and results after each change.

**useEffect Rules**
- Use `useEffect` only for syncing with external systems like timers, subscriptions, the DOM, or media.
- Avoid effects for derived state; compute it during render or with memoization.
- Keep dependency arrays complete and accurate; include everything used from render scope.
- Prefer functional state updates to avoid stale values.
- Always return cleanup functions for subscriptions or timers.

**Closures In Effects**
- Effects capture values from the render in which they were created.
- Long-lived callbacks can read stale state if they are not updated.
- Use refs for mutable values that should not trigger renders.
- Prefer functional updates or dedicated hooks to keep callbacks fresh.

**Performance Notes**
- Memoize expensive arrays and objects.
- Memoize components and keep their props stable.
- Avoid recreating functions or objects in render when passing them to memoized children.
- Keep state minimal and prefer derived values over duplicated state.
- Consider splitting components to isolate re-render boundaries.

**Run**
1. `npm start` runs the app in development.
2. `npm test` launches the test runner in watch mode.
3. `npm run build` creates a production build.

**Self-Check**
- Which effects truly sync with external systems?
- What breaks if an effect is removed or dependencies change?
- Where could a ref replace state to avoid re-renders?
- Are any dependencies changing on every render, and why?
- Did any optimization change the user-visible behavior?
