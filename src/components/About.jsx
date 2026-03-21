const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">
            About OUR<br />LOCAL BARBORSHOP
          </h2>
          <p className="about__description">
            At our barbershop, we combine the tradition of classic haircuts with modern trends to offer you a unique experience. Every service is designed to highlight your personality.
          </p>

          <div className="about__info">
            <div className="about__box">
              <p className="about__number">
                <span className="about__counter">99</span><span>%</span>
              </p>
              <h3 className="about__subtitle">CUSTOMER<br />SATISFACTION</h3>
            </div>

            <div className="about__box">
              <p className="about__number">
                <span className="about__counter">7</span><span>+ </span>
              </p>
              <h3 className="about__subtitle">YEAR OF<br />EXPERIENCE</h3>
            </div>
          </div>
        </div>
        <img src="/assets/img/about-img.png" alt="Haircut at a Barbershop" className="about__img" />
      </div>
    </section>
  );
};

export default About;
