// TypeScript Code
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0); // Type-safe state

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function App() {
  return <Counter />;
}
