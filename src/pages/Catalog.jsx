import { useState, useMemo } from 'react';
import ProductList from '../components/ProductList';
import SizeFilter from '../components/SizeFilter';
import Benefits from '../components/Benefits';
import Subscribe from '../components/Subscribe';
import products from '../data/products';

function Catalog() {
  const [size, setSize] = useState(null);

  const filtered = useMemo(() => {
    if (!size) return products;
    return products.filter((p) => p.sizes.includes(size));
  }, [size]);

  return (
    <>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <h1>New Arrivals</h1>
          <p className="breadcrumb">
            Home / Men / <span>New Arrivals</span>
          </p>
        </div>
      </div>

      <div className="container catalog-section">
        <div className="catalog-toolbar">
          <div className="filter-label">
            Filter <span>☰</span>
          </div>
          <div className="toolbar-right">
            <SizeFilter selected={size} onChange={setSize} />
          </div>
        </div>

        <ProductList products={filtered} />
      </div>

      <Benefits />
      <Subscribe />
    </>
  );
}

export default Catalog;
