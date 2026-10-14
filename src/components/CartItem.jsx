import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
} from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const key = { id: item.id, size: item.size };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-img" />

      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p>
          Price: <span className="val">${item.price}</span>
        </p>
        <p>Color: {item.color || 'Red'}</p>
        <p>Size: {item.size}</p>
        <div className="qty-row">
          <label>Quantity:</label>
          <div className="qty-controls">
            <button
              type="button"
              className="qty-btn"
              onClick={() => dispatch(decreaseQuantity(key))}
              aria-label="Decrease"
            >
              −
            </button>
            <input
              className="qty-input"
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                dispatch(setQuantity({ ...key, quantity: e.target.value }))
              }
            />
            <button
              type="button"
              className="qty-btn"
              onClick={() => dispatch(increaseQuantity(key))}
              aria-label="Increase"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="cart-item-remove"
        aria-label="Remove"
        onClick={() => dispatch(removeFromCart(key))}
      >
        ×
      </button>
    </div>
  );
}

export default CartItem;
