import React from "react";

// Main Page component
export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
        {/* Section 1: Introduction */}
        <section>
          <h1 className="text-4xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Using Hooks
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Functions starting with{" "}
            <code className="bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">
              use
            </code>{" "}
            are called Hooks. Hooks allow you to manage state, side effects, and
            other features in functional components.
          </p>
        </section>

        {/* Section 2: Rules for Using Hooks */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
            Rules for Using Hooks
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hooks are more restrictive than other functions. Specifically, you
            can only call Hooks at the top level of your component (or other
            Hooks).
            <br />
            <strong>Important:</strong> Do not call Hooks inside loops,
            conditions, or nested functions.
          </p>
        </section>

        {/* Section 3: Incorrect Usage Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
            Incorrect Usage Example
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            Here's an example of incorrect usage of{" "}
            <code className="bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">
              useState
            </code>{" "}
            inside a condition:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`function MyComponent(props) {\n  if (props.isConditionTrue) {\n    const [count, setCount] = useState(0);  // ❌ This is not allowed\n  }\n  return <div>Component</div>;\n}`}
            </code>
          </pre>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            In this case, React won’t be able to track the state properly
            because{" "}
            <code className="bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">
              useState
            </code>{" "}
            is called conditionally.
          </p>
        </section>

        {/* Section 4: Correct Usage Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
            Correct Usage Example
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            To fix this, we can extract the logic into a new component and
            always call{" "}
            <code className="bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">
              useState
            </code>{" "}
            at the top level.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`function ConditionalComponent() {\n  const [count, setCount] = useState(0);  // ✅ This is fine\n  return <div>{count}</div>;\n}\n\nfunction MyComponent(props) {\n  return props.isConditionTrue ? <ConditionalComponent /> : null;\n}`}
            </code>
          </pre>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            Now,{" "}
            <code className="bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">
              useState
            </code>{" "}
            is safely used in the{" "}
            <code className="bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">
              ConditionalComponent
            </code>
            , and the component is rendered conditionally.
          </p>
        </section>

        {/* Section 5: Why This Rule? */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
            Why This Rule?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            React relies on the order in which hooks are called during
            rendering. If hooks are called conditionally, the order might change
            between renders, and React will lose track of the state.
          </p>
        </section>

        {/* Section 6: Final Takeaways */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
            Final Takeaways
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300">
            <li>
              Always call hooks like{" "}
              <code className="bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">
                useState
              </code>{" "}
              directly at the top level of your components.
            </li>
            <li>
              Do not call hooks inside loops, conditions, or nested functions.
            </li>
            <li>
              If you need to use hooks conditionally, extract the logic into a
              separate component.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
