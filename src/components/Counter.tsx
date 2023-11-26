// TypeScript Code
import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0); // Type-safe state

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
