import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect to simulate componentDidMount
  useEffect(() => {
    console.log("Component mounted");
    // Cleanup function to simulate componentWillUnmount
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // useEffect to log state changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Counter;
