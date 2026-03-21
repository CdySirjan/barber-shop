const Home = () => {
  return (
    <section className="home" id="home">
      <img src="/assets/img/home-bg.png" alt="Barbershop interior" className="home__bg" />
      <div className="home__shadow"></div>

      <div className="home__container container grid">
        <div className="home__data">
          <img src="/assets/img/home-logo.svg" alt="Barbershop" className="home__logo" />

          <h1 className="home__title">
            HAIRCUT AND BEARD <br />
            SPECIALISTS
          </h1>
          <p className="home__description">
            Barbershop specializing in haircuts, fades, classic shaves, and beard design for men. Our team of professional barbers guarantees impeccable results, tailored to your style, personality, and modern tastes.
          </p>
          <a href="#work" className="button">
            See Our Haircut Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
