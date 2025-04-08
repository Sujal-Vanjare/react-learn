export default function Page() {
  return (
    <div>
      <h1>When to Use State</h1>

      <h2>What is State?</h2>
      <p>
        State is the minimal set of data that changes over time in your app.
        Keep it DRY—don’t repeat yourself. Compute values from state when
        possible.
      </p>

      <h2>Example: Shopping List</h2>
      <ul>
        <li>✅ Store items in state as an array</li>
        <li>
          ❌ Don’t store the item count separately — use{" "}
          <code>array.length</code>
        </li>
      </ul>

      <h2>How to Identify State</h2>
      <p>Ask these questions:</p>
      <ul>
        <li>❌ Does it stay the same? → Not state</li>
        <li>❌ Is it passed from props? → Not state</li>
        <li>❌ Can it be computed from state/props? → Not state</li>
        <li>✅ Otherwise → It is state</li>
      </ul>

      <h2>Example Breakdown</h2>
      <ul>
        <li>
          Original product list → <strong>Not state</strong> (comes from props)
        </li>
        <li>
          Search text → <strong>State</strong> (user input)
        </li>
        <li>
          Checkbox value → <strong>State</strong> (user input)
        </li>
        <li>
          Filtered list → <strong>Not state</strong> (can be computed)
        </li>
      </ul>
    </div>
  );
}
