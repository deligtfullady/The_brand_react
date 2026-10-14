import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/cartSlice';

const IMG = 'https://raw.githubusercontent.com/deligtfullady/HTML_CSS/main/img';

const MENU = [
  {
    title: 'MAN',
    items: ['Accessories', 'Bags', 'Denim', 'T-Shirts'],
  },
  {
    title: 'WOMAN',
    items: ['Accessories', 'Jackets & Coats', 'Polos', 'T-Shirts', 'Shirts'],
  },
  {
    title: 'KIDS',
    items: ['Accessories', 'Jackets & Coats', 'Polos', 'T-Shirts', 'Shirts', 'Bags'],
  },
];

function Header() {
  const count = useSelector(selectCartCount);
  const [menuOpen, setMenuOpen] = useState(false);

  // Закрытие меню по Escape и клику вне
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={`${IMG}/logo_header_left.svg`}
              alt="THE BRAND"
              className="logo-img"
            />
          </Link>
          <Link
            to="/catalog"
            title="Search"
            className="header__loupe"
            onClick={() => setMenuOpen(false)}
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M17.5 17.5L24 24"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="11"
                cy="11"
                r="9"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>

        <div className="header-right">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <img src={`${IMG}/menu.svg`} alt="" className="header-icon" />
          </button>
          <Link to="/registration" title="Account" onClick={() => setMenuOpen(false)}>
            <img src={`${IMG}/reg.svg`} alt="Account" className="header-icon" />
          </Link>
          <Link
            to="/cart"
            className="cart-link"
            title="Cart"
            onClick={() => setMenuOpen(false)}
          >
            <img src={`${IMG}/cart.svg`} alt="Cart" className="header-icon" />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
        </div>
      </div>

      {/* Затемнение фона */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* Боковое меню как в оригинале */}
      <aside className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <p className="side-menu-title">MENU</p>

        {MENU.map((section) => (
          <div key={section.title} className="side-menu-section">
            <Link
              to="/catalog"
              className="side-menu-heading"
              onClick={() => setMenuOpen(false)}
            >
              {section.title}
            </Link>
            <ul>
              {section.items.map((item) => (
                <li key={item}>
                  <Link to="/catalog" onClick={() => setMenuOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </header>
  );
}

export default Header;
