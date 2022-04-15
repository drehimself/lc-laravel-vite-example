import React, { useState } from 'react';

export default function ExampleReact({ name }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <div>Example React Component</div>
      <div>Hello, {name}</div>
      <div>
        Count: {count}
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}
