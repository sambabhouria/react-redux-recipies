###### Getting Started with Redux

Redux is a predictable state container for JavaScript apps.

- [Installation] : npm install --save redux or yarn add redux

###### Three Principles

- **Single source of truth** — Store store whole app data
- **State is read-only** — Only way to change the state is to emit an action,
- **Changes are made with pure functions** — The reducers.
  Reducers are just pure functions that take the previous state and an action, and return the next state.

###### General info

- **Presentational** — How things look (markup, styles), Read data from props,To change data Invoke callbacks from props
- **Container Component** — How things work (data fetching, state updates),Subscribe to Redux state, Subscribe to Redux state
