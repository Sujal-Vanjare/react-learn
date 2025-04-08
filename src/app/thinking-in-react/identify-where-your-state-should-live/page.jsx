export default function Page() {
  return (
    <div>
      <h1>Where Should State Live?</h1>

      <h2>Why This Matters</h2>
      <p>
        React passes data <strong>one-way</strong> (from parent to child). So,
        we need to figure out which component should "own" each piece of state.
      </p>

      <h2>How to Decide State Ownership</h2>
      <ol>
        <li>Find all components that use the state.</li>
        <li>
          Find their <strong>closest common parent</strong>.
        </li>
        <li>
          Put the state:
          <ul>
            <li>➡️ In the common parent</li>
            <li>⬆️ Or higher up, if needed</li>
            <li>🆕 Or in a new component just for state</li>
          </ul>
        </li>
      </ol>

      <h2>Example: Product Filter App</h2>
      <p>We identified two pieces of state:</p>
      <ul>
        <li>
          🔤 <strong>Search text</strong>
        </li>
        <li>
          ☑️ <strong>Checkbox value (in-stock only)</strong>
        </li>
      </ul>

      <h3>Who Uses This State?</h3>
      <ul>
        <li>
          <strong>ProductTable</strong> → filters products
        </li>
        <li>
          <strong>SearchBar</strong> → shows input and checkbox
        </li>
      </ul>

      <h3>Where Should It Live?</h3>
      <p>
        ✅ Common parent is <strong>FilterableProductTable</strong>
      </p>
      <p>📦 So we keep the state there!</p>

      <h2>
        Using <code>useState()</code> in FilterableProductTable
      </h2>
      <pre>
        <code>
          {`function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('fruit');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div>
        <SearchBar 
          filterText={filterText}
          inStockOnly={inStockOnly} 
        />
        <ProductTable 
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} 
        />
      </div>
    );
  }`}
        </code>
      </pre>

      <p>🧠 Now both components stay in sync by using the same state!</p>

      <h2>
        Error from You provided a `value` prop to a form field without an
        `onChange` handler.
      </h2>
      <div>
        <p>
          The error occurs because the input field has a value prop (making it a
          controlled component), but it’s missing an onChange handler to update
          that value when the user types.
        </p>

        <p>✅ Controlled input needs both value and onChange</p>
        <p>❌ Without onChange, the field becomes read-only.</p>
      </div>
    </div>
  );
}
