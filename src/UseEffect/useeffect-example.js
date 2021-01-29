import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    //console.log("call Use effect");
    if (count >= 0) {
      document.title =`New Messages (${count})`;
    }
  },[count]);
  console.log("rendered Component");

  useEffect(() => {
    console.log("Second UseEffect");
  },[]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="text-gray-200 font-bold px-6 bg-blue-600 rounded-lg mx-auto" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;