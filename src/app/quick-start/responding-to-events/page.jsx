"use client";

export default function Page() {
  function handleClick() {
    alert("You clicked me!");
  }

  // Notice how onClick={handleClick} has no () parentheses at the end!
  // only calls when event is happened
  return <button onClick={handleClick}>Click me</button>;
}
