// You can either build “top down”
// by starting with building the components higher up in the hierarchy (like FilterableProductTable) or
// “bottom up” by working from components lower down (like ProductRow). In simpler examples,
// it’s usually easier to go top-down, and
// on larger projects, it’s easier to go bottom-up.

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = []; // Initialize an empty array to store the rows
  let lastCategory = null; // Keep track of the previous product category

  // Iterate over each product in the products array
  products.forEach((product) => {
    // Check if the current product's category is different from the previous category
    if (product.category !== lastCategory) {
      // If the category is different, add a ProductCategoryRow for the new category
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} // Key is set to the category name for uniqueness
        />
      );
    }
    // Add the current ProductRow to the rows array
    rows.push(<ProductRow product={product} key={product.name} />);

    // Update the lastCategory to the current product's category for the next iteration
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
