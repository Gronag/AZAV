import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Count up</button>
      <button onClick={() => setCount(count - 1)}>Count down</button>
      <button onKeyUp={() => setCount(count - 1)}>Count down</button>

    </div>
  );
}

export default Counter;
