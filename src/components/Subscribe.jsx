const IMG = 'https://raw.githubusercontent.com/deligtfullady/HTML_CSS/main/img';

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="container subscribe-inner">
        <div className="subscribe-quote">
          <img src={`${IMG}/photo-subscribe.png`} alt="Review" />
          <p>
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
            purus condimentum“
          </p>
        </div>
        <div className="subscribe-form-block">
          <h2>Subscribe</h2>
          <p>For our newsletter and promotion</p>
          <form
            className="subscribe-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing!');
              e.target.reset();
            }}
          >
            <input type="email" placeholder="Enter Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
