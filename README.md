# [Click me to check my work 🚀] (https://customer-support-zone-mdsifat-dev.netlify.app/)

### 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax that lets you write HTML-like code inside JavaScript for building React UIs.

_It gets compiled into React.createElement() calls._

Why is JSX used?

- Makes code cleaner and easier to read.
- Lets you mix HTML structure with JavaScript logic.
- Improves developer productivity.

👉 JSX = HTML + JavaScript power in one place.

### 2. What is the difference between State and Props?

- State: A component’s own data that it manages and can update over time. _State is internal & mutable → controlled by the component itself._
- Props: Data passed from parent to child component, which is read-only inside the child. _Props are external & immutable → controlled by the parent, not the child._

### 3. What is the useState hook, and how does it work?

**useState** is a React Hook that lets you add state to a functional component.

It gives you two things:

1. The current value of the state.
2. A function to update it.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial state = 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div> // count is the state, and setCount updates it.
  );
}

export default Counter;
```

### 4. How can you share state between components in React?

1. Lift state up → Put state in the parent, pass data & updater as props.

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
}
```

2. Context API → Share state globally without prop drilling.

```jsx
const Ctx = createContext();
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <Ctx.Provider value={{ count, setCount }}>
      <ChildA />
      <ChildB />
    </Ctx.Provider>
  );
}
```

_👉 Use lifting for small cases, context for many/deep components._

### 5. How is event handling done in React?

- React uses camelCase for event names (e.g. onClick, not onclick).
- You pass a function (not a string) as the handler.
- Handlers usually go inside components.

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
} // ✅ React events are synthetic (wrapped around browser events) for better performance and compatibility.
```
