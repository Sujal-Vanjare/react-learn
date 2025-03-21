"use client";

import { useState } from "react";
// However, often you’ll need components to share data and always update together.

// To make both MyButton components display the same count and update together,

// you need to move the state from the individual buttons “upwards”
// to the closest component containing all of them.

export default function Page() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

// You can pass information to MyButton using the JSX curly braces, just like you previously did with built-in tags like <img>

// The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons

// This is called “lifting state up”. By moving state up, you’ve shared it between components.
function MyButton({ count, onClick }) {
  return (
    <button
      className="cursor-pointer rounded-md p-2 bg-pink-200 text-black mr-4 mt-4"
      onClick={onClick}
    >
      Clicked {count}
    </button>
  );
}
