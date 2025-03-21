"use client";
// Often, you’ll want your component to “remember” some information and display it.
// For example, maybe you want to count the number of times a button is clicked.
// To do this, add state to your component.

import { useState } from "react";

function Button() {
  // You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount).
  // You can give them any names, but the convention is to write [something, setSomething].

  //   The first time the button is displayed, count will be 0 because you passed 0 to useState().
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      className="cursor-pointer rounded-md p-2 bg-slate-400 text-white m-2"
      onClick={handleClick}
    >
      Clicked {count} times
    </button>
  );
}

// ---- //

// If you render the same component multiple times, each will get its own state.

// Notice how each button “remembers” its own count state and doesn’t affect other buttons.

export default function Page() {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}
