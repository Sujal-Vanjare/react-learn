export default function Page() {
  return (
    <div>
      <h1>Inverse Data Flow in React</h1>

      <h2>Summary</h2>
      <p>
        React passes data <strong>down</strong> from parent to child via{" "}
        <code>props</code>. But to let a child <strong>update</strong> the
        parent’s state, we use <strong>functions passed down as props</strong>.
      </p>

      <h2>Problem</h2>
      <p>
        You made the input controlled by setting <code>value={filterText}</code>
        , but it doesn’t change when you type — because it needs an{" "}
        <code>onChange</code> handler.
      </p>

      <h2>Solution: Pass Down Setter Functions</h2>

      <h3>
        In Parent (<code>FilterableProductTable</code>):
      </h3>
      <pre>
        <code>
          {`<SearchBar
  filterText={filterText}
  inStockOnly={inStockOnly}
  onFilterTextChange={setFilterText}
  onInStockOnlyChange={setInStockOnly}
/>`}
        </code>
      </pre>

      <h3>
        In Child (<code>SearchBar</code>):
      </h3>
      <pre>
        <code>
          {`<input
  type="text"
  value={filterText}
  onChange={(e) => onFilterTextChange(e.target.value)}
/>

<input
  type="checkbox"
  checked={inStockOnly}
  onChange={(e) => onInStockOnlyChange(e.target.checked)}
/>`}
        </code>
      </pre>

      <p>
        ✅ Now the child updates the parent’s state — this is called{" "}
        <strong>inverse data flow</strong>.
      </p>
    </div>
  );
}
