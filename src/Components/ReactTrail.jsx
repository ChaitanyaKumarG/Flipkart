import React, { useState } from 'react';

function Example() {

  const [count, setCount] = useState(0);  // Declare a state variable "count" with an initial value of 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Example