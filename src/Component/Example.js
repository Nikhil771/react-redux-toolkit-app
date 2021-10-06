import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (count >= 1) {
      // Update the document title using the browser API
      document.title = `chat(${count}) `;
    } else {
      document.title = `chat`;
    }
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1 className="rani">Rani is a good girl</h1>
    </div>
  );
}

export default Example
