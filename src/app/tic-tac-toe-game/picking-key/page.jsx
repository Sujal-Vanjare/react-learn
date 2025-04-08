export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Picking a Key in React
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 mb-4">
            When you render a list in React, React needs a way to identify each
            item in the list. This is where the <code>key</code> prop comes in.
          </p>
          <p className="text-gray-700 mb-4">
            The <code>key</code> prop helps React determine what has changed in
            a list (added, removed, re-ordered, or updated) and ensures
            efficient updates to the DOM.
          </p>
        </section>

        {/* Why Keys Are Important */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Are Keys Important?
          </h2>
          <p className="text-gray-700 mb-4">
            Without keys, React might re-render the entire list even if only one
            item has changed. Keys help React identify which items have changed,
            been added, or been removed.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-800">
              <code>
                {`<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>`}
              </code>
            </pre>
            <p className="text-gray-700 mt-2">If this list updates to:</p>
            <pre className="text-sm text-gray-800">
              <code>
                {`<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>`}
              </code>
            </pre>
            <p className="text-gray-700 mt-2">
              React needs a way to know that <code>Alexa</code> and{" "}
              <code>Ben</code> were re-ordered and <code>Claudia</code> was
              added.
            </p>
          </div>
        </section>

        {/* How to Use Keys */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How to Use Keys
          </h2>
          <p className="text-gray-700 mb-4">
            Keys should be unique among siblings. They don’t need to be globally
            unique, but they must uniquely identify an item within its list.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-800">
              <code>
                {`const users = [
  { id: 1, name: 'Alexa', taskCount: 7 },
  { id: 2, name: 'Ben', taskCount: 5 },
  { id: 3, name: 'Claudia', taskCount: 8 },
];

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        {user.name}: {user.taskCount} tasks left
      </li>
    ))}
  </ul>
);`}
              </code>
            </pre>
            <p className="text-gray-700 mt-2">
              Here, <code>user.id</code> is used as the key because it uniquely
              identifies each user.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Common Mistakes
          </h2>
          <p className="text-gray-700 mb-4">
            Avoid using the <strong>array index</strong> as a key unless the
            list is static and will never change. Using the index can cause
            issues when re-ordering, adding, or removing items.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-800">
              <code>
                {`// ❌ Avoid this
{users.map((user, index) => (
  <li key={index}>
    {user.name}: {user.taskCount} tasks left
  </li>
))}`}
              </code>
            </pre>
            <p className="text-gray-700 mt-2">
              If the list changes, React might incorrectly associate the wrong
              state with the wrong item.
            </p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Takeaways
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Use a <code>key</code> prop to uniquely identify list items.
            </li>
            <li>
              Keys should be unique among siblings but don’t need to be globally
              unique.
            </li>
            <li>
              Avoid using the array index as a key unless the list is static.
            </li>
            <li>Keys help React efficiently update and re-render lists.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
