const user = {
  name: "Heady Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

// JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

export default function Page() {
  return (
    <div className="p-8">
      {/* Curly braces let you “escape back” into JavaScript in JSX */}
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>

      {/* className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute: */}

      <img
        className="rounded-full"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />

      {/* style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. You can use the style attribute when your styles depend on JavaScript variables */}
    </div>
  );
}
