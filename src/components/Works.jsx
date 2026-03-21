import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Works = () => {
  return (
    <section className="work section" id="work">
      <div className="work__container container grid">
        <div className="work__data">
          <h2 className="section__title">DISCOVER <br /> OUR WORKS</h2>
          <p className="work__description">
            Our work includes both vintage and modern styles. We stay up-to-date with the latest trends to guarantee the best possible service.
          </p>
          <div className="swiper-pagination work-pagination"></div>
          <div className="swiper-button-prev work-prev"><i className="ri-arrow-left-long-line"></i></div>
          <div className="swiper-button-next work-next"><i className="ri-arrow-right-long-line"></i></div>
        </div>

        <div className="work__swiper swiper">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            slidesPerView={'auto'}
            spaceBetween={24}
            grabCursor={true}
            pagination={{ el: '.work-pagination', type: 'fraction' }}
            navigation={{ nextEl: '.work-next', prevEl: '.work-prev' }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <SwiperSlide key={num} className="work__card">
                <img src={`/assets/img/work-img-${num}.png`} alt="Hair and Beard Cutting Service" className="work__img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
