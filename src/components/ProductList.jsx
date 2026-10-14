import ProductCard from './ProductCard';

/** Список товаров — children/композиция ProductCard */
function ProductList({ products }) {
  if (!products.length) {
    return (
      <p style={{ textAlign: 'center', color: '#9f9f9f', padding: '48px 0' }}>
        No products found for this size. Try another filter.
      </p>
    );
  }

  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
