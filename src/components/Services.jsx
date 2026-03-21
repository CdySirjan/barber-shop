import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Services = () => {
  return (
    <section className="service section" id="service">
      <div className="service__container container grid">
        <div className="service__data">
          <h2 className="section__title">OUR SERVICES</h2>
          <ul className="service__prices">
            <li className="service__plan">
              <h3 className="service__name">ADULT HAIRCUT</h3><p className="service__price">NRS 150</p>
            </li>
            <li className="service__plan">
              <h3 className="service__name">CHILDREN HAIRCUT</h3><p className="service__price">NRS 100</p>
            </li>
            <li className="service__plan">
              <h3 className="service__name">NECK SHAVE</h3><p className="service__price">NRS 50</p>
            </li>
            <li className="service__plan">
              <h3 className="service__name">BEARD TRIM</h3><p className="service__price">NRS 100</p>
            </li>
            <li className="service__plan">
              <h3 className="service__name">HAIRCUT + SHAVE</h3><p className="service__price">NRS 200</p>
            </li>
          </ul>
        </div>

        <div className="service__swiper swiper">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            slidesPerView={1}
            spaceBetween={56}
            grabCursor={true}
            pagination={{ el: '.service-pagination', clickable: true }}
            navigation={{ nextEl: '.service-next', prevEl: '.service-prev' }}
          >
            <SwiperSlide className="service__testimonial">
              <p className="service__testimonial-description">Excellent barbershop; the atmosphere feels authentic from the moment you walk in. The service is professional, and the results are top-notch. Definitely a place you'll always want to return to.</p>
              <h3 className="service__testimonial-name">Sunil Kami</h3>
            </SwiperSlide>
            <SwiperSlide className="service__testimonial">
              <p className="service__testimonial-description">I've been coming here for years and I'm never disappointed. The barbers are skilled and the environment is welcoming.</p>
              <h3 className="service__testimonial-name">Sandeep Maharjan</h3>
            </SwiperSlide>
            <SwiperSlide className="service__testimonial">
              <p className="service__testimonial-description">Great place for a quality haircut and shave. The staff is friendly and the prices are reasonable.</p>
              <h3 className="service__testimonial-name">Sanjay Yadav</h3>
            </SwiperSlide>
          </Swiper>

          <div className="swiper-pagination service-pagination"></div>
          <div className="swiper-button-prev service-prev"><i className="ri-arrow-left-line"></i></div>
          <div className="swiper-button-next service-next"><i className="ri-arrow-right-line"></i></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
