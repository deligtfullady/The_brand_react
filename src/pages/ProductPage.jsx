import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import products from '../data/products';

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === Number(id));
  const [size, setSize] = useState(product?.sizes[0] || 'S');

  if (!product) {
    return (
      <div className="container" style={{ padding: '80px 16px', textAlign: 'center' }}>
        <h1>Product not found</h1>
        <Link to="/catalog" className="btn-outline" style={{ marginTop: 24, display: 'inline-block' }}>
          Back to catalog
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size,
        color: product.color || 'Red',
      })
    );
  };

  return (
    <>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <h1>Product</h1>
          <p className="breadcrumb">
            Home / Catalog / <span>{product.title}</span>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="product-detail">
          <div className="product-detail-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-info">
            <h1>{product.title}</h1>
            <p className="product-detail-price">${product.price.toFixed(2)}</p>
            <p className="product-detail-desc">{product.description}</p>

            <div className="size-select">
              <label>Choose size</label>
              <div className="size-options">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`size-btn ${size === s ? 'active' : ''}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button type="button" className="btn-primary" onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
