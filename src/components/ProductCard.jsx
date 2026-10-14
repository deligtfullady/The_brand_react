import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

/** Карточка товара — отдельный React-компонент */
function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.sizes[0],
        color: product.color || 'Red',
      })
    );
  };

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-img-wrap">
          <img src={product.image} alt={product.title} loading="lazy" />
          <div className="product-overlay">
            <button type="button" className="btn-add" onClick={handleAdd}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
                <path d="M6 6L5 2H2" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product-body">
          <h3>{product.title}</h3>
          <p className="desc">{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
