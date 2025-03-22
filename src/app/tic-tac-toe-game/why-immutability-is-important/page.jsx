export default function Page() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">
        Why Immutability is Important
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Note how in <code className="font-mono text-blue-500">handleClick</code>
        , you call <code className="font-mono text-blue-500">.slice()</code> to
        create a copy of the squares array instead of modifying the existing
        array.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        To explain why, we need to discuss immutability and why it's important
        to learn. There are generally two approaches to changing data. The first
        approach is to mutate the data by directly changing the data’s values.
        The second approach is to replace the data with a new copy which has the
        desired changes.
      </p>

      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mb-6">
        <p className="text-lg mb-2">
          Here is what it would look like if you mutated the squares array:
        </p>
        <pre className="bg-gray-200 dark:bg-gray-800 text-sm p-4 rounded-lg overflow-x-auto">
          <code className="text-green-500">
            {`const squares = [null, null, null, null, null, null, null, null, null];\nsquares[0] = 'X';`}
          </code>
        </pre>
        <p className="mt-2">
          Now <code className="font-mono text-blue-500">squares</code> is{" "}
          <span className="text-green-500">
            ["X", null, null, null, null, null, null, null, null]
          </span>
          .
        </p>
      </div>

      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mb-6">
        <p className="text-lg mb-2">
          And here is what it would look like if you changed the data without
          mutating the squares array:
        </p>
        <pre className="bg-gray-200 dark:bg-gray-800 text-sm p-4 rounded-lg overflow-x-auto">
          <code className="text-green-500">
            {`const squares = [null, null, null, null, null, null, null, null, null];\nconst nextSquares = ['X', null, null, null, null, null, null, null, null];`}
          </code>
        </pre>
        <p className="mt-2">
          Now <code className="font-mono text-blue-500">squares</code> is
          unchanged, but{" "}
          <code className="font-mono text-blue-500">nextSquares</code>'s first
          element is 'X' rather than <span className="text-red-500">null</span>.
        </p>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        The result is the same, but by not mutating the underlying data
        directly, you gain several benefits. Immutability makes complex features
        much easier to implement. Later in this tutorial, you will implement a
        “time travel” feature that lets you review the game’s history and “jump
        back” to past moves. This functionality isn’t specific to games—an
        ability to undo and redo certain actions is a common requirement for
        apps.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Avoiding direct data mutation lets you keep previous versions of the
        data intact, and reuse them later. There is also another benefit of
        immutability. By default, all child components re-render automatically
        when the state of a parent component changes. This includes even the
        child components that weren’t affected by the change. Although
        re-rendering is not by itself noticeable to the user (you shouldn’t
        actively try to avoid it!), you might want to skip re-rendering a part
        of the tree that clearly wasn’t affected by it for performance reasons.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Immutability makes it very cheap for components to compare whether their
        data has changed or not. You can learn more about how React chooses when
        to re-render a component in the{" "}
        <a
          href="https://reactjs.org/docs/react-api.html#reactmemo"
          className="text-blue-500 hover:text-blue-700"
        >
          memo API reference
        </a>
        .
      </p>
    </div>
  );
}
