import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from '../store/cartSlice';
import CartItem from '../components/CartItem';
import Subscribe from '../components/Subscribe';

function Cart() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <h1>Shopping Cart</h1>
        </div>
      </div>

      <div className="container cart-page">
        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <Link to="/catalog" className="btn-secondary">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-left">
              <div className="cart-items">
                {items.map((item) => (
                  <CartItem key={`${item.id}-${item.size}`} item={item} />
                ))}
              </div>

              <div className="cart-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    if (window.confirm('Clear shopping cart?')) {
                      dispatch(clearCart());
                    }
                  }}
                >
                  Clear shopping cart
                </button>
                <Link to="/catalog" className="btn-secondary">
                  Continue shopping
                </Link>
              </div>
            </div>

            <aside className="cart-aside">
              <div className="shipping-box">
                <h3>Shipping Adress</h3>
                <input type="text" placeholder="Country" defaultValue="Bangladesh" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Postcode / Zip" />
                <button type="button" className="btn-quote">
                  Get a quote
                </button>
              </div>

              <div className="total-box">
                <div className="total-row">
                  <span>Sub total</span>
                  <span>${total}</span>
                </div>
                <div className="total-row grand">
                  <span>Grand total</span>
                  <span className="val">${total}</span>
                </div>
                <button type="button" className="btn-checkout">
                  Proceed to checkout
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>

      <Subscribe />
    </>
  );
}

export default Cart;
