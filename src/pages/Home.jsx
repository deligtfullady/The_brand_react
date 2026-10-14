import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Benefits from '../components/Benefits';
import Subscribe from '../components/Subscribe';
import products, { categories } from '../data/products';

const IMG = 'https://raw.githubusercontent.com/deligtfullady/HTML_CSS/main/img';

function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* Hero — структура как в оригинальной вёрстке */}
      <section className="top">
        <div className="top__content center">
          <img
            src={`${IMG}/top_img.svg`}
            alt="top foto"
            className="img__content"
          />
          <div className="top__title">
            <img
              src={`${IMG}/Rectangle.svg`}
              alt=""
              className="img__rectangle"
            />
            <div className="title__text">
              <h1 className="title">THE BRAND</h1>
              <h3 className="top__subtitle">
                OF LUXERIOUS{' '}
                <span className="pink__top__subtitle">FASHION</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container categories-grid">
          {categories.map((cat) => (
            <Link
              key={cat.subtitle}
              to={cat.link}
              className={`cat-card ${cat.wide ? 'wide' : ''}`}
            >
              <img src={cat.image} alt={cat.subtitle} loading="lazy" />
              <div className="cat-label">
                <span className="small">{cat.title}</span>
                <span className="big">{cat.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <div className="section-head">
            <h2>Fetured Items</h2>
            <p>Shop for items based on what we featured in this week</p>
          </div>
          <ProductList products={featured} />
          <div className="browse-wrap">
            <Link to="/catalog" className="btn-outline">
              Browse All Product
            </Link>
          </div>
        </div>
      </section>

      <Benefits />
      <Subscribe />
    </>
  );
}

export default Home;
