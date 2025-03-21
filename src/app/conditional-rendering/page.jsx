import { fchown } from "fs";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

// -------------- //

function ShowContent() {
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return <div>{content}</div>;
}

function ShowContentSec() {
  return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
}

function ShowContentThree() {
  return <div>{isLoggedIn && <AdminPanel />}</div>;
}

function RenderingList() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  const listItems = products.map((product) => (
    // React uses your keys to know what happened if you later insert, delete, or reorder the items.
    <li key={product.id}>{product.title}</li>
  ));

  // basic for loop the loop builds up the string str by adding one digit at a time from 0 to 8 , ans is "012345678"
  let str = "";
  for (let i = 0; i < 9; i++) {
    str = str + i;
  }

  console.log(str);

  return <ul>{listItems}</ul>;
}
